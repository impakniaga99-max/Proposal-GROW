import { useState } from 'react';
import { Language, SME_RISK_FACTORS, UI_COPY } from '../data/proposalData';

interface SmeRiskChartProps {
  lang: Language;
}

export function SmeRiskChart({ lang }: SmeRiskChartProps) {
  const [viewMode, setViewMode] = useState<'comparison' | 'baseline' | 'afterGrow'>('comparison');
  const copy = UI_COPY[lang].sec2;
  const factors = SME_RISK_FACTORS[lang];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">{copy.chartTitle}</h3>
          <p className="text-xs text-slate-500 mt-0.5">{copy.chartSubtitle}</p>
        </div>

        <div
          className="inline-flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-lg self-start print-hidden"
          role="tablist"
          aria-label={copy.chartTitle}
        >
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'comparison'}
            onClick={() => setViewMode('comparison')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              viewMode === 'comparison'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {copy.chartTabs.comparison}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'baseline'}
            onClick={() => setViewMode('baseline')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              viewMode === 'baseline'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {copy.chartTabs.baseline}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'afterGrow'}
            onClick={() => setViewMode('afterGrow')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              viewMode === 'afterGrow'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {copy.chartTabs.afterGrow}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {factors.map((item) => (
          <div key={item.factor} className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <span className="text-sm font-medium text-slate-900">{item.factor}</span>
              <span className="text-xs text-slate-500">{item.note}</span>
            </div>

            <div className="space-y-1.5">
              {(viewMode === 'comparison' || viewMode === 'baseline') && (
                <div className="flex items-center gap-3">
                  <span className="w-32 text-xs text-slate-600 shrink-0">{copy.riskLabel}</span>
                  <div className="flex-1 h-2.5 bg-slate-200 rounded-sm overflow-hidden">
                    <div
                      className="h-full bg-amber-600 rounded-sm transition-all duration-300"
                      style={{ width: `${item.baselineRisk}%` }}
                    />
                  </div>
                  <span className="w-12 text-right font-mono text-xs font-semibold text-amber-800 tabular-nums">
                    {item.baselineRisk}%
                  </span>
                </div>
              )}

              {(viewMode === 'comparison' || viewMode === 'afterGrow') && (
                <div className="flex items-center gap-3">
                  <span className="w-32 text-xs text-slate-600 shrink-0">
                    {copy.readinessLabel}
                  </span>
                  <div className="flex-1 h-2.5 bg-slate-200 rounded-sm overflow-hidden">
                    <div
                      className="h-full bg-sky-700 rounded-sm transition-all duration-300"
                      style={{ width: `${item.postGrowReadiness}%` }}
                    />
                  </div>
                  <span className="w-12 text-right font-mono text-xs font-semibold text-sky-800 tabular-nums">
                    {item.postGrowReadiness}%
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
