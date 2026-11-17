import { Check, CheckCircle2, FileCheck2, FileDown, FileSpreadsheet } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { CostCalculator } from './components/CostCalculator';
import { DiagnosticSimulator } from './components/DiagnosticSimulator';
import { EcosystemInfographic } from './components/EcosystemInfographic';
import { HeroSection } from './components/HeroSection';
import { ModuleExplorer } from './components/ModuleExplorer';
import { SmeRiskChart } from './components/SmeRiskChart';
import { TopBar } from './components/TopBar';
import {
  ChallengeKey,
  DIAGNOSTIC_PROFILES,
  DiagnosticPillarScores,
  Language,
  UI_COPY,
} from './data/proposalData';
import { generateProposalPdf } from './utils/generateProposalPdf';

export default function App() {
  const [lang, setLang] = useState<Language>('ms');
  const [challenge, setChallenge] = useState<ChallengeKey>('strategic');
  const [scores, setScores] = useState<DiagnosticPillarScores>(
    DIAGNOSTIC_PROFILES.ms.strategic.defaultScores
  );
  const [selectedModuleId, setSelectedModuleId] = useState<number>(1);
  const [oneOnOneSessions, setOneOnOneSessions] = useState<number>(1);

  const [reviewerName, setReviewerName] = useState('');
  const [reviewerRole, setReviewerRole] = useState('');
  const [reviewerNotes, setReviewerNotes] = useState('');
  const [endorsementStatus, setEndorsementStatus] = useState<'pending' | 'approved'>('pending');
  const [sec2ImgError, setSec2ImgError] = useState(false);

  const copy = UI_COPY[lang];
  const profiles = DIAGNOSTIC_PROFILES[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const overallScore = useMemo(() => {
    const sum = scores.strategic + scores.marketing + scores.financial + scores.talent;
    return Math.round(sum / 4);
  }, [scores]);

  const lowestPillar = useMemo(() => {
    const entries = Object.entries(scores) as [keyof DiagnosticPillarScores, number][];
    entries.sort((a, b) => a[1] - b[1]);
    return entries[0][0];
  }, [scores]);

  const effectiveProfile = profiles[lowestPillar] ?? profiles[challenge];

  const handleChallengeChange = (nextChallenge: ChallengeKey) => {
    setChallenge(nextChallenge);
    setScores(profiles[nextChallenge].defaultScores);
  };

  const handleSliderChange = (key: keyof DiagnosticPillarScores, value: number) => {
    setScores((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetDiagnostic = () => {
    setChallenge('strategic');
    setScores(profiles.strategic.defaultScores);
  };

  const handleJumpToDiagnostic = () => {
    const el = document.getElementById('diagnostic-tool');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSelectRecommendedModule = (moduleId: number) => {
    setSelectedModuleId(moduleId);
    const el = document.getElementById('struktur-modul');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleEndorse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewerName.trim()) {
      return;
    }
    setEndorsementStatus('approved');
  };

  const handleDownloadPdf = () => {
    generateProposalPdf({
      lang,
      selectedChallengeLabel: profiles[challenge].label,
      scores,
      overallScore,
      effectiveProfile,
      oneOnOneSessions,
      reviewerName,
      reviewerRole,
      reviewerNotes,
      endorsementStatus,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900">
      <TopBar lang={lang} onDownloadPdf={handleDownloadPdf} />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-10 sm:space-y-14">
        <HeroSection
          lang={lang}
          onChangeLang={setLang}
          onJumpToDiagnostic={handleJumpToDiagnostic}
        />

        {/* Seksyen 01: Ringkasan Eksekutif */}
        <section
          id="ringkasan"
          className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-5">
            <div className="space-y-1">
              <p className="font-mono text-xs font-medium text-sky-700">{copy.sec1.tag}</p>
              <h2 className="font-display text-2xl font-semibold text-slate-900">
                {copy.sec1.title}
              </h2>
            </div>
            <p className="text-xs text-slate-500">{copy.sec1.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <p className="text-slate-700 text-base leading-[1.8] max-w-prose">
                {copy.sec1.bodyPrefix}
                <strong className="font-semibold text-slate-900">{copy.sec1.bodyStrong1}</strong>
                {copy.sec1.bodyMid}
                <strong className="font-semibold text-slate-900">{copy.sec1.bodyStrong2}</strong>
                {copy.sec1.bodySuffix}
              </p>
            </div>

            <aside className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
              <p className="text-xs font-semibold text-slate-900">{copy.sec1.pillarsTitle}</p>
              <ol className="space-y-2 text-sm text-slate-700 divide-y divide-slate-200">
                {copy.sec1.pillars.map((pillar, idx) => (
                  <li key={pillar} className="pt-2 first:pt-1 flex items-center justify-between">
                    <span>{pillar}</span>
                    <span className="font-mono text-xs text-slate-500">0{idx + 1}</span>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </section>

        {/* Seksyen 02: Pendahuluan & Permasalahan */}
        <section
          id="cabaran"
          className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 space-y-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-5">
            <div className="space-y-1">
              <p className="font-mono text-xs font-medium text-sky-700">{copy.sec2.tag}</p>
              <h2 className="font-display text-2xl font-semibold text-slate-900">
                {copy.sec2.title}
              </h2>
            </div>
            <p className="text-xs text-slate-500">{copy.sec2.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-slate-700 text-base leading-[1.8]">{copy.sec2.body}</p>

              {/* Editorial Strategy & Cashflow Photo */}
              <figure className="space-y-2">
                <div className="rounded-xl overflow-hidden border border-slate-200 aspect-[16/9] bg-slate-100">
                  {!sec2ImgError ? (
                    <img
                      src="/src/assets/images/sme_strategy_analysis_1794887385964.jpg"
                      alt={copy.sec2.imageAlt}
                      referrerPolicy="no-referrer"
                      onError={() => setSec2ImgError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-100 via-sky-50 to-slate-200 flex flex-col items-center justify-center p-6 text-center space-y-2">
                      <FileSpreadsheet className="w-8 h-8 text-sky-700" aria-hidden="true" />
                      <p className="text-xs font-medium text-slate-600">{copy.sec2.imageCaption}</p>
                    </div>
                  )}
                </div>
                <figcaption className="text-xs text-slate-500 italic">
                  {copy.sec2.imageCaption}
                </figcaption>
              </figure>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <SmeRiskChart lang={lang} />

              <div className="bg-sky-50/60 border border-sky-200 rounded-xl p-5 space-y-2">
                <p className="text-xs font-semibold text-sky-900">{copy.sec2.statTitle}</p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {copy.sec2.statBodyPrefix}
                  <strong className="font-semibold text-slate-900">{copy.sec2.statStrong}</strong>
                  {copy.sec2.statBodySuffix}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seksyen 03: Penyelesaian Masalah, Integrasi AI & Infografik */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-5">
            <div className="space-y-1">
              <p className="font-mono text-xs font-medium text-sky-700">{copy.sec3.tag}</p>
              <h2 className="font-display text-2xl font-semibold text-slate-900">
                {copy.sec3.title}
              </h2>
            </div>
            <p className="text-xs text-slate-500">{copy.sec3.subtitle}</p>
          </div>

          <p className="text-slate-700 text-base leading-relaxed max-w-prose">
            {copy.sec3.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-5 bg-slate-900 text-white rounded-xl p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="font-mono text-xs text-sky-300">{copy.sec3.cards[0].tag}</span>
                <h3 className="text-lg font-semibold">{copy.sec3.cards[0].title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {copy.sec3.cards[0].desc}
                </p>
              </div>
              <p className="font-mono text-xs text-emerald-400 pt-3 border-t border-slate-800">
                {copy.sec3.cards[0].footer}
              </p>
            </div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="font-mono text-xs text-sky-700">{copy.sec3.cards[1].tag}</span>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {copy.sec3.cards[1].title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {copy.sec3.cards[1].desc}
                  </p>
                </div>
                <p className="font-mono text-xs text-slate-500 pt-3 border-t border-slate-200 tabular-nums">
                  {copy.sec3.cards[1].footer}
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="font-mono text-xs text-sky-700">{copy.sec3.cards[2].tag}</span>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {copy.sec3.cards[2].title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {copy.sec3.cards[2].desc}
                  </p>
                </div>
                <p className="font-mono text-xs text-slate-500 pt-3 border-t border-slate-200 tabular-nums">
                  {copy.sec3.cards[2].footer}
                </p>
              </div>
            </div>
          </div>

          <EcosystemInfographic lang={lang} />
        </section>

        {/* Interactive AI Diagnostic Simulator */}
        <DiagnosticSimulator
          lang={lang}
          challenge={challenge}
          scores={scores}
          overallScore={overallScore}
          effectiveProfile={effectiveProfile}
          onChallengeChange={handleChallengeChange}
          onSliderChange={handleSliderChange}
          onReset={handleResetDiagnostic}
          onSelectRecommendedModule={handleSelectRecommendedModule}
          onDownloadPdf={handleDownloadPdf}
        />

        {/* Seksyen 04: Objektif Program */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-5">
            <div className="space-y-1">
              <p className="font-mono text-xs font-medium text-sky-700">{copy.sec4.tag}</p>
              <h2 className="font-display text-2xl font-semibold text-slate-900">
                {copy.sec4.title}
              </h2>
            </div>
            <p className="text-xs text-slate-500">{copy.sec4.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {copy.sec4.objectives.map((objective, idx) => (
              <div
                key={objective}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-start gap-4"
              >
                <span className="font-mono text-xs font-semibold text-sky-800 bg-white border border-slate-200 rounded-md px-2.5 py-1 shrink-0 tabular-nums">
                  0{idx + 1}
                </span>
                <div className="space-y-1">
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seksyen 05: Sasaran Peserta & Struktur Modul */}
        <ModuleExplorer
          lang={lang}
          selectedModuleId={selectedModuleId}
          onSelectModule={setSelectedModuleId}
        />

        {/* Seksyen 06: Kos Program */}
        <CostCalculator
          lang={lang}
          oneOnOneSessions={oneOnOneSessions}
          onChangeSessions={setOneOnOneSessions}
        />

        {/* Seksyen 07: Kesimpulan, Penutup & Pengesahan */}
        <section
          id="kesimpulan"
          className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 space-y-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-5">
            <div className="space-y-1">
              <p className="font-mono text-xs font-medium text-sky-700">{copy.sec7.tag}</p>
              <h2 className="font-display text-2xl font-semibold text-slate-900">
                {copy.sec7.title}
              </h2>
            </div>
            <p className="text-xs text-slate-500">{copy.sec7.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5">
              <p className="text-slate-700 text-base leading-[1.8]">
                {copy.sec7.bodyPrefix}
                <strong className="font-semibold text-slate-900">{copy.sec7.bodyStrong1}</strong>
                {copy.sec7.bodyMid}
                <strong className="font-semibold text-slate-900">{copy.sec7.bodyStrong2}</strong>
                {copy.sec7.bodySuffix}
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-start gap-3">
                <CheckCircle2
                  className="w-5 h-5 text-emerald-700 mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <p className="text-sm font-medium text-slate-900 leading-relaxed">
                  {copy.sec7.recommendation}
                </p>
              </div>
            </div>

            {/* Interactive Proposal Endorsement & jsPDF Download Card */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-5">
              <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-sky-700" aria-hidden="true" />
                  <h3 className="text-sm font-semibold text-slate-900">{copy.sec7.endorseTitle}</h3>
                </div>
                <span
                  className={`font-mono text-xs font-semibold ${
                    endorsementStatus === 'approved' ? 'text-emerald-700' : 'text-slate-500'
                  }`}
                >
                  {endorsementStatus === 'approved'
                    ? copy.sec7.statusApproved
                    : copy.sec7.statusPending}
                </span>
              </div>

              {endorsementStatus === 'pending' ? (
                <form onSubmit={handleEndorse} className="space-y-3.5">
                  <div className="space-y-1">
                    <label
                      htmlFor="reviewer-name"
                      className="block text-xs font-medium text-slate-700"
                    >
                      {copy.sec7.nameLabel}
                    </label>
                    <input
                      id="reviewer-name"
                      type="text"
                      required
                      value={reviewerName}
                      onChange={(e) => setReviewerName(e.target.value)}
                      placeholder={copy.sec7.namePlaceholder}
                      className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2 text-sm text-slate-900 focus:ring-2 focus:ring-sky-600 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="reviewer-role"
                      className="block text-xs font-medium text-slate-700"
                    >
                      {copy.sec7.roleLabel}
                    </label>
                    <input
                      id="reviewer-role"
                      type="text"
                      value={reviewerRole}
                      onChange={(e) => setReviewerRole(e.target.value)}
                      placeholder={copy.sec7.rolePlaceholder}
                      className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2 text-sm text-slate-900 focus:ring-2 focus:ring-sky-600 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="reviewer-notes"
                      className="block text-xs font-medium text-slate-700"
                    >
                      {copy.sec7.notesLabel}
                    </label>
                    <input
                      id="reviewer-notes"
                      type="text"
                      value={reviewerNotes}
                      onChange={(e) => setReviewerNotes(e.target.value)}
                      placeholder={copy.sec7.notesPlaceholder}
                      className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2 text-sm text-slate-900 focus:ring-2 focus:ring-sky-600 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                    <button
                      type="submit"
                      className="flex-1 bg-slate-900 hover:bg-sky-800 text-white text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors cursor-pointer print-hidden"
                    >
                      {copy.sec7.submitBtn}
                    </button>
                    <button
                      type="button"
                      onClick={handleDownloadPdf}
                      className="inline-flex items-center justify-center gap-1.5 bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors cursor-pointer print-hidden"
                    >
                      <FileDown className="w-4 h-4" aria-hidden="true" />
                      <span>{copy.downloadPdf}</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="bg-white border border-emerald-200 rounded-lg p-4 space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold">
                      <Check className="w-4 h-4" aria-hidden="true" />
                      <span>{copy.sec7.endorsedBadge}</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-900">{reviewerName}</p>
                    {reviewerRole && <p className="text-xs text-slate-600">{reviewerRole}</p>}
                    {reviewerNotes && (
                      <p className="text-xs text-slate-500 pt-1 border-t border-slate-100">
                        {reviewerNotes}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-3 print-hidden">
                    <button
                      type="button"
                      onClick={handleDownloadPdf}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold py-2.5 px-3 rounded-lg transition-colors cursor-pointer"
                    >
                      <FileDown className="w-4 h-4" aria-hidden="true" />
                      <span>{copy.sec7.downloadPdfOfficial}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setEndorsementStatus('pending')}
                      className="px-3 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-lg cursor-pointer"
                    >
                      {copy.sec7.editBtn}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Quiet Institutional Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-semibold text-slate-200">{copy.footer.title}</p>
            <p>{copy.footer.copyright}</p>
          </div>
          <a
            href="#top"
            className="text-slate-300 hover:text-white underline underline-offset-4 transition-colors print-hidden"
          >
            {copy.footer.backToTop}
          </a>
        </div>
      </footer>
    </div>
  );
}
