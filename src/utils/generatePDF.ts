// ============================================================
//  PDF Generator — BioFolio Marriage Profile (Premium Edition)
//  Beautiful, well-designed multi-page PDF with all profile data
// ============================================================
import { jsPDF } from 'jspdf';
import {
  siteConfig,
  hero,
  quickStats,
  about,
  personalDetails,
  career,
  family,
  horoscope,
  lifestyle,
  goals,
  partnerExpectations,
  gallery,
} from '../data/data';

// ── Strip emojis (jsPDF Helvetica can't render them) ──────────
function strip(text: string): string {
  return text
    .replace(/[\u{1F000}-\u{1FFFF}]/gu, '')
    .replace(/[\u{2600}-\u{27BF}]/gu, '')
    .replace(/[\u{FE00}-\u{FE0F}]/gu, '')
    .replace(/[\u{200D}]/gu, '')
    .replace(/[\u{20E3}]/gu, '')
    .replace(/[\u{E0020}-\u{E007F}]/gu, '')
    .replace(/[♓♟✦❋♥✨]/gu, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

// ── Colour palette ────────────────────────────────────────────
const C = {
  maroon:     [139, 26, 60]   as const,
  maroonLt:   [181, 41, 79]   as const,
  gold:       [200, 151, 58]  as const,
  goldDk:     [166, 123, 46]  as const,
  rose:       [232, 160, 176] as const,
  cream:      [251, 247, 240] as const,
  warmBg:     [243, 236, 224] as const,
  white:      [255, 255, 255] as const,
  dark:       [28, 20, 16]    as const,
  text:       [55, 42, 35]    as const,
  muted:      [110, 95, 82]   as const,
  light:      [160, 142, 125] as const,
  border:     [220, 210, 195] as const,
  success:    [45, 125, 70]   as const,
  softGold:   [248, 244, 237] as const,
  darkBg:     [35, 28, 22]    as const,
};

type RGB = readonly [number, number, number];

// ── Page constants ────────────────────────────────────────────
const PW = 210;   // A4 width mm
const PH = 297;   // A4 height mm
const MG = 16;    // margins
const CW = PW - 2 * MG;  // content width

// ── Premium PDF Builder ───────────────────────────────────────
class PremiumPDFBuilder {
  private doc: jsPDF;
  private y = 0;
  private pg = 1;

  constructor() {
    this.doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    this.y = MG;
  }

  // ── Utility ─────────────────────────────────────────────────
  private fc(c: RGB) { this.doc.setFillColor(c[0], c[1], c[2]); }
  private tc(c: RGB) { this.doc.setTextColor(c[0], c[1], c[2]); }
  private dc(c: RGB) { this.doc.setDrawColor(c[0], c[1], c[2]); }
  private font(style: string, size: number, color: RGB) {
    this.doc.setFont('helvetica', style);
    this.doc.setFontSize(size);
    this.tc(color);
  }

  private needPage(h: number): void {
    if (this.y + h > PH - MG - 12) {
      this.footer();
      this.doc.addPage();
      this.pg++;
      this.y = MG;
      this.pageBg();
    }
  }

  private pageBg() {
    this.fc(C.cream);
    this.doc.rect(0, 0, PW, PH, 'F');
    // Subtle top accent line
    this.fc(C.maroon);
    this.doc.rect(0, 0, PW, 1.2, 'F');
    this.fc(C.gold);
    this.doc.rect(0, 1.2, PW, 0.6, 'F');
  }

  private footer() {
    const fy = PH - 8;
    this.dc(C.border);
    this.doc.setLineWidth(0.2);
    this.doc.line(MG, fy - 2, PW - MG, fy - 2);
    this.font('normal', 6.5, C.light);
    this.doc.text(`${strip(hero.displayName)} | Marriage Profile`, MG, fy);
    this.doc.text(`Page ${this.pg}`, PW - MG, fy, { align: 'right' });
  }

  // ── Decorative elements ─────────────────────────────────────
  private dividerLine(y: number, w: number = 50) {
    const cx = PW / 2;
    this.dc(C.gold);
    this.doc.setLineWidth(0.4);
    this.doc.line(cx - w / 2, y, cx + w / 2, y);
    // Center dot
    this.fc(C.gold);
    this.doc.circle(cx, y, 1, 'F');
  }

  private sectionHead(label: string, title: string) {
    this.needPage(20);
    this.y += 8;

    // Section label
    this.font('normal', 7, C.gold);
    this.doc.text(label.toUpperCase(), MG, this.y);
    this.y += 5.5;

    // Title
    this.font('bold', 15, C.dark);
    this.doc.text(title, MG, this.y);
    this.y += 2.5;

    // Gradient accent bar
    const barW = 45;
    this.dc(C.maroon);
    this.doc.setLineWidth(1);
    this.doc.line(MG, this.y, MG + barW * 0.5, this.y);
    this.dc(C.gold);
    this.doc.setLineWidth(1);
    this.doc.line(MG + barW * 0.5, this.y, MG + barW, this.y);
    this.y += 7;
  }

  // ── Table rows with alternating bands ───────────────────────
  private tableRows(data: { label: string; value: string }[], labelW = 55) {
    data.forEach((row, i) => {
      this.needPage(8);
      // Alternating row bg
      this.fc(i % 2 === 0 ? C.white : C.softGold);
      this.doc.roundedRect(MG, this.y - 3.5, CW, 7.5, 1.2, 1.2, 'F');
      // Light border
      this.dc(C.border);
      this.doc.setLineWidth(0.15);
      this.doc.roundedRect(MG, this.y - 3.5, CW, 7.5, 1.2, 1.2, 'S');

      this.font('normal', 8.5, C.muted);
      this.doc.text(strip(row.label), MG + 5, this.y);

      this.font('bold', 8.5, C.dark);
      const maxW = CW - labelW - 10;
      const lines = this.doc.splitTextToSize(strip(row.value), maxW);
      this.doc.text(lines, MG + labelW, this.y);
      this.y += Math.max(lines.length * 4.5, 7.5);
    });
    this.y += 2;
  }

  // ── Chip tags ───────────────────────────────────────────────
  private chips(items: string[], color: RGB = C.maroon) {
    this.needPage(10);
    let x = MG;
    const h = 6.5;
    const pad = 4;

    items.forEach((item) => {
      const cleaned = strip(item);
      this.doc.setFontSize(7.5);
      const tw = this.doc.getTextWidth(cleaned) + pad * 2;
      if (x + tw > PW - MG) {
        x = MG;
        this.y += h + 2.5;
        this.needPage(h + 4);
      }
      // Chip bg
      this.fc(color);
      this.doc.setGState(this.doc.GState({ opacity: 0.08 }));
      this.doc.roundedRect(x, this.y - 3.8, tw, h, 2.5, 2.5, 'F');
      this.doc.setGState(this.doc.GState({ opacity: 1 }));
      // Chip border
      this.dc(color);
      this.doc.setLineWidth(0.25);
      this.doc.setGState(this.doc.GState({ opacity: 0.25 }));
      this.doc.roundedRect(x, this.y - 3.8, tw, h, 2.5, 2.5, 'S');
      this.doc.setGState(this.doc.GState({ opacity: 1 }));
      // Chip text
      this.font('normal', 7.5, color);
      this.doc.text(cleaned, x + pad, this.y);
      x += tw + 3;
    });
    this.y += h + 5;
  }

  // ── Paragraph ───────────────────────────────────────────────
  private para(text: string, size = 9) {
    this.font('normal', size, C.text);
    const lines = this.doc.splitTextToSize(strip(text), CW - 6);
    lines.forEach((line: string) => {
      this.needPage(5);
      this.doc.text(line, MG + 3, this.y);
      this.y += 4.2;
    });
    this.y += 2;
  }

  // ── Boxed card ──────────────────────────────────────────────
  private card(x: number, y: number, w: number, h: number) {
    this.fc(C.white);
    this.dc(C.border);
    this.doc.setLineWidth(0.3);
    this.doc.roundedRect(x, y, w, h, 3, 3, 'FD');
  }

  // ── Sub heading ─────────────────────────────────────────────
  private subHead(text: string) {
    this.needPage(10);
    this.y += 2;
    this.font('bold', 10, C.maroon);
    this.doc.text(strip(text), MG + 2, this.y);
    this.y += 6;
  }

  // ═══════════════════════════════════════════════════════════
  //  PAGE 1: COVER
  // ═══════════════════════════════════════════════════════════
  private coverPage() {
    // Full warm background
    this.fc(C.cream);
    this.doc.rect(0, 0, PW, PH, 'F');

    // Top decorative band
    this.fc(C.maroon);
    this.doc.rect(0, 0, PW, 4, 'F');
    this.fc(C.gold);
    this.doc.rect(0, 4, PW, 2, 'F');

    // Large decorative border frame
    const fx = 25, fy = 30, fw = PW - 50, fh = PH - 60;
    this.dc(C.gold);
    this.doc.setLineWidth(0.8);
    this.doc.roundedRect(fx, fy, fw, fh, 8, 8, 'S');
    // Inner frame
    this.doc.setLineWidth(0.3);
    this.doc.roundedRect(fx + 4, fy + 4, fw - 8, fh - 8, 6, 6, 'S');

    // Corner ornaments (small squares)
    const corners = [[fx, fy], [fx + fw, fy], [fx, fy + fh], [fx + fw, fy + fh]];
    corners.forEach(([cx, cy]) => {
      this.fc(C.gold);
      this.doc.circle(cx, cy, 2.5, 'F');
      this.fc(C.maroon);
      this.doc.circle(cx, cy, 1.2, 'F');
    });

    let cy = fy + 30;

    // Top ornament
    this.dividerLine(cy, 70);
    cy += 8;

    // "SEEKING LIFE PARTNER"
    this.font('normal', 8, C.gold);
    this.doc.text(hero.sectionLabel.toUpperCase(), PW / 2, cy, { align: 'center' });
    cy += 14;

    // First Name - big
    this.font('bold', 42, C.maroon);
    this.doc.text(strip(hero.firstName), PW / 2, cy, { align: 'center' });
    cy += 14;

    // Last Name
    this.font('normal', 30, C.dark);
    this.doc.text(strip(hero.lastName), PW / 2, cy, { align: 'center' });
    cy += 14;

    // Subtitle
    this.font('normal', 11, C.muted);
    this.doc.text(strip(hero.subtitle), PW / 2, cy, { align: 'center' });
    cy += 10;

    // Tagline in quotes
    this.font('italic', 10, C.light);
    this.doc.text(`"${strip(hero.tagline)}"`, PW / 2, cy, { align: 'center' });
    cy += 16;

    // Quick badges as clean text pills
    const badges = hero.quickBadges.map(b => strip(b.label));
    this.doc.setFontSize(8);
    const totalW = badges.reduce((s, t) => s + this.doc.getTextWidth(t) + 14, 0);
    let bx = (PW - totalW) / 2;
    badges.forEach(text => {
      this.doc.setFontSize(8);
      const tw = this.doc.getTextWidth(text) + 12;
      // Pill bg
      this.fc(C.maroon);
      this.doc.setGState(this.doc.GState({ opacity: 0.07 }));
      this.doc.roundedRect(bx, cy - 4.5, tw, 9, 4, 4, 'F');
      this.doc.setGState(this.doc.GState({ opacity: 1 }));
      // Pill border
      this.dc(C.maroon);
      this.doc.setLineWidth(0.3);
      this.doc.setGState(this.doc.GState({ opacity: 0.2 }));
      this.doc.roundedRect(bx, cy - 4.5, tw, 9, 4, 4, 'S');
      this.doc.setGState(this.doc.GState({ opacity: 1 }));
      // Text
      this.font('normal', 8, C.maroon);
      this.doc.text(text, bx + 6, cy);
      bx += tw + 4;
    });

    cy += 20;
    this.dividerLine(cy, 70);

    // Bottom band
    this.fc(C.gold);
    this.doc.rect(0, PH - 6, PW, 2, 'F');
    this.fc(C.maroon);
    this.doc.rect(0, PH - 4, PW, 4, 'F');

    // Confidential note
    this.font('normal', 7.5, C.light);
    this.doc.text('Marriage Profile  |  Confidential Document', PW / 2, PH - 18, { align: 'center' });
    this.font('normal', 7, C.light);
    this.doc.text(`Email: ${siteConfig.emailAddress}`, PW / 2, PH - 13, { align: 'center' });
  }

  // ═══════════════════════════════════════════════════════════
  //  QUICK STATS BAR
  // ═══════════════════════════════════════════════════════════
  private statsBar() {
    this.needPage(22);
    this.y += 3;

    const barY = this.y;
    const statW = CW / quickStats.length;

    // Card background
    this.card(MG, barY - 5, CW, 18);

    // Top gold accent on card
    this.fc(C.gold);
    this.doc.roundedRect(MG, barY - 5, CW, 1.5, 3, 0, 'F');

    quickStats.forEach((stat, i) => {
      const sx = MG + i * statW + statW / 2;
      this.font('normal', 6.5, C.light);
      this.doc.text(strip(stat.label), sx, barY, { align: 'center' });
      this.font('bold', 11, C.maroon);
      this.doc.text(strip(stat.value), sx, barY + 7.5, { align: 'center' });
    });

    this.y = barY + 20;
  }

  // ═══════════════════════════════════════════════════════════
  //  ABOUT ME
  // ═══════════════════════════════════════════════════════════
  private aboutSection() {
    this.sectionHead('About Me', 'Getting to Know Me');

    // Pull quote with accent bar
    this.needPage(14);
    this.fc(C.gold);
    this.doc.rect(MG + 2, this.y - 2, 2.5, 14, 'F');
    this.font('italic', 10.5, C.maroon);
    const ql = this.doc.splitTextToSize(`"${strip(about.pullQuote)}"`, CW - 14);
    this.doc.text(ql, MG + 8, this.y + 2);
    this.y += ql.length * 5.5 + 8;

    // Paragraphs
    about.paragraphs.forEach(p => this.para(p));

    // Personality Traits
    this.subHead('Personality Traits');
    this.chips(about.personalityTraits.map(t => t.label), C.gold);

    // Friend Quotes
    this.subHead('What Others Say');
    about.friendQuotes.forEach((fq) => {
      this.needPage(12);
      // Quote mark
      this.font('bold', 16, C.gold);
      this.doc.text('"', MG + 4, this.y + 2);
      this.font('italic', 8.5, C.text);
      this.doc.text(strip(fq.text), MG + 10, this.y);
      this.font('normal', 7.5, C.light);
      this.doc.text(`-- ${strip(fq.name)}`, MG + 10, this.y + 4.5);
      this.y += 10;
    });
  }

  // ═══════════════════════════════════════════════════════════
  //  PERSONAL DETAILS
  // ═══════════════════════════════════════════════════════════
  private personalSection() {
    this.sectionHead('Details', 'Personal Information');

    this.subHead('Identity');
    this.tableRows(personalDetails.identity);

    this.subHead('Physical Attributes');
    this.tableRows(personalDetails.physical);

    this.subHead('Background');
    this.tableRows(personalDetails.background);
  }

  // ═══════════════════════════════════════════════════════════
  //  CAREER & EDUCATION
  // ═══════════════════════════════════════════════════════════
  private careerSection() {
    this.sectionHead('Career & Education', 'Professional Journey');

    // Education timeline
    this.subHead('Education');
    career.education.forEach(edu => {
      this.needPage(18);

      // Timeline dot + line
      this.fc(edu.highlight ? C.gold : C.border);
      this.doc.circle(MG + 4, this.y, 2, 'F');
      if (edu !== career.education[career.education.length - 1]) {
        this.dc(C.border);
        this.doc.setLineWidth(0.3);
        this.doc.line(MG + 4, this.y + 2, MG + 4, this.y + 14);
      }

      this.font('normal', 7.5, C.gold);
      this.doc.text(strip(edu.year), MG + 10, this.y - 1);
      this.font('bold', 9, C.dark);
      this.doc.text(strip(edu.degree), MG + 10, this.y + 4);
      this.font('normal', 8, C.muted);
      this.doc.text(`${strip(edu.institution)} -- ${strip(edu.city)}`, MG + 10, this.y + 9);
      this.y += 17;
    });

    // Current Role
    this.subHead('Current Role');
    const roleData = [
      { label: 'Company', value: career.current.company },
      { label: 'Role', value: career.current.role },
      { label: 'Experience', value: `${career.current.yearsOfExperience} years` },
      { label: 'Location', value: career.current.location },
      { label: 'Work Mode', value: career.current.workMode },
    ];
    if (career.current.showIncome) {
      roleData.push({ label: 'Income Range', value: career.current.incomeRange });
    }
    this.tableRows(roleData);
    this.para(career.current.description);

    // Skills
    this.subHead('Skills & Technologies');
    this.chips(career.skills, C.maroon);

    // Certifications
    if (career.certifications.length > 0) {
      this.subHead('Certifications');
      career.certifications.forEach(cert => {
        this.needPage(6);
        this.font('normal', 8.5, C.dark);
        this.doc.text(`${strip(cert.name)} (${cert.year})`, MG + 6, this.y);
        // Small dot before text
        this.fc(C.gold);
        this.doc.circle(MG + 3, this.y - 1, 1, 'F');
        this.y += 6;
      });
    }
  }

  // ═══════════════════════════════════════════════════════════
  //  FAMILY
  // ═══════════════════════════════════════════════════════════
  private familySection() {
    this.sectionHead('Family', 'My Family');
    this.para(family.intro);

    // Parents
    this.subHead('Parents');
    family.parents.forEach(parent => {
      this.needPage(16);
      const cy = this.y - 3;
      this.card(MG, cy, CW, 16);
      // Gold left accent
      this.fc(C.gold);
      this.doc.rect(MG, cy, 3, 16, 'F');

      this.font('bold', 7.5, C.gold);
      this.doc.text(strip(parent.relation).toUpperCase(), MG + 7, this.y);
      this.font('bold', 9.5, C.dark);
      this.doc.text(strip(parent.name), MG + 35, this.y);
      this.font('normal', 8, C.muted);
      this.doc.text(strip(parent.profession), MG + 7, this.y + 6);
      this.font('normal', 7.5, C.success);
      this.doc.text(strip(parent.status), PW - MG - 5, this.y + 3, { align: 'right' });
      this.y += 20;
    });

    // Siblings
    if (family.siblings.length > 0) {
      this.subHead('Siblings');
      family.siblings.forEach(sib => {
        this.tableRows([
          { label: 'Relation', value: sib.relation },
          { label: 'Name', value: sib.name },
          { label: 'Profession', value: sib.profession },
          { label: 'Marital Status', value: sib.maritalStatus },
        ]);
      });
    }

    // Family Details
    this.subHead('Family Details');
    this.tableRows(family.familyDetails);

    // Family Values
    this.subHead('Family Values');
    this.chips(family.familyValues, C.gold);
  }

  // ═══════════════════════════════════════════════════════════
  //  HOROSCOPE
  // ═══════════════════════════════════════════════════════════
  private horoscopeSection() {
    this.sectionHead('Horoscope', 'Astrological Details');

    // Manglik badge
    this.needPage(10);
    const mt = horoscope.manglicStatus === 'non-manglik' ? 'Non-Manglik' :
      horoscope.manglicStatus === 'manglik' ? 'Manglik' : 'Partial Manglik';
    const bc = horoscope.manglicStatus === 'non-manglik' ? C.success : C.gold;

    this.font('bold', 9, bc);
    const bw = this.doc.getTextWidth(mt) + 14;
    this.fc(bc);
    this.doc.setGState(this.doc.GState({ opacity: 0.1 }));
    this.doc.roundedRect(MG + 2, this.y - 4, bw, 8, 3, 3, 'F');
    this.doc.setGState(this.doc.GState({ opacity: 1 }));
    this.tc(bc);
    this.doc.text(mt, MG + 9, this.y);
    this.y += 10;

    this.tableRows(horoscope.details);

    if (horoscope.note) {
      this.para(horoscope.note);
    }
  }

  // ═══════════════════════════════════════════════════════════
  //  LIFESTYLE
  // ═══════════════════════════════════════════════════════════
  private lifestyleSection() {
    this.sectionHead('Lifestyle', 'Life Beyond Work');

    // Food
    this.subHead('Food & Cooking');
    this.tableRows([
      { label: 'Preference', value: lifestyle.food.preference },
      { label: 'Cooking', value: lifestyle.food.cooking },
    ]);
    this.chips(lifestyle.food.loves, C.gold);

    // Fitness
    this.subHead('Fitness & Sports');
    this.tableRows([
      { label: 'Routine', value: lifestyle.fitness.routine },
      { label: 'Meditation', value: lifestyle.fitness.yogaOrMeditation },
    ]);
    this.chips(lifestyle.fitness.sports, C.success);

    // Hobbies
    this.subHead('Hobbies & Interests');
    this.chips(lifestyle.hobbies.map(h => h.label), C.maroon);

    // Travel
    this.subHead('Travel');
    this.chips(lifestyle.travel.visited.map(v => strip(v)), C.gold);
    this.para(`Dream: ${lifestyle.travel.dream}`);

    // Favourites
    this.subHead('Favourites');
    this.tableRows([
      { label: 'Books', value: lifestyle.favourites.books.join(' | ') },
      { label: 'Movies', value: lifestyle.favourites.movies.join(' | ') },
      { label: 'Music', value: lifestyle.favourites.music.join(' | ') },
    ]);

    // Habits
    this.subHead('Daily Life');
    this.tableRows([
      { label: 'Smoking', value: lifestyle.habits.smoking },
      { label: 'Drinking', value: lifestyle.habits.drinking },
      { label: 'Sleep Schedule', value: lifestyle.habits.sleepSchedule },
    ]);
    this.para(`A Typical Sunday: ${lifestyle.habits.typicalSunday}`);
  }

  // ═══════════════════════════════════════════════════════════
  //  GOALS
  // ═══════════════════════════════════════════════════════════
  private goalsSection() {
    this.sectionHead('Future Vision', 'Goals & Dreams');

    goals.milestones.forEach((m, idx) => {
      this.needPage(20);
      // Timeline marker
      this.fc(C.gold);
      this.doc.circle(MG + 4, this.y, 2.5, 'F');
      this.fc(C.white);
      this.doc.circle(MG + 4, this.y, 1, 'F');
      // Connector line
      if (idx < goals.milestones.length - 1) {
        this.dc(C.border);
        this.doc.setLineWidth(0.3);
        this.doc.line(MG + 4, this.y + 3, MG + 4, this.y + 16);
      }

      this.font('normal', 7.5, C.gold);
      this.doc.text(strip(m.timeframe).toUpperCase(), MG + 10, this.y - 1);
      this.font('bold', 9.5, C.dark);
      this.doc.text(strip(m.heading), MG + 10, this.y + 4);
      this.font('normal', 8.5, C.text);
      const dl = this.doc.splitTextToSize(strip(m.description), CW - 16);
      this.doc.text(dl, MG + 10, this.y + 9);
      this.y += 12 + dl.length * 4;
    });

    this.y += 4;
    this.tableRows([
      { label: 'Settle In', value: goals.settleIn },
      { label: 'Children', value: goals.childrenPlan },
      { label: 'Career After Marriage', value: goals.careerAfterMarriage },
      { label: 'Financial Philosophy', value: goals.financialPhilosophy },
    ]);
  }

  // ═══════════════════════════════════════════════════════════
  //  PARTNER EXPECTATIONS
  // ═══════════════════════════════════════════════════════════
  private partnerSection() {
    this.sectionHead('Partner Preferences', 'Looking For & What I Bring');

    this.subHead('What I\'m Looking For');
    this.tableRows(partnerExpectations.lookingFor.map(item => ({
      label: item.label,
      value: item.value,
    })));

    this.subHead('Personality I Admire');
    this.chips(partnerExpectations.personalityTraitsWanted, C.gold);

    this.subHead('What I Bring');
    partnerExpectations.whatIBring.forEach(item => {
      this.needPage(14);
      this.font('bold', 9, C.dark);
      this.doc.text(strip(item.heading), MG + 4, this.y);
      this.y += 4.5;
      this.font('normal', 8.5, C.text);
      const dl = this.doc.splitTextToSize(strip(item.description), CW - 10);
      this.doc.text(dl, MG + 6, this.y);
      this.y += dl.length * 4 + 4;
    });

    // Open note box
    if (partnerExpectations.openNote) {
      this.needPage(16);
      const nl = this.doc.splitTextToSize(strip(partnerExpectations.openNote), CW - 20);
      const nh = nl.length * 4.5 + 10;
      // Box bg
      this.fc(C.gold);
      this.doc.setGState(this.doc.GState({ opacity: 0.06 }));
      this.doc.roundedRect(MG, this.y - 2, CW, nh, 3, 3, 'F');
      this.doc.setGState(this.doc.GState({ opacity: 1 }));
      // Box border
      this.dc(C.gold);
      this.doc.setLineWidth(0.3);
      this.doc.setGState(this.doc.GState({ opacity: 0.2 }));
      this.doc.roundedRect(MG, this.y - 2, CW, nh, 3, 3, 'S');
      this.doc.setGState(this.doc.GState({ opacity: 1 }));

      this.font('italic', 8.5, C.goldDk);
      this.doc.text(nl, MG + 8, this.y + 5);
      this.y += nh + 4;
    }
  }

  // ═══════════════════════════════════════════════════════════
  //  GALLERY (only if real images exist)
  // ═══════════════════════════════════════════════════════════
  private async gallerySection(): Promise<boolean> {
    // Check if any gallery image actually loads
    const validPhotos: { img: HTMLImageElement; alt: string; category: string }[] = [];

    const loadPromises = gallery.photos.map(photo => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          validPhotos.push({ img, alt: photo.alt, category: photo.category });
          resolve();
        };
        img.onerror = () => resolve(); // Skip broken images
        img.src = photo.src;
      });
    });

    await Promise.all(loadPromises);

    // If no valid photos loaded, skip gallery entirely
    if (validPhotos.length === 0) return false;

    this.sectionHead('Gallery', 'Photo Gallery');

    // Grid layout: 3 columns
    const cols = 3;
    const gap = 4;
    const imgW = (CW - (cols - 1) * gap) / cols;
    const imgH = imgW * 1.2; // 5:6 aspect ratio

    let col = 0;

    validPhotos.forEach((photo) => {
      if (col === 0) {
        this.needPage(imgH + 12);
      }

      const x = MG + col * (imgW + gap);
      const iy = this.y;

      try {
        // Convert image to canvas for data URL
        const canvas = document.createElement('canvas');
        canvas.width = photo.img.naturalWidth;
        canvas.height = photo.img.naturalHeight;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(photo.img, 0, 0);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.85);

          // Image frame
          this.dc(C.border);
          this.doc.setLineWidth(0.3);
          this.doc.roundedRect(x - 1, iy - 1, imgW + 2, imgH + 2, 2, 2, 'S');

          this.doc.addImage(dataUrl, 'JPEG', x, iy, imgW, imgH);
        }
      } catch {
        // If image fails to render, draw placeholder
        this.fc(C.warmBg);
        this.doc.roundedRect(x, iy, imgW, imgH, 2, 2, 'F');
        this.font('normal', 7, C.light);
        this.doc.text(strip(photo.alt), x + imgW / 2, iy + imgH / 2, { align: 'center' });
      }

      // Category label
      this.font('normal', 6, C.muted);
      this.doc.text(strip(photo.category), x + imgW / 2, iy + imgH + 4, { align: 'center' });

      col++;
      if (col >= cols) {
        col = 0;
        this.y += imgH + 10;
      }
    });

    // Handle remaining partial row
    if (col > 0) {
      this.y += imgH + 10;
    }

    return true;
  }

  // ═══════════════════════════════════════════════════════════
  //  CLOSING PAGE
  // ═══════════════════════════════════════════════════════════
  private closingPage() {
    // Force new page for closing
    this.footer();
    this.doc.addPage();
    this.pg++;
    this.pageBg();

    const cy = PH / 2 - 40;

    // Decorative frame
    const fx = 40, fy2 = cy - 20, fw = PW - 80, fh = 100;
    this.dc(C.gold);
    this.doc.setLineWidth(0.5);
    this.doc.roundedRect(fx, fy2, fw, fh, 6, 6, 'S');

    // Ornament
    this.dividerLine(cy - 8, 50);

    // Heading
    this.font('bold', 20, C.maroon);
    this.doc.text('Thank You', PW / 2, cy + 10, { align: 'center' });

    this.font('normal', 10, C.text);
    const msg = this.doc.splitTextToSize(
      'This profile has been shared in confidence. We appreciate your time in going through it. If you feel a connection, please do not hesitate to reach out.',
      110
    );
    this.doc.text(msg, PW / 2, cy + 22, { align: 'center' });

    // Contact
    const contactY = cy + 22 + msg.length * 5 + 8;
    this.dividerLine(contactY, 40);

    this.font('normal', 9, C.text);
    this.doc.text(`Email: ${siteConfig.emailAddress}`, PW / 2, contactY + 8, { align: 'center' });
    this.doc.text(`WhatsApp: +${siteConfig.whatsappNumber}`, PW / 2, contactY + 14, { align: 'center' });

    // Bottom band
    this.fc(C.gold);
    this.doc.rect(0, PH - 6, PW, 2, 'F');
    this.fc(C.maroon);
    this.doc.rect(0, PH - 4, PW, 4, 'F');
  }

  // ═══════════════════════════════════════════════════════════
  //  PUBLIC API
  // ═══════════════════════════════════════════════════════════
  public async generate(): Promise<void> {
    // Cover
    this.coverPage();

    // Content pages
    this.doc.addPage();
    this.pg++;
    this.pageBg();
    this.y = MG;

    this.statsBar();
    this.aboutSection();
    this.personalSection();
    this.careerSection();
    this.familySection();
    this.horoscopeSection();
    this.lifestyleSection();
    this.goalsSection();
    this.partnerSection();

    // Gallery — async (loads images)
    await this.gallerySection();

    // Closing page
    this.closingPage();

    // Add footer to last page
    this.footer();

    // Save
    const fileName = `${strip(hero.displayName).replace(/\s+/g, '-')}-Marriage-Profile.pdf`;
    this.doc.save(fileName);
  }
}

// ─── Export: Full Profile PDF ─────────────────────────────────
export async function generateProfilePDF(): Promise<void> {
  const builder = new PremiumPDFBuilder();
  await builder.generate();
}

// ─── Export: Horoscope-Only PDF ───────────────────────────────
export function generateHoroscopePDF(): void {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

  // Background
  doc.setFillColor(C.cream[0], C.cream[1], C.cream[2]);
  doc.rect(0, 0, PW, PH, 'F');

  // Top band
  doc.setFillColor(C.maroon[0], C.maroon[1], C.maroon[2]);
  doc.rect(0, 0, PW, 3.5, 'F');
  doc.setFillColor(C.gold[0], C.gold[1], C.gold[2]);
  doc.rect(0, 3.5, PW, 1.5, 'F');

  // Decorative frame
  doc.setDrawColor(C.gold[0], C.gold[1], C.gold[2]);
  doc.setLineWidth(0.5);
  doc.roundedRect(20, 18, PW - 40, PH - 36, 6, 6, 'S');
  doc.setLineWidth(0.2);
  doc.roundedRect(23, 21, PW - 46, PH - 42, 5, 5, 'S');

  let y = 38;

  // Label
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(C.gold[0], C.gold[1], C.gold[2]);
  doc.text('HOROSCOPE', PW / 2, y, { align: 'center' });
  y += 8;

  // Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(C.dark[0], C.dark[1], C.dark[2]);
  doc.text('Astrological Details', PW / 2, y, { align: 'center' });
  y += 4;

  // Accent line
  doc.setDrawColor(C.maroon[0], C.maroon[1], C.maroon[2]);
  doc.setLineWidth(0.8);
  doc.line(75, y, PW / 2, y);
  doc.setDrawColor(C.gold[0], C.gold[1], C.gold[2]);
  doc.line(PW / 2, y, PW - 75, y);
  y += 8;

  // Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(C.maroon[0], C.maroon[1], C.maroon[2]);
  doc.text(strip(hero.displayName), PW / 2, y, { align: 'center' });
  y += 12;

  // Manglik badge
  const mt = horoscope.manglicStatus === 'non-manglik' ? 'Non-Manglik' :
    horoscope.manglicStatus === 'manglik' ? 'Manglik' : 'Partial Manglik';
  const bc = horoscope.manglicStatus === 'non-manglik' ? C.success : C.gold;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(bc[0], bc[1], bc[2]);
  const bw = doc.getTextWidth(mt) + 14;
  doc.setFillColor(bc[0], bc[1], bc[2]);
  doc.setGState(doc.GState({ opacity: 0.1 }));
  doc.roundedRect((PW - bw) / 2, y - 4, bw, 8, 3, 3, 'F');
  doc.setGState(doc.GState({ opacity: 1 }));
  doc.text(mt, PW / 2, y, { align: 'center' });
  y += 14;

  // Details table
  horoscope.details.forEach((item, i) => {
    if (i % 2 === 0) {
      doc.setFillColor(C.white[0], C.white[1], C.white[2]);
    } else {
      doc.setFillColor(C.softGold[0], C.softGold[1], C.softGold[2]);
    }
    doc.roundedRect(MG + 10, y - 4, CW - 20, 8, 1.2, 1.2, 'F');
    doc.setDrawColor(C.border[0], C.border[1], C.border[2]);
    doc.setLineWidth(0.15);
    doc.roundedRect(MG + 10, y - 4, CW - 20, 8, 1.2, 1.2, 'S');

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(C.muted[0], C.muted[1], C.muted[2]);
    doc.text(strip(item.label), MG + 15, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(C.dark[0], C.dark[1], C.dark[2]);
    doc.text(strip(item.value), MG + 70, y);
    y += 8.5;
  });

  y += 6;

  // Note
  if (horoscope.note) {
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(C.muted[0], C.muted[1], C.muted[2]);
    doc.text(strip(horoscope.note), PW / 2, y, { align: 'center' });
  }

  // Footer
  doc.setDrawColor(C.border[0], C.border[1], C.border[2]);
  doc.setLineWidth(0.2);
  doc.line(MG, PH - 14, PW - MG, PH - 14);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(C.light[0], C.light[1], C.light[2]);
  doc.text(`${strip(hero.displayName)} | Horoscope Details`, MG, PH - 10);
  doc.text('Confidential', PW - MG, PH - 10, { align: 'right' });

  // Bottom band
  doc.setFillColor(C.gold[0], C.gold[1], C.gold[2]);
  doc.rect(0, PH - 6, PW, 2, 'F');
  doc.setFillColor(C.maroon[0], C.maroon[1], C.maroon[2]);
  doc.rect(0, PH - 4, PW, 4, 'F');

  doc.save(`${strip(hero.displayName).replace(/\s+/g, '-')}-Horoscope.pdf`);
}

export default generateProfilePDF;
