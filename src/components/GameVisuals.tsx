import React from 'react';

// Code-rendered illustrations for /digital/spiludvikling: four fictional game
// concepts, the six steps of the development process and the hero backdrop.
// Pure SVG (no text), so they are sharp at any size and need no image files.

export type GameConcept = 'runner' | 'puzzle' | 'tycoon' | 'quiz';
export type ProcessStep = 'concept' | 'prototype' | 'art' | 'code' | 'test' | 'launch';

const Star: React.FC<{ x: number; y: number; r?: number; o?: number }> = ({ x, y, r = 1.6, o = 0.9 }) => (
  <circle cx={x} cy={y} r={r} fill="#fff" opacity={o} />
);

/** Space runner for mobile – rocket courier dodging asteroids. */
const RunnerScene = () => (
  <svg viewBox="0 0 400 250" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="rn-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#0b1033" />
        <stop offset="1" stopColor="#2a1259" />
      </linearGradient>
      <radialGradient id="rn-planet" cx="0.35" cy="0.35">
        <stop offset="0" stopColor="#fdba74" />
        <stop offset="1" stopColor="#c2410c" />
      </radialGradient>
      <linearGradient id="rn-trail" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#22d3ee" stopOpacity="0" />
        <stop offset="1" stopColor="#22d3ee" stopOpacity=".9" />
      </linearGradient>
    </defs>
    <rect width="400" height="250" fill="url(#rn-sky)" />
    {[[30, 30], [80, 70], [140, 20], [210, 55], [260, 25], [330, 60], [370, 20], [50, 150], [120, 190], [300, 200], [360, 140], [180, 120]].map(([x, y], i) => (
      <Star key={i} x={x} y={y} r={i % 3 ? 1.2 : 2} o={i % 2 ? 0.6 : 0.95} />
    ))}
    <circle cx="330" cy="200" r="90" fill="url(#rn-planet)" />
    <ellipse cx="330" cy="200" rx="130" ry="18" fill="none" stroke="#fde68a" strokeOpacity=".5" strokeWidth="4" transform="rotate(-14 330 200)" />
    <g fill="#64748b">
      <circle cx="250" cy="95" r="16" />
      <circle cx="305" cy="120" r="10" />
      <circle cx="215" cy="160" r="12" />
    </g>
    <g fill="#475569">
      <circle cx="245" cy="90" r="4" />
      <circle cx="210" cy="157" r="3" />
    </g>
    <rect x="40" y="117" width="90" height="12" rx="6" fill="url(#rn-trail)" />
    <g transform="translate(128 108) rotate(-8)">
      <path d="M0 10 Q30 -6 52 10 Q30 26 0 10 Z" fill="#f8fafc" />
      <circle cx="32" cy="10" r="6" fill="#38bdf8" stroke="#0ea5e9" strokeWidth="2" />
      <path d="M4 2 L-8 -6 L8 6 Z M4 18 L-8 26 L8 14 Z" fill="#f43f5e" />
      <path d="M-2 10 L-16 4 L-16 16 Z" fill="#facc15" />
    </g>
    {[[190, 108], [210, 100], [230, 92]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y - 7} l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z`} fill="#fde047" />
    ))}
    <g>
      <rect x="12" y="12" width="96" height="22" rx="11" fill="#000" opacity=".35" />
      <text x="60" y="27.5" textAnchor="middle" fill="#fde047" fontSize="13" fontWeight="800" fontFamily="system-ui">12 450</text>
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M${336 + i * 18} 20 a4 4 0 0 1 7 -2 a4 4 0 0 1 7 2 c0 5 -7 9 -7 9 s-7 -4 -7 -9z`} fill={i < 2 ? '#f43f5e' : '#475569'} />
      ))}
    </g>
  </svg>
);

/** Atmospheric puzzle platformer – lighthouse in the fog. */
const PuzzleScene = () => (
  <svg viewBox="0 0 400 250" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="pz-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#1e3a5f" />
        <stop offset="1" stopColor="#9fb8c9" />
      </linearGradient>
      <linearGradient id="pz-beam" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#fef3c7" stopOpacity=".8" />
        <stop offset="1" stopColor="#fef3c7" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect width="400" height="250" fill="url(#pz-sky)" />
    <path d="M300 62 L400 20 L400 110 Z" fill="url(#pz-beam)" />
    <path d="M0 170 Q60 130 130 160 T260 150 T400 140 V250 H0Z" fill="#5d7a8f" opacity=".7" />
    <path d="M0 200 Q80 170 170 195 T400 180 V250 H0Z" fill="#3f5a6e" />
    <g>
      <rect x="282" y="70" width="22" height="90" fill="#e2e8f0" />
      <rect x="282" y="95" width="22" height="12" fill="#dc2626" />
      <rect x="282" y="125" width="22" height="12" fill="#dc2626" />
      <rect x="278" y="58" width="30" height="14" rx="2" fill="#334155" />
      <circle cx="293" cy="64" r="5" fill="#fde68a" />
      <path d="M276 58 L293 44 L310 58Z" fill="#1e293b" />
    </g>
    <g fill="#1f3445">
      <rect x="40" y="150" width="70" height="10" rx="3" />
      <rect x="130" y="125" width="55" height="10" rx="3" />
      <rect x="200" y="100" width="50" height="10" rx="3" />
    </g>
    <g transform="translate(150 105)">
      <rect x="-6" y="0" width="12" height="16" rx="4" fill="#f59e0b" />
      <circle cx="0" cy="-5" r="6" fill="#fde68a" />
      <circle cx="10" cy="4" r="4" fill="#fef9c3" opacity=".9" />
      <circle cx="10" cy="4" r="10" fill="#fef9c3" opacity=".25" />
    </g>
    <g fill="#facc15" opacity=".9">
      <circle cx="75" cy="138" r="4" />
      <circle cx="225" cy="88" r="4" />
    </g>
    <rect width="400" height="250" fill="#e2e8f0" opacity=".08" />
    <path d="M0 230 Q100 215 200 228 T400 222 V250 H0Z" fill="#cbd5e1" opacity=".35" />
  </svg>
);

/** Isometric harbour tycoon / city builder. */
const TycoonScene = () => {
  const tile = (x: number, y: number, fill: string) => (
    <path key={`${x}-${y}`} d={`M${x} ${y} l26 13 -26 13 -26 -13z`} fill={fill} stroke="#ffffff" strokeOpacity=".35" />
  );
  const building = (x: number, y: number, h: number, c: string, roof: string) => (
    <g key={`${x}-${y}`}>
      <path d={`M${x - 18} ${y} l18 9 v-${h} l-18 -9z`} fill={c} />
      <path d={`M${x} ${y + 9} l18 -9 v-${h} l-18 9z`} fill={c} opacity=".75" />
      <path d={`M${x - 18} ${y - h} l18 9 18 -9 -18 -9z`} fill={roof} />
    </g>
  );
  const tiles = [];
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 7; c++) {
      const x = 200 + (c - r) * 26;
      const y = 40 + (c + r) * 13;
      tiles.push(tile(x, y, c + r > 7 ? '#38bdf8' : (c + r) % 3 ? '#86efac' : '#a7f3d0'));
    }
  }
  return (
    <svg viewBox="0 0 400 250" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="250" fill="#e0f2fe" />
      <rect y="150" width="400" height="100" fill="#7dd3fc" />
      {tiles}
      {building(170, 92, 34, '#f97316', '#9a3412')}
      {building(210, 86, 22, '#eab308', '#a16207')}
      {building(150, 112, 18, '#e11d48', '#9f1239')}
      {building(230, 110, 44, '#64748b', '#334155')}
      {building(196, 122, 26, '#8b5cf6', '#5b21b6')}
      <g>
        <circle cx="128" cy="96" r="9" fill="#15803d" />
        <circle cx="260" cy="76" r="8" fill="#15803d" />
        <circle cx="112" cy="110" r="7" fill="#166534" />
      </g>
      <g transform="translate(300 175)">
        <path d="M-26 0 h52 l-10 12 h-32z" fill="#1e293b" />
        <rect x="-14" y="-12" width="22" height="12" fill="#ef4444" />
        <rect x="-4" y="-22" width="4" height="10" fill="#334155" />
      </g>
      <g transform="translate(90 205)">
        <path d="M-18 0 h36 l-7 9 h-22z" fill="#f8fafc" />
        <path d="M0 -24 v24 M0 -24 l14 18 h-14z" stroke="#475569" fill="#fef3c7" />
      </g>
      <g>
        <rect x="12" y="12" width="120" height="22" rx="11" fill="#0f172a" opacity=".75" />
        <circle cx="26" cy="23" r="6" fill="#facc15" />
        <text x="80" y="27.5" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700" fontFamily="system-ui">48 900</text>
        <rect x="300" y="12" width="88" height="22" rx="11" fill="#0f172a" opacity=".75" />
        <rect x="312" y="20" width="64" height="6" rx="3" fill="#334155" />
        <rect x="312" y="20" width="44" height="6" rx="3" fill="#22c55e" />
      </g>
    </svg>
  );
};

/** Branded quiz / learning game – UI style. */
const QuizScene = () => (
  <svg viewBox="0 0 400 250" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="qz-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#7c3aed" />
        <stop offset="1" stopColor="#db2777" />
      </linearGradient>
    </defs>
    <rect width="400" height="250" fill="url(#qz-bg)" />
    {[[30, 40, '#fde047'], [360, 50, '#34d399'], [60, 210, '#38bdf8'], [345, 205, '#fde047'], [200, 22, '#fff'], [20, 120, '#f472b6']].map(([x, y, c], i) => (
      <rect key={i} x={Number(x)} y={Number(y)} width="10" height="5" rx="2" fill={String(c)} transform={`rotate(${i * 37} ${x} ${y})`} />
    ))}
    <rect x="80" y="30" width="240" height="10" rx="5" fill="#fff" opacity=".25" />
    <rect x="80" y="30" width="150" height="10" rx="5" fill="#fde047" />
    <rect x="80" y="52" width="240" height="70" rx="14" fill="#fff" />
    <rect x="102" y="72" width="170" height="10" rx="5" fill="#1e1b4b" opacity=".85" />
    <rect x="102" y="92" width="120" height="10" rx="5" fill="#1e1b4b" opacity=".35" />
    <circle cx="292" cy="87" r="16" fill="#ede9fe" />
    <path d="M292 77 v10 l7 5" stroke="#7c3aed" strokeWidth="3" fill="none" strokeLinecap="round" />
    {[0, 1, 2, 3].map((i) => {
      const x = 80 + (i % 2) * 124;
      const y = 134 + Math.floor(i / 2) * 46;
      const correct = i === 1;
      return (
        <g key={i}>
          <rect x={x} y={y} width="116" height="38" rx="12" fill={correct ? '#22c55e' : '#fff'} opacity={correct ? 1 : 0.92} />
          <rect x={x + 14} y={y + 15} width="62" height="8" rx="4" fill={correct ? '#fff' : '#6d28d9'} opacity={correct ? 0.95 : 0.5} />
          {correct && <path d={`M${x + 92} ${y + 19} l5 5 10 -10`} stroke="#fff" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
        </g>
      );
    })}
  </svg>
);

export const GameConceptArt: React.FC<{ concept: GameConcept }> = ({ concept }) => {
  switch (concept) {
    case 'runner':
      return <RunnerScene />;
    case 'puzzle':
      return <PuzzleScene />;
    case 'tycoon':
      return <TycoonScene />;
    case 'quiz':
      return <QuizScene />;
  }
};

/** Small illustration for each step of the development process. */
export const ProcessArt: React.FC<{ step: ProcessStep }> = ({ step }) => (
  <svg viewBox="0 0 200 120" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    {step === 'concept' && (
      <g>
        <rect width="200" height="120" fill="#fef3c7" />
        <rect x="24" y="16" width="110" height="88" rx="4" fill="#fff" transform="rotate(-3 79 60)" />
        <path d="M40 70 q15 -30 30 0 t30 0" stroke="#334155" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="62" cy="40" r="8" stroke="#334155" strokeWidth="2.5" fill="none" />
        <path d="M95 34 l14 8 -14 8z" stroke="#334155" strokeWidth="2.5" fill="none" />
        <rect x="140" y="20" width="40" height="36" rx="3" fill="#fde047" transform="rotate(6 160 38)" />
        <rect x="146" y="64" width="40" height="36" rx="3" fill="#f9a8d4" transform="rotate(-5 166 82)" />
        <path d="M150 34 h22 M150 42 h16" stroke="#a16207" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    )}
    {step === 'prototype' && (
      <g>
        <rect width="200" height="120" fill="#e2e8f0" />
        <path d="M0 92 H200 V120 H0Z" fill="#94a3b8" />
        <rect x="30" y="64" width="40" height="28" fill="#cbd5e1" stroke="#64748b" />
        <rect x="90" y="48" width="30" height="44" fill="#cbd5e1" stroke="#64748b" />
        <rect x="140" y="70" width="34" height="22" fill="#cbd5e1" stroke="#64748b" />
        <rect x="74" y="72" width="10" height="20" rx="5" fill="#f97316" />
        <path d="M84 70 q20 -30 40 -24" stroke="#f97316" strokeWidth="2" strokeDasharray="4 4" fill="none" />
        <path d="M20 20 h50 M20 30 h30" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
      </g>
    )}
    {step === 'art' && (
      <g>
        <rect width="200" height="120" fill="#f5f3ff" />
        {['#7c3aed', '#db2777', '#f59e0b', '#22c55e', '#0ea5e9'].map((c, i) => (
          <rect key={c} x={16} y={14 + i * 19} width="28" height="15" rx="4" fill={c} />
        ))}
        <circle cx="120" cy="52" r="26" fill="#fbcfe8" />
        <circle cx="111" cy="48" r="4" fill="#1e1b4b" />
        <circle cx="129" cy="48" r="4" fill="#1e1b4b" />
        <path d="M110 62 q10 8 20 0" stroke="#1e1b4b" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M94 40 q26 -34 52 0" fill="#7c3aed" />
        <rect x="100" y="80" width="40" height="30" rx="10" fill="#7c3aed" />
        <path d="M170 90 l14 -40 6 2 -14 40z" fill="#f59e0b" />
        <path d="M170 90 l-3 10 9 -7z" fill="#1e293b" />
      </g>
    )}
    {step === 'code' && (
      <g>
        <rect width="200" height="120" fill="#0f172a" />
        <rect x="0" y="0" width="200" height="14" fill="#1e293b" />
        {['#f87171', '#fbbf24', '#34d399'].map((c, i) => <circle key={c} cx={10 + i * 10} cy="7" r="3" fill={c} />)}
        {[[12, 26, 40, '#c084fc'], [56, 26, 50, '#38bdf8'], [24, 40, 60, '#34d399'], [88, 40, 24, '#fbbf24'], [24, 54, 46, '#38bdf8'], [74, 54, 30, '#f472b6'], [36, 68, 52, '#94a3b8'], [24, 82, 30, '#c084fc'], [12, 96, 20, '#38bdf8']].map(([x, y, w, c], i) => (
          <rect key={i} x={Number(x)} y={Number(y)} width={Number(w)} height="6" rx="3" fill={String(c)} />
        ))}
        <rect x="120" y="24" width="68" height="84" rx="6" fill="#1e1b4b" />
        <rect x="126" y="80" width="56" height="22" fill="#4338ca" />
        <rect x="146" y="64" width="8" height="16" rx="4" fill="#fde047" />
        <circle cx="168" cy="40" r="5" fill="#fde047" />
      </g>
    )}
    {step === 'test' && (
      <g>
        <rect width="200" height="120" fill="#ecfdf5" />
        <path d="M20 96 H180 M20 96 V20" stroke="#94a3b8" strokeWidth="2" />
        <path d="M26 84 L60 70 L90 76 L120 48 L150 40 L176 26" stroke="#10b981" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {[[60, 70], [120, 48], [176, 26]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="5" fill="#10b981" />)}
        <g transform="translate(150 78)">
          <rect x="-16" y="-12" width="40" height="30" rx="6" fill="#fff" stroke="#d1fae5" />
          <path d="M-8 2 l5 5 10 -10" stroke="#10b981" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="8" y="0" width="10" height="4" rx="2" fill="#a7f3d0" />
        </g>
      </g>
    )}
    {step === 'launch' && (
      <g>
        <rect width="200" height="120" fill="#eff6ff" />
        <rect x="36" y="10" width="58" height="104" rx="10" fill="#1e293b" />
        <rect x="41" y="18" width="48" height="86" rx="5" fill="#fff" />
        <rect x="49" y="28" width="32" height="32" rx="8" fill="#7c3aed" />
        <path d="M57 50 l8 -14 8 14z" fill="#fde047" />
        <rect x="49" y="68" width="32" height="7" rx="3.5" fill="#2563eb" />
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} d={`M${51 + i * 7} 84 l1.6 3.4 3.6 .4 -2.7 2.4 .8 3.6 -3.3 -1.9 -3.3 1.9 .8 -3.6 -2.7 -2.4 3.6 -.4z`} fill="#f59e0b" />
        ))}
        <path d="M112 96 L136 74 L152 82 L182 40" stroke="#2563eb" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M170 38 h14 v14" stroke="#2563eb" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    )}
  </svg>
);

/** Full-bleed hero backdrop: a dim montage of the concept scenes. */
export const GameHeroVisual: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden bg-slate-950" aria-hidden="true">
    <div className="absolute inset-0 grid grid-cols-2 opacity-60 md:grid-cols-4">
      {(['runner', 'puzzle', 'tycoon', 'quiz'] as GameConcept[]).map((c) => (
        <div key={c} className="h-full">
          <GameConceptArt concept={c} />
        </div>
      ))}
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-indigo-950/40" />
  </div>
);
