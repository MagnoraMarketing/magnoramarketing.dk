import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CalendarCheck, CheckCircle, Headphones, Pause, Phone, Play, RotateCcw } from 'lucide-react';

// Real recording of an AI booking call (håndværker example from AIbooking.dk).
// Source file is compressed to a mono 64 kbps MP3 so it stays light on every page.
export const BOOKING_AUDIO_SRC = '/audio/ai-booking-eksempel-haandvaerker.mp3';
const FALLBACK_DURATION = 270;

/** Page-specific copy lives under bookingAudio.variants.<variant> in the locales. */
export type BookingAudioVariant =
  | 'home'
  | 'services'
  | 'aiReception'
  | 'aiIntegration'
  | 'aiWidget'
  | 'meetingBooking'
  | 'leadGeneration'
  | 'pricing'
  | 'outsourcing'
  | 'websites'
  | 'partners'
  | 'about'
  | 'contact'
  | 'blogAi'
  | 'blogBooking'
  | 'blogSales'
  | 'blogWeb';

interface BookingAudioDemoProps {
  variant: BookingAudioVariant;
  /** "section" = full-width page section, "inline" = compact card inside an article. */
  layout?: 'section' | 'inline';
  className?: string;
}

interface VariantCopy {
  label: string;
  title: string;
  subtitle: string;
  highlights: string[];
  ctaText: string;
  ctaLink: string;
}

// Deterministic pseudo-waveform so server and client render identical markup.
const BAR_COUNT = 64;
const BARS = Array.from({ length: BAR_COUNT }, (_, i) => {
  const v = Math.abs(Math.sin(i * 1.7) * 0.55 + Math.sin(i * 0.43) * 0.3 + Math.sin(i * 3.1) * 0.15);
  return Math.round(22 + v * 78);
});

const formatTime = (s: number) => {
  if (!Number.isFinite(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
};

const SPEEDS = [1, 1.25, 1.5];

const AudioPlayer: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const { t } = useTranslation();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(FALLBACK_DURATION);
  const [speedIdx, setSpeedIdx] = useState(0);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => setCurrent(a.currentTime);
    const onMeta = () => Number.isFinite(a.duration) && a.duration > 0 && setDuration(a.duration);
    const onPlay = () => {
      // Only one demo plays at a time if a page ever renders several.
      document.querySelectorAll('audio[data-booking-demo]').forEach(el => {
        if (el !== a) (el as HTMLAudioElement).pause();
      });
      setPlaying(true);
    };
    const onPause = () => setPlaying(false);
    const onEnded = () => { setPlaying(false); setCurrent(0); a.currentTime = 0; };
    a.addEventListener('timeupdate', onTime);
    a.addEventListener('loadedmetadata', onMeta);
    a.addEventListener('play', onPlay);
    a.addEventListener('pause', onPause);
    a.addEventListener('ended', onEnded);
    return () => {
      a.removeEventListener('timeupdate', onTime);
      a.removeEventListener('loadedmetadata', onMeta);
      a.removeEventListener('play', onPlay);
      a.removeEventListener('pause', onPause);
      a.removeEventListener('ended', onEnded);
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) void a.play();
    else a.pause();
  };

  const seekTo = (ratio: number) => {
    const a = audioRef.current;
    if (!a) return;
    const target = Math.max(0, Math.min(1, ratio)) * duration;
    a.currentTime = target;
    setCurrent(target);
  };

  const onWaveClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    seekTo((e.clientX - rect.left) / rect.width);
  };

  const onWaveKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); seekTo((current + 5) / duration); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); seekTo((current - 5) / duration); }
  };

  const cycleSpeed = () => {
    const next = (speedIdx + 1) % SPEEDS.length;
    setSpeedIdx(next);
    if (audioRef.current) audioRef.current.playbackRate = SPEEDS[next];
  };

  const progress = duration > 0 ? current / duration : 0;

  return (
    <div className="relative rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-sm p-5 sm:p-6 shadow-2xl shadow-blue-950/40">
      {/* Call header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="relative flex-shrink-0">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
            <Phone size={18} className="text-white" />
          </div>
          <span className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-slate-900 ${playing ? 'bg-green-400' : 'bg-slate-400'}`} />
        </div>
        <div className="min-w-0">
          <p className="text-white font-semibold text-sm leading-tight truncate">{t('bookingAudio.player.callTitle')}</p>
          <p className="text-blue-200/70 text-xs truncate">{t('bookingAudio.player.callMeta')}</p>
        </div>
        <span className={`ml-auto text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${playing ? 'bg-green-400/15 text-green-300' : 'bg-white/10 text-blue-100/80'}`}>
          {playing ? t('bookingAudio.player.live') : t('bookingAudio.player.recording')}
        </span>
      </div>

      {/* Waveform (click / arrow keys to seek) */}
      <div
        role="slider"
        tabIndex={0}
        aria-label={t('bookingAudio.player.seekLabel')}
        aria-valuemin={0}
        aria-valuemax={Math.round(duration)}
        aria-valuenow={Math.round(current)}
        aria-valuetext={`${formatTime(current)} / ${formatTime(duration)}`}
        onClick={onWaveClick}
        onKeyDown={onWaveKey}
        className={`flex items-center gap-[3px] cursor-pointer select-none rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${compact ? 'h-12' : 'h-16'}`}
      >
        {BARS.map((h, i) => {
          const played = i / BARS.length < progress;
          return (
            <span
              key={i}
              className={`flex-1 rounded-full transition-colors duration-150 ${played ? 'bg-gradient-to-t from-blue-500 to-cyan-300' : 'bg-white/20'} ${playing && played ? 'opacity-100' : ''}`}
              style={{ height: `${h}%` }}
            />
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 mt-5">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? t('bookingAudio.player.pause') : t('bookingAudio.player.play')}
          className="relative flex-shrink-0 w-14 h-14 rounded-full bg-white text-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30 hover:scale-105 active:scale-95 transition-transform focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/50"
        >
          {!playing && <span className="absolute inset-0 rounded-full bg-white/40 animate-ping" aria-hidden="true" />}
          {playing ? <Pause size={22} className="relative" /> : <Play size={22} className="relative ml-1" />}
        </button>
        <div className="font-mono text-sm text-blue-100/90 tabular-nums">
          {formatTime(current)} <span className="text-blue-200/40">/ {formatTime(duration)}</span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          {current > 0 && (
            <button
              type="button"
              onClick={() => seekTo(0)}
              aria-label={t('bookingAudio.player.restart')}
              className="w-9 h-9 rounded-full bg-white/10 text-blue-100 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <RotateCcw size={15} />
            </button>
          )}
          <button
            type="button"
            onClick={cycleSpeed}
            aria-label={t('bookingAudio.player.speed')}
            className="h-9 px-3 rounded-full bg-white/10 text-blue-100 hover:bg-white/20 text-xs font-semibold tabular-nums transition-colors"
          >
            {SPEEDS[speedIdx]}x
          </button>
        </div>
      </div>

      <audio ref={audioRef} src={BOOKING_AUDIO_SRC} preload="none" data-booking-demo>
        {t('bookingAudio.player.unsupported')}
      </audio>
    </div>
  );
};

const BookingAudioDemo: React.FC<BookingAudioDemoProps> = ({ variant, layout = 'section', className = '' }) => {
  const { t } = useTranslation();
  const copy = t(`bookingAudio.variants.${variant}`, { returnObjects: true }) as VariantCopy;

  const schema = (
    <>
      <meta itemProp="name" content={t('bookingAudio.player.callTitle')} />
      <meta itemProp="contentUrl" content={`https://magnoramarketing.dk${BOOKING_AUDIO_SRC}`} />
      <meta itemProp="encodingFormat" content="audio/mpeg" />
      <meta itemProp="duration" content="PT4M30S" />
      <meta itemProp="inLanguage" content="da" />
    </>
  );

  if (layout === 'inline') {
    return (
      <aside
        itemScope
        itemType="https://schema.org/AudioObject"
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 p-6 sm:p-8 my-12 ${className}`}
      >
        {schema}
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-blue-500/25 blur-3xl" aria-hidden="true" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-400/15 text-blue-200 text-xs font-semibold uppercase tracking-widest mb-4">
            <Headphones size={13} /> {copy.label}
          </span>
          <h2 className="text-2xl font-bold text-white mb-2 leading-snug">{copy.title}</h2>
          <p itemProp="description" className="text-blue-100/75 mb-6 leading-relaxed">{copy.subtitle}</p>
          <AudioPlayer compact />
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-5">
            {copy.highlights.slice(0, 3).map((h, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 text-sm text-blue-100/85">
                <CheckCircle size={14} className="text-cyan-300" /> {h}
              </span>
            ))}
            <Link to={copy.ctaLink} className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 hover:text-white">
              {copy.ctaText} <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <section
      itemScope
      itemType="https://schema.org/AudioObject"
      aria-labelledby={`booking-audio-${variant}`}
      className={`relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 py-20 md:py-24 ${className}`}
    >
      {schema}
      {/* Decorative glow + grid */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-600/25 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 -right-20 w-[28rem] h-[28rem] rounded-full bg-indigo-500/20 blur-3xl" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-400/15 border border-blue-300/20 text-blue-200 text-xs font-semibold uppercase tracking-widest mb-5">
              <Headphones size={14} /> {copy.label}
            </span>
            <h2 id={`booking-audio-${variant}`} className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
              {copy.title}
            </h2>
            <p itemProp="description" className="text-blue-100/75 text-lg leading-relaxed mb-8">{copy.subtitle}</p>
            <ul className="space-y-3.5 mb-9">
              {copy.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-blue-50/90">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-cyan-400/15 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={15} className="text-cyan-300" />
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <Link to={copy.ctaLink} className="btn btn-primary inline-flex items-center gap-2">
              {copy.ctaText} <ArrowRight size={16} />
            </Link>
          </div>

          <div className="relative">
            <AudioPlayer />
            <div className="hidden sm:flex absolute -top-7 -right-4 items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl">
              <span className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center">
                <CalendarCheck size={18} className="text-green-600" />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900 leading-tight">{t('bookingAudio.player.badgeTitle')}</p>
                <p className="text-xs text-slate-500">{t('bookingAudio.player.badgeSub')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingAudioDemo;
