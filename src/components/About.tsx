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

        <div className="about__grid">
          <div className={`about__text reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '100ms' }}>
            <blockquote className="about__quote">
              "{about.pullQuote}"
            </blockquote>

            {about.paragraphs.map((p, i) => (
              <p className="about__paragraph" key={i}>{p}</p>
            ))}

            <div className="about__friend-quotes">
              <h4 className="about__fq-heading">What my friends say</h4>
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

          <div className={`about__traits reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '200ms' }}>
            <h4 className="about__traits-heading">Personality Traits</h4>
            <div className="about__traits-grid reveal-stagger">
              {about.personalityTraits.map((trait, i) => (
                <div className={`about__trait-card reveal ${isRevealed ? 'revealed' : ''}`} key={i}>
                  <span className="about__trait-icon">{trait.icon}</span>
                  <span className="about__trait-label">{trait.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
