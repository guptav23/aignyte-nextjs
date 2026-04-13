'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import { useModal } from '@/context/ModalContext';
import styles from './LetsTalkModal.module.css';

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

export default function LetsTalkModal() {
  const { isLetsTalkOpen, closeLetsTalk } = useModal();
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isLetsTalkOpen) {
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      // Reset on close
      setTimeout(() => {
        setForm(INITIAL_STATE);
        setErrors({});
        setSubmitted(false);
        setLoading(false);
        setSubmitError(false);
      }, 300);
    }
  }, [isLetsTalkOpen]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') closeLetsTalk();
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [closeLetsTalk]);

  function update(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
    };
  }

  function validate(): boolean {
    const newErrors: typeof errors = {};
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
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setSubmitError(false);

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        // Apps Script requires no-cors when called from the browser directly
        mode: 'no-cors',
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Form submission error:', err);
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
  }

  if (!isLetsTalkOpen) return null;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="ltm-title"
      onClick={(e) => { if (e.target === e.currentTarget) closeLetsTalk(); }}
    >
      <div className={styles.modal}>
        <div className={styles.stripe} />

        {submitted ? (
          <div className={styles.success}>
            <div className={styles.successIcon}>✓</div>
            <h2 className={styles.successTitle}>You&apos;re on our radar.</h2>
            <p className={styles.successBody}>
              Thanks for reaching out. We&apos;ll review your information and be in touch within one business day.
            </p>
            <button className={styles.successClose} onClick={closeLetsTalk}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <div>
                <div className={styles.eyebrow}>
                  <span className={styles.dot} />
                  Get in touch
                </div>
                <h2 className={styles.title} id="ltm-title">Let&apos;s Talk</h2>
                <p className={styles.subtitle}>
                  Tell us a little about yourself and we&apos;ll be in touch within one business day.
                </p>
              </div>
              <button className={styles.close} onClick={closeLetsTalk} aria-label="Close">✕</button>
            </div>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.row}>
                <Field label="First name" required error={errors.firstName}>
                  <input
                    ref={firstInputRef}
                    className={`${styles.input} ${errors.firstName ? styles.err : ''}`}
                    type="text" autoComplete="given-name" placeholder="Jane"
                    value={form.firstName} onChange={update('firstName')}
                  />
                </Field>
                <Field label="Last name" required error={errors.lastName}>
                  <input
                    className={`${styles.input} ${errors.lastName ? styles.err : ''}`}
                    type="text" autoComplete="family-name" placeholder="Smith"
                    value={form.lastName} onChange={update('lastName')}
                  />
                </Field>
              </div>

              <div className={styles.row}>
                <Field label="Company / Organisation" required error={errors.company}>
                  <input
                    className={`${styles.input} ${errors.company ? styles.err : ''}`}
                    type="text" autoComplete="organization" placeholder="Acme Financial"
                    value={form.company} onChange={update('company')}
                  />
                </Field>
                <Field label="Job title / Role" required error={errors.role}>
                  <select
                    className={`${styles.select} ${errors.role ? styles.err : ''}`}
                    value={form.role} onChange={update('role')}
                  >
                    <option value="">Select role…</option>
                    <option>CMO / VP Marketing</option>
                    <option>Director of Marketing</option>
                    <option>Direct Marketing Manager</option>
                    <option>Marketing Analyst</option>
                    <option>CEO / President</option>
                    <option>CTO / VP Technology</option>
                    <option>Data Science / Analytics</option>
                    <option>Other</option>
                  </select>
                </Field>
              </div>

              <Field label="Work email" required error={errors.email}>
                <input
                  className={`${styles.input} ${errors.email ? styles.err : ''}`}
                  type="email" autoComplete="email" placeholder="jane@company.com"
                  value={form.email} onChange={update('email')}
                />
              </Field>

              <Field label="What challenge are you trying to solve?" required error={errors.challenge}>
                <textarea
                  className={`${styles.input} ${styles.textarea} ${errors.challenge ? styles.err : ''}`}
                  placeholder="Tell us about your direct marketing goals or challenges…"
                  value={form.challenge} onChange={update('challenge')}
                />
              </Field>

              <Field label="How did you hear about AIgnyte?" error={errors.source}>
                <select className={styles.select} value={form.source} onChange={update('source')}>
                  <option value="">Select…</option>
                  <option>LinkedIn</option>
                  <option>Google search</option>
                  <option>Word of mouth / Referral</option>
                  <option>Industry event / Conference</option>
                  <option>Direct mail industry publication</option>
                  <option>Other</option>
                </select>
              </Field>

              {submitError && (
                <p className={styles.errMsg}>
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <div className={styles.privacy}>
                <span className={styles.privacyIcon}>🔒</span>
                <span>Your information is confidential and will never be shared with third parties.</span>
              </div>

              <button type="submit" className={styles.submit} disabled={loading}>
                {loading ? 'Sending…' : <><span>Schedule a Call</span> <span>→</span></>}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Field({
  label, required, error, children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>
        {label}{required && <span className={styles.req}> *</span>}
      </label>
      {children}
      {error && <span className={styles.errMsg}>{error}</span>}
    </div>
  );
}
