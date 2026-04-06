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

        <div className="career__content">
          {/* Left Column timelines */}
          <div className="career__timelines-group">
            {/* Education Timeline */}
            <div className={`career__timeline-container reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '100ms', marginBottom: 'var(--space-3xl)' }}>
              <h3 className="career__education-title">Education path</h3>
              <div className="career__timeline">
                {career.education.map((edu, i) => (
                  <div
                    className={`career__timeline-item ${edu.highlight ? 'career__timeline-item--highlight' : ''}`}
                    key={i}
                  >
                    <div className="career__timeline-dot" />
                    <div className="career__timeline-card">
                      <span className="career__timeline-year">{edu.year}</span>
                      <h4 className="career__timeline-degree">{edu.degree}</h4>
                      <p className="career__timeline-institute">{edu.institution}</p>
                      <span className="career__timeline-location">{edu.city}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            {career.previousRoles && career.previousRoles.length > 0 && (
              <div className={`career__timeline-container reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '150ms' }}>
                <h3 className="career__education-title" style={{ fontSize: '1.25rem' }}>Previous Roles</h3>
                <div className="career__timeline">
                  {career.previousRoles.map((role, i) => (
                    <div className="career__timeline-item" key={i}>
                      <div className="career__timeline-dot" style={{ borderColor: 'var(--color-primary-soft)' }} />
                      <div className="career__timeline-card">
                        <span className="career__timeline-year">{role.period}</span>
                        <h4 className="career__timeline-degree">{role.role}</h4>
                        <p className="career__timeline-institute" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{role.company}</p>
                        {('description' in role && (role as any).description) && (
                          <p className="career__timeline-location" style={{ display: 'block', padding: 0, background: 'transparent', textTransform: 'none', color: 'var(--color-text-muted)', lineHeight: 1.5, marginTop: 'var(--space-xs)' }}>
                            {(role as any).description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* End Left Column timelines */}

          {/* Current Role */}
          <div className={`career__current-container reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '200ms' }}>
            <h3 className="career__current-title">Present Status</h3>
            <div className="career__role-card">
              <span className="career__current-badge badge badge-gold">Current Role</span>
              <h3 className="career__role-title">{career.current.role}</h3>
              <p className="career__role-company">{career.current.company}</p>
              
              {('description' in career.current) && (
                <p className="career__role-desc">{(career.current as any).description}</p>
              )}

              <div className="career__role-meta">
                <div className="career__role-meta-item">
                  <span className="career__role-meta-icon">⏱️</span>
                  <span><strong>{career.current.yearsOfExperience}</strong> years exp.</span>
                </div>
                <div className="career__role-meta-item">
                  <span className="career__role-meta-icon">📍</span>
                  <span>{career.current.location}</span>
                </div>
                <div className="career__role-meta-item">
                  <span className="career__role-meta-icon">🏢</span>
                  <span>{career.current.workMode}</span>
                </div>
                {career.current.showIncome && (
                  <div className="career__role-meta-item">
                    <span className="career__role-meta-icon">💰</span>
                    <span>{career.current.incomeRange}</span>
                  </div>
                )}
              </div>

              <div className="career__skills">
                <h4 className="career__skills-heading">Skills & Technologies</h4>
                <div className="career__skills-list">
                  {career.skills.map((skill, i) => (
                    <span className="career__skill-tag" key={i}>{skill}</span>
                  ))}
                </div>
              </div>

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
