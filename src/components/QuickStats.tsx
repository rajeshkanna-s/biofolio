import { useEffect, useRef, useState, useMemo } from 'react';
import { quickStats } from '../data/data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/QuickStats.css';

function AnimatedValue({ value, isVisible }: { value: string; isVisible: boolean }) {
  const [display, setDisplay] = useState(value);
  const frameRef = useRef<number>(0);

  const parsed = useMemo(() => {
    const match = value.match(/^(\d+)/);
    if (!match) return null;
    return {
      targetNum: parseInt(match[1]),
      suffix: value.slice(match[0].length),
    };
  }, [value]);

  useEffect(() => {
    if (!isVisible || !parsed) {
      if (!isVisible) setDisplay(value);
      return;
    }

    const { targetNum, suffix } = parsed;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * targetNum);
      setDisplay(`${current}${suffix}`);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [isVisible, value, parsed]);

  return <span className="stat__value">{display}</span>;
}

export default function QuickStats() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section className="quick-stats section-alt" ref={ref}>
      <div className="quick-stats__container">
        {quickStats.map((stat, i) => (
          <div
            className={`stat reveal ${isRevealed ? 'revealed' : ''}`}
            key={i}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="stat__icon">{stat.icon}</span>
            <AnimatedValue value={stat.value} isVisible={isRevealed} />
            <span className="stat__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
