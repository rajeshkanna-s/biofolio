import { family } from '../data/data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/FamilySection.css';

export default function FamilySection() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section className="family section section-alt" id="family" ref={ref}>
      <div className="section-container">
        <div className={`section-header reveal ${isRevealed ? 'revealed' : ''}`}>
          <span className="section-label">Family</span>
          <h2 className="section-title">My Family</h2>
          <p className="section-subtitle">{family.intro}</p>
        </div>

        {/* Parents */}
        <div className="family__parents">
          {family.parents.map((parent, i) => (
            <div
              className={`family__parent-card card reveal ${isRevealed ? 'revealed' : ''}`}
              key={i}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="family__parent-avatar">
                <span className="family__parent-initial">
                  {parent.name.charAt(0)}
                </span>
              </div>
              <div className="family__parent-info">
                <span className="family__parent-relation">{parent.relation}</span>
                <h4 className="family__parent-name">{parent.name}</h4>
                <p className="family__parent-profession">{parent.profession}</p>
                <span className="badge badge-success">{parent.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Siblings */}
        {family.siblings.length > 0 && (
          <div className={`family__siblings reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '300ms' }}>
            <h3 className="family__sub-title">Siblings</h3>
            <div className="family__siblings-grid">
              {family.siblings.map((sib, i) => (
                <div className="family__sibling-card card" key={i}>
                  <span className="family__sibling-relation">{sib.relation}</span>
                  <h4 className="family__sibling-name">{sib.name}</h4>
                  <p className="family__sibling-profession">{sib.profession}</p>
                  <span className="family__sibling-status">{sib.maritalStatus}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Family Details */}
        <div className={`family__details reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '400ms' }}>
          <h3 className="family__sub-title">Family Details</h3>
          <div className="family__details-grid">
            {family.familyDetails.map((detail, i) => (
              <div className="family__detail-row" key={i}>
                <span className="family__detail-label">{detail.label}</span>
                <span className="family__detail-value">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Family Values */}
        <div className={`family__values reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '500ms' }}>
          <h3 className="family__sub-title">Our Values</h3>
          <div className="family__values-chips">
            {family.familyValues.map((value, i) => (
              <span className="family__value-chip" key={i}>
                ✦ {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
