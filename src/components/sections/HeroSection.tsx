'use client';

import { useModal } from '@/context/ModalContext';
import { proofCards } from '@/data/homepage';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const { openLetsTalk } = useModal();

  return (
    <section id="hero" className={styles.hero}>
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
