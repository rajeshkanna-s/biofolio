import { lifestyle } from '../data/data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Lifestyle.css';

export default function Lifestyle() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section className="lifestyle section section-alt" id="lifestyle" ref={ref}>
      <div className="section-container">
        <div className={`section-header reveal ${isRevealed ? 'revealed' : ''}`}>
          <span className="section-label">Lifestyle</span>
          <h2 className="section-title">Life Beyond Work</h2>
        </div>

        <div className="lifestyle__grid">
          {/* Food */}
          <div className={`lifestyle__card card reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '100ms' }}>
            <span className="lifestyle__card-icon">🍽️</span>
            <h3 className="lifestyle__card-title">Food & Cooking</h3>
            <span className="badge badge-gold">{lifestyle.food.preference}</span>
            <p className="lifestyle__card-text">{lifestyle.food.cooking}</p>
            <div className="lifestyle__tags">
              {lifestyle.food.loves.map((item, i) => (
                <span className="lifestyle__tag" key={i}>{item}</span>
              ))}
            </div>
          </div>

          {/* Fitness */}
          <div className={`lifestyle__card card reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '200ms' }}>
            <span className="lifestyle__card-icon">💪</span>
            <h3 className="lifestyle__card-title">Fitness & Sports</h3>
            <p className="lifestyle__card-text">{lifestyle.fitness.routine}</p>
            <div className="lifestyle__tags">
              {lifestyle.fitness.sports.map((s, i) => (
                <span className="lifestyle__tag" key={i}>{s}</span>
              ))}
            </div>
            <p className="lifestyle__card-note">🧘 {lifestyle.fitness.yogaOrMeditation}</p>
          </div>

          {/* Hobbies */}
          <div className={`lifestyle__card lifestyle__card--wide card reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '300ms' }}>
            <span className="lifestyle__card-icon">🎯</span>
            <h3 className="lifestyle__card-title">Hobbies & Interests</h3>
            <div className="lifestyle__hobbies-grid">
              {lifestyle.hobbies.map((hobby, i) => (
                <span className="lifestyle__hobby-chip" key={i}>
                  <span className="lifestyle__hobby-icon">{hobby.icon}</span>
                  {hobby.label}
                </span>
              ))}
            </div>
          </div>

          {/* Travel */}
          <div className={`lifestyle__card card reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '400ms' }}>
            <span className="lifestyle__card-icon">✈️</span>
            <h3 className="lifestyle__card-title">Travel</h3>
            <div className="lifestyle__tags">
              {lifestyle.travel.visited.map((place, i) => (
                <span className="lifestyle__tag" key={i}>{place}</span>
              ))}
            </div>
            <p className="lifestyle__card-note">💭 <em>{lifestyle.travel.dream}</em></p>
          </div>

          {/* Favourites */}
          <div className={`lifestyle__card card reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '500ms' }}>
            <span className="lifestyle__card-icon">⭐</span>
            <h3 className="lifestyle__card-title">Favourites</h3>
            <div className="lifestyle__favs">
              <div className="lifestyle__fav-group">
                <span className="lifestyle__fav-label">📚 Books</span>
                <div className="lifestyle__tags">
                  {lifestyle.favourites.books.map((b, i) => (
                    <span className="lifestyle__tag" key={i}>{b}</span>
                  ))}
                </div>
              </div>
              <div className="lifestyle__fav-group">
                <span className="lifestyle__fav-label">🎬 Movies</span>
                <div className="lifestyle__tags">
                  {lifestyle.favourites.movies.map((m, i) => (
                    <span className="lifestyle__tag" key={i}>{m}</span>
                  ))}
                </div>
              </div>
              <div className="lifestyle__fav-group">
                <span className="lifestyle__fav-label">🎵 Music</span>
                <div className="lifestyle__tags">
                  {lifestyle.favourites.music.map((mu, i) => (
                    <span className="lifestyle__tag" key={i}>{mu}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Typical Sunday & Habits */}
          <div className={`lifestyle__card lifestyle__card--wide card reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '600ms' }}>
            <span className="lifestyle__card-icon">☀️</span>
            <h3 className="lifestyle__card-title">A Typical Sunday</h3>
            <p className="lifestyle__card-text lifestyle__sunday">{lifestyle.habits.typicalSunday}</p>
            <div className="lifestyle__habits">
              <div className="lifestyle__habit">
                <span className="lifestyle__habit-label">🚭 Smoking</span>
                <span className="lifestyle__habit-value">{lifestyle.habits.smoking}</span>
              </div>
              <div className="lifestyle__habit">
                <span className="lifestyle__habit-label">🍷 Drinking</span>
                <span className="lifestyle__habit-value">{lifestyle.habits.drinking}</span>
              </div>
              <div className="lifestyle__habit">
                <span className="lifestyle__habit-label">😴 Sleep</span>
                <span className="lifestyle__habit-value">{lifestyle.habits.sleepSchedule}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
