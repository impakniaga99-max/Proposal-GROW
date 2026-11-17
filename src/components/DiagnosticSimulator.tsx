import { ArrowRight, Download, FileDown, Loader2, RotateCcw, Zap } from 'lucide-react';
import { useState } from 'react';
import {
  ChallengeKey,
  DIAGNOSTIC_PROFILES,
  DiagnosticPillarScores,
  DiagnosticProfile,
  Language,
  UI_COPY,
} from '../data/proposalData';

interface DiagnosticSimulatorProps {
  lang: Language;
  challenge: ChallengeKey;
  scores: DiagnosticPillarScores;
  overallScore: number;
  effectiveProfile: DiagnosticProfile;
  onChallengeChange: (challenge: ChallengeKey) => void;
  onSliderChange: (key: keyof DiagnosticPillarScores, value: number) => void;
  onReset: () => void;
  onSelectRecommendedModule: (moduleId: number) => void;
  onDownloadPdf: () => void;
}

export function DiagnosticSimulator({
  lang,
  challenge,
  scores,
  overallScore,
  effectiveProfile,
  onChallengeChange,
  onSliderChange,
  onReset,
  onSelectRecommendedModule,
  onDownloadPdf,
}: DiagnosticSimulatorProps) {
  const [status, setStatus] = useState<'ready' | 'scanning'>('ready');
  const [downloadedNotice, setDownloadedNotice] = useState(false);

  const copy = UI_COPY[lang].diagnostic;
  const profiles = DIAGNOSTIC_PROFILES[lang];
  const activeProfile = profiles[challenge];

  const runDiagnostic = () => {
    setStatus('scanning');
    setDownloadedNotice(false);
    window.setTimeout(() => {
      setStatus('ready');
    }, 750);
  };

  const handleReset = () => {
    onReset();
    setStatus('ready');
    setDownloadedNotice(false);
  };

  const handleDownloadSummary = () => {
    const lines = [
      lang === 'ms'
        ? 'RINGKASAN LAPORAN SISTEM BUSINESS PERFORMANCE DIAGNOSTIC (PROGRAM GROW)'
        : 'BUSINESS PERFORMANCE DIAGNOSTIC REPORT SUMMARY (GROW PROGRAM)',
      '========================================================================',
      `${copy.challengeLabel}: ${activeProfile.label}`,
      `${copy.avgLabel}: ${overallScore}%`,
      `${copy.urgencyLabel}: ${effectiveProfile.urgencyLevel}`,
      '',
      `${copy.selfEvalLabel}:`,
      ...copy.pillars.map((p) => `- ${p.label}: ${scores[p.key]}%`),
      '',
      `${copy.diagnosisHeading}:`,
      effectiveProfile.diagnosisSummary,
      '',
      `${copy.recommendedHeading}:`,
      effectiveProfile.recommendedModuleTitle,
      '',
      `${copy.actionPlanHeading}:`,
      ...effectiveProfile.actionPlan.map(
        (step) => `- ${step.month} (${step.focus}): ${step.deliverable}`
      ),
      '',
      copy.freeNote,
    ].join('\n');

    const blob = new Blob([lines], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Diagnostik-GROW-${effectiveProfile.id}-${lang}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setDownloadedNotice(true);
  };

  const center = 110;
  const maxRadius = 82;
  const targetScore = 88;

  const getPolygonPoints = (vals: number[]) => {
    const angles = [-Math.PI / 2, 0, Math.PI / 2, Math.PI];
    return vals
      .map((val, idx) => {
        const r = (val / 100) * maxRadius;
        const x = center + r * Math.cos(angles[idx]);
        const y = center + r * Math.sin(angles[idx]);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');
  };

  const currentPolygon = getPolygonPoints([
    scores.strategic,
    scores.marketing,
    scores.financial,
    scores.talent,
  ]);
  const benchmarkPolygon = getPolygonPoints([targetScore, targetScore, targetScore, targetScore]);

  return (
    <section
      id="diagnostic-tool"
      className="bg-slate-900 text-slate-100 rounded-2xl p-6 sm:p-10 space-y-8 border border-slate-800"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div className="space-y-2 max-w-2xl">
          <p className="text-xs font-medium text-sky-300">{copy.kicker}</p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight [text-wrap:balance]">
            {copy.title}
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">{copy.subtitle}</p>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors self-start md:self-auto whitespace-nowrap shrink-0 cursor-pointer print-hidden"
        >
          <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
          <span>{copy.reset}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Controls Column */}
        <div className="lg:col-span-5 bg-slate-800/70 border border-slate-700 rounded-xl p-5 sm:p-6 space-y-5">
          <div className="space-y-2">
            <label htmlFor="business-challenge" className="block text-xs font-semibold text-sky-200">
              {copy.challengeLabel}
            </label>
            <select
              id="business-challenge"
              value={challenge}
              onChange={(e) => {
                setDownloadedNotice(false);
                onChallengeChange(e.target.value as ChallengeKey);
              }}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
            >
              <option value="strategic">{profiles.strategic.label}</option>
              <option value="marketing">{profiles.marketing.label}</option>
              <option value="financial">{profiles.financial.label}</option>
              <option value="talent">{profiles.talent.label}</option>
            </select>
          </div>

          <div className="space-y-3.5 pt-2 border-t border-slate-700">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-slate-300">{copy.selfEvalLabel}</span>
              <span className="font-mono text-sky-300 tabular-nums">
                {copy.avgLabel}: {overallScore}%
              </span>
            </div>

            {copy.pillars.map(({ key, label }) => (
              <div key={key} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <label htmlFor={`slider-${key}`} className="text-slate-300">
                    {label}
                  </label>
                  <span className="font-mono text-white font-medium tabular-nums">
                    {scores[key]}%
                  </span>
                </div>
                <input
                  id={`slider-${key}`}
                  type="range"
                  min={15}
                  max={95}
                  value={scores[key]}
                  onChange={(e) => {
                    setDownloadedNotice(false);
                    onSliderChange(key, Number(e.target.value));
                  }}
                  className="w-full accent-sky-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={runDiagnostic}
            disabled={status === 'scanning'}
            className="w-full bg-sky-600 hover:bg-sky-500 disabled:opacity-60 text-white font-semibold py-3 px-4 rounded-lg text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap print-hidden"
          >
            {status === 'scanning' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                <span>{copy.scanningBtn}</span>
              </>
            ) : (
              <>
                <Zap className="w-4 h-4" aria-hidden="true" />
                <span>{copy.runBtn}</span>
              </>
            )}
          </button>
        </div>

        {/* Result & Radar Output Column */}
        <div className="lg:col-span-7 bg-slate-950/60 border border-slate-800 rounded-xl p-5 sm:p-6 space-y-6">
          {status === 'scanning' ? (
            <div className="py-16 flex flex-col items-center justify-center text-center space-y-3">
              <Loader2 className="w-8 h-8 text-sky-400 animate-spin" aria-hidden="true" />
              <p className="text-sm font-medium text-sky-200">{copy.scanningText}</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                {/* 4-Axis SVG Radar */}
                <div className="sm:col-span-5 flex flex-col items-center">
                  <svg
                    viewBox="0 0 220 220"
                    className="w-48 h-48"
                    role="img"
                    aria-label={copy.title}
                  >
                    {[25, 50, 75, 100].map((ring) => (
                      <polygon
                        key={ring}
                        points={getPolygonPoints([ring, ring, ring, ring])}
                        fill="none"
                        stroke="#334155"
                        strokeWidth="1"
                      />
                    ))}
                    <line x1="110" y1="28" x2="110" y2="192" stroke="#334155" strokeWidth="1" />
                    <line x1="28" y1="110" x2="192" y2="110" stroke="#334155" strokeWidth="1" />

                    <polygon
                      points={benchmarkPolygon}
                      fill="rgba(56, 189, 248, 0.08)"
                      stroke="#38bdf8"
                      strokeWidth="1.5"
                      strokeDasharray="4 3"
                    />
                    <polygon
                      points={currentPolygon}
                      fill="rgba(245, 158, 11, 0.25)"
                      stroke="#fbbf24"
                      strokeWidth="2"
                    />

                    <text x="110" y="16" textAnchor="middle" fill="#cbd5e1" fontSize="10">
                      {copy.pillars[0].axis}
                    </text>
                    <text x="200" y="113" textAnchor="middle" fill="#cbd5e1" fontSize="10">
                      {copy.pillars[1].axis}
                    </text>
                    <text x="110" y="210" textAnchor="middle" fill="#cbd5e1" fontSize="10">
                      {copy.pillars[2].axis}
                    </text>
                    <text x="20" y="113" textAnchor="middle" fill="#cbd5e1" fontSize="10">
                      {copy.pillars[3].axis}
                    </text>
                  </svg>
                  <div className="flex items-center gap-4 text-[11px] text-slate-300 mt-1">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 bg-amber-400 inline-block rounded-xs" />
                      {copy.currentLegend} ({overallScore}%)
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 border border-sky-400 inline-block rounded-xs" />
                      {copy.targetLegend}
                    </span>
                  </div>
                </div>

                {/* Diagnosis Text */}
                <div className="sm:col-span-7 space-y-3">
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="text-slate-400">{copy.urgencyLabel}</span>
                    <span className="font-mono font-semibold text-amber-300">
                      {effectiveProfile.urgencyLevel}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-xs font-semibold text-sky-300">{copy.diagnosisHeading}</h3>
                    <p className="text-sm text-slate-100 leading-relaxed">
                      {effectiveProfile.diagnosisSummary}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800 space-y-2">
                    <h3 className="text-xs font-semibold text-sky-300">{copy.recommendedHeading}</h3>
                    <p className="text-sm font-semibold text-white">
                      {effectiveProfile.recommendedModuleTitle}
                    </p>
                    <button
                      type="button"
                      onClick={() => onSelectRecommendedModule(effectiveProfile.recommendedModuleId)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-300 hover:text-sky-200 transition-colors cursor-pointer print-hidden"
                    >
                      <span>{copy.jumpModuleBtn}</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>

              {/* 90-Day Action Plan */}
              <div className="border-t border-slate-800 pt-5 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xs font-semibold text-slate-300">{copy.actionPlanHeading}</h3>
                  <div className="flex items-center gap-3 print-hidden">
                    <button
                      type="button"
                      onClick={handleDownloadSummary}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <Download className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{copy.downloadTxtBtn}</span>
                    </button>
                    <button
                      type="button"
                      onClick={onDownloadPdf}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sky-700 hover:bg-sky-600 rounded-md text-xs font-semibold text-white transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <FileDown className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{copy.downloadPdfBtn}</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {effectiveProfile.actionPlan.map((step) => (
                    <div
                      key={step.month}
                      className="bg-slate-900 border border-slate-800 rounded-lg p-3.5 space-y-1"
                    >
                      <p className="font-mono text-xs font-semibold text-sky-400">{step.month}</p>
                      <p className="text-xs font-semibold text-white">{step.focus}</p>
                      <p className="text-xs text-slate-400 leading-relaxed">{step.deliverable}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 text-xs text-slate-400">
                  <span>{copy.freeNote}</span>
                  {downloadedNotice && (
                    <span className="text-emerald-400 font-medium">{copy.downloadedTxtMsg}</span>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
