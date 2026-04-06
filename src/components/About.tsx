import { about } from '../data/data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/About.css';

export default function About() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="section-container">
        <div className={`section-header reveal ${isRevealed ? 'revealed' : ''}`}>
          <span className="section-label">About Me</span>
          <h2 className="section-title">Getting to Know Me</h2>
        </div>

        <div className="about__content">
          {/* Main Text Content */}
          <div className={`about__text reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '100ms' }}>
            <blockquote className="about__quote">
              "{about.pullQuote}"
            </blockquote>

            <div className="about__paragraphs">
              {about.paragraphs.map((p, i) => (
                <p className="about__paragraph" key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* Personality Traits */}
          <div className={`about__traits reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '200ms' }}>
            <div className="about__section-heading">
              <span className="about__section-icon">✨</span>
              <h4 className="about__section-title">Personality Traits</h4>
              <div className="about__section-line"></div>
            </div>
            
            <div className="about__traits-grid reveal-stagger">
              {about.personalityTraits.map((trait, i) => (
                <div className={`about__trait-card reveal ${isRevealed ? 'revealed' : ''}`} key={i}>
                  <span className="about__trait-icon">{trait.icon}</span>
                  <span className="about__trait-label">{trait.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Friend Quotes */}
          <div className={`about__friend-quotes reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '300ms' }}>
            <div className="about__section-heading" style={{ justifyContent: 'flex-start' }}>
               <span className="about__section-icon">💬</span>
               <h4 className="about__section-title">What my friends say</h4>
            </div>
            <div className="about__fq-grid">
              {about.friendQuotes.map((fq, i) => (
                <div className="about__fq-card" key={i}>
                  <p className="about__fq-text">"{fq.text}"</p>
                  <span className="about__fq-name">— {fq.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
