import { personalDetails } from '../data/data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/PersonalDetails.css';

export default function PersonalDetails() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  const sections = [
    { title: 'Identity', data: personalDetails.identity },
    { title: 'Physical Attributes', data: personalDetails.physical },
    { title: 'Background', data: personalDetails.background },
  ];

  return (
    <section className="personal section section-alt" id="personal" ref={ref}>
      <div className="section-container">
        <div className={`section-header reveal ${isRevealed ? 'revealed' : ''}`}>
          <span className="section-label">Details</span>
          <h2 className="section-title">Personal Information</h2>
        </div>

        <div className="personal__grid">
          {sections.map((sec, si) => (
            <div
              className={`personal__card card reveal ${isRevealed ? 'revealed' : ''}`}
              key={si}
              style={{ transitionDelay: `${(si + 1) * 100}ms` }}
            >
              <h3 className="personal__card-title">{sec.title}</h3>
              <div className="personal__rows">
                {sec.data.map((item, i) => (
                  <div className="personal__row" key={i}>
                    <span className="personal__label">{item.label}</span>
                    <span className="personal__value">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
