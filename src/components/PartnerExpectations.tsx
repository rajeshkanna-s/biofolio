import { partnerExpectations } from '../data/data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/PartnerExpectations.css';

export default function PartnerExpectations() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section className="partner section section-alt" id="partner" ref={ref}>
      <div className="section-container">
        <div className={`section-header reveal ${isRevealed ? 'revealed' : ''}`}>
          <span className="section-label">Partner Preferences</span>
          <h2 className="section-title">Looking For & What I Bring</h2>
        </div>

        <div className="partner__grid">
          {/* Looking For */}
          <div className={`partner__column reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '100ms' }}>
            <h3 className="partner__column-title">
              <span className="partner__column-icon">💫</span>
              What I'm Looking For
            </h3>
            <div className="partner__criteria-list">
              {partnerExpectations.lookingFor.map((item, i) => (
                <div className="partner__criteria card" key={i}>
                  <span className="partner__criteria-icon">{item.icon}</span>
                  <div>
                    <span className="partner__criteria-label">{item.label}</span>
                    <span className="partner__criteria-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="partner__traits">
              <h4 className="partner__traits-title">Personality I Admire</h4>
              <div className="partner__traits-list">
                {partnerExpectations.personalityTraitsWanted.map((trait, i) => (
                  <span className="partner__trait-chip" key={i}>✦ {trait}</span>
                ))}
              </div>
            </div>
          </div>

          {/* What I Bring */}
          <div className={`partner__column reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '200ms' }}>
            <h3 className="partner__column-title">
              <span className="partner__column-icon">🤝</span>
              What I Bring
            </h3>
            <div className="partner__bring-list">
              {partnerExpectations.whatIBring.map((item, i) => (
                <div className="partner__bring-card card" key={i}>
                  <span className="partner__bring-icon">{item.icon}</span>
                  <h4 className="partner__bring-heading">{item.heading}</h4>
                  <p className="partner__bring-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open note */}
        <div className={`partner__note reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '400ms' }}>
          <p className="partner__note-text">
            💛 {partnerExpectations.openNote}
          </p>
        </div>
      </div>
    </section>
  );
}
