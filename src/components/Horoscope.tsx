import { horoscope } from '../data/data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { generateHoroscopePDF } from '../utils/generatePDF';
import '../styles/Horoscope.css';

export default function Horoscope() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  const manglicBadge = () => {
    switch (horoscope.manglicStatus) {
      case 'non-manglik': return { text: 'Non-Manglik', cls: 'badge-success' };
      case 'manglik': return { text: 'Manglik', cls: 'badge-amber' };
      case 'partial': return { text: 'Partial Manglik', cls: 'badge-amber' };
      default: return { text: 'Not Specified', cls: '' };
    }
  };

  const badge = manglicBadge();

  const handleKundliDownload = () => {
    // Generate horoscope-only PDF
    generateHoroscopePDF();
  };

  return (
    <section className="horoscope section" id="horoscope" ref={ref}>
      {/* Decorative zodiac wheel */}
      <div className="horoscope__zodiac-bg spin-slow" aria-hidden="true">
        <svg viewBox="0 0 400 400" width="400" height="400">
          <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
          <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.1" />
          <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.08" />
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const x1 = 200 + 150 * Math.cos(angle);
            const y1 = 200 + 150 * Math.sin(angle);
            const x2 = 200 + 180 * Math.cos(angle);
            const y2 = 200 + 180 * Math.sin(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.5" opacity="0.12" />;
          })}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const cx = 200 + 165 * Math.cos(angle);
            const cy = 200 + 165 * Math.sin(angle);
            return <circle key={i} cx={cx} cy={cy} r="2" fill="currentColor" opacity="0.15" />;
          })}
        </svg>
      </div>

      <div className="section-container">
        <div className={`section-header reveal ${isRevealed ? 'revealed' : ''}`}>
          <span className="section-label">Horoscope</span>
          <h2 className="section-title">Astrological Details</h2>
        </div>

        <div className="horoscope__grid">
          <div className={`horoscope__details card reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '100ms' }}>
            <div className="horoscope__manglik-badge">
              <span className={`badge ${badge.cls}`}>{badge.text}</span>
            </div>

            <div className="horoscope__rows">
              {horoscope.details.map((item, i) => (
                <div className="horoscope__row" key={i}>
                  <span className="horoscope__label">{item.label}</span>
                  <span className="horoscope__value">{item.value}</span>
                </div>
              ))}
            </div>

            {horoscope.note && (
              <p className="horoscope__note">{horoscope.note}</p>
            )}

            {horoscope.kundliAvailable && (
              <button onClick={handleKundliDownload} className="btn btn-gold horoscope__download">
                📜 Download Horoscope PDF
              </button>
            )}
          </div>

          {/* Decorative card */}
          <div className={`horoscope__visual reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '200ms' }}>
            <div className="horoscope__visual-card">
              <div className="horoscope__stars">
                {[...Array(20)].map((_, i) => (
                  <span
                    key={i}
                    className="horoscope__star"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      fontSize: `${Math.random() * 8 + 4}px`,
                    }}
                  >
                    ✦
                  </span>
                ))}
              </div>
              <div className="horoscope__visual-content">
                <span className="horoscope__rashi-icon">♈</span>
                <h3 className="horoscope__rashi-name">Mesha Rashi</h3>
                <p className="horoscope__rashi-sub">Aries · Bharani Nakshatra</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
