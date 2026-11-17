export type Language = 'ms' | 'en';
export type ChallengeKey = 'strategic' | 'marketing' | 'financial' | 'talent';

export interface DiagnosticPillarScores {
  strategic: number;
  marketing: number;
  financial: number;
  talent: number;
}

export interface DiagnosticProfile {
  id: ChallengeKey;
  label: string;
  shortLabel: string;
  diagnosisSummary: string;
  recommendedModuleId: number;
  recommendedModuleTitle: string;
  urgencyLevel: string;
  defaultScores: DiagnosticPillarScores;
  actionPlan: {
    month: string;
    focus: string;
    deliverable: string;
  }[];
}

export interface GrowModule {
  id: number;
  code: string;
  title: string;
  localTitle: string;
  shortDesc: string;
  keyTopics: string[];
  expectedOutcome: string;
  coachingHours: string;
}

export interface TargetParticipant {
  category: string;
  description: string;
  focusArea: string;
}

export interface RiskFactorItem {
  factor: string;
  baselineRisk: number;
  postGrowReadiness: number;
  note: string;
}

export interface InfographicStage {
  step: string;
  title: string;
  metric: string;
  description: string;
}

export const UI_COPY: Record<
  Language,
  {
    brand: string;
    nav: {
      summary: string;
      challenges: string;
      diagnostic: string;
      modules: string;
      costs: string;
    };
    downloadPdf: string;
    printPdf: string;
    hero: {
      kicker: string;
      title: string;
      subtitle: string;
      ctaDiagnostic: string;
      ctaModules: string;
      architectureLabel: string;
      architectureTitle: string;
      tabGroup: string;
      tabOneOnOne: string;
      groupPeriodLabel: string;
      groupPeriodValue: string;
      groupPeriodDesc: string;
      groupBullets: [string, string];
      oneOnOneLabel: string;
      oneOnOneValue: string;
      oneOnOneDesc: string;
      oneOnOneBullets: [string, string];
      aiStatusLabel: string;
      aiStatusValue: string;
      heroImageAlt: string;
      heroImageCaption: string;
      metrics: { label: string; value: string; desc: string }[];
    };
    sec1: {
      tag: string;
      title: string;
      subtitle: string;
      bodyPrefix: string;
      bodyStrong1: string;
      bodyMid: string;
      bodyStrong2: string;
      bodySuffix: string;
      pillarsTitle: string;
      pillars: string[];
    };
    sec2: {
      tag: string;
      title: string;
      subtitle: string;
      body: string;
      statTitle: string;
      statBodyPrefix: string;
      statStrong: string;
      statBodySuffix: string;
      imageAlt: string;
      imageCaption: string;
      chartTitle: string;
      chartSubtitle: string;
      chartTabs: { comparison: string; baseline: string; afterGrow: string };
      riskLabel: string;
      readinessLabel: string;
    };
    sec3: {
      tag: string;
      title: string;
      subtitle: string;
      intro: string;
      cards: {
        tag: string;
        title: string;
        desc: string;
        footer: string;
      }[];
      infographicKicker: string;
      infographicTitle: string;
      infographicSubtitle: string;
      teamImageAlt: string;
      teamImageCaption: string;
    };
    diagnostic: {
      kicker: string;
      title: string;
      subtitle: string;
      reset: string;
      challengeLabel: string;
      selfEvalLabel: string;
      avgLabel: string;
      pillars: { key: keyof DiagnosticPillarScores; label: string; axis: string }[];
      runBtn: string;
      scanningBtn: string;
      scanningText: string;
      currentLegend: string;
      targetLegend: string;
      urgencyLabel: string;
      diagnosisHeading: string;
      recommendedHeading: string;
      jumpModuleBtn: string;
      actionPlanHeading: string;
      downloadTxtBtn: string;
      downloadPdfBtn: string;
      freeNote: string;
      downloadedTxtMsg: string;
    };
    sec4: {
      tag: string;
      title: string;
      subtitle: string;
      objectives: string[];
    };
    sec5: {
      tag: string;
      title: string;
      subtitle: string;
      metaRight: string;
      tableHeading: string;
      tableCols: [string, string, string];
      modulesHeading: string;
      selectedLabel: string;
      topicsHeading: string;
      outcomeLabel: string;
      scheduleLabel: string;
      format1Tag: string;
      format1Title: string;
      format1Desc: string;
      format2Tag: string;
      format2Title: string;
      format2Desc: string;
    };
    sec6: {
      tag: string;
      title: string;
      subtitle: string;
      rows: { title: string; desc: string; price: string }[];
      calcKicker: string;
      calcTitle: string;
      calcDesc: string;
      sessionsLabel: string;
      aiDiagLine: string;
      aiDiagFree: string;
      hoursLine: string;
      totalLabel: string;
    };
    sec7: {
      tag: string;
      title: string;
      subtitle: string;
      bodyPrefix: string;
      bodyStrong1: string;
      bodyMid: string;
      bodyStrong2: string;
      bodySuffix: string;
      recommendation: string;
      endorseTitle: string;
      statusApproved: string;
      statusPending: string;
      nameLabel: string;
      namePlaceholder: string;
      roleLabel: string;
      rolePlaceholder: string;
      notesLabel: string;
      notesPlaceholder: string;
      submitBtn: string;
      endorsedBadge: string;
      downloadPdfOfficial: string;
      editBtn: string;
    };
    footer: {
      title: string;
      copyright: string;
      backToTop: string;
    };
  }
> = {
  ms: {
    brand: 'Program GROW',
    nav: {
      summary: 'Ringkasan',
      challenges: 'Cabaran PKS',
      diagnostic: 'Diagnostik AI',
      modules: 'Struktur Modul',
      costs: 'Kos Program',
    },
    downloadPdf: 'Muat Turun PDF',
    printPdf: 'Cetak',
    hero: {
      kicker: 'Kertas Kerja Rasmi · Personalised Result-Driven Business Coaching · Edisi 2026',
      title: 'Kertas Kerja Program GROW & Sistem AI Business Diagnostic',
      subtitle:
        'Inisiatif kejurulatihan perniagaan strategik bersepadu selama 3 bulan bersama sistem diagnostik prestasi pintar percuma bagi memperkasa daya saing, aliran tunai, dan pertumbuhan mampan PKS.',
      ctaDiagnostic: 'Cuba Simulasi AI Diagnostik',
      ctaModules: 'Teroka 5 Modul Teras',
      architectureLabel: 'Senibina Program',
      architectureTitle: 'Mod Pelaksanaan Hibrid',
      tabGroup: 'Kumpulan',
      tabOneOnOne: 'One-on-One',
      groupPeriodLabel: 'Tempoh & Kekerapan',
      groupPeriodValue: '3 Bulan · 1 Hari / Bulan',
      groupPeriodDesc: 'Sesi penuh dari 9.00 pagi hingga 4.30 petang berfokuskan pelaksanaan praktikal.',
      groupBullets: [
        'Eksklusif terhad kepada 10 syarikat setiap sesi bagi memastikan kualiti bimbingan.',
        'Disertakan imbasan Sistem AI Business Performance Diagnostic secara percuma.',
      ],
      oneOnOneLabel: 'Kejurulatihan Tambahan Khusus',
      oneOnOneValue: 'RM530 · Anggaran 2 Jam / Sesi',
      oneOnOneDesc:
        'Bimbingan peribadi satu-dengan-satu yang disesuaikan dengan isu mendesak syarikat.',
      oneOnOneBullets: [
        'Penyelesaian isu khusus seperti pemulihan aliran tunai atau penstrukturan jualan.',
        'Dipandu terus oleh dapatan laporan diagnostik AI peserta.',
      ],
      aiStatusLabel: 'Status Sistem AI Diagnostic',
      aiStatusValue: 'PERCUMA UNTUK PESERTA',
      heroImageAlt: 'Sesi kejurulatihan perniagaan eksekutif bersama pengasas PKS di bilik mesyuarat',
      heroImageCaption: 'Sesi bimbingan berfokus hasil secara langsung bersama jurulatih perniagaan.',
      metrics: [
        {
          label: 'Risiko Pasaran PKS',
          value: '> 60%',
          desc: 'Gagal mampan akibat lemah aliran tunai & strategi',
        },
        {
          label: 'Kurikulum Bimbingan',
          value: '5 Modul',
          desc: 'Strategi, Pemasaran, Jualan, Kewangan & Bakat',
        },
        {
          label: 'Kohort Eksklusif',
          value: '10 Syarikat',
          desc: 'Sesi kelompok 3 bulan (1 hari penuh sebulan)',
        },
        {
          label: 'Imbasan Awal AI',
          value: 'RM0 / Percuma',
          desc: 'Laporan diagnostik penuh untuk peserta berdaftar',
        },
      ],
    },
    sec1: {
      tag: 'Seksyen 01',
      title: 'Ringkasan Eksekutif',
      subtitle: 'Teras Strategi Program GROW',
      bodyPrefix: 'Program ',
      bodyStrong1: 'GROW (Personalised Result-Driven Business Coaching)',
      bodyMid:
        ' adalah inisiatif bimbingan perniagaan berstruktur yang direka khusus untuk membantu usahawan mengatasi cabaran pengurusan perniagaan yang rumit. Berteraskan sesi bimbingan kelompok selama 3 bulan, pilihan bimbingan peribadi satu-dengan-satu, serta penambahan inovatif ',
      bodyStrong2: 'Sistem Business Performance Diagnostic janaan AI percuma',
      bodySuffix:
        ', program ini memfokuskan kepada penyelesaian teras dalam bidang perancangan strategik, pemasaran, jualan, kewangan, dan pengurusan bakat bagi melonjakkan prestasi syarikat ke tahap optimum.',
      pillarsTitle: '5 Bidang Tumpuan Utama',
      pillars: [
        'Perancangan Strategik',
        'Pemasaran & Penjenamaan',
        'Pengurusan Jualan',
        'Pengurusan Kewangan',
        'Pengurusan Bakat',
      ],
    },
    sec2: {
      tag: 'Seksyen 02',
      title: 'Pendahuluan dan Penyelesaian Masalah',
      subtitle: 'Konteks Industri & Statistik PKS',
      body: 'Perjalanan keusahawanan sering kali digambarkan sebagai satu proses yang sunyi dan penuh dengan cabaran persekitaran yang tidak menentu. Berdasarkan tinjauan dan data industri PKS, majoriti usahawan mikro dan Perusahaan Kecil dan Sederhana (PKS) berdepan dengan kadar kegagalan yang tinggi pada tahun-tahun awal operasi akibat kekurangan bimbingan strategik dan kelemahan mengesan punca masalah secara pantas.',
      statTitle: 'Statistik & Kajian Berkaitan',
      statBodyPrefix: 'Lebih ',
      statStrong: '60% PKS',
      statBodySuffix:
        ' gagal menembusi pasaran mampan kerana kelemahan dalam pengurusan aliran tunai, perancangan strategik jangka panjang, serta kelewatan mengesan isu dalaman syarikat. Penggabungan diagnostik pintar AI dan bimbingan mentor berpengalaman menjadi pemangkin utama pemulihan dan pertumbuhan syarikat.',
      imageAlt: 'Pelan perancangan strategik dan unjuran aliran tunai perniagaan PKS',
      imageCaption: 'Fig. 1 — Pemetaan aliran tunai dan pelan pertumbuhan strategik berasaskan data.',
      chartTitle: 'Analisis Faktor Risiko PKS & Kesan Intervensi GROW + AI',
      chartSubtitle:
        'Perbandingan tahap pendedahan risiko tanpa bimbingan berbanding kesiapsiagaan selepas program',
      chartTabs: {
        comparison: 'Perbandingan',
        baseline: 'Risiko Asal',
        afterGrow: 'Selepas GROW',
      },
      riskLabel: 'Risiko Tanpa Pelan',
      readinessLabel: 'Kesiapsiagaan GROW',
    },
    sec3: {
      tag: 'Seksyen 03',
      title: 'Penyelesaian Masalah & Integrasi AI',
      subtitle: 'Pendekatan Hibrid Berstruktur',
      intro:
        'Program GROW menggabungkan ketepatan pengimbasan data awal bersama bimbingan jurulatih secara langsung melalui tiga komponen teras yang saling melengkapi:',
      cards: [
        {
          tag: '01 · Diagnostik Pintar',
          title: 'AI Business Performance Diagnostic',
          desc: 'Sistem imbasan kesihatan perniagaan automatik yang diberikan secara percuma sebelum sesi bermula untuk memetakan punca kelemahan syarikat dengan pantas.',
          footer: 'Akses Percuma · Laporan Sebelum Sesi',
        },
        {
          tag: '02 · Kohort Terhad',
          title: 'Sesi Kumpulan 3 Bulan',
          desc: '1 hari sesi penuh setiap bulan selama 3 bulan berturut-turut, eksklusif untuk 10 syarikat setiap sesi.',
          footer: '9.00 pagi – 4.30 petang',
        },
        {
          tag: '03 · Bimbingan Khusus',
          title: '1-on-1 Customised Coaching',
          desc: 'Sesi peribadi khusus berserta pemantauan berstruktur daripada jurulatih berpengalaman bagi kes-kes spesifik.',
          footer: 'Purata 2 jam · RM530 / sesi',
        },
      ],
      infographicKicker: 'Infografik Aliran Ekosistem',
      infographicTitle: 'Peta Perjalanan Transformasi Perniagaan GROW',
      infographicSubtitle:
        'Daripada imbasan AI awal hingga pemantauan prestasi 90 hari bersama pasukan kepimpinan anda.',
      teamImageAlt: 'Pasukan kepimpinan PKS meneliti graf pertumbuhan prestasi di papan kaca pejabat',
      teamImageCaption: 'Penjajaran KPI pasukan dan semakan prestasi suku tahunan.',
    },
    diagnostic: {
      kicker: 'Alat Interaktif Disediakan Percuma · Simulasi AI',
      title: 'Sistem Business Performance Diagnostic',
      subtitle:
        'Pilih cabaran utama atau laraskan tahap prestasi semasa syarikat anda untuk melihat bagaimana enjin diagnostik AI mencadangkan fokus modul GROW dan pelan 90 hari.',
      reset: 'Set Semula',
      challengeLabel: 'Pilih Cabaran Utama Perniagaan Semasa',
      selfEvalLabel: 'Penilaian Kendiri 4 Teras (%)',
      avgLabel: 'Purata',
      pillars: [
        { key: 'strategic', label: 'Hala Tuju Strategik', axis: 'Strategi' },
        { key: 'marketing', label: 'Pemasaran & Jualan', axis: 'Jualan' },
        { key: 'financial', label: 'Kawalan Aliran Tunai', axis: 'Tunai' },
        { key: 'talent', label: 'Pengurusan Bakat', axis: 'Bakat' },
      ],
      runBtn: 'Jalankan Analisis Diagnostik AI',
      scanningBtn: 'Mengimbas Parameter Perniagaan...',
      scanningText: 'Sistem AI sedang mengimbas data prestasi dan memadankan modul GROW...',
      currentLegend: 'Semasa',
      targetLegend: 'Sasaran GROW (88%)',
      urgencyLabel: 'Tahap Keutamaan Intervensi',
      diagnosisHeading: 'Diagnosis AI',
      recommendedHeading: 'Modul GROW Disyorkan',
      jumpModuleBtn: 'Lihat silibus terperinci modul ini',
      actionPlanHeading: 'Unjuran Pelan Tindakan 90 Hari',
      downloadTxtBtn: 'Ringkasan (.txt)',
      downloadPdfBtn: 'Simpan PDF Penuh',
      freeNote: 'Laporan diagnostik penuh ini diberikan secara PERCUMA apabila menyertai program GROW.',
      downloadedTxtMsg: 'Ringkasan berjaya dimuat turun.',
    },
    sec4: {
      tag: 'Seksyen 04',
      title: 'Objektif Program',
      subtitle: '4 Matlamat Utama Pelaksanaan',
      objectives: [
        'Melaksanakan penilaian awal prestasi syarikat menggunakan Sistem Business Performance Diagnostic janaan AI secara percuma.',
        'Memberikan kefahaman mendalam dalam aspek Perancangan Strategik, Pemasaran & Penjenamaan, Jualan, Kewangan, serta Pengurusan Bakat.',
        'Memberikan peluang kepada usahawan mempraktikkan inisiatif baharu yang ditemui sepanjang sesi bimbingan.',
        'Meningkatkan prestasi keseluruhan perniagaan melalui pemantauan kemajuan secara berstruktur oleh jurulatih berpengalaman.',
      ],
    },
    sec5: {
      tag: 'Seksyen 05',
      title: 'Sasaran Peserta & Struktur Modul GROW',
      subtitle: 'Kurikulum & Demografi Sasaran',
      metaRight: '3 Kumpulan Sasaran · 5 Modul Teras · Sesi 3 Bulan',
      tableHeading: 'Kategori Sasaran Peserta',
      tableCols: ['Kategori Sasaran', 'Penerangan Peranan', 'Fokus Utama'],
      modulesHeading: '5 Modul Teras GROW Coaching (Klik untuk teroka silibus)',
      selectedLabel: 'Modul Dipilih',
      topicsHeading: 'Tumpuan Silibus & Latihan',
      outcomeLabel: 'Hasil Perniagaan Dijangka',
      scheduleLabel: 'Jadual Pelaksanaan',
      format1Tag: 'Format 01 · Bimbingan Berkumpulan',
      format1Title: 'Sesi Kejurulatihan Berkumpulan (3 Bulan)',
      format1Desc:
        '1 hari sesi setiap bulan (9.00 pagi – 4.30 petang) secara eksklusif untuk 10 syarikat setiap sesi bagi memastikan interaksi dan pemantauan berkesan.',
      format2Tag: 'Format 02 · Bimbingan Peribadi',
      format2Title: 'Sesi Tambahan / One-on-One Customised',
      format2Desc:
        'Bimbingan peribadi khusus berfokuskan penyelesaian masalah individu syarikat dengan anggaran purata 2 jam bagi setiap sesi.',
    },
    sec6: {
      tag: 'Seksyen 06',
      title: 'Kos Program & Anggaran Sesi Tambahan',
      subtitle: 'Struktur Pelaburan Telus',
      rows: [
        {
          title: 'Sistem Business Performance Diagnostic Janaan AI',
          desc: 'Imbasan awal kesihatan perniagaan & laporan cadangan modul untuk peserta berdaftar.',
          price: 'PERCUMA (RM0)',
        },
        {
          title: 'Kejurulatihan Berkumpulan (3 Bulan)',
          desc: '1 hari penuh sebulan (9.00 pagi – 4.30 petang), kohort terhad 10 syarikat setiap sesi.',
          price: 'Mengikut Pakej Program',
        },
        {
          title: 'Kejurulatihan Tambahan (One-on-One / Customised)',
          desc: 'Bimbingan peribadi khusus berfokuskan masalah kritikal syarikat (purata 2 jam / sesi).',
          price: 'RM530 / sesi',
        },
      ],
      calcKicker: 'Kalkulator Sesi One-on-One',
      calcTitle: 'Anggarkan Keperluan Bimbingan Peribadi',
      calcDesc:
        'Laraskan bilangan sesi tambahan One-on-One (anggaran 2 jam setiap sesi) untuk mengira jumlah pelaburan tambahan di luar pakej berkumpulan.',
      sessionsLabel: 'Bilangan Sesi One-on-One',
      aiDiagLine: 'Sistem AI Business Diagnostic',
      aiDiagFree: 'PERCUMA',
      hoursLine: 'Tempoh Jam Bimbingan Tambahan',
      totalLabel: 'Anggaran Kos Tambahan',
    },
    sec7: {
      tag: 'Seksyen 07',
      title: 'Kesimpulan & Syor Kelulusan',
      subtitle: 'Penutup Kertas Kerja',
      bodyPrefix: 'Program ',
      bodyStrong1: 'GROW',
      bodyMid: ' dengan integrasi ',
      bodyStrong2: 'Sistem Business Performance Diagnostic janaan AI (secara percuma)',
      bodySuffix:
        ' merupakan satu pendekatan inovatif yang menggabungkan kepantasan teknologi moden dan sentuhan kejurulatihan peribadi berkesan. Melalui inisiatif ini, usahawan dapat mengenalpasti masalah perniagaan dengan pantas serta dibimbing secara berstruktur untuk memastikan pertumbuhan syarikat yang mampan dan berdaya saing.',
      recommendation:
        'Syor Rasmi: Kertas kerja ini amat disyorkan untuk diluluskan bagi pelaksanaan kohort PKS serta organisasi usahawan tahun 2026.',
      endorseTitle: 'Rekod Semakan & Sokongan',
      statusApproved: 'DISOKONG',
      statusPending: 'MENUNGGU SEMAKAN',
      nameLabel: 'Nama Pengulas / Pelulus',
      namePlaceholder: "Contoh: Dato' Ahmad Razak",
      roleLabel: 'Jawatan / Organisasi',
      rolePlaceholder: 'Contoh: Pengarah Urusan / Jawatankuasa Program',
      notesLabel: 'Catatan Ringkas (Pilihan)',
      notesPlaceholder: 'Contoh: Disyorkan untuk kohort suku tahun hadapan.',
      submitBtn: 'Rekod Sokongan Kertas Kerja',
      endorsedBadge: 'Kertas Kerja Disokong Secara Digital',
      downloadPdfOfficial: 'Muat Turun PDF Rasmi',
      editBtn: 'Ubah',
    },
    footer: {
      title: 'Program GROW & AI Business Diagnostic',
      copyright: '© 2026 Hak Cipta Terpelihara. Direka khas untuk prestasi perniagaan berdaya saing.',
      backToTop: 'Kembali ke Atas',
    },
  },
  en: {
    brand: 'GROW Program',
    nav: {
      summary: 'Summary',
      challenges: 'SME Context',
      diagnostic: 'AI Diagnostic',
      modules: 'Modules',
      costs: 'Investment',
    },
    downloadPdf: 'Download PDF',
    printPdf: 'Print',
    hero: {
      kicker: 'Official Proposal · Personalised Result-Driven Business Coaching · 2026 Edition',
      title: 'GROW Program Proposal & AI Business Diagnostic System',
      subtitle:
        'An integrated 3-month strategic business coaching initiative paired with a complimentary AI-powered performance diagnostic system to elevate SME competitiveness, cashflow resilience, and sustainable growth.',
      ctaDiagnostic: 'Launch AI Diagnostic',
      ctaModules: 'Explore 5 Core Modules',
      architectureLabel: 'Program Architecture',
      architectureTitle: 'Hybrid Delivery Model',
      tabGroup: 'Group Cohort',
      tabOneOnOne: 'One-on-One',
      groupPeriodLabel: 'Duration & Cadence',
      groupPeriodValue: '3 Months · 1 Day / Month',
      groupPeriodDesc: 'Full-day sessions from 9:00 AM to 4:30 PM focused on practical execution.',
      groupBullets: [
        'Strictly capped at 10 companies per cohort to ensure dedicated coaching depth.',
        'Includes complimentary AI Business Performance Diagnostic assessment prior to start.',
      ],
      oneOnOneLabel: 'Customised Advisory Sessions',
      oneOnOneValue: 'RM530 · Avg. 2 Hours / Session',
      oneOnOneDesc:
        'Tailored one-on-one executive coaching dedicated to resolving urgent company bottlenecks.',
      oneOnOneBullets: [
        'Targeted interventions such as cashflow turnaround or sales pipeline restructuring.',
        'Directly guided by findings from the participant’s AI diagnostic report.',
      ],
      aiStatusLabel: 'AI Diagnostic System Access',
      aiStatusValue: 'COMPLIMENTARY FOR PARTICIPANTS',
      heroImageAlt: 'Executive business coaching workshop with SME founders inside a modern glass boardroom',
      heroImageCaption: 'Result-driven advisory sessions led by experienced business coaches.',
      metrics: [
        {
          label: 'SME Market Risk',
          value: '> 60%',
          desc: 'Fail to sustain due to weak cashflow & strategic gaps',
        },
        {
          label: 'Coaching Curriculum',
          value: '5 Modules',
          desc: 'Strategy, Marketing, Sales, Finance & Talent',
        },
        {
          label: 'Exclusive Cohort',
          value: '10 Companies',
          desc: '3-month group coaching (1 full day per month)',
        },
        {
          label: 'AI Pre-Assessment',
          value: 'RM0 / Free',
          desc: 'Full diagnostic report included for registered firms',
        },
      ],
    },
    sec1: {
      tag: 'Section 01',
      title: 'Executive Summary',
      subtitle: 'GROW Strategic Mandate',
      bodyPrefix: 'The ',
      bodyStrong1: 'GROW (Personalised Result-Driven Business Coaching)',
      bodyMid:
        ' program is a structured business advisory initiative engineered to help entrepreneurs overcome complex operational challenges. Built on a 3-month group coaching framework, optional customised one-on-one sessions, and an innovative ',
      bodyStrong2: 'complimentary AI-generated Business Performance Diagnostic System',
      bodySuffix:
        ', the program targets core pillars across strategic planning, marketing, sales, financial management, and talent leadership to propel company performance to optimal levels.',
      pillarsTitle: '5 Core Focus Pillars',
      pillars: [
        'Strategic Planning',
        'Marketing & Branding',
        'Sales Management',
        'Financial Management',
        'Talent Management',
      ],
    },
    sec2: {
      tag: 'Section 02',
      title: 'Introduction & Problem Statement',
      subtitle: 'Industry Context & SME Data',
      body: 'Entrepreneurship is frequently experienced as an isolated journey filled with market uncertainty. Industry surveys across micro-enterprises and Small and Medium Enterprises (SMEs) show elevated early-stage failure rates driven by the absence of strategic mentorship and delayed detection of internal operational leaks.',
      statTitle: 'Supporting Research & Statistics',
      statBodyPrefix: 'Over ',
      statStrong: '60% of SMEs',
      statBodySuffix:
        ' fail to establish sustainable market footing due to cashflow mismanagement, lack of long-term strategic planning, and late identification of internal bottlenecks. Combining AI-driven diagnostics with experienced coaching serves as a decisive catalyst for turnaround and growth.',
      imageAlt: 'Strategic planning blueprints and cashflow forecast charts on an executive desk',
      imageCaption: 'Fig. 1 — Data-backed cashflow mapping and multi-quarter growth planning.',
      chartTitle: 'SME Risk Factor Analysis & GROW + AI Impact',
      chartSubtitle:
        'Comparison of baseline exposure without advisory versus post-program operational readiness',
      chartTabs: {
        comparison: 'Comparison',
        baseline: 'Baseline Risk',
        afterGrow: 'Post-GROW',
      },
      riskLabel: 'Unassisted Risk',
      readinessLabel: 'GROW Readiness',
    },
    sec3: {
      tag: 'Section 03',
      title: 'Solution Framework & AI Integration',
      subtitle: 'Structured Hybrid Approach',
      intro:
        'The GROW Program unites rapid automated baseline diagnostics with hands-on executive coaching through three complementary pillars:',
      cards: [
        {
          tag: '01 · Smart Diagnostics',
          title: 'AI Business Performance Diagnostic',
          desc: 'Automated business health scan provided free of charge prior to cohort kickoff to pinpoint root weaknesses rapidly.',
          footer: 'Free Access · Pre-Session Report',
        },
        {
          tag: '02 · Curated Cohort',
          title: '3-Month Group Coaching',
          desc: '1 full-day workshop per month across 3 consecutive months, strictly limited to 10 companies per session.',
          footer: '9:00 AM – 4:30 PM',
        },
        {
          tag: '03 · Tailored Advisory',
          title: '1-on-1 Customised Coaching',
          desc: 'Dedicated private coaching with structured progress tracking from seasoned mentors for company-specific challenges.',
          footer: 'Avg. 2 hours · RM530 / session',
        },
      ],
      infographicKicker: 'Ecosystem Process Infographic',
      infographicTitle: 'GROW Business Transformation Roadmap',
      infographicSubtitle:
        'From complimentary AI diagnostic scanning to 90-day structured execution with your leadership team.',
      teamImageAlt: 'SME leadership team reviewing quarterly revenue and KPI growth on a glass whiteboard',
      teamImageCaption: 'Team KPI alignment and quarterly performance review.',
    },
    diagnostic: {
      kicker: 'Complimentary Interactive Tool · AI Simulation',
      title: 'Business Performance Diagnostic System',
      subtitle:
        'Select your primary business bottleneck or adjust the 4 performance sliders to see how the AI diagnostic engine recommends your priority GROW module and 90-day roadmap.',
      reset: 'Reset',
      challengeLabel: 'Select Current Primary Business Challenge',
      selfEvalLabel: '4-Pillar Self-Assessment (%)',
      avgLabel: 'Average',
      pillars: [
        { key: 'strategic', label: 'Strategic Direction', axis: 'Strategy' },
        { key: 'marketing', label: 'Marketing & Sales', axis: 'Sales' },
        { key: 'financial', label: 'Cashflow Control', axis: 'Cashflow' },
        { key: 'talent', label: 'Talent Management', axis: 'Talent' },
      ],
      runBtn: 'Run AI Diagnostic Analysis',
      scanningBtn: 'Scanning Business Parameters...',
      scanningText: 'AI engine is scanning performance parameters and matching GROW modules...',
      currentLegend: 'Current',
      targetLegend: 'GROW Target (88%)',
      urgencyLabel: 'Intervention Priority Level',
      diagnosisHeading: 'AI Diagnosis',
      recommendedHeading: 'Recommended GROW Module',
      jumpModuleBtn: 'Inspect detailed module syllabus',
      actionPlanHeading: 'Projected 90-Day Action Plan',
      downloadTxtBtn: 'Summary (.txt)',
      downloadPdfBtn: 'Save Full PDF',
      freeNote: 'Full diagnostic reports are provided FREE of charge upon enrolling in the GROW Program.',
      downloadedTxtMsg: 'Diagnostic summary downloaded.',
    },
    sec4: {
      tag: 'Section 04',
      title: 'Program Objectives',
      subtitle: '4 Core Delivery Outcomes',
      objectives: [
        'Execute an initial company performance baseline using the complimentary AI-generated Business Performance Diagnostic System.',
        'Build deep operational mastery across Strategic Planning, Marketing & Branding, Sales, Financial Management, and Talent Management.',
        'Provide entrepreneurs structured space to implement new growth initiatives uncovered during coaching sessions.',
        'Elevate overall enterprise performance through disciplined progress monitoring by experienced business coaches.',
      ],
    },
    sec5: {
      tag: 'Section 05',
      title: 'Target Participants & GROW Module Structure',
      subtitle: 'Curriculum & Target Audience',
      metaRight: '3 Target Groups · 5 Core Modules · 3-Month Format',
      tableHeading: 'Target Participant Categories',
      tableCols: ['Participant Category', 'Role Description', 'Primary Focus'],
      modulesHeading: '5 Core GROW Coaching Modules (Click to inspect syllabus)',
      selectedLabel: 'Selected Module',
      topicsHeading: 'Curriculum & Workshop Focus',
      outcomeLabel: 'Expected Business Outcome',
      scheduleLabel: 'Delivery Schedule',
      format1Tag: 'Format 01 · Group Coaching',
      format1Title: 'Group Coaching Sessions (3 Months)',
      format1Desc:
        '1 full-day session per month (9:00 AM – 4:30 PM) exclusively capped at 10 companies per cohort to maximize interaction and accountability.',
      format2Tag: 'Format 02 · Personalised Advisory',
      format2Title: 'Additional / One-on-One Customised Sessions',
      format2Desc:
        'Dedicated individual advisory focused on resolving specific company challenges with an average duration of 2 hours per session.',
    },
    sec6: {
      tag: 'Section 06',
      title: 'Program Investment & Add-On Estimator',
      subtitle: 'Transparent Fee Structure',
      rows: [
        {
          title: 'AI-Generated Business Performance Diagnostic System',
          desc: 'Initial business health scan & tailored module recommendation report for registered firms.',
          price: 'FREE (RM0)',
        },
        {
          title: 'Group Coaching Cohort (3 Months)',
          desc: '1 full day per month (9:00 AM – 4:30 PM), strictly capped at 10 companies per session.',
          price: 'Per Program Package',
        },
        {
          title: 'Additional Coaching (One-on-One / Customised)',
          desc: 'Private advisory focused on critical company priorities (avg. 2 hours / session).',
          price: 'RM530 / session',
        },
      ],
      calcKicker: 'One-on-One Session Estimator',
      calcTitle: 'Estimate Customised Advisory Needs',
      calcDesc:
        'Adjust the number of optional One-on-One sessions (approx. 2 hours each) to calculate estimated add-on investment beyond the core group package.',
      sessionsLabel: 'Number of One-on-One Sessions',
      aiDiagLine: 'AI Business Diagnostic System',
      aiDiagFree: 'FREE',
      hoursLine: 'Estimated Customised Advisory Hours',
      totalLabel: 'Estimated Add-On Cost',
    },
    sec7: {
      tag: 'Section 07',
      title: 'Conclusion & Approval Recommendation',
      subtitle: 'Proposal Sign-Off',
      bodyPrefix: 'The ',
      bodyStrong1: 'GROW Program',
      bodyMid: ' integrated with the ',
      bodyStrong2: 'complimentary AI-generated Business Performance Diagnostic System',
      bodySuffix:
        ' represents a high-leverage approach uniting modern diagnostic speed with effective human coaching. Through this initiative, business owners identify operational bottlenecks rapidly and receive structured guidance to secure sustainable, competitive enterprise growth.',
      recommendation:
        'Official Recommendation: This proposal is strongly recommended for approval for the 2026 SME and entrepreneurial association cohorts.',
      endorseTitle: 'Review & Endorsement Record',
      statusApproved: 'ENDORSED',
      statusPending: 'PENDING REVIEW',
      nameLabel: 'Reviewer / Approver Name',
      namePlaceholder: "e.g., Dato' Ahmad Razak",
      roleLabel: 'Title / Organization',
      rolePlaceholder: 'e.g., Managing Director / Program Committee',
      notesLabel: 'Review Notes (Optional)',
      notesPlaceholder: 'e.g., Approved for next quarter SME cohort.',
      submitBtn: 'Record Digital Endorsement',
      endorsedBadge: 'Proposal Digitally Endorsed',
      downloadPdfOfficial: 'Download Official PDF',
      editBtn: 'Edit',
    },
    footer: {
      title: 'GROW Program & AI Business Diagnostic',
      copyright: '© 2026 All Rights Reserved. Engineered for competitive business performance.',
      backToTop: 'Back to Top',
    },
  },
};

export const DIAGNOSTIC_PROFILES: Record<Language, Record<ChallengeKey, DiagnosticProfile>> = {
  ms: {
    strategic: {
      id: 'strategic',
      label: 'Kekaburan Hala Tuju & Perancangan Strategik',
      shortLabel: 'Hala Tuju & Strategi',
      diagnosisSummary:
        'Kesan kelemahan ketara pada hala tuju jangka panjang dan ketidakselarasan model perniagaan semasa berbanding sasaran pertumbuhan 12 bulan.',
      recommendedModuleId: 1,
      recommendedModuleTitle: 'Modul 1: Strategic Planning & Business Model',
      urgencyLevel: 'Tinggi',
      defaultScores: { strategic: 34, marketing: 58, financial: 52, talent: 60 },
      actionPlan: [
        {
          month: 'Bulan 1',
          focus: 'Audit Model Perniagaan & Nilai Teras',
          deliverable: 'Kanvas Model Perniagaan baharu dan penetapan KPI 90 hari.',
        },
        {
          month: 'Bulan 2',
          focus: 'Penjajaran Operasi & Pasaran Sasaran',
          deliverable: 'Pelan pengembangan segmen pelanggan bernilai tinggi.',
        },
        {
          month: 'Bulan 3',
          focus: 'Semakan Prestasi & Pelan 12 Bulan',
          deliverable: 'Dokumen hala tuju strategik suku tahunan berstruktur.',
        },
      ],
    },
    marketing: {
      id: 'marketing',
      label: 'Jualan Rendah & Masalah Pemasaran/Penjenamaan',
      shortLabel: 'Jualan & Pemasaran',
      diagnosisSummary:
        'Kadar penukaran pelanggan rendah dan kelemahan carian pasaran digital serta penjenamaan mengakibatkan kos pemerolehan pelanggan meningkat.',
      recommendedModuleId: 2,
      recommendedModuleTitle: 'Modul 2: Marketing & Branding + Modul 3: Sales Management',
      urgencyLevel: 'Tinggi',
      defaultScores: { strategic: 55, marketing: 30, financial: 48, talent: 62 },
      actionPlan: [
        {
          month: 'Bulan 1',
          focus: 'Penjenamaan Semula & Tawaran Nilai',
          deliverable: 'Mesej jenama konsisten dan penyusunan saluran perolehan prospek.',
        },
        {
          month: 'Bulan 2',
          focus: 'Corong Jualan & Skrip Penutupan',
          deliverable: 'SOP susulan jualan (follow-up) dan latihan teknik penutupan.',
        },
        {
          month: 'Bulan 3',
          focus: 'Pengoptimuman Kadar Penukaran',
          deliverable: 'Peningkatan kadar penukaran prospek serta nilai transaksi purata.',
        },
      ],
    },
    financial: {
      id: 'financial',
      label: 'Aliran Tunai & Pengurusan Kewangan Terjejas',
      shortLabel: 'Aliran Tunai & Kewangan',
      diagnosisSummary:
        'Kadar susut aliran tunai kritikal dan kelemahan kawalan margin keuntungan operasi memerlukan intervensi segera dalam kawalan kos.',
      recommendedModuleId: 4,
      recommendedModuleTitle: 'Modul 4: Financial Management + Sesi One-on-One Khas',
      urgencyLevel: 'Kritikal',
      defaultScores: { strategic: 50, marketing: 54, financial: 26, talent: 58 },
      actionPlan: [
        {
          month: 'Bulan 1',
          focus: 'Diagnosis Kebocoran Tunai & Margin',
          deliverable: 'Peta aliran tunai mingguan dan semakan struktur harga produk.',
        },
        {
          month: 'Bulan 2',
          focus: 'Kawalan Kos & Rizab Operasi (1-on-1)',
          deliverable: 'Sesi One-on-One penyusunan semula bajet dan pengurusan hutang.',
        },
        {
          month: 'Bulan 3',
          focus: 'Penstabilan Fiskal & Unjuran Untung',
          deliverable: 'Laporan pengurusan kewangan bulanan yang teratur dan telus.',
        },
      ],
    },
    talent: {
      id: 'talent',
      label: 'Kekurangan Staf Berkualiti & Pengurusan Bakat',
      shortLabel: 'Pengurusan Bakat',
      diagnosisSummary:
        'Cabaran pengekalan pekerja mahir dan kelemahan struktur pengurusan sumber manusia menyebabkan kebergantungan melampau kepada pemilik.',
      recommendedModuleId: 5,
      recommendedModuleTitle: 'Modul 5: Talent Management',
      urgencyLevel: 'Sederhana',
      defaultScores: { strategic: 56, marketing: 60, financial: 54, talent: 32 },
      actionPlan: [
        {
          month: 'Bulan 1',
          focus: 'Struktur Organisasi & Skop Tugas Jelas',
          deliverable: 'Carta fungsi teras dan KPI individu setiap kakitangan.',
        },
        {
          month: 'Bulan 2',
          focus: 'Sistem Pengambilan & Latihan Dalaman',
          deliverable: 'Templat saringan bakat dan pelan orientasi 30 hari staf baharu.',
        },
        {
          month: 'Bulan 3',
          focus: 'Budaya Prestasi & Pengekalan Bakat',
          deliverable: 'Skim insentif berasaskan prestasi dan semakan kemajuan pasukan.',
        },
      ],
    },
  },
  en: {
    strategic: {
      id: 'strategic',
      label: 'Unclear Direction & Strategic Planning Gaps',
      shortLabel: 'Direction & Strategy',
      diagnosisSummary:
        'Significant gaps detected in long-term strategic clarity and alignment between the current business model and 12-month growth targets.',
      recommendedModuleId: 1,
      recommendedModuleTitle: 'Module 1: Strategic Planning & Business Model',
      urgencyLevel: 'High',
      defaultScores: { strategic: 34, marketing: 58, financial: 52, talent: 60 },
      actionPlan: [
        {
          month: 'Month 1',
          focus: 'Business Model Audit & Core Value',
          deliverable: 'Updated Business Model Canvas and 90-day strategic KPIs.',
        },
        {
          month: 'Month 2',
          focus: 'Operations & Target Market Alignment',
          deliverable: 'Expansion plan targeting higher-margin customer segments.',
        },
        {
          month: 'Month 3',
          focus: 'Performance Review & 12-Month Roadmap',
          deliverable: 'Structured quarterly strategic execution blueprint.',
        },
      ],
    },
    marketing: {
      id: 'marketing',
      label: 'Low Sales & Marketing / Branding Challenges',
      shortLabel: 'Sales & Marketing',
      diagnosisSummary:
        'Low lead-to-customer conversion rates and weak digital market visibility/branding are driving up customer acquisition costs.',
      recommendedModuleId: 2,
      recommendedModuleTitle: 'Module 2: Marketing & Branding + Module 3: Sales Management',
      urgencyLevel: 'High',
      defaultScores: { strategic: 55, marketing: 30, financial: 48, talent: 62 },
      actionPlan: [
        {
          month: 'Month 1',
          focus: 'Brand Positioning & Value Offer',
          deliverable: 'Consistent brand messaging and structured lead acquisition channels.',
        },
        {
          month: 'Month 2',
          focus: 'Sales Funnel & Closing Playbook',
          deliverable: 'Sales follow-up SOPs and consultative closing training.',
        },
        {
          month: 'Month 3',
          focus: 'Conversion Rate Optimization',
          deliverable: 'Measurable lift in lead conversion and average deal size.',
        },
      ],
    },
    financial: {
      id: 'financial',
      label: 'Strained Cashflow & Financial Management',
      shortLabel: 'Cashflow & Finance',
      diagnosisSummary:
        'Critical cashflow compression and weak operating margin controls require immediate cost governance and pricing intervention.',
      recommendedModuleId: 4,
      recommendedModuleTitle: 'Module 4: Financial Management + Customised One-on-One',
      urgencyLevel: 'Critical',
      defaultScores: { strategic: 50, marketing: 54, financial: 26, talent: 58 },
      actionPlan: [
        {
          month: 'Month 1',
          focus: 'Cash Leakage & Margin Audit',
          deliverable: 'Weekly cashflow tracker and product pricing margin review.',
        },
        {
          month: 'Month 2',
          focus: 'Cost Control & Operating Reserve (1-on-1)',
          deliverable: 'One-on-One budget restructuring and receivables acceleration.',
        },
        {
          month: 'Month 3',
          focus: 'Fiscal Stability & Profit Forecasting',
          deliverable: 'Standardised monthly financial management dashboard.',
        },
      ],
    },
    talent: {
      id: 'talent',
      label: 'Talent Shortage & People Management Gaps',
      shortLabel: 'Talent Management',
      diagnosisSummary:
        'High skilled-staff turnover and informal HR structures are creating excessive operational dependency on the business founder.',
      recommendedModuleId: 5,
      recommendedModuleTitle: 'Module 5: Talent Management',
      urgencyLevel: 'Moderate',
      defaultScores: { strategic: 56, marketing: 60, financial: 54, talent: 32 },
      actionPlan: [
        {
          month: 'Month 1',
          focus: 'Org Structure & Role Clarity',
          deliverable: 'Core functional org chart and individual role KPIs.',
        },
        {
          month: 'Month 2',
          focus: 'Hiring System & Internal Onboarding',
          deliverable: 'Candidate screening scorecard and 30-day onboarding playbook.',
        },
        {
          month: 'Month 3',
          focus: 'Performance Culture & Retention',
          deliverable: 'Performance-linked incentive plan and team review cadence.',
        },
      ],
    },
  },
};

export const GROW_MODULES: Record<Language, GrowModule[]> = {
  ms: [
    {
      id: 1,
      code: 'M01',
      title: 'Strategic Planning & Business Model',
      localTitle: 'Perancangan Strategik & Model Perniagaan',
      shortDesc: 'Perancangan strategik komprehensif dan penyusunan model perniagaan mampan.',
      keyTopics: [
        'Penilaian semula visi, posisi pasaran, dan kelebihan daya saing PKS',
        'Penyusunan Kanvas Model Perniagaan dan aliran hasil mampan',
        'Penetapan objektif suku tahunan serta pelan tindakan berfasa',
      ],
      expectedOutcome: 'Hala tuju syarikat yang jelas dengan pelan pelaksanaan 90 hari yang boleh diukur.',
      coachingHours: 'Sesi Kumpulan Bulan 1 (9.00 pagi – 4.30 petang)',
    },
    {
      id: 2,
      code: 'M02',
      title: 'Marketing & Branding',
      localTitle: 'Pemasaran & Penjenamaan',
      shortDesc: 'Strategi pemasaran moden, penjenamaan efektif, dan penembusan pasaran.',
      keyTopics: [
        'Penajaman identiti jenama dan proposisi nilai pelanggan sasaran',
        'Strategi pemasaran digital kos efektif dan pengukuhan carian pasaran',
        'Pemetaan perjalanan pelanggan daripada kesedaran hingga pembelian',
      ],
      expectedOutcome: 'Peningkatan ketampakan jenama dan kualiti prospek masuk secara konsisten.',
      coachingHours: 'Sesi Kumpulan Bulan 1–2 (Bengkel Strategi Pasaran)',
    },
    {
      id: 3,
      code: 'M03',
      title: 'Sales Management',
      localTitle: 'Pengurusan Jualan',
      shortDesc: 'Pengurusan jualan terstruktur, teknik penutupan jualan, dan peningkatan hasil.',
      keyTopics: [
        'Pembinaan saluran jualan (sales pipeline) yang sistematik dan boleh dipantau',
        'Teknik pengendalian bantahan dan penutupan jualan berkesan',
        'Pengurusan sasaran pasukan jualan serta metrik penukaran harian',
      ],
      expectedOutcome: 'Struktur jualan berulang yang mengurangkan kebergantungan kepada jualan ad-hoc.',
      coachingHours: 'Sesi Kumpulan Bulan 2 (Simulasi & Semakan Saluran)',
    },
    {
      id: 4,
      code: 'M04',
      title: 'Financial Management',
      localTitle: 'Pengurusan Kewangan',
      shortDesc: 'Pengurusan aliran tunai, kawalan kewangan, dan kestabilan fiskal perniagaan.',
      keyTopics: [
        'Pengurusan aliran tunai mingguan dan pencegahan defisit modal pusingan',
        'Analisis margin keuntungan mengikut produk dan kawalan kos operasi',
        'Penyediaan unjuran kewangan bagi menyokong keputusan pengembangan',
      ],
      expectedOutcome: 'Keterlihatan penuh terhadap kesihatan tunai dan pengawalan kebocoran margin.',
      coachingHours: 'Sesi Kumpulan Bulan 2–3 + Pilihan One-on-One Khas',
    },
    {
      id: 5,
      code: 'M05',
      title: 'Talent Management',
      localTitle: 'Pengurusan Bakat',
      shortDesc: 'Pengurusan sumber manusia, pembangunan bakat, dan produktiviti pasukan.',
      keyTopics: [
        'Reka bentuk struktur peranan dan kejelasan tanggungjawab pasukan',
        'Proses pengambilan staf berkualiti serta program orientasi berkesan',
        'Penetapan KPI pasukan, maklum balas berkala, dan pengekalan bakat',
      ],
      expectedOutcome: 'Pasukan operasi yang berdikari, produktif, dan sejajar dengan sasaran syarikat.',
      coachingHours: 'Sesi Kumpulan Bulan 3 (9.00 pagi – 4.30 petang)',
    },
  ],
  en: [
    {
      id: 1,
      code: 'M01',
      title: 'Strategic Planning & Business Model',
      localTitle: 'Module 1 · Strategy & Business Architecture',
      shortDesc: 'Comprehensive strategic planning and resilient business model design.',
      keyTopics: [
        'Re-evaluating market positioning, vision, and SME competitive moats',
        'Structuring the Business Model Canvas and resilient revenue streams',
        'Setting measurable quarterly objectives and phased execution roadmaps',
      ],
      expectedOutcome: 'Unambiguous company direction backed by a measurable 90-day execution plan.',
      coachingHours: 'Group Session Month 1 (9:00 AM – 4:30 PM)',
    },
    {
      id: 2,
      code: 'M02',
      title: 'Marketing & Branding',
      localTitle: 'Module 2 · Market Penetration & Brand Equity',
      shortDesc: 'Modern marketing strategy, effective brand positioning, and market penetration.',
      keyTopics: [
        'Sharpening brand identity and target customer value propositions',
        'Cost-effective digital marketing and search discoverability',
        'Mapping the end-to-end customer journey from awareness to conversion',
      ],
      expectedOutcome: 'Higher brand visibility and consistent inbound qualified lead quality.',
      coachingHours: 'Group Session Months 1–2 (Market Strategy Lab)',
    },
    {
      id: 3,
      code: 'M03',
      title: 'Sales Management',
      localTitle: 'Module 3 · Revenue Engine & Closing',
      shortDesc: 'Structured sales pipeline management, closing mastery, and revenue growth.',
      keyTopics: [
        'Building a systematic, trackable sales pipeline with stage metrics',
        'Objection handling frameworks and effective consultative closing',
        'Managing sales team quotas and daily conversion disciplines',
      ],
      expectedOutcome: 'Repeatable sales architecture reducing reliance on ad-hoc founder selling.',
      coachingHours: 'Group Session Month 2 (Pipeline Review & Simulation)',
    },
    {
      id: 4,
      code: 'M04',
      title: 'Financial Management',
      localTitle: 'Module 4 · Cashflow & Fiscal Governance',
      shortDesc: 'Cashflow discipline, cost governance, and long-term business fiscal stability.',
      keyTopics: [
        'Weekly cashflow management and working-capital deficit prevention',
        'Product-level profit margin analysis and operating cost controls',
        'Financial forecasting to guide safe expansion and investment decisions',
      ],
      expectedOutcome: 'Full visibility over cash runway and elimination of silent margin leaks.',
      coachingHours: 'Group Session Months 2–3 + Optional One-on-One',
    },
    {
      id: 5,
      code: 'M05',
      title: 'Talent Management',
      localTitle: 'Module 5 · People, Culture & Productivity',
      shortDesc: 'Human capital systems, talent development, and high-output team alignment.',
      keyTopics: [
        'Designing clear organizational roles and departmental accountability',
        'Structured hiring pipelines and effective staff onboarding programs',
        'Team KPI alignment, feedback cadences, and key-talent retention',
      ],
      expectedOutcome: 'An autonomous, productive operational team aligned with company targets.',
      coachingHours: 'Group Session Month 3 (9:00 AM – 4:30 PM)',
    },
  ],
};

export const TARGET_PARTICIPANTS: Record<Language, TargetParticipant[]> = {
  ms: [
    {
      category: 'Pemilik Perniagaan',
      description: 'Pemilik tunggal, pemilik bersama (Joint Owner), pengurus, atau pentadbir syarikat.',
      focusArea: 'Hala tuju strategik, aliran tunai & pengembangan hasil',
    },
    {
      category: 'Pentadbir Profesional',
      description: 'Individu yang memegang portfolio pengurusan operasi dan pentadbiran organisasi korporat.',
      focusArea: 'Kecekapan operasi, pengurusan jualan & penyelarasan pasukan',
    },
    {
      category: 'Badan & Komuniti Usahawan',
      description: 'Ahli persatuan perniagaan, komuniti usahawan, pertubuhan bukan kerajaan (NGO), atau badan korporat yang menaungi usahawan.',
      focusArea: 'Pembangunan kapasiti ahli secara berkelompok & berimpak',
    },
  ],
  en: [
    {
      category: 'Business Owners',
      description: 'Sole proprietors, joint owners, managing partners, or company directors.',
      focusArea: 'Strategic direction, cashflow control & revenue scaling',
    },
    {
      category: 'Professional Managers',
      description: 'Executives holding operational management and corporate administration portfolios.',
      focusArea: 'Operational efficiency, sales governance & team alignment',
    },
    {
      category: 'Associations & Entrepreneurial Bodies',
      description: 'Members of business associations, SME chambers, NGOs, or corporate incubators supporting entrepreneurs.',
      focusArea: 'Structured cohort-wide capacity building and measurable outcomes',
    },
  ],
};

export const SME_RISK_FACTORS: Record<Language, RiskFactorItem[]> = {
  ms: [
    {
      factor: 'Kelemahan Pengurusan Aliran Tunai',
      baselineRisk: 68,
      postGrowReadiness: 88,
      note: 'Kawalan tunai dan margin dipantau setiap minggu melalui Modul 4.',
    },
    {
      factor: 'Kekaburan Perancangan Strategik',
      baselineRisk: 62,
      postGrowReadiness: 91,
      note: 'Pelan 90 hari dan model perniagaan dijajar semula di Modul 1.',
    },
    {
      factor: 'Kelewatan Mengesan Isu Dalaman',
      baselineRisk: 64,
      postGrowReadiness: 94,
      note: 'Sistem AI Diagnostic mengimbas punca masalah sebelum sesi bermula.',
    },
  ],
  en: [
    {
      factor: 'Cashflow Management Gaps',
      baselineRisk: 68,
      postGrowReadiness: 88,
      note: 'Weekly cash runway and margin controls monitored in Module 4.',
    },
    {
      factor: 'Unclear Strategic Planning',
      baselineRisk: 62,
      postGrowReadiness: 91,
      note: '90-day roadmap and business model realigned in Module 1.',
    },
    {
      factor: 'Delayed Internal Issue Detection',
      baselineRisk: 64,
      postGrowReadiness: 94,
      note: 'AI Diagnostic scans root bottlenecks prior to coaching kickoff.',
    },
  ],
};

export const INFOGRAPHIC_STAGES: Record<Language, InfographicStage[]> = {
  ms: [
    {
      step: '01',
      title: 'Imbasan AI Awal',
      metric: 'PERCUMA',
      description: 'Penilaian 4 teras perniagaan mengesan punca kelemahan sebelum sesi bermula.',
    },
    {
      step: '02',
      title: 'Pemadanan 5 Modul',
      metric: '5 Teras GROW',
      description: 'Fokus berpandukan data merangkumi Strategi, Pemasaran, Jualan, Kewangan & Bakat.',
    },
    {
      step: '03',
      title: 'Kejurulatihan Kumpulan',
      metric: '3 Bulan · 10 Firma',
      description: '1 hari penuh setiap bulan (9.00 pg – 4.30 ptg) bersama mentor berpengalaman.',
    },
    {
      step: '04',
      title: 'Intervensi One-on-One',
      metric: '± 2 Jam · RM530',
      description: 'Bimbingan peribadi khusus mempercepat pemulihan & lonjakan prestasi syarikat.',
    },
  ],
  en: [
    {
      step: '01',
      title: 'AI Pre-Scan',
      metric: 'FREE (RM0)',
      description: '4-pillar diagnostic detects root bottlenecks prior to cohort kickoff.',
    },
    {
      step: '02',
      title: '5-Module Alignment',
      metric: '5 GROW Pillars',
      description: 'Data-guided focus across Strategy, Marketing, Sales, Finance & Talent.',
    },
    {
      step: '03',
      title: 'Group Coaching Cohort',
      metric: '3 Months · 10 Firms',
      description: '1 full day per month (9:00 AM – 4:30 PM) led by senior business coaches.',
    },
    {
      step: '04',
      title: 'One-on-One Precision',
      metric: '± 2 Hrs · RM530',
      description: 'Customised private intervention accelerating turnaround and measurable ROI.',
    },
  ],
};
