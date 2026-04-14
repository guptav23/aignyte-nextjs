'use client';

import React from 'react';
import Link from 'next/link';
import { useModal } from '@/context/ModalContext';
import DirectMailDemo from '@/components/sections/DirectMailDemo';
import styles from './TechnologyPage.module.css';

const stages = [
  {
    tag: 'Stage 1',
    name: 'Genetic Signature',
    desc: (
      <>
        Every creative decoded into <strong>thousands of elements</strong> — the precise mix of
        emotional cues, value propositions, product terms, and creative elements. Done once.
        Reused every cycle.
      </>
    ),
    output: 'Input → Your creative catalog',
  },
  {
    tag: 'Stage 2',
    name: 'Preference Profile',
    desc: (
      <>
        At campaign time, a fresh Preference Profile is generated for every individual — i.e. how
        will that element influence the individual to respond or not. And this deep understanding is
        purely inferred from their own attributes and how others like them have responded and not
        responded before.
      </>
    ),
    output: 'Input → Your campaign file',
  },
  {
    tag: 'Stage 3',
    name: 'Optimal Match',
    desc: (
      <>
        Every eligible creative scored against every Preference Profile. The highest-scoring match
        assigned — subject to your volume caps, compliance rules, and constraints.{' '}
        <strong>Output ready-to-execute in your format.</strong>
      </>
    ),
    output: 'Output → Matched assignment file',
  },
];


const pillars = [
  {
    n: '01',
    title: 'Genetic Signature™',
    sub: 'Creative decomposition',
    body: 'Every creative in your catalogue is decomposed into its fundamental components: offer structure, emotional framing, visual hierarchy, call-to-action pattern, urgency signals, and social proof type. The result is a multi-dimensional Genetic Signature that captures what the creative is — not just what it looks like.',
    tag: 'Proprietary',
  },
  {
    n: '02',
    title: 'Individual Propensity Scoring',
    sub: 'One decision per person',
    body: "For each individual in your campaign file, AIgnyte scores the affinity between that person's profile and every creative's Genetic Signature. This is not segment-level matching — it is an individual-level decision, made independently for every record, every campaign.",
    tag: 'Core engine',
  },
  {
    n: '03',
    title: 'Closed-Loop Learning',
    sub: 'Improves with every campaign',
    body: 'Response data from every campaign is fed back into the model. The system updates its understanding of which signatures resonate with which profiles — automatically. No manual retraining. No additional investment. The model compounds over time.',
    tag: 'Continuous',
  },
  {
    n: '04',
    title: 'Privacy-Safe Architecture',
    sub: 'No PII required',
    body: 'AIgnyte operates on de-identified prospect data. Standard pre-screen bureau records are sufficient. No PII is transmitted or stored. The platform is designed from the ground up to work within the data constraints of direct marketing — not around them.',
    tag: 'By design',
  },
];

const specs = [
  { label: 'Data input', value: 'De-identified prospect records · standard pre-screen bureau fields' },
  { label: 'Creative input', value: 'Your existing catalogue — no new material required' },
  { label: 'Direct mail turnaround', value: '2–3 business days after file receipt' },
  { label: 'Email integration', value: 'Real-time API · sub-100ms per record' },
  { label: 'Setup time', value: '4–6 weeks (one-time)' },
  { label: 'Execution stack', value: 'Zero changes required — one additional workflow step' },
  { label: 'Model updates', value: 'Automatic after every campaign cycle' },
  { label: 'PII requirement', value: 'None' },
];

export default function TechnologyPage() {
  const { openLetsTalk } = useModal();

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className="section-tag fi">The Technology</span>
          <h1 className="fi">Three stages. One decision per individual. Every campaign.</h1>
          <p className={`${styles.heroSub} fi`}>
            AIgnyte sits between your selection process and your execution stack. It takes your
            campaign file as input and returns one individually-reasoned creative assignment per
            person as output — automatically, every cycle.
          </p>
        </div>
      </section>

      {/* Core Idea */}
      <section className={styles.pillars}>
        <div className={styles.pillarsInner}>
          <div className={`${styles.pillarsHeader} aig-reveal`}>
            <span className="section-tag">The Core Idea</span>
            <h2 style={{ marginTop: 12 }}>
              You already decide <em>who</em> to reach.
              <br />
              AIgnyte decides <em>what to say</em> to each of them.
            </h2>
            <p style={{ fontSize: 15, color: 'var(--mid)', lineHeight: 1.75, maxWidth: 700, marginTop: 16 }}>
              Your targeting models, selection criteria, and CRM determine which prospects and
              customers receive a campaign. The problem that isn&apos;t solved — and that no
              existing tool addresses at scale — is which message is right for each individual.
              AIgnyte exists to make that decision.{' '}
              <strong>For every person. Every campaign cycle. Automatically.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Stage 1 — Genetic Signature */}
      <section className={styles.contrast}>
        <div className={styles.contrastInner}>
          <span className="section-tag light">Stage One</span>
          <h2 style={{ color: 'oklch(1 0 0 / 0.92)', margin: '16px 0 16px' }}>
            Genetic Signature — Decoding the creative
          </h2>
          <p style={{ fontSize: 15, color: 'oklch(1 0 0 / 0.45)', lineHeight: 1.75, maxWidth: 700, marginBottom: 40 }}>
            Just as a fingerprint uniquely identifies a person, a Genetic Signature uniquely
            characterizes a creative. AIgnyte analyzes every element of every creative asset in
            your catalog — the envelope, the letter, the headline, the offer, the layout — and
            decomposes it into thousands of precise data points across four dimensions. This
            encoding happens once per creative and persists across campaigns.
          </p>

          {/* Interactive annotated credit card / direct mail demo */}
          <DirectMailDemo />

          <div style={{ background: 'oklch(1 0 0 / 0.04)', border: '1px solid oklch(0.68 0.160 50 / 0.30)', borderRadius: 8, padding: '18px 22px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <span style={{ fontSize: 20 }}>🧬</span>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Stage 1 Output</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'oklch(1 0 0 / 0.85)', marginBottom: 6, lineHeight: 1.4 }}>
                Every creative in your catalog is represented by its Genetic Signature — a unique fingerprint of the creative that captures everything that matters at an atomic level.
              </div>
              <div style={{ fontSize: 13, color: 'oklch(1 0 0 / 0.38)', lineHeight: 1.65 }}>
                A new creative is decoded once when it enters your catalog. After that, its Genetic Signature is available for every future campaign cycle. The more creatives you have, the more personalization surface AIgnyte has to work with.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Stages Diagram */}
      <section className={styles.specs}>
        <div className={styles.specsInner} style={{ maxWidth: 1000 }}>
          <div className={`${styles.specsHeader} aig-reveal`}>
            <span className="section-tag">How It Works</span>
            <h2 style={{ marginTop: 12 }}>From creative catalog to individual decision — in three stages</h2>
            <p style={{ fontSize: 15, color: 'var(--mid)', lineHeight: 1.7, marginTop: 14 }}>
              Once your creatives are encoded, AIgnyte runs two more stages at campaign time —
              generating preferences for every individual and assigning each person their best match.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 36px 1fr 36px 1fr', alignItems: 'stretch', gap: 0 }}>
            {stages.map((stage, i) => (
              <React.Fragment key={stage.tag}>
                <div style={{ background: 'var(--white)', border: '1.5px solid var(--border)', borderRadius: 12, padding: '28px 24px', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, borderRadius: '12px 12px 0 0', background: 'var(--orange)' }} />
                  <span style={{ fontFamily: 'monospace', fontSize: 9, fontWeight: 700, color: 'var(--orange)', textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginBottom: 10, display: 'block' }}>
                    {stage.tag}
                  </span>
                  <div style={{ fontFamily: 'var(--font-geist, sans-serif)', fontSize: 20, fontWeight: 400, color: 'var(--ink)', marginBottom: 12, lineHeight: 1.2 }}>
                    {stage.name}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.65, marginBottom: 18 }}>
                    {stage.desc}
                  </div>
                  <div style={{ padding: '10px 14px', background: 'var(--orange-lt)', border: '1px solid rgba(237,125,49,0.25)', borderRadius: 6, fontFamily: 'monospace', fontSize: 10, fontWeight: 700, color: 'var(--orange)', textTransform: 'uppercase' as const, letterSpacing: '0.06em' }}>
                    {stage.output}
                  </div>
                </div>
                {i < stages.length - 1 && (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 40, color: 'var(--muted)', fontSize: 20 }}>
                    →
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className={styles.pillars}>
        <div className={styles.pillarsInner}>
          <div className={`${styles.pillarsHeader} aig-reveal`}>
            <span className="section-tag">Core technology</span>
            <h2>Four pillars of Message Decisioning</h2>
          </div>
          <div className={styles.pillarsGrid}>
            {pillars.map((p) => (
              <div key={p.n} className={`${styles.pillar} aig-reveal`}>
                <div className={styles.pillarTop}>
                  <span className={styles.pillarN}>{p.n}</span>
                  <span className={styles.pillarTag}>{p.tag}</span>
                </div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarSub}>{p.sub}</p>
                <p className={styles.pillarBody}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className={styles.specs}>
        <div className={styles.specsInner}>
          <div className={`${styles.specsHeader} aig-reveal`}>
            <span className="section-tag">Specs</span>
            <h2>What integration actually looks like</h2>
          </div>
          <div className={styles.specsTable}>
            {specs.map((s) => (
              <div key={s.label} className={styles.specsRow}>
                <div className={styles.specsLabel}>{s.label}</div>
                <div className={styles.specsValue}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <span className="section-tag light">Get Started</span>
          <h2>Let&apos;s talk about your one-to-one (direct marketing) program.</h2>
          <p>
            We&apos;ll walk through your current setup, show you where Message Decisioning fits,
            and give you a realistic lift projection based on programs we&apos;ve run in your
            vertical.
          </p>
          <div className={styles.ctaBtns}>
            <button className="btn-primary" onClick={openLetsTalk}>Let&apos;s Talk</button>
            <Link className="btn-ghost" href="/success-stories">See the Results →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
