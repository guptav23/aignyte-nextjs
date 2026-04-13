'use client';

import { FormEvent, useState } from 'react';
import { useModal } from '@/context/ModalContext';
import styles from './CtaSection.module.css';

const ctaBullets = [
  'Works with your existing mail house, ESP, and targeting process',
  'No PII or sensitive data required',
  '2–3 day production turnaround',
  'Starts with proof on your own historical data',
];

export default function CtaSection() {
  const { openLetsTalk } = useModal();
  const [form, setForm] = useState({ name: '', org: '', role: '', email: '', issue: '' });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function update(field: string) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((p) => ({ ...p, [field]: e.target.value }));
      setErrors((p) => ({ ...p, [field]: false }));
    };
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    if (!form.name.trim()) newErrors.name = true;
    if (!form.org.trim()) newErrors.org = true;
    if (!form.role) newErrors.role = true;
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = true;
    if (!form.issue.trim()) newErrors.issue = true;
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  }

  return (
    <section id="cta" className={styles.section}>
      <div className={styles.container}>
        {/* Left */}
        <div className={`${styles.copy} aig-reveal`}>
          <span className={styles.tag}>Start with Proof</span>
          <h2 className={styles.heading}>
            See the lift on your data.<br />Before a single live campaign.
          </h2>
          <p className={styles.sub}>
            Every AIgnyte engagement starts with a blind holdout on your historical campaigns.
            You see the lift before you commit to anything.
          </p>
          <div className={styles.bullets}>
            {ctaBullets.map((b) => (
              <div key={b} className={styles.bullet}>
                <span className={styles.bulletDot} />
                <p>{b}</p>
              </div>
            ))}
          </div>
          <p className={styles.contact}>
            Or call us at (908) 747-2000 · info@aignyte.com
          </p>
        </div>

        {/* Right: inline form */}
        <div className={`${styles.formPanel} aig-reveal`}>
          {submitted ? (
            <div className={styles.successState}>
              <div className={styles.successIcon}>✓</div>
              <h3 className={styles.successTitle}>You&apos;re on our radar.</h3>
              <p className={styles.successBody}>We&apos;ll be in touch within one business day.</p>
            </div>
          ) : (
            <>
              <div className={styles.formTitle}>Get in touch</div>
              <p className={styles.formSub}>Tell us about your program and we&apos;ll set up a call.</p>
              <form onSubmit={handleSubmit} noValidate>
                <input
                  className={`field-input ${errors.name ? 'error' : ''}`}
                  type="text" placeholder="Your name"
                  value={form.name} onChange={update('name')}
                />
                <input
                  className={`field-input ${errors.org ? 'error' : ''}`}
                  type="text" placeholder="Organisation"
                  value={form.org} onChange={update('org')}
                />
                <select
                  className={`field-input field-select ${errors.role ? 'error' : ''}`}
                  value={form.role} onChange={update('role')}
                >
                  <option value="">Your role…</option>
                  <option>CMO / VP Marketing</option>
                  <option>Director of Marketing</option>
                  <option>Direct Marketing Manager</option>
                  <option>Marketing Analyst</option>
                  <option>CEO / President</option>
                  <option>Other</option>
                </select>
                <input
                  className={`field-input ${errors.email ? 'error' : ''}`}
                  type="email" placeholder="Work email"
                  value={form.email} onChange={update('email')}
                />
                <textarea
                  className={`field-input ${styles.textarea} ${errors.issue ? 'error' : ''}`}
                  placeholder="Your challenge or question…"
                  value={form.issue} onChange={update('issue')}
                />
                <button type="submit" className={styles.submit} disabled={loading}>
                  {loading ? 'Sending…' : 'Send Message →'}
                </button>
                <p className={styles.formNote}>We reply within one business day.</p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
