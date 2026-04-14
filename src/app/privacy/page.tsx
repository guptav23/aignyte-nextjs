import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | AIgnyte',
  description: 'How AIgnyte collects, uses, and protects your information.',
};

export default function PrivacyPage() {
  return (
    <main style={{ background: 'var(--cream)', minHeight: '100dvh', padding: '80px 52px 100px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <Link href="/" style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block', marginBottom: 40 }}>
          ← Back to AIgnyte
        </Link>
        <h1 style={{ fontWeight: 400, marginBottom: 12 }}>Privacy Policy</h1>
        <p style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 48 }}>
          Last updated: January 2025
        </p>

        {[
          {
            heading: 'Overview',
            body: 'AIgnyte, Inc. ("AIgnyte", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.',
          },
          {
            heading: 'Information we collect',
            body: 'We collect information you voluntarily provide when you contact us — such as your name, email address, company name, and role. We may also collect basic usage data (page views, time on site) through privacy-preserving analytics. We do not collect or process any personally identifiable information through our core Message Decisioning platform; all campaign data handled operationally is de-identified.',
          },
          {
            heading: 'How we use your information',
            body: 'We use the information you provide to respond to your inquiries, deliver our services, and communicate with you about AIgnyte. We do not sell your personal information to third parties. We do not use your information for advertising purposes.',
          },
          {
            heading: 'Data security',
            body: 'We implement appropriate technical and organisational measures to protect your information against unauthorised access, alteration, disclosure, or destruction. All data exchanges use encrypted connections (TLS). Our operational platform is designed with privacy by default — no PII passes through our systems at any stage.',
          },
          {
            heading: 'Data retention',
            body: 'We retain contact information only as long as necessary to provide you with services or respond to your inquiries. You may request deletion of your information at any time by contacting us.',
          },
          {
            heading: 'Your rights',
            body: <>Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict the processing of your personal information. To exercise these rights, contact us at <a href="mailto:info@aignyte.com" style={{ color: 'var(--orange)', textDecoration: 'none', borderBottom: '1px solid rgba(240,125,30,0.4)' }}>info@aignyte.com</a>. We will respond within the timeframes required by applicable law.</>,
          },
          {
            heading: 'Third-party services',
            body: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites. We encourage you to review the privacy policies of any third-party sites you visit.',
          },
          {
            heading: 'Changes to this policy',
            body: 'We may update this Privacy Policy periodically. Changes will be posted on this page with a revised date. Material changes will be communicated via a notice on our website.',
          },
          {
            heading: 'Contact us',
            body: <>Questions about this Privacy Policy or your personal information? Contact us at <a href="mailto:info@aignyte.com" style={{ color: 'var(--orange)', textDecoration: 'none', borderBottom: '1px solid rgba(240,125,30,0.4)' }}>info@aignyte.com</a> or (908) 747-2000. AIgnyte, Inc. — 100 Campus Dr, Suite 117, Parsippany, NJ 07054.</>,
          },
        ].map((s) => (
          <section key={s.heading} style={{ marginBottom: 40, paddingBottom: 40, borderBottom: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: 20, fontWeight: 400, letterSpacing: '-0.02em', marginBottom: 12 }}>{s.heading}</h2>
            <p style={{ fontSize: 15, color: 'var(--mid)', lineHeight: 1.75 }}>{s.body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
