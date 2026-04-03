import { hero } from '../data/data';
import '../styles/Hero.css';

export default function Hero() {
  const renderLetters = (text: string, offset: number = 0) => {
    return text.split('').map((char, i) => (
      <span
        key={i}
        style={{ animationDelay: `${(i + offset) * 0.05 + 0.5}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section className="hero" id="hero">
      <div className="grain-overlay" />

      {/* Decorative background elements */}
      <div className="hero__bg-letter" aria-hidden="true">
        {hero.firstName.charAt(0)}
      </div>

      {/* Floating decorative petals */}
      <div className="hero__petals" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="hero__petal"
            style={{
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${8 + i * 2}s`,
              fontSize: `${10 + i * 3}px`,
              opacity: 0.06 + i * 0.01,
            }}
          >
            ❋
          </span>
        ))}
      </div>

      {/* Floating hearts decoration */}
      <div className="hero__hearts" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className="hero__floating-heart"
            style={{
              left: `${20 + i * 16}%`,
              animationDelay: `${i * 2.5 + 1}s`,
              animationDuration: `${5 + i * 1.5}s`,
              fontSize: `${8 + i * 2}px`,
            }}
          >
            ♥
          </span>
        ))}
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__label">
            <span className="hero__label-line" />
            {hero.sectionLabel}
            <span className="hero__label-line" />
          </span>

          <h1 className="hero__name letter-reveal">
            <span className="hero__name-first">
              {renderLetters(hero.firstName)}
            </span>
            <span className="hero__name-last">
              {renderLetters(hero.lastName, hero.firstName.length)}
            </span>
          </h1>

          <p className="hero__subtitle fade-in-up" style={{ animationDelay: '1s' }}>
            {hero.subtitle}
          </p>

          <p className="hero__tagline fade-in-up" style={{ animationDelay: '1.2s' }}>
            <span className="hero__tagline-mark">"</span>
            {hero.tagline}
            <span className="hero__tagline-mark">"</span>
          </p>

          <div className="hero__badges fade-in-up" style={{ animationDelay: '1.4s' }}>
            {hero.quickBadges.map((b, i) => (
              <span className="hero__badge" key={i} style={{ animationDelay: `${1.5 + i * 0.1}s` }}>
                <span className="hero__badge-icon">{b.icon}</span>
                {b.label}
              </span>
            ))}
          </div>

          <div className="hero__ctas fade-in-up" style={{ animationDelay: '1.6s' }}>
            <a href={hero.ctaPrimary.href} className="btn btn-primary hero__cta-primary">
              {hero.ctaPrimary.label}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M8 13l4-4M8 13L4 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href={hero.ctaSecondary.href} className="btn btn-secondary hero__cta-secondary">
              {hero.ctaSecondary.label}
              <span className="hero__cta-heart">♥</span>
            </a>
          </div>
        </div>

        <div className="hero__photo-wrapper fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="hero__photo-frame">
            {/* Gold ornamental border */}
            <div className="hero__photo-ring hero__photo-ring--outer" />
            <div className="hero__photo-ring hero__photo-ring--inner" />
            <div className="hero__photo-placeholder">
              <span className="hero__photo-initials">{hero.firstName.charAt(0)}{hero.lastName.charAt(0)}</span>
              <span className="hero__photo-add">Add Photo</span>
            </div>
            {/* Corner ornaments */}
            <svg className="hero__deco hero__deco--tl" width="70" height="70" viewBox="0 0 70 70" aria-hidden="true">
              <path d="M5 35 Q5 5 35 5" stroke="var(--color-gold)" strokeWidth="2" fill="none" opacity="0.5"/>
              <path d="M10 35 Q10 10 35 10" stroke="var(--color-gold)" strokeWidth="1" fill="none" opacity="0.3"/>
              <circle cx="35" cy="5" r="3" fill="var(--color-gold)" opacity="0.4"/>
              <circle cx="5" cy="35" r="2" fill="var(--color-gold)" opacity="0.3"/>
            </svg>
            <svg className="hero__deco hero__deco--br" width="70" height="70" viewBox="0 0 70 70" aria-hidden="true">
              <path d="M65 35 Q65 65 35 65" stroke="var(--color-gold)" strokeWidth="2" fill="none" opacity="0.5"/>
              <path d="M60 35 Q60 60 35 60" stroke="var(--color-gold)" strokeWidth="1" fill="none" opacity="0.3"/>
              <circle cx="35" cy="65" r="3" fill="var(--color-gold)" opacity="0.4"/>
              <circle cx="65" cy="35" r="2" fill="var(--color-gold)" opacity="0.3"/>
            </svg>
            <svg className="hero__deco hero__deco--tr" width="45" height="45" viewBox="0 0 45 45" aria-hidden="true">
              <circle cx="22" cy="22" r="6" fill="none" stroke="var(--color-rose)" strokeWidth="1" opacity="0.3"/>
              <circle cx="22" cy="22" r="2.5" fill="var(--color-rose)" opacity="0.25"/>
            </svg>
            <svg className="hero__deco hero__deco--bl" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
              <path d="M20 5 L25 15 L35 15 L27 22 L30 33 L20 26 L10 33 L13 22 L5 15 L15 15 Z" fill="var(--color-gold)" opacity="0.1" stroke="var(--color-gold)" strokeWidth="0.5"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll fade-in" style={{ animationDelay: '2.2s' }}>
        <span className="hero__scroll-text">Scroll to explore</span>
        <div className="hero__scroll-line">
          <div className="hero__scroll-dot" />
        </div>
      </div>
    </section>
  );
}
