import React from 'react';

/**
 * HeroVisual — premium, code-rendered hero background for the home page.
 *
 * Pure CSS + inline SVG (no images, no dependencies): a deep-blue
 * night-to-dawn "glass office over Copenhagen" scene with floating
 * glassmorphism dashboard panels (SEO curve, revenue bars, pipeline funnel,
 * AI workflow nodes, booked-meetings counter, traffic sparkline, ROI dial).
 * Focal interest lives in the right ~55%; the left side fades to a dark
 * scrim so the overlaid headline/CTA stays readable. Panels hide on small
 * screens. All animation is gated behind prefers-reduced-motion (see the
 * hv-* classes in index.css).
 */

const panelShell =
  'rounded-2xl border border-white/10 ring-1 ring-white/5 ' +
  'bg-gradient-to-b from-white/[0.10] to-white/[0.04] backdrop-blur-md ' +
  'shadow-[0_16px_48px_-12px_rgba(15,50,120,0.65)]';

const PanelChrome: React.FC = () => (
  <div className="flex items-center gap-1.5 px-3.5 pt-3">
    <span className="w-1.5 h-1.5 rounded-full bg-white/25" />
    <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
    <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
    <span className="ml-2 h-1 w-10 rounded-full bg-white/15" />
  </div>
);

const litDots = [2, 5, 9, 10, 12, 15, 16, 19];

const HeroVisual: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
    >
      {/* ---- Base: night-to-dawn gradient ---- */}
      <div className="absolute inset-0 bg-[linear-gradient(128deg,#0a1428_0%,#0d1d3d_38%,#12305e_68%,#1a4380_100%)]" />

      {/* ---- Dawn glow over the water (right side) ---- */}
      <div className="absolute -right-[12%] bottom-[2%] w-[65%] h-[60%] bg-[radial-gradient(closest-side,rgba(127,178,255,0.30),transparent_70%)] blur-2xl" />
      {/* Golden-hour warmth kissing the horizon */}
      <div className="absolute right-[6%] bottom-[6%] w-[34%] h-[30%] bg-[radial-gradient(closest-side,rgba(255,193,125,0.14),transparent_70%)] blur-3xl" />
      {/* Cool counter-glow upper-left so the scene reads as an interior */}
      <div className="absolute -left-[10%] -top-[15%] w-[50%] h-[55%] bg-[radial-gradient(closest-side,rgba(30,64,140,0.45),transparent_70%)] blur-3xl" />

      {/* ---- Glass office: soft light shaft + window mullions ---- */}
      <div className="absolute -top-[30%] right-[10%] w-[45%] h-[130%] rotate-[16deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.045)_45%,rgba(255,255,255,0.02)_60%,transparent)] blur-md" />
      <div className="absolute inset-y-0 right-0 w-[70%] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.035)_0px,rgba(255,255,255,0.035)_1px,transparent_1px,transparent_170px)]" />
      <div className="absolute inset-x-0 top-[9%] right-0 h-px bg-gradient-to-l from-white/[0.06] via-white/[0.03] to-transparent" />

      {/* ---- Copenhagen skyline silhouette (low contrast, at horizon) ---- */}
      <svg
        className="absolute bottom-0 inset-x-0 w-full h-[190px] md:h-[230px]"
        viewBox="0 0 1440 240"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
      >
        {/* Far layer */}
        <path
          d="M0,196 V178 H120 V170 H260 V178 H420 V166 H560 V178 H760 V172 H960 V178 H1140 V168 H1300 V178 H1440 V196 Z"
          fill="#7fb2ff"
          opacity="0.05"
        />
        {/* Near layer: low roofline with spire/dome/tower hints
            (Rundetårn cylinder, City Hall tower, Børsen-like spire,
            Marble-Church dome, Nikolaj spire, Nyhavn gables) */}
        <path
          d="M0,196 V176 H36 V163 H58 V176 H92 V156 H118 V176 H140 L148,168 L156,176 H164 V112 Q177,101 190,112 V176 H206 L220,158 L234,176 H248 L262,158 L276,176 H296 V88 L306,62 L316,88 V176 H338 V166 H360 V176 H400 V150 H428 V176 H452 V166 H462 L470,94 L478,166 H488 V176 H540 V158 H566 V176 H600 V160 C600,126 664,126 664,160 V176 H700 V168 H726 V176 H760 L772,160 L784,176 H798 L810,160 L822,176 H840 V136 H852 L862,90 L872,136 H884 V176 H920 L932,162 L944,176 H958 L970,162 L982,176 H1000 V168 H1024 V176 H1060 L1072,158 L1084,176 H1100 L1112,158 L1124,176 H1160 V162 H1186 V176 H1220 V154 H1248 V176 H1290 V166 H1320 V176 H1360 V160 H1390 V176 H1440 V196 Z"
          fill="#7fb2ff"
          opacity="0.11"
        />
        {/* A few warm window glints at golden hour */}
        <g fill="#ffd9a0">
          <rect x="106" y="164" width="3" height="4" opacity="0.30" />
          <rect x="174" y="140" width="3" height="4" opacity="0.25" />
          <rect x="414" y="158" width="3" height="4" opacity="0.30" />
          <rect x="550" y="166" width="3" height="4" opacity="0.22" />
          <rect x="626" y="164" width="3" height="4" opacity="0.28" />
          <rect x="1232" y="162" width="3" height="4" opacity="0.30" />
          <rect x="1374" y="166" width="3" height="4" opacity="0.22" />
        </g>
        {/* Waterline + soft reflections */}
        <rect x="0" y="196" width="1440" height="2" fill="#7fb2ff" opacity="0.14" />
        <rect x="240" y="208" width="180" height="1.5" fill="#7fb2ff" opacity="0.10" />
        <rect x="640" y="218" width="260" height="1.5" fill="#7fb2ff" opacity="0.08" />
        <rect x="1060" y="212" width="200" height="1.5" fill="#7fb2ff" opacity="0.10" />
        <rect x="880" y="228" width="140" height="1.5" fill="#ffd9a0" opacity="0.07" />
      </svg>
      <div className="absolute bottom-0 inset-x-0 h-[64px] bg-gradient-to-b from-[#7fb2ff]/[0.06] to-transparent" />

      {/* ---- Holographic dashboard panels (right ~55%, md and up) ---- */}
      <div className="absolute inset-y-0 right-0 w-[58%] hidden md:block">
        {/* Ghost panel far behind the cluster — cinematic depth of field */}
        <div className="absolute top-[22%] right-[34%] w-56 h-32 rounded-2xl border border-white/5 bg-white/[0.03] blur-[2px] opacity-60 rotate-2 hv-float-slow" />

        {/* 1 — AI workflow nodes (upper left of cluster, receded) */}
        <div className="absolute top-[11%] right-[64%] w-44 opacity-80 scale-95 hv-float-slow">
          <div className={`${panelShell} rotate-2`}>
            <PanelChrome />
            <div className="p-3">
              <svg viewBox="0 0 170 104" className="w-full" fill="none">
                <g stroke="#7fb2ff" strokeOpacity="0.35" strokeWidth="1.2">
                  <path d="M28,52 L72,22" />
                  <path d="M28,52 L72,82" />
                  <path d="M72,22 L120,52" strokeDasharray="3 4" />
                  <path d="M72,82 L120,52" />
                  <path d="M120,52 L150,24" strokeDasharray="3 4" />
                  <path d="M120,52 L150,80" />
                </g>
                <g>
                  <circle cx="28" cy="52" r="7" fill="#0f2a55" stroke="#7fb2ff" strokeOpacity="0.7" strokeWidth="1.4" />
                  <circle cx="72" cy="22" r="5.5" fill="#0f2a55" stroke="#7fb2ff" strokeOpacity="0.55" strokeWidth="1.2" />
                  <circle cx="72" cy="82" r="5.5" fill="#0f2a55" stroke="#7fb2ff" strokeOpacity="0.55" strokeWidth="1.2" />
                  <circle cx="120" cy="52" r="8" fill="#1d4ed8" fillOpacity="0.55" stroke="#93c5fd" strokeWidth="1.5" className="hv-pulse" />
                  <circle cx="150" cy="24" r="5" fill="#0f2a55" stroke="#7fb2ff" strokeOpacity="0.5" strokeWidth="1.2" />
                  <circle cx="150" cy="80" r="5" fill="#0f2a55" stroke="#7fb2ff" strokeOpacity="0.5" strokeWidth="1.2" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* 2 — Google Ads ROI dial (top right) */}
        <div className="absolute top-[9%] right-[9%] w-36 hv-float-x">
          <div className={`${panelShell} -rotate-2`}>
            <PanelChrome />
            <div className="relative p-3 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-24" fill="none">
                <defs>
                  <linearGradient id="hv-dial" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#a5c8ff" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="38" stroke="rgba(255,255,255,0.10)" strokeWidth="8" />
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  stroke="url(#hv-dial)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="172 239"
                  transform="rotate(-90 50 50)"
                />
                <circle cx="50" cy="12" r="3" fill="#a5c8ff" className="hv-pulse" />
              </svg>
              <span className="absolute text-sm font-bold text-white/90 tabular-nums">3.8x</span>
            </div>
          </div>
        </div>

        {/* 3 — SEO growth curve (hero panel, center of cluster) */}
        <div className="absolute top-[28%] right-[24%] w-72 hv-float">
          <div className={`${panelShell} -rotate-1 shadow-[0_24px_70px_-16px_rgba(37,99,235,0.55)]`}>
            <PanelChrome />
            <div className="relative px-3.5 pb-3.5 pt-2">
              <span className="absolute right-3.5 top-0 text-[11px] font-bold text-blue-200/90 tabular-nums">
                +248%
              </span>
              <svg viewBox="0 0 240 110" className="w-full" fill="none">
                <defs>
                  <linearGradient id="hv-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.40" />
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="hv-line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#a5c8ff" />
                  </linearGradient>
                </defs>
                <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
                  <path d="M0,28 H240" />
                  <path d="M0,58 H240" />
                  <path d="M0,88 H240" />
                </g>
                <path
                  d="M0,95 C30,88 45,80 70,74 C95,68 110,72 130,58 C150,44 165,48 185,30 C200,17 218,12 236,9 L240,110 L0,110 Z"
                  fill="url(#hv-area)"
                />
                <path
                  d="M0,95 C30,88 45,80 70,74 C95,68 110,72 130,58 C150,44 165,48 185,30 C200,17 218,12 236,9"
                  stroke="url(#hv-line)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="hv-draw"
                />
                <circle cx="236" cy="9" r="7" fill="#93c5fd" opacity="0.25" className="hv-pulse" />
                <circle cx="236" cy="9" r="3" fill="#c7ddff" />
              </svg>
            </div>
          </div>
        </div>

        {/* 4 — Booked meetings counter (right edge, overlapping) */}
        <div className="absolute top-[24%] right-[2%] w-32 hv-float-slow">
          <div className={`${panelShell} rotate-3`}>
            <div className="px-4 pt-3.5 pb-3">
              <div className="text-[26px] leading-none font-bold text-white/95 tabular-nums">127</div>
              <div className="mt-1.5 flex items-center gap-1 text-[10px] font-semibold text-blue-200/85 tabular-nums">
                <svg viewBox="0 0 8 8" className="w-2 h-2 fill-blue-300">
                  <path d="M4 0 L8 6 H0 Z" />
                </svg>
                +38%
              </div>
              <div className="mt-2.5 grid grid-cols-7 gap-1">
                {Array.from({ length: 21 }).map((_, i) => (
                  <span
                    key={i}
                    className={`w-1 h-1 rounded-full ${
                      litDots.includes(i) ? 'bg-blue-400/90' : 'bg-white/15'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 5 — Sales pipeline funnel (lower left of cluster, receded) */}
        <div className="absolute bottom-[24%] right-[60%] w-40 opacity-85 scale-95 hv-float-x">
          <div className={`${panelShell} rotate-1`}>
            <PanelChrome />
            <div className="relative px-3.5 pb-3.5 pt-2">
              <span className="absolute right-3.5 top-0 text-[10px] font-semibold text-blue-200/80 tabular-nums">
                1.4k
              </span>
              <svg viewBox="0 0 150 104" className="w-full" fill="none">
                <path d="M8,6 H142 L118,30 H32 Z" fill="#7fb2ff" opacity="0.34" />
                <path d="M32,36 H118 L100,58 H50 Z" fill="#7fb2ff" opacity="0.26" />
                <path d="M50,64 H100 L90,84 H60 Z" fill="#7fb2ff" opacity="0.20" />
                <path d="M60,90 H90 L83,102 H67 Z" fill="#60a5fa" opacity="0.75" />
              </svg>
            </div>
          </div>
        </div>

        {/* 6 — Website traffic sparkline (thin strip, lower middle) */}
        <div className="absolute bottom-[17%] right-[36%] w-48 hv-float-slow">
          <div className={`${panelShell} rotate-1`}>
            <div className="relative px-3.5 py-2.5">
              <span className="absolute right-3.5 top-1.5 text-[10px] font-semibold text-blue-200/80 tabular-nums">
                24.1k
              </span>
              <svg viewBox="0 0 180 36" className="w-full mt-2" fill="none">
                <path
                  d="M0,26 L14,20 L26,25 L40,15 L54,21 L68,10 L82,17 L96,8 L112,14 L128,6 L144,12 L160,4 L174,8"
                  stroke="#7fb2ff"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.85"
                />
                <circle cx="174" cy="8" r="2.5" fill="#c7ddff" className="hv-pulse" />
              </svg>
            </div>
          </div>
        </div>

        {/* 7 — Revenue analytics bars (bottom right anchor) */}
        <div className="absolute bottom-[9%] right-[6%] w-56 hv-float">
          <div className={`${panelShell} -rotate-2`}>
            <PanelChrome />
            <div className="relative px-3.5 pb-3.5 pt-2">
              <span className="absolute right-3.5 top-0 text-[11px] font-bold text-blue-200/90 tabular-nums">
                +64%
              </span>
              <svg viewBox="0 0 200 92" className="w-full" fill="none">
                <defs>
                  <linearGradient id="hv-bar" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#93c5fd" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>
                </defs>
                <path d="M0,88 H200" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
                <rect x="6" y="60" width="14" height="28" rx="3" fill="rgba(255,255,255,0.14)" />
                <rect x="33" y="52" width="14" height="36" rx="3" fill="rgba(255,255,255,0.16)" />
                <rect x="60" y="56" width="14" height="32" rx="3" fill="rgba(255,255,255,0.18)" />
                <rect x="87" y="40" width="14" height="48" rx="3" fill="rgba(255,255,255,0.22)" />
                <rect x="114" y="32" width="14" height="56" rx="3" fill="rgba(255,255,255,0.26)" />
                <rect x="141" y="20" width="14" height="68" rx="3" fill="rgba(147,197,253,0.45)" />
                <rect x="168" y="6" width="14" height="82" rx="3" fill="url(#hv-bar)" />
                <circle cx="175" cy="2" r="2.5" fill="#c7ddff" className="hv-pulse" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ---- Readability: dark scrim over the left ~60% for headline/CTA ---- */}
      <div className="absolute inset-y-0 left-0 w-[68%] bg-gradient-to-r from-[#0a1428]/95 via-[#0b1c3a]/70 to-transparent" />
      {/* Gentle global vignette keeps overall contrast in the photo-overlay range */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-transparent to-indigo-950/25" />
    </div>
  );
};

export default HeroVisual;
