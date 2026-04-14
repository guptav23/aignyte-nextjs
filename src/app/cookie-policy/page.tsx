import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy | AIgnyte',
  description: 'How AIgnyte uses cookies and similar technologies.',
};

export default function CookiePolicyPage() {
  return (
    <main style={{ background: 'var(--cream)', minHeight: '100dvh', padding: '80px 52px 100px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <Link href="/" style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block', marginBottom: 40 }}>
          ← Back to AIgnyte
        </Link>
        <h1 style={{ fontWeight: 400, marginBottom: 12 }}>Cookie Policy</h1>
        <p style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 48 }}>
          Last updated: January 2025
        </p>

        {[
          {
            heading: 'What are cookies?',
            body: 'Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences and improve your experience. AIgnyte uses a minimal set of cookies strictly necessary for the site to function.',
          },
          {
            heading: 'Cookies we use',
            body: 'We use only essential session cookies required to keep the site functioning correctly. We do not use advertising, tracking, or third-party analytics cookies. No personally identifiable information is stored in any cookie we set.',
          },
          {
            heading: 'Essential cookies',
            body: 'These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions you take, such as submitting a contact form. You can set your browser to block these cookies, but some parts of the site may not work as a result.',
          },
          {
            heading: 'Third-party cookies',
            body: 'AIgnyte does not load third-party advertising or analytics scripts that set tracking cookies. If we embed content from third-party services in the future, those services may set their own cookies subject to their privacy policies.',
          },
          {
            heading: 'Managing cookies',
            body: 'You can control and delete cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, and set preferences for certain websites. Refer to your browser\'s help documentation for specific instructions.',
          },
          {
            heading: 'Changes to this policy',
            body: 'We may update this Cookie Policy from time to time. Any changes will be posted on this page with a revised date. Continued use of the site after changes constitutes acceptance of the updated policy.',
          },
          {
            heading: 'Contact',
            body: 'If you have questions about our use of cookies, please contact us at info@aignyte.com or call (908) 747-2000.',
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
