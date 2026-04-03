import { useState } from 'react';
import { gallery } from '../data/data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Gallery.css';

export default function Gallery() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? gallery.photos
    : gallery.photos.filter(p => p.category === activeFilter);

  return (
    <section className="gallery section" id="gallery" ref={ref}>
      <div className="section-container">
        <div className={`section-header reveal ${isRevealed ? 'revealed' : ''}`}>
          <span className="section-label">Gallery</span>
          <h2 className="section-title">Photo Gallery</h2>
        </div>

        {/* Filter tabs */}
        <div className={`gallery__filters reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '100ms' }}>
          {gallery.categories.map((cat) => (
            <button
              key={cat}
              className={`gallery__filter-btn ${activeFilter === cat ? 'gallery__filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="gallery__grid">
          {filtered.map((photo, i) => (
            <div
              className={`gallery__item reveal ${isRevealed ? 'revealed' : ''}`}
              key={`${photo.src}-${i}`}
              style={{ transitionDelay: `${(i + 2) * 60}ms` }}
            >
              <div className="gallery__photo-card">
                <div className="gallery__photo-placeholder">
                  <span className="gallery__photo-emoji">
                    {photo.category === 'Formal' ? '👔' :
                     photo.category === 'Casual' ? '😊' :
                     photo.category === 'Travel' ? '✈️' :
                     photo.category === 'Family' ? '👨‍👩‍👧' : '🎯'}
                  </span>
                </div>
                <div className="gallery__photo-overlay">
                  <span className="gallery__photo-alt">{photo.alt}</span>
                  <span className="gallery__photo-cat badge">{photo.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
