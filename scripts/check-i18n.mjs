#!/usr/bin/env node
// Translation guard. Fails (exit 1) when:
//   1. A locale (da / en / es) is missing keys that another locale has, or the
//      value types differ (string vs. array vs. object), or array lengths differ.
//   2. A component/page contains user-visible text that is hard-coded instead of
//      going through t() – JSX text, visible JSX attributes (title, alt,
//      placeholder, aria-label …) and text-like properties in object literals.
//
// Runs as part of `npm run build`, so a change that is not translated into every
// language can never be deployed. Run it directly with `npm run check:i18n`.
//
// Strings that are genuinely language-neutral (brand names, numbers, e-mail
// addresses …) are allowed by ALLOWED_TEXT below. To deliberately keep a single
// hard-coded string, put `// i18n-ignore` on the line above it (or on the line).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import ts from 'typescript';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, 'src');
const LOCALES = ['da', 'en', 'es'];

const errors = [];

// ---------------------------------------------------------------------------
// 1. Locale key parity
// ---------------------------------------------------------------------------

// Transpile one locale module (and its relative imports) to plain JS objects.
async function loadLocale(lng) {
  const tmpDir = fs.mkdtempSync(path.join(fs.realpathSync(process.env.TMPDIR || '/tmp'), `i18n-${lng}-`));
  const dir = path.join(srcDir, 'i18n', 'locales', lng);
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.ts')) continue;
    const source = fs.readFileSync(path.join(dir, file), 'utf8');
    const { outputText } = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
    });
    // Relative imports in the locale index have no extension – add one. JSON
    // imports (e.g. src/data/blogPosts.json) are resolved to absolute paths.
    const js = outputText
      .replace(/from\s+['"](\.\/[^'"]+)['"]/g, (_, p) => `from '${p}.mjs'`)
      .replace(/from\s+['"]([^'"]+\.json)['"]/g, (_, p) =>
        `from '${pathToFileURL(path.resolve(dir, p)).href}' with { type: 'json' }`);
    fs.writeFileSync(path.join(tmpDir, file.replace(/\.ts$/, '.mjs')), js);
  }
  try {
    return (await import(pathToFileURL(path.join(tmpDir, 'index.mjs')).href)).default;
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
}

const kind = (v) => (Array.isArray(v) ? 'array' : v === null ? 'null' : typeof v);

function compare(base, other, baseLng, otherLng, keyPath) {
  if (kind(base) !== kind(other)) {
    errors.push(`[locale] ${keyPath || '<root>'}: is ${kind(base)} in "${baseLng}" but ${kind(other)} in "${otherLng}"`);
    return;
  }
  if (Array.isArray(base)) {
    if (base.length !== other.length) {
      errors.push(`[locale] ${keyPath}: has ${base.length} items in "${baseLng}" but ${other.length} in "${otherLng}"`);
    }
    base.forEach((v, i) => i < other.length && compare(v, other[i], baseLng, otherLng, `${keyPath}[${i}]`));
    return;
  }
  if (kind(base) === 'object') {
    for (const key of Object.keys(base)) {
      const p = keyPath ? `${keyPath}.${key}` : key;
      if (!(key in other)) errors.push(`[locale] ${p}: missing in "${otherLng}"`);
      else compare(base[key], other[key], baseLng, otherLng, p);
    }
    return;
  }
  if (kind(base) === 'string' && base.trim() && !other.trim()) {
    errors.push(`[locale] ${keyPath}: is empty in "${otherLng}"`);
  }
}

const locales = {};
for (const lng of LOCALES) locales[lng] = await loadLocale(lng);
for (const a of LOCALES) {
  for (const b of LOCALES) {
    if (a === b) continue;
    // Only report "missing in b" from a's perspective; type/length issues once.
    compare(locales[a], locales[b], a, b, '');
  }
}

// Every t('key') used in the code must exist in every locale.
function lookup(obj, key) {
  return key.split('.').reduce((o, k) => (o && typeof o === 'object' ? o[k] : undefined), obj);
}

// ---------------------------------------------------------------------------
// 2. Hard-coded text in components
// ---------------------------------------------------------------------------

// Text that is the same in every language.
const ALLOWED_TEXT = [
  /^Magnora( Marketing)?\.?$/,
  /^Magnora Marketing ApS$/,
  /^[\s·•|.,:-]*(AI|API|SaaS|CMS|CRM|SEO|B2B|B2C|TM|KPI|CV|FAQ|GDPR|CVR|ApS|ROI|SMV|LinkedIn|Facebook|Instagram|Google|Trustpilot|WordPress|Shopify|React|Next\.js|Vercel|Supabase|OpenAI|ChatGPT|Claude|Anthropic|Gemini|Zapier|HubSpot|Salesforce|Pipedrive|Stripe|logo)[\s·•|.,:-]*$/,
  /^[\s\d.,:;+\-–—×%/()#*&|·•✓✦→←↑↓…!?'"€$£x]*$/, // numbers, symbols, punctuation
  /^&\w+;$/, // HTML entities such as &copy;
  /^(www\.)?[\w-]+\.(dk|com|es|io|ai)$/i, // domain names
  /^[\w.+-]+@[\w-]+\.[\w.]+$/, // e-mail
  /^(https?:|mailto:|tel:|\/|#)/, // URLs / paths
  /^\+?\d[\d\s]+$/, // phone numbers
  /^[\d.,]+\s?[kKmM]$/, // 1.4k, 24.1k
  /^(DA|EN|ES)$/,
];

// JSX attributes that are shown to the user (or to screen readers / search).
const VISIBLE_ATTRS = new Set([
  'title', 'alt', 'placeholder', 'aria-label', 'aria-description', 'label',
  'subtitle', 'description', 'ctaText', 'secondaryCtaText', 'buttonText', 'heading',
  'text', 'tag', 'badge', 'question', 'answer', 'primaryText', 'secondaryText',
]);

// Object-literal keys whose string values are shown to the user.
const VISIBLE_KEYS = new Set([
  'title', 'subtitle', 'desc', 'description', 'label', 'text', 'tag', 'badge',
  'question', 'answer', 'name', 'heading', 'cta', 'ctaText', 'button', 'buttonText',
  'placeholder', 'alt', 'quote', 'role', 'feature', 'features', 'benefit', 'benefits',
  'items', 'note', 'caption', 'summary', 'excerpt', 'price', 'period', 'unit',
]);

// Files/dirs that are not rendered UI text.
const SKIP = [
  path.join(srcDir, 'i18n'),
  path.join(srcDir, 'entry-server.tsx'),
  path.join(srcDir, 'vite-env.d.ts'),
  path.join(srcDir, 'pages', 'admin'), // internal, noindex – only seen by the site owner
];

function isAllowed(text) {
  const s = text.replace(/\s+/g, ' ').trim();
  if (!s) return true;
  if (!/\p{L}/u.test(s)) return true; // no letters at all
  return ALLOWED_TEXT.some((re) => re.test(s));
}

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (SKIP.some((s) => p === s || p.startsWith(s + path.sep))) continue;
    if (entry.isDirectory()) walk(p, out);
    else if (/\.(tsx|ts)$/.test(entry.name)) out.push(p);
  }
  return out;
}

const usedKeys = [];

for (const file of walk(srcDir)) {
  const source = fs.readFileSync(file, 'utf8');
  const lines = source.split('\n');
  const sf = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true,
    file.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const rel = path.relative(root, file);

  const ignored = (node) => {
    const line = sf.getLineAndCharacterOfPosition(node.getStart(sf)).line;
    return /i18n-ignore/.test(lines[line] || '') || /i18n-ignore/.test(lines[line - 1] || '');
  };
  const report = (node, what, text) => {
    if (ignored(node)) return;
    const { line } = sf.getLineAndCharacterOfPosition(node.getStart(sf));
    const shown = text.replace(/\s+/g, ' ').trim();
    errors.push(`[hardcoded] ${rel}:${line + 1} ${what}: "${shown.length > 80 ? shown.slice(0, 77) + '…' : shown}"`);
  };

  // Skip structured data (JSON-LD for search engines) and code-only contexts.
  const insideIgnoredCall = (node) => {
    for (let p = node.parent; p; p = p.parent) {
      if (ts.isCallExpression(p)) {
        const callee = p.expression.getText(sf);
        if (/^(t|i18n\.t|console\.\w+|new Error|Error|fetch|encodeURIComponent|navigate|setTimeout|JSON\.\w+|require|import)$/.test(callee)) return true;
      }
      if (ts.isImportDeclaration(p) || ts.isExportDeclaration(p)) return true;
    }
    return false;
  };

  const stringOf = (expr) => {
    if (!expr) return null;
    if (ts.isParenthesizedExpression(expr)) return stringOf(expr.expression);
    // {loading ? 'Sender…' : 'Send'} and {label || 'Standard'}
    if (ts.isConditionalExpression(expr)) return [stringOf(expr.whenTrue), stringOf(expr.whenFalse)].filter(Boolean).join(' ') || null;
    if (ts.isBinaryExpression(expr) && [ts.SyntaxKind.BarBarToken, ts.SyntaxKind.QuestionQuestionToken, ts.SyntaxKind.AmpersandAmpersandToken].includes(expr.operatorToken.kind)) return stringOf(expr.right);
    if (ts.isStringLiteral(expr) || ts.isNoSubstitutionTemplateLiteral(expr)) return expr.text;
    if (ts.isTemplateExpression(expr)) return [expr.head.text, ...expr.templateSpans.map((s) => s.literal.text)].join(' ');
    return null;
  };

  const visit = (node) => {
    // Collect t('literal.key') usages.
    if (ts.isCallExpression(node) && /^(t|i18n\.t)$/.test(node.expression.getText(sf))) {
      const arg = node.arguments[0];
      if (arg && ts.isStringLiteral(arg) && !ignored(node)) {
        usedKeys.push({ key: arg.text, where: `${rel}:${sf.getLineAndCharacterOfPosition(node.getStart(sf)).line + 1}` });
      }
    }

    if (ts.isJsxText(node)) {
      if (!isAllowed(node.text)) report(node, 'JSX text', node.text);
    } else if (ts.isJsxAttribute(node)) {
      const name = node.name.getText(sf);
      if (VISIBLE_ATTRS.has(name) && node.initializer) {
        let text = null;
        if (ts.isStringLiteral(node.initializer)) text = node.initializer.text;
        else if (ts.isJsxExpression(node.initializer)) text = stringOf(node.initializer.expression);
        if (text !== null && !isAllowed(text)) report(node, `attribute ${name}`, text);
      }
    } else if (ts.isJsxExpression(node) && node.expression && !ts.isJsxAttribute(node.parent)) {
      const text = stringOf(node.expression);
      if (text !== null && !isAllowed(text)) report(node, 'JSX expression', text);
    } else if (ts.isPropertyAssignment(node) && !ts.isStringLiteral(node.name)) {
      // Quoted keys ("@type", "name" …) are JSON-LD structured data, not UI text.
      const key = node.name.getText(sf);
      if (VISIBLE_KEYS.has(key) && !insideIgnoredCall(node)) {
        const values = ts.isArrayLiteralExpression(node.initializer)
          ? node.initializer.elements
          : [node.initializer];
        for (const v of values) {
          const text = stringOf(v);
          if (text !== null && !isAllowed(text)) report(v, `property ${key}`, text);
        }
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
}

for (const { key, where } of usedKeys) {
  for (const lng of LOCALES) {
    if (lookup(locales[lng], key) === undefined) {
      errors.push(`[missing key] ${where} t('${key}') does not exist in "${lng}"`);
    }
  }
}

// Keys built at runtime (t(`blogPostIndex.${slug}.title`)) cannot be verified
// above, so check the data they are built from directly.
const blogPosts = JSON.parse(fs.readFileSync(path.join(srcDir, 'data', 'blogPosts.json'), 'utf8'));
const jobKeys = [...fs.readFileSync(path.join(srcDir, 'data', 'jobListings.ts'), 'utf8').matchAll(/key: '([^']+)'/g)].map((m) => m[1]);
for (const lng of LOCALES) {
  for (const { slug } of blogPosts) {
    for (const field of ['title', 'description']) {
      if (typeof lookup(locales[lng], `blogPostIndex.${slug}.${field}`) !== 'string') {
        errors.push(`[missing key] src/data/blogPosts.json "${slug}": blogPostIndex.${slug}.${field} does not exist in "${lng}"`);
      }
    }
  }
  for (const key of jobKeys) {
    for (const field of ['title', 'description']) {
      if (typeof lookup(locales[lng], `jobListings.${key}.${field}`) !== 'string') {
        errors.push(`[missing key] src/data/jobListings.ts "${key}": jobListings.${key}.${field} does not exist in "${lng}"`);
      }
    }
  }
}

// ---------------------------------------------------------------------------

if (errors.length) {
  const unique = [...new Set(errors)];
  console.error(`\n✗ i18n check failed – ${unique.length} problem(s). All text must be translated into ${LOCALES.join(', ')}.\n`);
  for (const e of unique) console.error('  ' + e);
  console.error('\nMove the text into src/i18n/locales/{da,en,es}/*.ts and use t(\'…\'). See docs/i18n.md.\n');
  process.exit(1);
}
console.log(`✓ i18n check passed (${LOCALES.join(', ')} in sync, no hard-coded text, ${usedKeys.length} t() keys verified).`);
