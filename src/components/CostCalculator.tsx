import { Minus, Plus } from 'lucide-react';
import { Language, UI_COPY } from '../data/proposalData';

const ONE_ON_ONE_RATE = 530;

interface CostCalculatorProps {
  lang: Language;
  oneOnOneSessions: number;
  onChangeSessions: (count: number) => void;
}

export function CostCalculator({
  lang,
  oneOnOneSessions,
  onChangeSessions,
}: CostCalculatorProps) {
  const copy = UI_COPY[lang].sec6;
  const additionalCost = oneOnOneSessions * ONE_ON_ONE_RATE;

  return (
    <section
      id="kos-program"
      className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 space-y-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-5">
        <div className="space-y-1">
          <p className="font-mono text-xs font-medium text-sky-700">{copy.tag}</p>
          <h2 className="font-display text-2xl font-semibold text-slate-900">{copy.title}</h2>
        </div>
        <p className="text-xs text-slate-500">{copy.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* 3 Core Cost Breakdown Rows */}
        <div className="lg:col-span-7 divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden">
          {copy.rows.map((row, idx) => (
            <div
              key={row.title}
              className={`p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                idx === 0 ? 'bg-slate-50' : 'bg-white'
              }`}
            >
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-900">{row.title}</p>
                <p className="text-xs text-slate-600">{row.desc}</p>
              </div>
              <span
                className={`shrink-0 tabular-nums ${
                  idx === 0
                    ? 'font-mono text-sm font-bold text-emerald-700'
                    : idx === 2
                      ? 'font-mono text-sm font-semibold text-slate-900'
                      : 'text-xs font-semibold text-slate-700'
                }`}
              >
                {row.price}
              </span>
            </div>
          ))}
        </div>

        {/* Interactive Estimator */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold text-sky-800">{copy.calcKicker}</p>
            <h3 className="text-base font-semibold text-slate-900">{copy.calcTitle}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{copy.calcDesc}</p>
          </div>

          <div className="flex items-center justify-between bg-white border border-slate-200 rounded-lg p-3 print-hidden">
            <span className="text-xs font-medium text-slate-700">{copy.sessionsLabel}</span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label={lang === 'ms' ? 'Kurangkan bilangan sesi' : 'Decrease sessions'}
                onClick={() => onChangeSessions(Math.max(0, oneOnOneSessions - 1))}
                disabled={oneOnOneSessions === 0}
                className="w-8 h-8 rounded-md border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 disabled:opacity-40 cursor-pointer"
              >
                <Minus className="w-4 h-4" aria-hidden="true" />
              </button>
              <span className="font-mono text-base font-semibold text-slate-900 w-6 text-center tabular-nums">
                {oneOnOneSessions}
              </span>
              <button
                type="button"
                aria-label={lang === 'ms' ? 'Tambahkan bilangan sesi' : 'Increase sessions'}
                onClick={() => onChangeSessions(Math.min(6, oneOnOneSessions + 1))}
                disabled={oneOnOneSessions === 6}
                className="w-8 h-8 rounded-md border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 disabled:opacity-40 cursor-pointer"
              >
                <Plus className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-4 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-600">
              <span>{copy.aiDiagLine}</span>
              <span className="font-mono font-semibold text-emerald-700">{copy.aiDiagFree}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-600">
              <span>{copy.hoursLine}</span>
              <span className="font-mono text-slate-900 tabular-nums">
                ± {oneOnOneSessions * 2} {lang === 'ms' ? 'jam' : 'hrs'}
              </span>
            </div>
            <div className="flex items-baseline justify-between pt-2 border-t border-slate-200">
              <span className="text-sm font-semibold text-slate-900">{copy.totalLabel}</span>
              <span className="font-mono text-2xl font-bold text-slate-900 tabular-nums">
                RM{additionalCost.toLocaleString('ms-MY')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
