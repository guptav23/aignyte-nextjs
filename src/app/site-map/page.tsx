import type { Metadata } from 'next';
import Link from 'next/link';
import { industryPages } from '@/data/industries';

// scoped styles for the sitemap links (server component safe)
const sitemapStyles = `
  .sm-link { font-size: 15px; color: var(--ink); text-decoration: none; transition: color 150ms ease; }
  @media (hover: hover) and (pointer: fine) { .sm-link:hover { color: var(--orange); } }
`;

export const metadata: Metadata = {
  title: 'Site Map | AIgnyte',
  description: 'A complete map of all pages on the AIgnyte website.',
};

const sections = [
  {
    label: 'Main',
    links: [
      { href: '/', label: 'Home' },
      { href: '/how-it-works', label: 'How It Works' },
      { href: '/technology', label: 'Technology' },
      { href: '/success-stories', label: 'Success Stories' },
    ],
  },
  {
    label: 'Industries',
    links: industryPages.map((ind) => ({
      href: `/industries/${ind.slug}`,
      label: ind.name,
    })),
  },
  {
    label: 'Company',
    links: [
      { href: '/leadership', label: 'Leadership' },
      { href: '/faq', label: 'FAQ' },
      { href: '/blog', label: 'Blog' },
    ],
  },
  {
    label: 'Legal',
    links: [
      { href: '/cookie-policy', label: 'Cookie Policy' },
      { href: '/privacy', label: 'Privacy Policy' },
    ],
  },
];

export default function SiteMapPage() {
  return (
    <main style={{ background: 'var(--cream)', minHeight: '100dvh', padding: '80px 52px 100px' }}>
      <style>{sitemapStyles}</style>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <Link href="/" style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block', marginBottom: 40 }}>
          ← Back to AIgnyte
        </Link>
        <h1 style={{ fontWeight: 400, marginBottom: 8 }}>Site Map</h1>
        <p style={{ fontSize: 15, color: 'var(--mid)', marginBottom: 60 }}>Every page on the AIgnyte website.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          {sections.map((section) => (
            <div key={section.label}>
              <p style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 10, fontWeight: 500, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.10em', marginBottom: 16 }}>
                {section.label}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {section.links.map((l) => (
                  <li key={l.href} className="sm-item">
                    <Link href={l.href} className="sm-link">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
