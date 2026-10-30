import React from 'react';

/**
 * Code-rendered hero backgrounds in the style of the home page HeroVisual:
 * a deep-blue gradient with floating glass dashboard panels, themed per page
 * (meeting booking shows a calendar, web development a browser and code,
 * AI a chat and workflow, jobs earnings and a team, …). Pure SVG/CSS, no
 * text, panels hidden on small screens; animation uses the hv-* classes in
 * index.css, which respect prefers-reduced-motion.
 */

export type HeroTheme =
  | 'meetings'
  | 'telesales'
  | 'leads'
  | 'partner'
  | 'web'
  | 'ai'
  | 'voice'
  | 'jobs'
  | 'energy'
  | 'game';

const shell =
  'rounded-2xl border border-white/10 ring-1 ring-white/5 bg-gradient-to-b from-white/[0.10] to-white/[0.04] ' +
  'backdrop-blur-md shadow-[0_16px_48px_-12px_rgba(15,50,120,0.65)]';

const Chrome = () => (
  <div className="flex items-center gap-1.5 px-3.5 pt-3">
    <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
    <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
    <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
    <span className="ml-2 h-1 w-10 rounded-full bg-white/15" />
  </div>
);

const Panel: React.FC<{ className?: string; tilt?: string; chrome?: boolean; children: React.ReactNode }> = ({ className = '', tilt = '', chrome = true, children }) => (
  <div className={`absolute ${className}`}>
    <div className={`${shell} ${tilt}`}>
      {chrome && <Chrome />}
      <div className="relative px-3.5 pb-3.5 pt-2">{children}</div>
    </div>
  </div>
);

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="absolute right-3.5 top-0 text-[11px] font-bold tabular-nums text-blue-200/90">{children}</span>
);

// ---------- Panel contents (SVG only) ----------

const GrowthCurve = ({ id }: { id: string }) => (
  <svg viewBox="0 0 240 110" className="w-full" fill="none">
    <defs>
      <linearGradient id={`${id}-a`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" /><stop offset="100%" stopColor="#60a5fa" stopOpacity="0" /></linearGradient>
      <linearGradient id={`${id}-l`} x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#a5c8ff" /></linearGradient>
    </defs>
    <g stroke="rgba(255,255,255,0.06)"><path d="M0,28 H240" /><path d="M0,58 H240" /><path d="M0,88 H240" /></g>
    <path d="M0,95 C30,88 45,80 70,74 C95,68 110,72 130,58 C150,44 165,48 185,30 C200,17 218,12 236,9 L240,110 L0,110 Z" fill={`url(#${id}-a)`} />
    <path d="M0,95 C30,88 45,80 70,74 C95,68 110,72 130,58 C150,44 165,48 185,30 C200,17 218,12 236,9" stroke={`url(#${id}-l)`} strokeWidth="2.5" strokeLinecap="round" className="hv-draw" />
    <circle cx="236" cy="9" r="3" fill="#c7ddff" />
  </svg>
);

const Bars = ({ id }: { id: string }) => (
  <svg viewBox="0 0 200 92" className="w-full" fill="none">
    <defs><linearGradient id={id} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#93c5fd" /><stop offset="100%" stopColor="#2563eb" /></linearGradient></defs>
    <path d="M0,88 H200" stroke="rgba(255,255,255,0.10)" />
    {[28, 36, 32, 48, 56, 68].map((h, i) => <rect key={i} x={6 + i * 27} y={88 - h} width="14" height={h} rx="3" fill={`rgba(255,255,255,${0.14 + i * 0.04})`} />)}
    <rect x="168" y="6" width="14" height="82" rx="3" fill={`url(#${id})`} />
  </svg>
);

const Funnel = () => (
  <svg viewBox="0 0 150 104" className="w-full" fill="none">
    <path d="M8,6 H142 L118,30 H32 Z" fill="#7fb2ff" opacity="0.34" />
    <path d="M32,36 H118 L100,58 H50 Z" fill="#7fb2ff" opacity="0.26" />
    <path d="M50,64 H100 L90,84 H60 Z" fill="#7fb2ff" opacity="0.2" />
    <path d="M60,90 H90 L83,102 H67 Z" fill="#60a5fa" opacity="0.75" />
  </svg>
);

const Sparkline = () => (
  <svg viewBox="0 0 180 36" className="mt-2 w-full" fill="none">
    <path d="M0,26 L14,20 L26,25 L40,15 L54,21 L68,10 L82,17 L96,8 L112,14 L128,6 L144,12 L160,4 L174,8" stroke="#7fb2ff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
    <circle cx="174" cy="8" r="2.5" fill="#c7ddff" className="hv-pulse" />
  </svg>
);

const Dial = ({ id, value }: { id: string; value: string }) => (
  <div className="relative flex items-center justify-center">
    <svg viewBox="0 0 100 100" className="w-24" fill="none">
      <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#60a5fa" /><stop offset="100%" stopColor="#a5c8ff" /></linearGradient></defs>
      <circle cx="50" cy="50" r="38" stroke="rgba(255,255,255,0.10)" strokeWidth="8" />
      <circle cx="50" cy="50" r="38" stroke={`url(#${id})`} strokeWidth="8" strokeLinecap="round" strokeDasharray="172 239" transform="rotate(-90 50 50)" />
    </svg>
    <span className="absolute text-sm font-bold tabular-nums text-white/90">{value}</span>
  </div>
);

const Counter = ({ value, delta }: { value: string; delta: string }) => (
  <div>
    <div className="text-[26px] font-bold leading-none tabular-nums text-white/95">{value}</div>
    <div className="mt-1.5 flex items-center gap-1 text-[10px] font-semibold tabular-nums text-blue-200/85">
      <svg viewBox="0 0 8 8" className="h-2 w-2 fill-blue-300"><path d="M4 0 L8 6 H0 Z" /></svg>{delta}
    </div>
    <div className="mt-2.5 grid grid-cols-7 gap-1">
      {Array.from({ length: 21 }).map((_, i) => <span key={i} className={`h-1 w-1 rounded-full ${[2, 5, 9, 10, 12, 15, 16, 19].includes(i) ? 'bg-blue-400/90' : 'bg-white/15'}`} />)}
    </div>
  </div>
);

const Nodes = () => (
  <svg viewBox="0 0 170 104" className="w-full" fill="none">
    <g stroke="#7fb2ff" strokeOpacity="0.35" strokeWidth="1.2">
      <path d="M28,52 L72,22" /><path d="M28,52 L72,82" /><path d="M72,22 L120,52" strokeDasharray="3 4" /><path d="M72,82 L120,52" /><path d="M120,52 L150,24" strokeDasharray="3 4" /><path d="M120,52 L150,80" />
    </g>
    {[[28, 52, 7], [72, 22, 5.5], [72, 82, 5.5], [150, 24, 5], [150, 80, 5]].map(([x, y, r]) => <circle key={`${x}${y}`} cx={x} cy={y} r={r} fill="#0f2a55" stroke="#7fb2ff" strokeOpacity="0.6" strokeWidth="1.3" />)}
    <circle cx="120" cy="52" r="8" fill="#1d4ed8" fillOpacity="0.55" stroke="#93c5fd" strokeWidth="1.5" className="hv-pulse" />
  </svg>
);

/** Month grid with booked slots. */
const Calendar = () => (
  <svg viewBox="0 0 200 120" className="w-full" fill="none">
    <rect x="0" y="0" width="200" height="16" rx="4" fill="rgba(255,255,255,0.08)" />
    {Array.from({ length: 28 }).map((_, i) => {
      const x = 4 + (i % 7) * 28;
      const y = 24 + Math.floor(i / 7) * 24;
      const booked = [3, 8, 10, 15, 17, 22, 24].includes(i);
      return <rect key={i} x={x} y={y} width="22" height="18" rx="4" fill={booked ? 'rgba(96,165,250,0.75)' : 'rgba(255,255,255,0.07)'} />;
    })}
    <path d="M161 70 l4 4 8 -8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Phone call with audio waveform. */
const Call = () => (
  <svg viewBox="0 0 200 70" className="w-full" fill="none">
    <circle cx="26" cy="35" r="20" fill="rgba(96,165,250,0.25)" stroke="#93c5fd" strokeOpacity="0.6" />
    <path d="M19 27c0 9 5 15 14 16l3-4-5-3-2 2c-3-1-5-4-6-7l2-2-3-5z" fill="#c7ddff" />
    {Array.from({ length: 22 }).map((_, i) => {
      const h = [8, 16, 26, 14, 30, 20, 10, 24, 34, 18, 8, 22, 28, 12, 20, 30, 16, 10, 24, 14, 8, 18][i];
      return <rect key={i} x={58 + i * 6.4} y={35 - h / 2} width="3" height={h} rx="1.5" fill={i < 14 ? '#7fb2ff' : 'rgba(255,255,255,0.2)'} />;
    })}
  </svg>
);

/** Website wireframe in a browser. */
const Browser = () => (
  <svg viewBox="0 0 220 130" className="w-full" fill="none">
    <rect x="0" y="0" width="220" height="14" rx="4" fill="rgba(255,255,255,0.08)" />
    <rect x="8" y="22" width="110" height="10" rx="3" fill="rgba(255,255,255,0.55)" />
    <rect x="8" y="38" width="80" height="6" rx="3" fill="rgba(255,255,255,0.22)" />
    <rect x="8" y="50" width="96" height="6" rx="3" fill="rgba(255,255,255,0.22)" />
    <rect x="8" y="66" width="48" height="14" rx="5" fill="#3b82f6" />
    <rect x="132" y="22" width="80" height="60" rx="8" fill="rgba(96,165,250,0.3)" />
    <circle cx="160" cy="44" r="10" fill="rgba(199,221,255,0.6)" />
    {[0, 1, 2].map((i) => <rect key={i} x={8 + i * 72} y="94" width="62" height="30" rx="6" fill="rgba(255,255,255,0.08)" />)}
  </svg>
);

/** Code editor lines. */
const Code = () => (
  <svg viewBox="0 0 180 96" className="w-full" fill="none">
    {[[0, 40, '#c084fc'], [46, 52, '#7fb2ff'], [12, 60, '#34d399'], [76, 30, '#fbbf24'], [12, 48, '#7fb2ff'], [64, 40, '#f472b6'], [24, 64, '#94a3b8'], [12, 36, '#c084fc'], [0, 22, '#7fb2ff']].map(([x, w, c], i) => (
      <rect key={i} x={Number(x)} y={4 + Math.floor(i / 1) * 10} width={Number(w)} height="5" rx="2.5" fill={String(c)} opacity="0.8" />
    ))}
  </svg>
);

/** AI chat bubbles. */
const Chat = () => (
  <svg viewBox="0 0 200 110" className="w-full" fill="none">
    <rect x="70" y="4" width="126" height="26" rx="12" fill="#3b82f6" opacity="0.85" />
    <rect x="82" y="13" width="90" height="7" rx="3.5" fill="#fff" opacity="0.8" />
    <circle cx="14" cy="52" r="10" fill="rgba(167,139,250,0.6)" />
    <path d="M10 52 l3 -6 3 6 -3 6z" fill="#fff" />
    <rect x="30" y="38" width="140" height="34" rx="12" fill="rgba(255,255,255,0.12)" />
    <rect x="42" y="47" width="110" height="6" rx="3" fill="rgba(255,255,255,0.5)" />
    <rect x="42" y="58" width="80" height="6" rx="3" fill="rgba(255,255,255,0.3)" />
    <rect x="30" y="80" width="56" height="22" rx="11" fill="rgba(255,255,255,0.12)" />
    {[0, 1, 2].map((i) => <circle key={i} cx={46 + i * 12} cy="91" r="3" fill="#c7ddff" className="hv-pulse" />)}
  </svg>
);

/** Voice waveform circle. */
const Voice = () => (
  <svg viewBox="0 0 140 110" className="w-full" fill="none">
    <circle cx="70" cy="55" r="44" stroke="rgba(147,197,253,0.25)" strokeWidth="2" />
    <circle cx="70" cy="55" r="32" fill="rgba(59,130,246,0.35)" className="hv-pulse" />
    {Array.from({ length: 9 }).map((_, i) => {
      const h = [10, 22, 34, 26, 40, 26, 34, 22, 10][i];
      return <rect key={i} x={44 + i * 6} y={55 - h / 2} width="3.5" height={h} rx="1.75" fill="#e0ecff" />;
    })}
  </svg>
);

/** Team avatars. */
const Team = () => (
  <svg viewBox="0 0 180 80" className="w-full" fill="none">
    {[0, 1, 2, 3].map((i) => (
      <g key={i} transform={`translate(${22 + i * 38} 30)`}>
        <circle r="18" fill={['#60a5fa', '#a78bfa', '#34d399', '#f59e0b'][i]} opacity="0.55" stroke="rgba(255,255,255,0.4)" />
        <circle cy="-5" r="6" fill="#e0ecff" opacity="0.9" />
        <path d="M-10 11 q10 -12 20 0" fill="#e0ecff" opacity="0.9" />
      </g>
    ))}
    <rect x="8" y="62" width="100" height="6" rx="3" fill="rgba(255,255,255,0.3)" />
    <rect x="8" y="72" width="64" height="5" rx="2.5" fill="rgba(255,255,255,0.18)" />
  </svg>
);

/** Energy: bolt and solar panel. */
const Energy = () => (
  <svg viewBox="0 0 180 100" className="w-full" fill="none">
    <path d="M44 8 L22 54 H40 L32 92 L64 40 H46 L56 8 Z" fill="#fbbf24" opacity="0.85" />
    <g transform="translate(84 24) skewX(-12)">
      {Array.from({ length: 12 }).map((_, i) => <rect key={i} x={(i % 4) * 22} y={Math.floor(i / 4) * 18} width="20" height="16" rx="2" fill="rgba(96,165,250,0.45)" stroke="rgba(199,221,255,0.5)" strokeWidth="0.8" />)}
    </g>
  </svg>
);

/** Gamepad. */
const Gamepad = () => (
  <svg viewBox="0 0 160 90" className="w-full" fill="none">
    <path d="M30 22 h100 c18 0 26 22 26 40 c0 16 -14 22 -24 12 l-14 -14 h-56 l-14 14 c-10 10 -24 4 -24 -12 c0 -18 8 -40 26 -40z" fill="rgba(167,139,250,0.45)" stroke="rgba(199,221,255,0.5)" />
    <path d="M46 36 v16 M38 44 h16" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
    <circle cx="112" cy="38" r="5" fill="#fbbf24" /><circle cx="124" cy="48" r="5" fill="#34d399" />
  </svg>
);

// ---------- Theme layouts: the same 6 slots as the home page cluster ----------

type Slots = [React.ReactNode, React.ReactNode, React.ReactNode, React.ReactNode, React.ReactNode, React.ReactNode];

const themes: Record<HeroTheme, () => Slots> = {
  meetings: () => [<Nodes />, <Dial id="t-d" value="92%" />, <Calendar />, <Counter value="48" delta="+27%" />, <Funnel />, <Sparkline />],
  telesales: () => [<Funnel />, <Dial id="t-d" value="3.2x" />, <Call />, <Counter value="312" delta="+41%" />, <Nodes />, <Bars id="t-b" />],
  leads: () => [<Nodes />, <Dial id="t-d" value="68%" />, <Funnel />, <Counter value="1.4k" delta="+52%" />, <Sparkline />, <Bars id="t-b" />],
  partner: () => [<Team />, <Dial id="t-d" value="4.1x" />, <GrowthCurve id="t-g" />, <Counter value="20+" delta="+33%" />, <Nodes />, <Bars id="t-b" />],
  web: () => [<Code />, <Dial id="t-d" value="98" />, <Browser />, <Counter value="2.4k" delta="+64%" />, <Sparkline />, <Bars id="t-b" />],
  ai: () => [<Nodes />, <Dial id="t-d" value="24/7" />, <Chat />, <Counter value="1.2k" delta="+71%" />, <Code />, <Sparkline />],
  voice: () => [<Chat />, <Dial id="t-d" value="24/7" />, <Voice />, <Counter value="186" delta="+45%" />, <Calendar />, <Sparkline />],
  jobs: () => [<Team />, <Dial id="t-d" value="100%" />, <Bars id="t-b" />, <Counter value="32" delta="+18%" />, <Calendar />, <Call />],
  energy: () => [<Energy />, <Dial id="t-d" value="87%" />, <Bars id="t-b" />, <Counter value="64" delta="+29%" />, <Call />, <Sparkline />],
  game: () => [<Gamepad />, <Dial id="t-d" value="4.8" />, <Code />, <Counter value="12k" delta="+88%" />, <Team />, <Bars id="t-b" />],
};

/** Hero image → theme, so every page with a photo hero gets a matching visual. */
export const themeForImage = (image?: string): HeroTheme => {
  const key = image?.match(/hero-([a-z]+)/)?.[1] ?? '';
  const map: Record<string, HeroTheme> = {
    moedebooking: 'meetings', telesalg: 'telesales', leadgen: 'leads', partner: 'partner', home: 'partner',
    service: 'partner', webdev: 'web', ai: 'ai', voice: 'voice', jobs: 'jobs', kaffe: 'jobs', energi: 'energy',
  };
  return map[key] ?? 'partner';
};

const ThemedHeroVisual: React.FC<{ theme: HeroTheme }> = ({ theme }) => {
  const [a, b, c, d, e, f] = themes[theme]();
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(128deg,#0a1428_0%,#0d1d3d_38%,#12305e_68%,#1a4380_100%)]" />
      <div className="absolute -right-[12%] bottom-[2%] h-[60%] w-[65%] bg-[radial-gradient(closest-side,rgba(127,178,255,0.28),transparent_70%)] blur-2xl" />
      <div className="absolute -left-[10%] -top-[15%] h-[55%] w-[50%] bg-[radial-gradient(closest-side,rgba(30,64,140,0.45),transparent_70%)] blur-3xl" />
      <div className="absolute bottom-[10%] right-[20%] h-[40%] w-[30%] bg-[radial-gradient(closest-side,rgba(124,58,237,0.18),transparent_70%)] blur-3xl" />
      <div className="absolute inset-y-0 right-0 w-[70%] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.035)_0px,rgba(255,255,255,0.035)_1px,transparent_1px,transparent_170px)]" />
      <div className="absolute -top-[30%] right-[10%] h-[130%] w-[45%] rotate-[16deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.045)_45%,rgba(255,255,255,0.02)_60%,transparent)] blur-md" />

      <div className="absolute inset-y-0 right-0 hidden w-[58%] md:block">
        <div className="absolute right-[34%] top-[22%] h-32 w-56 rotate-2 rounded-2xl border border-white/5 bg-white/[0.03] opacity-60 blur-[2px] hv-float-slow" />
        <Panel className="right-[64%] top-[11%] w-44 scale-95 opacity-80 hv-float-slow" tilt="rotate-2">{a}</Panel>
        <Panel className="right-[9%] top-[9%] w-36 hv-float-x" tilt="-rotate-2">{b}</Panel>
        <Panel className="right-[24%] top-[28%] w-72 hv-float" tilt="-rotate-1 shadow-[0_24px_70px_-16px_rgba(37,99,235,0.55)]">
          <Tag>{theme === 'meetings' ? '+38%' : theme === 'web' ? '+248%' : '+64%'}</Tag>
          {c}
        </Panel>
        <Panel className="right-[2%] top-[26%] w-32 hv-float-slow" tilt="rotate-3" chrome={false}>{d}</Panel>
        <Panel className="bottom-[22%] right-[60%] w-44 scale-95 opacity-85 hv-float-x" tilt="rotate-1">{e}</Panel>
        <Panel className="bottom-[9%] right-[8%] w-56 hv-float" tilt="-rotate-2">{f}</Panel>
      </div>

      <div className="absolute inset-y-0 left-0 w-[68%] bg-gradient-to-r from-[#0a1428]/95 via-[#0b1c3a]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-transparent to-indigo-950/25" />
    </div>
  );
};

export default ThemedHeroVisual;
