# Magnora Marketing – instruktioner til Claude

## Oversættelser er obligatoriske

Siden findes på dansk (da), engelsk (en) og spansk (es). **Enhver tekst du tilføjer
eller ændrer skal oversættes til alle tre sprog i samme ændring** – også selvom
brugeren kun skriver teksten på dansk.

- Synlig tekst må aldrig hårdkodes i komponenter. Brug `t('…')` og læg teksten i
  `src/i18n/locales/{da,en,es}/*.ts` med identiske nøgler.
- Ændrer du en dansk tekst, så opdater også den engelske og spanske.
- Nye blogindlæg / jobs: se `docs/i18n.md`.
- Kør `npm run check:i18n` før du committer. Det skal passere – det kører også i
  `npm run build` og i GitHub Actions, så en manglende oversættelse kan ikke deployes.
