import { useState } from 'react';
import { footer } from '../data/data';
import { generateProfilePDF } from '../utils/generatePDF';
import '../styles/Footer.css';

export default function Footer() {
  const [generating, setGenerating] = useState(false);

  const handleDownload = async () => {
    setGenerating(true);
    try {
      await generateProfilePDF();
    } catch (e) {
      console.error('PDF generation failed:', e);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <h3 className="footer__name">{footer.name}</h3>
            <p className="footer__tagline">{footer.tagline}</p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            {footer.navLinks.map((link) => (
              <a key={link.href} href={link.href} className="footer__link">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer__actions">
          <button
            onClick={handleDownload}
            className="btn btn-gold footer__pdf-btn"
            disabled={generating}
          >
            {generating ? (
              <>Generating PDF...</>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Full Profile PDF
              </>
            )}
          </button>
        </div>

        <div className="footer__bottom">
          <p className="footer__note">{footer.note}</p>
          <p className="footer__credit">
            Made with care · {footer.credit} · {footer.year}
          </p>
        </div>
      </div>
    </footer>
  );
}
