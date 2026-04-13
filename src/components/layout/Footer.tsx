import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const footerLinks = {
  product: [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Technology', href: '/technology' },
  ],
  industries: [
    { label: 'Credit Cards', href: '/industries/credit-cards' },
    { label: 'Personal Loans', href: '/industries/personal-loans' },
    { label: 'Insurance', href: '/industries/insurance' },
    { label: 'Non-Profit', href: '/industries/non-profit' },
    { label: 'Telecom & Cable', href: '/industries/telecom' },
    { label: 'Collections', href: '/industries/collections' },
    { label: 'Mortgage & Home Equity', href: '/industries/mortgage' },
    { label: 'Healthcare & Medicare', href: '/industries/healthcare' },
    { label: 'Retail Banking', href: '/industries/retail-banking' },
    { label: 'D2C & E-Commerce', href: '/industries/d2c-ecommerce' },
  ],
  company: [
    { label: 'Success Stories', href: '/success-stories' },
    { label: 'Leadership', href: '/leadership' },
    { label: 'FAQs', href: '/faq' },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Image src="/logo.png" alt="AIgnyte" height={72} width={260} style={{ objectFit: 'contain' }} className={styles.logoImg} />

          <p>The pioneer of Message Decisioning — individual-level message decisions to maximise response.</p>
        </div>

        <div>
          <span className={styles.colHeader}>Product</span>
          <ul className={styles.linkList}>
            {footerLinks.product.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <span className={styles.colHeader}>Industries</span>
          <ul className={styles.linkList}>
            {footerLinks.industries.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <span className={styles.colHeader}>Company</span>
          <ul className={styles.linkList}>
            {footerLinks.company.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} AIgnyte. Patent pending. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <Link href="#">Cookie Policy</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Site Map</Link>
        </div>
        <p className={styles.contact}>
          (908) 747-2000 ·{' '}
          <a href="mailto:info@aignyte.com">info@aignyte.com</a>
        </p>
      </div>
    </footer>
  );
}
