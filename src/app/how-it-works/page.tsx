'use client';

import Link from 'next/link';
import { useModal } from '@/context/ModalContext';
import styles from './HowItWorksPage.module.css';

const phases = [
  {
    phase: 'Phase 1',
    name: 'Setup',
    tag: 'Connect, encode, prove — before a single live campaign runs',
    steps: [
      {
        n: '01',
        title: 'Data connections',
        body: 'Secure de-identified linkages to your campaign history, prospect data, and response outcomes. API connectors for email; file exchange in your format for direct mail.',
      },
      {
        n: '02',
        title: 'Creative catalogue',
        body: 'Your existing inventory encoded into Genetic Signatures. New creatives added at any point and incorporated immediately.',
      },
      {
        n: '03',
        title: 'Proof of value',
        body: 'A blind holdout on your historical campaigns. You see the lift before committing to a single live run.',
      },
    ],
    outcome: 'Connected, encoded, and lift proven — before any live campaign.',
    outcomeClass: styles.outcomeSetup,
  },
  {
    phase: 'Phase 2',
    name: 'Production',
    tag: 'One new step. Self-improving. Nothing else changes.',
    steps: [
      {
        n: '04',
        title: 'Your selection runs unchanged',
        body: 'Your targeting models, CRM, and criteria are untouched. AIgnyte receives the selected population when your process is complete.',
      },
      {
        n: '05',
        title: 'AIgnyte assigns the creative',
        body: 'Direct mail: matched file returned within two days, in parallel with other process steps.',
      },
      {
        n: '06',
        title: 'It improves automatically',
        body: "Each campaign's response data feeds the next cycle. No retraining, no manual tuning.",
      },
    ],
    outcome: 'A live, self-improving decision layer; zero latency added to your campaign cycle.',
    outcomeClass: styles.outcomeProd,
  },
];

const stackLayers = [
  {
    icon: '🎯',
    name: 'Targeting & Selection',
    desc: 'Your response models, selection criteria, and prospect file — unchanged',
    badge: 'Yours',
    isAignyte: false,
  },
  {
    icon: '⚡',
    name: 'AIgnyte — Message Decisioning Layer',
    desc: 'Assigns optimal creative per individual → returns matched output · Direct mail: 2 days · Email: real-time API',
    badge: 'AIgnyte',
    isAignyte: true,
  },
  {
    icon: '🖨️',
    name: 'Execution & Fulfilment',
    desc: 'Your print vendors, email platform, or digital execution stack — unchanged',
    badge: 'Yours',
    isAignyte: false,
  },
  {
    icon: '📊',
    name: 'Response Data',
    desc: 'Feeds back to AIgnyte automatically — sharpens the next cycle',
    badge: 'Yours',
    isAignyte: false,
  },
];

const dataflowCells = [
  {
    dir: '→ You send',
    title: 'What goes in',
    items: [
      'De-identified prospect selection file',
      'Creative catalogue (once, at setup)',
      'Volume caps, carrier-route and eligibility rules',
      'No PII at any stage',
    ],
  },
  {
    dir: '← AIgnyte returns',
    title: 'What comes back',
    items: [
      'Direct mail: Matched file in your format within 2 days',
      'Email: Recommendations via API in real time',
      'New creatives available next cycle immediately',
    ],
  },
  {
    dir: '↻ Feedback loop',
    title: 'What feeds the next cycle',
    items: [
      'Campaign response data — who responded to what',
      'Models update automatically — no retraining',
    ],
  },
];

const constraints = [
  {
    icon: '⚖️',
    title: 'Volume & inventory caps',
    body: 'Floor and ceiling constraints on creative volumes built directly into the matching decision.',
  },
  {
    icon: '📍',
    title: 'Geographic & carrier-route rules',
    body: 'Creative eligibility by state, region, or carrier route — applied at the individual level.',
  },
  {
    icon: '📋',
    title: 'Regulatory & compliance rules',
    body: 'Suppression lists, opt-out requirements, FCRA rules, and product restrictions — hard constraints, never overridden.',
  },
  {
    icon: '🔒',
    title: 'No PII — privacy by design',
    body: "De-identified data only. No personally identifiable information passes through AIgnyte's systems at any stage.",
  },
];

export default function HowItWorksPage() {
  const { openLetsTalk } = useModal();

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className="section-tag fi">How It Works</span>
          <h1 className="fi">Two phases. Proof first, then production.</h1>
          <p className={`${styles.heroSub} fi`}>
            First we demonstrate measurable lift on your existing campaigns before you commit to
            anything. Then we operate as a single decision layer inside your existing workflow —
            with no changes to your stack.
          </p>
        </div>
      </section>

      {/* Phases — sticky stacking cards */}
      <section className={styles.phases}>
        <div className={styles.phasesInner}>
          {phases.map((p, i) => (
            <div key={p.phase} className={styles.phaseSlot}>
              <div className={`${styles.phaseCard} ${i === 0 ? styles.phaseCard1 : styles.phaseCard2}`}>
                <div className={styles.phaseHeader}>
                  <div>
                    <span className={styles.phaseNum}>{p.phase}</span>
                    <h2 className={styles.phaseName}>{p.name}</h2>
                  </div>
                  <span className={styles.phaseTag}>{p.tag}</span>
                </div>
                <div className={styles.phaseSteps}>
                  {p.steps.map((s) => (
                    <div key={s.n} className={styles.step}>
                      <div className={styles.stepN}>{s.n}</div>
                      <div>
                        <div className={styles.stepTitle}>{s.title}</div>
                        <p className={styles.stepBody}>{s.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={`${styles.outcome} ${p.outcomeClass}`}>
                  <span className={styles.outcomeLabel}>Outcome</span>
                  <p className={styles.outcomeText}>{p.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Where AIgnyte Fits */}
      <section className={styles.integration}>
        <div className={styles.integrationInner}>
          <span className="section-tag light aig-reveal">Where AIgnyte Fits</span>
          <h2 className={`${styles.integrationH2} aig-reveal`}>One new step. Everything else stays the same.</h2>
          <p style={{ color: 'oklch(1 0 0 / 0.45)', fontSize: 16, lineHeight: 1.7, marginBottom: 40, maxWidth: 660 }}>
            AIgnyte sits between selection and execution — receiving your campaign file and
            returning a matched creative assignment. Your targeting models, CRM, vendors, and data
            infrastructure are all untouched.
          </p>
          <div className={styles.integrationFlow}>
            {stackLayers.map((layer, i) => (
              <div key={i} className={styles.intStep}>
                <div className={`${styles.intDot} ${layer.isAignyte ? styles.intDotAignyte : ''}`}>
                  {layer.icon}
                </div>
                <p className={styles.intLabel}>{layer.name}</p>
                <p className={styles.intSub}>{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical constraints */}
      <section className={styles.constraints}>
        <div className={styles.constraintsInner}>
          <div className={`${styles.constraintsHeader} aig-reveal`}>
            <span className="section-tag">Examples of practical constraints AIgnyte incorporates</span>
          </div>
          <div className={styles.constraintsGrid}>
            {constraints.map((c) => (
              <div key={c.title} className={`${styles.constraintCard} aig-reveal`}>
                <div className={styles.constraintCheck}>{c.icon}</div>
                <div>
                  <h3 className={styles.constraintTitle}>{c.title}</h3>
                  <p className={styles.constraintBody}>{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <span className="section-tag light">Get Started</span>
          <h2 style={{ marginTop: 32 }}>Let&apos;s talk about your one-to-one (direct marketing) program.</h2>
          <p>
            We&apos;ll walk through your current setup, show you where Message Decisioning fits,
            and give you a realistic lift projection based on programs we&apos;ve run in your
            vertical.
          </p>
          <div className={styles.ctaBtns}>
            <button className="btn-primary" onClick={openLetsTalk}>Let&apos;s Talk</button>
            <Link className="btn-ghost" href="/technology">See the Technology →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
