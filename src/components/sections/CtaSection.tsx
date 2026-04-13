'use client';

import { FormEvent, useState } from 'react';
import { useModal } from '@/context/ModalContext';
import styles from './CtaSection.module.css';

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyWzVJaEsEL7N1fx4B2xr5wOwbFYo1QMTRc6Wmfl7cer4d8jnvXdAgScszAkE676jyY5A/exec';

const BLOCKED_DOMAINS = [
  'gmail.com','yahoo.com','hotmail.com','outlook.com','aol.com','icloud.com',
  'me.com','mac.com','live.com','msn.com','ymail.com','protonmail.com',
  'proton.me','zoho.com','mail.com','gmx.com','tutanota.com',
];

function isWorkEmail(email: string) {
  const domain = email.split('@')[1]?.toLowerCase();
  return domain && !BLOCKED_DOMAINS.includes(domain);
}

const ctaBullets = [
  'Works with your existing mail house, ESP, and targeting process',
  'No PII or sensitive data required',
  '2–3 day production turnaround',
  'Starts with proof on your own historical data',
];

interface FormState {
  firstName: string;
  lastName: string;
  company: string;
  role: string;
  email: string;
  challenge: string;
  source: string;
}

const INITIAL_STATE: FormState = {
  firstName: '', lastName: '', company: '', role: '',
  email: '', challenge: '', source: '',
};

export default function CtaSection() {
  const { openLetsTalk } = useModal();
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  function update(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((p) => ({ ...p, [field]: e.target.value }));
      if (errors[field]) setErrors((p) => ({ ...p, [field]: '' }));
    };
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.firstName.trim()) newErrors.firstName = 'Required';
    if (!form.lastName.trim()) newErrors.lastName = 'Required';
    if (!form.company.trim()) newErrors.company = 'Required';
    if (!form.role) newErrors.role = 'Required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    } else if (!isWorkEmail(form.email)) {
      newErrors.email = 'Please use your work email address';
    }
    if (!form.challenge.trim()) newErrors.challenge = 'Required';
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

    setLoading(true);
    setSubmitError(false);

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(form as Record<string, string>).toString(),
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Form submission error:', err);
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
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

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <input
                    className={`field-input ${errors.firstName ? 'error' : ''}`}
                    type="text" placeholder="First name"
                    value={form.firstName} onChange={update('firstName')}
                  />
                  <input
                    className={`field-input ${errors.lastName ? 'error' : ''}`}
                    type="text" placeholder="Last name"
                    value={form.lastName} onChange={update('lastName')}
                  />
                </div>

                <input
                  className={`field-input ${errors.company ? 'error' : ''}`}
                  type="text" placeholder="Company / Organisation"
                  value={form.company} onChange={update('company')}
                />

                <select
                  className={`field-input field-select ${errors.role ? 'error' : ''}`}
                  value={form.role} onChange={update('role')}
                >
                  <option value="">Job title / Role…</option>
                  <option>CMO / VP Marketing</option>
                  <option>Director of Marketing</option>
                  <option>Direct Marketing Manager</option>
                  <option>Marketing Analyst</option>
                  <option>CEO / President</option>
                  <option>CTO / VP Technology</option>
                  <option>Data Science / Analytics</option>
                  <option>Other</option>
                </select>

                <input
                  className={`field-input ${errors.email ? 'error' : ''}`}
                  type="email" placeholder="Work email"
                  value={form.email} onChange={update('email')}
                />

                <textarea
                  className={`field-input ${styles.textarea} ${errors.challenge ? 'error' : ''}`}
                  placeholder="What challenge are you trying to solve?"
                  value={form.challenge} onChange={update('challenge')}
                />

                <select
                  className="field-input field-select"
                  value={form.source} onChange={update('source')}
                >
                  <option value="">How did you hear about AIgnyte?</option>
                  <option>LinkedIn</option>
                  <option>Google search</option>
                  <option>Word of mouth / Referral</option>
                  <option>Industry event / Conference</option>
                  <option>Direct mail industry publication</option>
                  <option>Other</option>
                </select>

                {submitError && (
                  <p style={{ color: 'red', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

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
