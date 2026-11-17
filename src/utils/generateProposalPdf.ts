import { jsPDF } from 'jspdf';
import {
  DiagnosticPillarScores,
  DiagnosticProfile,
  GROW_MODULES,
  Language,
  TARGET_PARTICIPANTS,
  UI_COPY,
} from '../data/proposalData';

export interface PdfExportPayload {
  lang: Language;
  selectedChallengeLabel: string;
  scores: DiagnosticPillarScores;
  overallScore: number;
  effectiveProfile: DiagnosticProfile;
  oneOnOneSessions: number;
  reviewerName: string;
  reviewerRole: string;
  reviewerNotes: string;
  endorsementStatus: 'pending' | 'approved';
}

export function generateProposalPdf(payload: PdfExportPayload): void {
  const {
    lang,
    selectedChallengeLabel,
    scores,
    overallScore,
    effectiveProfile,
    oneOnOneSessions,
    reviewerName,
    reviewerRole,
    reviewerNotes,
    endorsementStatus,
  } = payload;

  const copy = UI_COPY[lang];
  const modules = GROW_MODULES[lang];
  const participants = TARGET_PARTICIPANTS[lang];

  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;
  let y = 0;

  const ensureSpace = (neededMm: number) => {
    if (y + neededMm > 276) {
      doc.addPage();
      y = 18;
    }
  };

  const drawSectionHeading = (tag: string, title: string) => {
    ensureSpace(16);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(3, 105, 161); // sky-700
    doc.text(tag.toUpperCase(), margin, y);
    y += 5;
    doc.setFontSize(13);
    doc.setTextColor(15, 23, 42); // slate-900
    doc.text(title, margin, y);
    y += 2.5;
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.4);
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;
  };

  const drawParagraph = (text: string, fontSize = 9.5, color: [number, number, number] = [51, 65, 85]) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(fontSize);
    doc.setTextColor(color[0], color[1], color[2]);
    const lines = doc.splitTextToSize(text, contentWidth);
    ensureSpace(lines.length * 4.5 + 3);
    doc.text(lines, margin, y);
    y += lines.length * 4.4 + 3;
  };

  // --- Header Cover Strip ---
  doc.setFillColor(15, 23, 42); // slate-900
  doc.rect(0, 0, pageWidth, 42, 'F');
  doc.setFillColor(2, 132, 199); // sky-600
  doc.rect(0, 42, pageWidth, 1.5, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(125, 211, 252);
  doc.text(
    lang === 'ms'
      ? 'KERTAS KERJA RASMI · PROGRAM GROW & AI BUSINESS DIAGNOSTIC'
      : 'OFFICIAL PROPOSAL · GROW PROGRAM & AI BUSINESS DIAGNOSTIC',
    margin,
    13
  );

  doc.setFontSize(16.5);
  doc.setTextColor(255, 255, 255);
  const titleLines = doc.splitTextToSize(copy.hero.title, contentWidth);
  doc.text(titleLines, margin, 21);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(203, 213, 225);
  const dateStr = new Date().toLocaleDateString(lang === 'ms' ? 'ms-MY' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  doc.text(
    `${lang === 'ms' ? 'Tarikh Dijana' : 'Generated'}: ${dateStr}  |  ${
      lang === 'ms' ? 'Tempoh' : 'Duration'
    }: 3 ${lang === 'ms' ? 'Bulan' : 'Months'}  |  AI Diagnostic: ${
      lang === 'ms' ? 'PERCUMA' : 'FREE'
    }`,
    margin,
    36
  );

  y = 52;

  // --- Section 01: Executive Summary ---
  drawSectionHeading(copy.sec1.tag, copy.sec1.title);
  drawParagraph(
    `${copy.sec1.bodyPrefix}${copy.sec1.bodyStrong1}${copy.sec1.bodyMid}${copy.sec1.bodyStrong2}${copy.sec1.bodySuffix}`
  );
  y += 2;

  // --- Section 02: Introduction & Statistics ---
  drawSectionHeading(copy.sec2.tag, copy.sec2.title);
  drawParagraph(copy.sec2.body);
  ensureSpace(18);
  doc.setFillColor(240, 249, 255);
  doc.setDrawColor(186, 230, 253);
  const statText = `${copy.sec2.statTitle}: ${copy.sec2.statBodyPrefix}${copy.sec2.statStrong}${copy.sec2.statBodySuffix}`;
  const statLines = doc.splitTextToSize(statText, contentWidth - 8);
  const boxH = statLines.length * 4.4 + 7;
  doc.roundedRect(margin, y - 2, contentWidth, boxH, 2, 2, 'FD');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(12, 74, 110);
  doc.text(statLines, margin + 4, y + 3);
  y += boxH + 5;

  // --- Section 03: Solution & AI Diagnostic Inputs ---
  drawSectionHeading(
    lang === 'ms' ? 'Seksyen 03 · Keputusan Diagnostik AI Pengguna' : 'Section 03 · Participant AI Diagnostic Results',
    copy.diagnostic.title
  );

  ensureSpace(58);
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(203, 213, 225);
  doc.roundedRect(margin, y, contentWidth, 50, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text(
    `${lang === 'ms' ? 'Cabaran Utama Dipilih' : 'Selected Primary Challenge'}: ${selectedChallengeLabel}`,
    margin + 4,
    y + 6.5
  );

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text(
    `${copy.diagnostic.avgLabel}: ${overallScore}%   |   ${copy.diagnostic.urgencyLabel}: ${effectiveProfile.urgencyLevel}`,
    margin + 4,
    y + 12.5
  );

  const pillarRows: { label: string; score: number }[] = [
    { label: copy.diagnostic.pillars[0].label, score: scores.strategic },
    { label: copy.diagnostic.pillars[1].label, score: scores.marketing },
    { label: copy.diagnostic.pillars[2].label, score: scores.financial },
    { label: copy.diagnostic.pillars[3].label, score: scores.talent },
  ];

  let barY = y + 19;
  pillarRows.forEach((p) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 41, 59);
    doc.text(p.label, margin + 4, barY);

    const barX = margin + 52;
    const barW = contentWidth - 72;
    doc.setFillColor(226, 232, 240);
    doc.rect(barX, barY - 3, barW, 3.2, 'F');
    doc.setFillColor(p.score < 45 ? 217 : 3, p.score < 45 ? 119 : 105, p.score < 45 ? 6 : 161);
    doc.rect(barX, barY - 3, (barW * p.score) / 100, 3.2, 'F');

    doc.setFont('helvetica', 'bold');
    doc.text(`${p.score}%`, pageWidth - margin - 4, barY, { align: 'right' });
    barY += 7;
  });

  y += 55;
  drawParagraph(`${copy.diagnostic.diagnosisHeading}: ${effectiveProfile.diagnosisSummary}`, 9.5, [15, 23, 42]);
  drawParagraph(`${copy.diagnostic.recommendedHeading}: ${effectiveProfile.recommendedModuleTitle}`, 9.5, [3, 105, 161]);

  // 90-day plan
  ensureSpace(22);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text(copy.diagnostic.actionPlanHeading, margin, y);
  y += 5;
  effectiveProfile.actionPlan.forEach((step) => {
    const line = `• ${step.month} (${step.focus}): ${step.deliverable}`;
    drawParagraph(line, 8.8, [51, 65, 85]);
  });
  y += 2;

  // --- Section 04: Objectives ---
  drawSectionHeading(copy.sec4.tag, copy.sec4.title);
  copy.sec4.objectives.forEach((obj, i) => {
    drawParagraph(`0${i + 1}. ${obj}`, 9.2);
  });
  y += 2;

  // --- Section 05: Target Participants & 5 Modules ---
  drawSectionHeading(copy.sec5.tag, copy.sec5.title);
  participants.forEach((p) => {
    drawParagraph(`• ${p.category}: ${p.description} (${p.focusArea})`, 9);
  });
  y += 2;

  ensureSpace(12);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text(lang === 'ms' ? '5 Modul Teras GROW Coaching:' : '5 Core GROW Coaching Modules:', margin, y);
  y += 5;

  modules.forEach((m) => {
    drawParagraph(`${m.code} — ${m.title}: ${m.shortDesc} (${m.coachingHours})`, 8.8);
  });
  y += 2;

  // --- Section 06: Program Costs & Estimator ---
  drawSectionHeading(copy.sec6.tag, copy.sec6.title);
  copy.sec6.rows.forEach((r) => {
    drawParagraph(`• ${r.title}: ${r.price} — ${r.desc}`, 9);
  });

  const addOnCost = oneOnOneSessions * 530;
  ensureSpace(16);
  doc.setFillColor(241, 245, 249);
  doc.roundedRect(margin, y, contentWidth, 14, 2, 2, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text(
    `${copy.sec6.sessionsLabel}: ${oneOnOneSessions} (± ${oneOnOneSessions * 2} ${
      lang === 'ms' ? 'jam' : 'hrs'
    })   |   ${copy.sec6.totalLabel}: RM${addOnCost.toLocaleString('ms-MY')}`,
    margin + 4,
    y + 8.5
  );
  y += 20;

  // --- Section 07: Conclusion & Endorsement Record ---
  drawSectionHeading(copy.sec7.tag, copy.sec7.title);
  drawParagraph(
    `${copy.sec7.bodyPrefix}${copy.sec7.bodyStrong1}${copy.sec7.bodyMid}${copy.sec7.bodyStrong2}${copy.sec7.bodySuffix}`
  );
  drawParagraph(copy.sec7.recommendation, 9.5, [4, 120, 87]);

  ensureSpace(34);
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(
    endorsementStatus === 'approved' ? 16 : 203,
    endorsementStatus === 'approved' ? 185 : 213,
    endorsementStatus === 'approved' ? 129 : 225
  );
  doc.roundedRect(margin, y, contentWidth, 30, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text(
    `${copy.sec7.endorseTitle}: ${
      endorsementStatus === 'approved' ? copy.sec7.statusApproved : copy.sec7.statusPending
    }`,
    margin + 4,
    y + 7
  );

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  doc.text(
    `${copy.sec7.nameLabel}: ${reviewerName.trim() || '____________________________'}`,
    margin + 4,
    y + 14
  );
  doc.text(
    `${copy.sec7.roleLabel}: ${reviewerRole.trim() || '____________________________'}`,
    margin + 4,
    y + 20
  );
  if (reviewerNotes.trim()) {
    doc.text(`${copy.sec7.notesLabel}: ${reviewerNotes.trim()}`, margin + 4, y + 26);
  }

  // Page numbering footer on every page
  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(copy.footer.title, margin, 289);
    doc.text(
      `${lang === 'ms' ? 'Halaman' : 'Page'} ${p} / ${totalPages}`,
      pageWidth - margin,
      289,
      { align: 'right' }
    );
  }

  const filename =
    lang === 'ms'
      ? 'Kertas-Kerja-Program-GROW-AI-Diagnostic.pdf'
      : 'GROW-Program-AI-Diagnostic-Proposal.pdf';
  doc.save(filename);
}
