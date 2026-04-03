import { career } from '../data/data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/CareerSection.css';

export default function CareerSection() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section className="career section" id="career" ref={ref}>
      <div className="section-container">
        <div className={`section-header reveal ${isRevealed ? 'revealed' : ''}`}>
          <span className="section-label">Career & Education</span>
          <h2 className="section-title">Professional Journey</h2>
        </div>

        <div className="career__grid">
          {/* Education Timeline */}
          <div className={`career__timeline reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '100ms' }}>
            <h3 className="career__block-title">Education</h3>
            <div className="career__timeline-items">
              {career.education.map((edu, i) => (
                <div
                  className={`career__timeline-item ${edu.highlight ? 'career__timeline-item--highlight' : ''}`}
                  key={i}
                >
                  <div className="career__timeline-dot" />
                  <div className="career__timeline-content">
                    <span className="career__timeline-year">{edu.year}</span>
                    <h4 className="career__timeline-degree">{edu.degree}</h4>
                    <p className="career__timeline-institution">{edu.institution}</p>
                    <span className="career__timeline-city">{edu.city}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Role Card */}
          <div className={`career__current reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '200ms' }}>
            <div className="career__current-card card">
              <span className="career__current-badge badge badge-gold">Current Role</span>
              <h3 className="career__current-role">{career.current.role}</h3>
              <p className="career__current-company">{career.current.company}</p>
              <p className="career__current-desc">{career.current.description}</p>

              <div className="career__current-meta">
                <div className="career__meta-item">
                  <span className="career__meta-label">Experience</span>
                  <span className="career__meta-value">{career.current.yearsOfExperience} years</span>
                </div>
                <div className="career__meta-item">
                  <span className="career__meta-label">Location</span>
                  <span className="career__meta-value">{career.current.location}</span>
                </div>
                <div className="career__meta-item">
                  <span className="career__meta-label">Work Mode</span>
                  <span className="career__meta-value">{career.current.workMode}</span>
                </div>
                {career.current.showIncome && (
                  <div className="career__meta-item">
                    <span className="career__meta-label">Income Range</span>
                    <span className="career__meta-value">{career.current.incomeRange}</span>
                  </div>
                )}
              </div>

              <div className="career__skills">
                <h4 className="career__skills-title">Skills & Technologies</h4>
                <div className="career__skills-list">
                  {career.skills.map((skill, i) => (
                    <span className="badge" key={i}>{skill}</span>
                  ))}
                </div>
              </div>

              {career.certifications.length > 0 && (
                <div className="career__certs">
                  <h4 className="career__certs-title">Certifications</h4>
                  {career.certifications.map((cert, i) => (
                    <div className="career__cert-item" key={i}>
                      <span className="career__cert-icon">🏅</span>
                      <span className="career__cert-name">{cert.name}</span>
                      <span className="career__cert-year">({cert.year})</span>
                    </div>
                  ))}
                </div>
              )}

              <a
                href={career.current.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary career__linkedin-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                View LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
