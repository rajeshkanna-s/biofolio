import { useEffect, useRef, useCallback } from 'react';
import { useScrollProgress } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickStats from './components/QuickStats';
import About from './components/About';
import PersonalDetails from './components/PersonalDetails';
import CareerSection from './components/CareerSection';
import FamilySection from './components/FamilySection';
import Horoscope from './components/Horoscope';
import Lifestyle from './components/Lifestyle';
import Goals from './components/Goals';
import PartnerExpectations from './components/PartnerExpectations';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function OrnamentDivider() {
  return (
    <div className="ornament-divider" aria-hidden="true">
      <span className="ornament-divider__line" />
      <span className="ornament-divider__icon">✦</span>
      <span className="ornament-divider__line" />
    </div>
  );
}

// 🌸 Rose Petal Rain — Continuous falling petals
function PetalRain() {
  const petals = ['🌸', '🩷', '💮', '🌺', '🪷', '✿', '❀', '🌷', '💗', '🩵'];
  const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 20;
  return (
    <div className="petal-rain" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="petal-rain__petal">
          {petals[i % petals.length]}
        </span>
      ))}
    </div>
  );
}

// 💕 Floating Hearts — Rising from bottom
function FloatingHearts() {
  const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 5 : 8;
  return (
    <div className="floating-hearts" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="floating-hearts__heart">
          {i % 3 === 0 ? '💕' : i % 3 === 1 ? '💖' : '💗'}
        </span>
      ))}
    </div>
  );
}

// ✨ Fairy Dust Particles — Rising sparkling particles
function FairyDust() {
  const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 6 : 10;
  return (
    <div className="fairy-dust" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="fairy-dust__particle" />
      ))}
    </div>
  );
}

function App() {
  const scrollProgress = useScrollProgress();
  const cursorRef = useRef<HTMLDivElement>(null);

  // ✨ Sparkle Cursor Trail — sparkles follow mouse
  const createSparkle = useCallback((x: number, y: number) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle-cursor';
    sparkle.style.left = `${x - 5}px`;
    sparkle.style.top = `${y - 5}px`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 800);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || window.matchMedia('(pointer: coarse)').matches) return;

    let sparkleThrottle = 0;

    const move = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX - 4}px`;
      cursor.style.top = `${e.clientY - 4}px`;

      // ✨ Create sparkle particles on mouse movement (throttled)
      const now = Date.now();
      if (now - sparkleThrottle > 80) {
        sparkleThrottle = now;
        createSparkle(
          e.clientX + (Math.random() - 0.5) * 20,
          e.clientY + (Math.random() - 0.5) * 20
        );
      }
    };

    const addHover = () => cursor.classList.add('custom-cursor--hover');
    const removeHover = () => cursor.classList.remove('custom-cursor--hover');

    document.addEventListener('mousemove', move, { passive: true });

    const interactiveElements = document.querySelectorAll('a, button, .card, .badge, .gallery__photo-card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      document.removeEventListener('mousemove', move);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, [createSparkle]);

  return (
    <>
      {/* ✨ Enchanting Animated Overlays */}
      <PetalRain />
      <FloatingHearts />
      <FairyDust />

      {/* Custom cursor (desktop only) */}
      <div className="custom-cursor" ref={cursorRef} />

      {/* Scroll Progress Bar */}
      <div className="scroll-progress">
        <div
          className="scroll-progress-bar"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      <Navbar />
      <main>
        <Hero />
        <QuickStats />
        <OrnamentDivider />
        <About />
        <OrnamentDivider />
        <PersonalDetails />
        <OrnamentDivider />
        <CareerSection />
        <OrnamentDivider />
        <FamilySection />
        <Horoscope />
        <OrnamentDivider />
        <Lifestyle />
        <OrnamentDivider />
        <Goals />
        <OrnamentDivider />
        <PartnerExpectations />
        <OrnamentDivider />
        <Gallery />
        <OrnamentDivider />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
