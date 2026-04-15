'use client';

import Link from 'next/link';
import { useModal } from '@/context/ModalContext';
import type { IndustryPage } from '@/data/industries';
import styles from './IndustryPage.module.css';

export default function IndustryPageClient({ industry }: { industry: IndustryPage }) {
  const { openLetsTalk } = useModal();
  const IndustryIcon = industry.icon;

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroTop}>
            <Link className={styles.backLink} href="/industries">← All Industries</Link>
            <span className={styles.sectorTag}>{industry.sector}</span>
          </div>
          <div className={styles.heroContent}>
            <div className={`${styles.heroEyebrow} fi`}>
              <span className={styles.heroIcon}><IndustryIcon size={24} strokeWidth={1.5} /></span>
              <span className={styles.heroName}>{industry.name}</span>
            </div>
            <h1 className="fi">{industry.heroTagline}</h1>
            <p className={`${styles.heroSub} fi`}>{industry.heroSub}</p>
            <div className={`${styles.heroActions} fi`}>
              <button className="btn-primary" onClick={openLetsTalk}>Let&apos;s Talk</button>
              <Link className="btn-ghost" href="/how-it-works">How It Works</Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className={styles.problem}>
        <div className={styles.problemInner}>
          <div className={styles.problemHeader}>
            <span className="section-tag">The Problem</span>
            <h2 style={{ marginTop: 12 }}>{industry.problemHeading}</h2>
          </div>
          <div className={`${styles.problemParas} aig-reveal`}>
            {industry.problemParas.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className={styles.useCasesSection}>
        <div className={styles.useCasesInner}>
          <div className={styles.useCasesHeader}>
            <span className="section-tag">Use Cases</span>
            <h2 style={{ marginTop: 12 }}>Where it makes a difference</h2>
          </div>
          <div className={styles.useCasesGrid}>
            {industry.useCases.map((uc, i) => (
              <div key={i} className={`${styles.useCaseCard} aig-reveal`}>
                <div className={styles.useCaseNum}>{String(i + 1).padStart(2, '0')}</div>
                <h3 className={styles.useCaseTitle}>{uc.title}</h3>
                <p className={styles.useCaseBody}>{uc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className={styles.whySection}>
        <div className={styles.whyInner}>
          <div className={styles.whyHeader}>
            <span className="section-tag light">Why Different</span>
            <h2 className="lt" style={{ marginTop: 12 }}>What makes AIgnyte different</h2>
          </div>
          <div className={styles.whyGrid}>
            {industry.whyPoints.map((pt, i) => (
              <div key={i} className={`${styles.whyCard} aig-reveal`}>
                <h3 className={styles.whyTitle}>{pt.title}</h3>
                <p className={styles.whyBody}>{pt.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2>{industry.cta}</h2>
          <p>Start with proof on your own data — before a single live campaign.</p>
          <div className={styles.ctaBtns}>
            <button className="btn-primary" onClick={openLetsTalk}>Let&apos;s Talk</button>
            <Link className="btn-secondary" href="/success-stories">See the Results →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
