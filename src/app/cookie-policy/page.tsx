import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Notice | AIgnyte',
  description: 'Privacy practices for www.aignyte.com.',
};

const sections = [
  {
    heading: 'Information Collection, Use, and Sharing',
    body: `We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.

We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.

Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.`,
  },
  {
    heading: 'Collection and Use of Non-Personal Information',
    body: `We also collect data in a form that does not, on its own, permit direct association with any specific individual. We may collect, use, transfer, and disclose non-personal information for any purpose. The following are some examples of non-personal information that we collect and how we may use it:

We may collect information such as industry, occupation, and other information provided by you to better understand customer behavior and improve our products and services.

This information is aggregated and used to help us provide more useful information to our customers and to understand which parts of our website, products, and services are of most interest. Aggregated data is considered nonpersonal information for the purposes of this Privacy Policy.`,
  },
  {
    heading: 'Your Access to and Control Over Information',
    body: `You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:

See what data we have about you, if any.
Change/correct any data we have about you.
Have us delete any data we have about you.
Express any concern you have about our use of your data.`,
  },
  {
    heading: 'Security',
    body: `We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.

Wherever we collect sensitive information, that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for "https" at the beginning of the address of the Web page.

While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.

If you feel that we are not abiding by this privacy policy, you should contact us immediately.`,
  },
];

export default function CookiePolicyPage() {
  return (
    <main style={{ background: 'var(--cream)', minHeight: '100dvh', padding: '80px 52px 100px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <Link href="/" style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block', marginBottom: 40 }}>
          ← Back to AIgnyte
        </Link>

        <h1 style={{ fontWeight: 400, marginBottom: 8 }}>Privacy Notice</h1>
        <p style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 32 }}>
          www.aignyte.com
        </p>

        <p style={{ fontSize: 15, color: 'var(--mid)', lineHeight: 1.75, marginBottom: 16 }}>
          This privacy notice discloses the privacy practices for www.aignyte.com.
          This privacy notice applies solely to information collected by this website. It will notify you of the following:
        </p>
        <ul style={{ fontSize: 15, color: 'var(--mid)', lineHeight: 1.75, paddingLeft: 24, marginBottom: 48 }}>
          <li style={{ marginBottom: 8 }}>What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.</li>
          <li style={{ marginBottom: 8 }}>What non-personal information is collected and retained.</li>
          <li style={{ marginBottom: 8 }}>What choices are available to you regarding the use of your data.</li>
          <li style={{ marginBottom: 8 }}>The security procedures in place to protect the misuse of your information.</li>
          <li>How you can correct any inaccuracies in the information.</li>
        </ul>

        {sections.map((s) => (
          <section key={s.heading} style={{ marginBottom: 40, paddingBottom: 40, borderBottom: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: 20, fontWeight: 400, letterSpacing: '-0.02em', marginBottom: 16 }}>{s.heading}</h2>
            {s.body.split('\n\n').map((para, i) => (
              <p key={i} style={{ fontSize: 15, color: 'var(--mid)', lineHeight: 1.75, marginBottom: 12 }}>{para}</p>
            ))}
          </section>
        ))}
      </div>
    </main>
  );
}
