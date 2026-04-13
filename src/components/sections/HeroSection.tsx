'use client';

import { useEffect, useRef } from 'react';
import { useModal } from '@/context/ModalContext';
import { proofCards } from '@/data/homepage';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const { openLetsTalk } = useModal();
  const heroRef = useRef<HTMLElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const hero = heroRef.current;
    if (!hero) return;

    // Initialize orb positions to a pleasant default (left-center of hero)
    const r = hero.getBoundingClientRect();
    const mouse = { x: r.width * 0.35, y: r.height * 0.48 };
    // Each orb tracks at a different lag — creates parallax depth
    const p1 = { x: mouse.x, y: mouse.y }; // slowest
    const p2 = { x: mouse.x, y: mouse.y }; // mid
    const p3 = { x: mouse.x, y: mouse.y }; // snappiest

    let raf: number;

    function onMouseMove(e: MouseEvent) {
      const rect = hero!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function tick() {
      // Lerp — the lower the factor, the more it lags (spring-like)
      p1.x += (mouse.x - p1.x) * 0.04;
      p1.y += (mouse.y - p1.y) * 0.04;
      p2.x += (mouse.x - p2.x) * 0.075;
      p2.y += (mouse.y - p2.y) * 0.075;
      p3.x += (mouse.x - p3.x) * 0.13;
      p3.y += (mouse.y - p3.y) * 0.13;

      // Update transforms directly — GPU composited, no layout recalc
      if (orb1Ref.current)
        orb1Ref.current.style.transform = `translate(${p1.x - 350}px, ${p1.y - 350}px)`;
      if (orb2Ref.current)
        orb2Ref.current.style.transform = `translate(${p2.x - 250}px, ${p2.y - 250}px)`;
      if (orb3Ref.current)
        orb3Ref.current.style.transform = `translate(${p3.x - 160}px, ${p3.y - 160}px)`;

      raf = requestAnimationFrame(tick);
    }

    hero.addEventListener('mousemove', onMouseMove);
    raf = requestAnimationFrame(tick);

    return () => {
      hero.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="hero" className={styles.hero} ref={heroRef}>
      {/* Mouse-tracking glow orbs — purely decorative */}
      <div className={styles.orbLayer} aria-hidden="true">
        <div ref={orb1Ref} className={styles.orb1} />
        <div ref={orb2Ref} className={styles.orb2} />
        <div ref={orb3Ref} className={styles.orb3} />
      </div>

      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Left: copy */}
          <div className={styles.copy}>
            <h1 className="fi">
              AIgnyte — The <span className={styles.gradientWord}>Message Decisioning</span> Platform
            </h1>
            <p className={`${styles.sub} fi`} style={{ fontSize: 15 }}>
              AI that decides which message to send to each individual target — automatically.
            </p>
            <p className={`${styles.sub} fi`}>
              AIgnyte is the decision layer your marketing stack is missing. It reads each
              individual&apos;s signals, selects the optimal message from your existing creatives,
              and learns from every outcome — without new data, new creative, or new testing
              investment.
            </p>
            <div className={`${styles.btns} fi`}>
              <button className="btn-primary" onClick={openLetsTalk}>
                Let&apos;s Talk
              </button>
              <a className="btn-secondary" href="#results">
                See the Results
              </a>
            </div>
          </div>

          {/* Right: proof cards */}
          <div className={`${styles.proofCards} fi`}>
            {proofCards.map((card, i) => (
              <div
                key={i}
                className={styles.proofCard}
                data-spotlight
              >
                <div className={styles.proofNum}>
                  <span className={styles.proofPlus}>+</span>{card.num.replace('+', '')}%
                </div>
                <div className={styles.proofInfo}>
                  <div className={styles.proofMetric}>{card.metric}</div>
                  <div className={styles.proofContext}>{card.context}</div>
                </div>
                <span className={styles.proofChannel}>{card.channel}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
