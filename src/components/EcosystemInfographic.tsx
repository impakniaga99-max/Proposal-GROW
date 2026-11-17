import { ArrowRight, BarChart3 } from 'lucide-react';
import { useState } from 'react';
import { INFOGRAPHIC_STAGES, Language, UI_COPY } from '../data/proposalData';

interface EcosystemInfographicProps {
  lang: Language;
}

export function EcosystemInfographic({ lang }: EcosystemInfographicProps) {
  const [imgError, setImgError] = useState(false);
  const copy = UI_COPY[lang].sec3;
  const stages = INFOGRAPHIC_STAGES[lang];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
        <div className="space-y-1">
          <p className="font-mono text-xs font-medium text-sky-700">{copy.infographicKicker}</p>
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-900">
            {copy.infographicTitle}
          </h3>
          <p className="text-sm text-slate-600">{copy.infographicSubtitle}</p>
        </div>
      </div>

      {/* 4-Stage Connected Visual Infographic */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        {stages.map((stage, idx) => (
          <div
            key={stage.step}
            className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between space-y-4 relative"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-white bg-slate-900 px-2.5 py-1 rounded-md tabular-nums">
                  {stage.step}
                </span>
                {idx < stages.length - 1 && (
                  <ArrowRight
                    className="w-4 h-4 text-sky-700 hidden lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>

              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-slate-900">{stage.title}</h4>
                <p className="font-mono text-xs font-semibold text-sky-700 tabular-nums">
                  {stage.metric}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
              {stage.description}
            </p>
          </div>
        ))}
      </div>

      {/* Supporting Editorial Team Visual + Caption */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-white border border-slate-200 rounded-xl overflow-hidden">
        <div className="lg:col-span-7 relative aspect-[16/9] sm:aspect-[16/10] bg-slate-900 overflow-hidden">
          {!imgError ? (
            <img
              src="/src/assets/images/executive_team_growth_1794887386119.jpg"
              alt={copy.teamImageAlt}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-sky-950 flex flex-col items-center justify-center p-6 text-center space-y-2">
              <BarChart3 className="w-8 h-8 text-sky-400" aria-hidden="true" />
              <p className="text-sm font-medium text-slate-200">{copy.teamImageCaption}</p>
            </div>
          )}
          <div
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-4"
            aria-hidden="true"
          >
            <p className="text-xs font-medium text-slate-100">{copy.teamImageCaption}</p>
          </div>
        </div>

        <div className="lg:col-span-5 p-6 space-y-4">
          <p className="font-mono text-xs font-semibold text-sky-700">
            {lang === 'ms' ? 'KPI & Pemantauan Kemajuan' : 'KPI & Progress Governance'}
          </p>
          <h4 className="font-display text-lg font-semibold text-slate-900">
            {lang === 'ms'
              ? 'Daripada Diagnosis Awal ke Pelaksanaan Pasukan'
              : 'From Initial Diagnosis to Team Execution'}
          </h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            {lang === 'ms'
              ? 'Setiap syarikat peserta memetakan sasaran 90 hari mereka bersama pasukan pengurusan supaya perubahan yang dirancang terus dipraktikkan di tempat kerja.'
              : 'Each participating enterprise maps its 90-day milestones directly with leadership teams so strategic recommendations translate into daily execution.'}
          </p>
          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-200">
            <div>
              <p className="font-mono text-lg font-bold text-slate-900 tabular-nums">90 Hari</p>
              <p className="text-xs text-slate-500">
                {lang === 'ms' ? 'Kitaran Pemantauan' : 'Tracking Cycle'}
              </p>
            </div>
            <div>
              <p className="font-mono text-lg font-bold text-sky-700 tabular-nums">100%</p>
              <p className="text-xs text-slate-500">
                {lang === 'ms' ? 'Berfokuskan Hasil' : 'Result-Driven'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
