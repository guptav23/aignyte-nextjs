import type { Metadata } from 'next';
import Link from 'next/link';
import { industryPages } from '@/data/industries';
import LetsTalkBtn from '@/components/LetsTalkBtn';
import styles from './IndustriesPage.module.css';

export const metadata: Metadata = {
  title: 'Industries | AIgnyte Message Decisioning Platform',
  description: 'AIgnyte delivers 20–70% response rate lifts across financial services, healthcare, non-profit, telecom, and retail — any vertical where direct marketing response rates matter.',
};

const channelChips = [
  { icon: '📬', label: 'Customer Acquisition' },
  { icon: '🔁', label: 'Retention & Loyalty' },
  { icon: '📈', label: 'Cross-sell & Up-sell' },
  { icon: '💌', label: 'Donor Appeals' },
  { icon: '⚡', label: 'Reactivation' },
  { icon: '🔄', label: 'Subscriptions' },
  { icon: '🏦', label: 'New Account Opens' },
];

export default function IndustriesPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className="section-tag">Industries</span>
          <h1>One-to-one marketing,<br />proven across industries.</h1>
          <p className={styles.heroSub}>
            AIgnyte works wherever direct marketing response rates matter. 20–70% proven lifts
            across financial services, healthcare, non-profit, telecom, and retail.
          </p>
        </div>
      </section>

      {/* Channel band */}
      <div className={styles.channelBand}>
        <div className={styles.channelBandInner}>
          <span className={styles.channelBandLabel}>One-to-one across</span>
          <div className={styles.channelChips}>
            {channelChips.map((c) => (
              <div key={c.label} className={styles.channelChip}>
                {c.icon} {c.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className={styles.grid}>
        <div className={styles.gridInner}>
          {/* Industries intro */}
          <div className={styles.gridIntro}>
            <div className={styles.gridIntroLeft}>
              <span className="section-tag">Industry Coverage</span>
              <h2 style={{ marginTop: 12 }}>
                AIgnyte works with your existing creative catalog across direct mail, email, and digital — using your existing campaign file.
              </h2>
            </div>
            <p className={styles.gridIntroRight}>
              No new creatives. No IT project. One individually-reasoned decision per person.
            </p>
          </div>

          {/* Industry cards */}
          <div className={styles.cards}>
            {industryPages.map((ind) => (
              <Link key={ind.slug} className={styles.card} href={`/industries/${ind.slug}`}>
                <div className={styles.cardTop}>
                  <span className={styles.cardIcon}>{ind.icon}</span>
                  <div className={styles.cardStat}>
                    <span className={styles.cardStatNum}>{ind.heroStat}</span>
                    <span className={styles.cardStatLabel}>{ind.heroStatLabel}</span>
                  </div>
                </div>
                <h3 className={styles.cardName}>{ind.name}</h3>
                <p className={styles.cardSector}>{ind.sector}</p>
                <p className={styles.cardDesc}>{ind.heroSub}</p>
                <span className={styles.cardArrow}>See how it works →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Don't see your industry */}
      <section className={styles.missing}>
        <div className={styles.missingInner}>
          <div className={styles.missingText}>
            <h2 className={styles.missingTitle}>Don&apos;t see your industry?</h2>
            <p className={styles.missingBody}>
              AIgnyte&apos;s Message Decisioning platform applies wherever one-to-one (direct marketing)
              response rates matter and creative inventory exists — across direct mail, email, and digital
              channels. Some other industries not listed here include automotive finance, retail loyalty,
              utilities, and political fundraising. If you run one-to-one (direct marketing) campaigns,
              there is almost certainly a fit.
            </p>
          </div>
          <LetsTalkBtn className="btn-primary" />
        </div>
      </section>
    </>
  );
}
