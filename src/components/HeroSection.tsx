import { ArrowDownRight, Briefcase, Calendar, CheckCircle2, Globe, Printer, Users } from 'lucide-react';
import { useState } from 'react';
import { Language, UI_COPY } from '../data/proposalData';

interface HeroSectionProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
  onJumpToDiagnostic: () => void;
}

export function HeroSection({ lang, onChangeLang, onJumpToDiagnostic }: HeroSectionProps) {
  const [formatMode, setFormatMode] = useState<'group' | 'oneOnOne'>('group');
  const [heroImgError, setHeroImgError] = useState(false);

  const copy = UI_COPY[lang];
  const hero = copy.hero;

  return (
    <section id="top" className="pt-6 sm:pt-10 pb-6 space-y-6">
      {/* Proposal Workspace Toolbar: Language Switcher (BM / EN) & Print */}
      <div className="flex flex-wrap items-center justify-between gap-4 print-hidden">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <span>{hero.kicker}</span>
        </div>

        <div className="flex items-center gap-3">
          <div
            className="inline-flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-lg"
            role="group"
            aria-label="Pilihan Bahasa / Language Switcher"
          >
            <Globe className="w-3.5 h-3.5 text-slate-500 ml-2 mr-1" aria-hidden="true" />
            <button
              type="button"
              onClick={() => onChangeLang('ms')}
              aria-pressed={lang === 'ms'}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                lang === 'ms'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Bahasa Melayu
            </button>
            <button
              type="button"
              onClick={() => onChangeLang('en')}
              aria-pressed={lang === 'en'}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                lang === 'en'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              English
            </button>
          </div>

          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{copy.printPdf}</span>
          </button>
        </div>
      </div>

      {/* Main Hero Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Editorial Proposal Proposition */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-white border border-slate-200 rounded-2xl p-6 sm:p-10">
          <div className="space-y-5">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight leading-[1.15] text-slate-900 [text-wrap:balance]">
              {hero.title}
            </h1>

            <p className="text-slate-600 text-base leading-relaxed max-w-2xl">
              {hero.subtitle}
            </p>
          </div>

          <div className="pt-8 mt-8 border-t border-slate-200 flex flex-wrap items-center gap-4 print-hidden">
            <button
              type="button"
              onClick={onJumpToDiagnostic}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
            >
              <span>{hero.ctaDiagnostic}</span>
              <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <a
              href="#struktur-modul"
              className="inline-flex items-center px-5 py-3 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              {hero.ctaModules}
            </a>
          </div>
        </div>

        {/* Right: Coaching Photography + Hybrid Architecture Panel */}
        <div className="lg:col-span-5 bg-slate-900 text-slate-100 rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-800">
          {/* Top Editorial Photo */}
          <div className="relative aspect-[16/10] w-full bg-slate-800 overflow-hidden">
            {!heroImgError ? (
              <img
                src="/src/assets/images/hero_coaching_session_1794887385267.jpg"
                alt={hero.heroImageAlt}
                referrerPolicy="no-referrer"
                onError={() => setHeroImgError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-slate-800 via-sky-950 to-slate-900 flex flex-col items-center justify-center p-6 text-center space-y-2">
                <Briefcase className="w-8 h-8 text-sky-400" aria-hidden="true" />
                <p className="text-xs font-medium text-slate-300">{hero.heroImageCaption}</p>
              </div>
            )}
            <div
              className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent px-6 pt-8 pb-3"
              aria-hidden="true"
            >
              <p className="text-xs text-slate-200">{hero.heroImageCaption}</p>
            </div>
          </div>

          <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-3">
                <div>
                  <p className="text-xs font-medium text-sky-300">{hero.architectureLabel}</p>
                  <h2 className="text-base font-semibold text-white">{hero.architectureTitle}</h2>
                </div>
                <div
                  className="flex items-center gap-1 p-1 bg-slate-800 rounded-lg print-hidden"
                  role="tablist"
                  aria-label={hero.architectureTitle}
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={formatMode === 'group'}
                    onClick={() => setFormatMode('group')}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      formatMode === 'group'
                        ? 'bg-sky-700 text-white'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {hero.tabGroup}
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={formatMode === 'oneOnOne'}
                    onClick={() => setFormatMode('oneOnOne')}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      formatMode === 'oneOnOne'
                        ? 'bg-sky-700 text-white'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {hero.tabOneOnOne}
                  </button>
                </div>
              </div>

              {formatMode === 'group' ? (
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-slate-400">{hero.groupPeriodLabel}</p>
                    <p className="text-lg font-semibold text-white tabular-nums">
                      {hero.groupPeriodValue}
                    </p>
                    <p className="text-xs text-slate-300 mt-1">{hero.groupPeriodDesc}</p>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-200">
                    <li className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" aria-hidden="true" />
                      <span>{hero.groupBullets[0]}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{hero.groupBullets[1]}</span>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-slate-400">{hero.oneOnOneLabel}</p>
                    <p className="text-lg font-semibold text-white tabular-nums">
                      {hero.oneOnOneValue}
                    </p>
                    <p className="text-xs text-slate-300 mt-1">{hero.oneOnOneDesc}</p>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-200">
                    <li className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" aria-hidden="true" />
                      <span>{hero.oneOnOneBullets[0]}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{hero.oneOnOneBullets[1]}</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <span>{hero.aiStatusLabel}</span>
              <span className="font-mono font-semibold text-emerald-400">{hero.aiStatusValue}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width 4-Column Key Metric Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {hero.metrics.map((metric, index) => (
          <div key={metric.label} className="bg-white border border-slate-200 rounded-xl p-5">
            <p className="text-xs font-medium text-slate-500">{metric.label}</p>
            <p
              className={`font-mono text-2xl font-semibold mt-1 tabular-nums ${
                index === 3 ? 'text-emerald-700' : 'text-slate-900'
              }`}
            >
              {metric.value}
            </p>
            <p className="text-xs text-slate-600 mt-1">{metric.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
