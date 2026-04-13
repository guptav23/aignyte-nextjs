import Link from 'next/link';
import type { Metadata } from 'next';
import { successStories } from '@/data/successStories';
import styles from './SuccessStoriesPage.module.css';

export const metadata: Metadata = {
  title: 'Success Stories | AIgnyte',
  description:
    'Proven results across direct mail and email — 50%+ donor response lift, 1.4× retail response rates, 70% email CTR increases. See the evidence.',
};

export default function SuccessStoriesPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className="section-tag">Success Stories</span>
          <h1>Results you can take to a board meeting</h1>
          <p className={styles.heroSub}>
            Every case below is a live production campaign — not a lab test, not a pilot, not a
            simulation. Real clients, real data, real lift.
          </p>
        </div>
      </section>

      <section className={styles.list}>
        <div className={styles.listInner}>
          {successStories.map((story) => (
            <Link key={story.slug} href={`/success-stories/${story.slug}`} className={styles.card}>
              <div className={styles.cardLeft}>
                <div className={styles.cardMeta}>
                  <span className={styles.cardBadge}>{story.badge}</span>
                  <span className={styles.cardChannel}>{story.channel}</span>
                </div>
                <h2 className={styles.cardHeadline}>{story.headline}</h2>
                <p className={styles.cardSub}>{story.subhead}</p>
                <span className={styles.cardCta}>Read the case study →</span>
              </div>
              <div className={styles.cardStat}>
                <span className={styles.cardStatNum}>{story.stat}</span>
                <span className={styles.cardStatLabel}>{story.statLabel}</span>
                <span className={styles.cardStatNote}>{story.statNote}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2>Want to see a blind holdout on your data?</h2>
          <p>We run a retrospective validation before any live deployment. No commitment required.</p>
        </div>
      </section>
    </>
  );
}
