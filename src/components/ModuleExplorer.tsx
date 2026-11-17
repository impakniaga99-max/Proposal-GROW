import { Check, Clock } from 'lucide-react';
import { GROW_MODULES, Language, TARGET_PARTICIPANTS, UI_COPY } from '../data/proposalData';

interface ModuleExplorerProps {
  lang: Language;
  selectedModuleId: number;
  onSelectModule: (id: number) => void;
}

export function ModuleExplorer({ lang, selectedModuleId, onSelectModule }: ModuleExplorerProps) {
  const copy = UI_COPY[lang].sec5;
  const modules = GROW_MODULES[lang];
  const participants = TARGET_PARTICIPANTS[lang];
  const activeModule = modules.find((m) => m.id === selectedModuleId) ?? modules[0];

  return (
    <section
      id="struktur-modul"
      className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 space-y-10"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-5">
        <div className="space-y-1">
          <p className="font-mono text-xs font-medium text-sky-700">{copy.tag}</p>
          <h2 className="font-display text-2xl font-semibold text-slate-900">{copy.title}</h2>
        </div>
        <p className="text-xs text-slate-500">{copy.metaRight}</p>
      </div>

      {/* Target Audience Table */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-slate-900">{copy.tableHeading}</h3>
        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50 text-slate-900 border-b border-slate-200">
                <th className="py-3.5 px-4 font-semibold">{copy.tableCols[0]}</th>
                <th className="py-3.5 px-4 font-semibold">{copy.tableCols[1]}</th>
                <th className="py-3.5 px-4 font-semibold hidden md:table-cell">
                  {copy.tableCols[2]}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-600">
              {participants.map((row) => (
                <tr key={row.category} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-900 align-top">
                    {row.category}
                  </td>
                  <td className="py-3.5 px-4 leading-relaxed align-top">{row.description}</td>
                  <td className="py-3.5 px-4 text-slate-600 hidden md:table-cell align-top">
                    {row.focusArea}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive 5 Core Modules */}
      <div className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="text-sm font-semibold text-slate-900">{copy.modulesHeading}</h3>
          <span className="font-mono text-xs text-slate-500 tabular-nums">
            {copy.selectedLabel}: 0{activeModule.id} / 05
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Module List */}
          <div className="lg:col-span-5 space-y-2" role="tablist" aria-label={copy.modulesHeading}>
            {modules.map((mod) => {
              const isSelected = mod.id === activeModule.id;
              return (
                <button
                  key={mod.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => onSelectModule(mod.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-colors cursor-pointer flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-slate-50 text-slate-900 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span
                    className={`font-mono text-xs font-semibold px-2 py-1 rounded-md shrink-0 tabular-nums ${
                      isSelected
                        ? 'bg-sky-700 text-white'
                        : 'bg-white text-slate-700 border border-slate-200'
                    }`}
                  >
                    {mod.code}
                  </span>
                  <div className="space-y-0.5 min-w-0">
                    <p className="text-sm font-semibold leading-snug">{mod.title}</p>
                    <p className={`text-xs ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      {mod.localTitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Module Detail Panel */}
          <div
            role="tabpanel"
            className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6"
          >
            <div className="space-y-2 border-b border-slate-200 pb-5">
              <div className="flex items-center justify-between gap-2 text-xs text-sky-800 font-medium">
                <span>{activeModule.localTitle}</span>
                <span className="font-mono font-semibold tabular-nums">{activeModule.code}</span>
              </div>
              <h4 className="font-display text-xl sm:text-2xl font-semibold text-slate-900">
                {activeModule.title}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">{activeModule.shortDesc}</p>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold text-slate-900">{copy.topicsHeading}</p>
              <ul className="space-y-2.5">
                {activeModule.keyTopics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-sky-700 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <div className="space-y-1">
                <p className="text-xs font-medium text-slate-500">{copy.outcomeLabel}</p>
                <p className="text-sm font-medium text-slate-900 leading-relaxed">
                  {activeModule.expectedOutcome}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-slate-500">{copy.scheduleLabel}</p>
                <p className="text-sm font-medium text-slate-900 inline-flex items-start gap-1.5">
                  <Clock className="w-4 h-4 text-sky-700 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{activeModule.coachingHours}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Format Pelaksanaan Summary Strip */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1.5">
          <p className="text-xs font-semibold text-sky-800">{copy.format1Tag}</p>
          <p className="text-sm font-semibold text-slate-900">{copy.format1Title}</p>
          <p className="text-sm text-slate-600 leading-relaxed">{copy.format1Desc}</p>
        </div>

        <div className="space-y-1.5 md:border-l md:border-slate-200 md:pl-6">
          <p className="text-xs font-semibold text-sky-800">{copy.format2Tag}</p>
          <p className="text-sm font-semibold text-slate-900">{copy.format2Title}</p>
          <p className="text-sm text-slate-600 leading-relaxed">{copy.format2Desc}</p>
        </div>
      </div>
    </section>
  );
}
