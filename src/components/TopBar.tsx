import { FileDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Language, UI_COPY } from '../data/proposalData';

interface TopBarProps {
  lang: Language;
  onDownloadPdf: () => void;
}

export function TopBar({ lang, onDownloadPdf }: TopBarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const copy = UI_COPY[lang];

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setScrollProgress(0);
        return;
      }
      const progress = Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100));
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 print-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700 rounded-sm"
        >
          {copy.brand}
        </a>

        <nav
          aria-label={lang === 'ms' ? 'Navigasi Utama Proposal' : 'Primary Proposal Navigation'}
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
        >
          <a
            href="#ringkasan"
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {copy.nav.summary}
          </a>
          <a
            href="#cabaran"
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {copy.nav.challenges}
          </a>
          <a
            href="#diagnostic-tool"
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {copy.nav.diagnostic}
          </a>
          <a
            href="#struktur-modul"
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {copy.nav.modules}
          </a>
          <a
            href="#kos-program"
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {copy.nav.costs}
          </a>
        </nav>

        <div className="shrink-0">
          <button
            type="button"
            onClick={onDownloadPdf}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-sky-800 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
          >
            <FileDown className="w-4 h-4" aria-hidden="true" />
            <span>{copy.downloadPdf}</span>
          </button>
        </div>
      </div>

      <div className="h-[2px] w-full bg-slate-100" aria-hidden="true">
        <div
          className="h-full bg-sky-700 transition-transform duration-150 ease-out origin-left"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />
      </div>
    </header>
  );
}
