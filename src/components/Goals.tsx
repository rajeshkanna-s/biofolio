import { goals } from '../data/data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Goals.css';

export default function Goals() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section className="goals section" id="goals" ref={ref}>
      <div className="section-container">
        <div className={`section-header reveal ${isRevealed ? 'revealed' : ''}`}>
          <span className="section-label">Future Vision</span>
          <h2 className="section-title">Goals & Dreams</h2>
        </div>

        {/* Milestones Timeline */}
        <div className="goals__timeline">
          {goals.milestones.map((m, i) => (
            <div
              className={`goals__milestone reveal ${isRevealed ? 'revealed' : ''}`}
              key={i}
              style={{ transitionDelay: `${(i + 1) * 120}ms` }}
            >
              <div className="goals__milestone-marker">
                <span className="goals__milestone-icon">{m.icon}</span>
                <span className="goals__milestone-time">{m.timeframe}</span>
              </div>
              <div className="goals__milestone-content card">
                <h3 className="goals__milestone-heading">{m.heading}</h3>
                <p className="goals__milestone-desc">{m.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className={`goals__extra reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '600ms' }}>
          <div className="goals__extra-grid">
            <div className="goals__extra-item card">
              <span className="goals__extra-icon">🏙️</span>
              <h4 className="goals__extra-title">Settle In</h4>
              <p className="goals__extra-text">{goals.settleIn}</p>
            </div>
            <div className="goals__extra-item card">
              <span className="goals__extra-icon">👶</span>
              <h4 className="goals__extra-title">Children</h4>
              <p className="goals__extra-text">{goals.childrenPlan}</p>
            </div>
            <div className="goals__extra-item card">
              <span className="goals__extra-icon">💼</span>
              <h4 className="goals__extra-title">Career & Partner</h4>
              <p className="goals__extra-text">{goals.careerAfterMarriage}</p>
            </div>
            <div className="goals__extra-item card">
              <span className="goals__extra-icon">💰</span>
              <h4 className="goals__extra-title">Finances</h4>
              <p className="goals__extra-text">{goals.financialPhilosophy}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
