'use client';

import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { useModal } from '@/context/ModalContext';
import type { SuccessStory } from '@/data/successStories';
import styles from './SuccessStoryPage.module.css';

function Html({ text }: { text: string }) {
  return <span dangerouslySetInnerHTML={{ __html: text }} />;
}

export default function SuccessStoryClient({ story }: { story: SuccessStory }) {
  const { openLetsTalk } = useModal();
  const barChartRef = useRef<HTMLDivElement>(null);
  const [barsVisible, setBarsVisible] = useState(false);

  useEffect(() => {
    const el = barChartRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroTop}>
            <Link href="/success-stories" className={styles.backLink}>← All success stories</Link>
            <span className={styles.sectorTag}>{story.badge} · {story.channel}</span>
          </div>
          <h1 className="fi">{story.heroH1}</h1>
          <p className={`${styles.heroSub} fi`}>{story.heroSub}</p>
          <div className={styles.heroMeta}>
            {story.heroMeta.map((m, i) => <span key={i} className={styles.heroMetaItem}>{m}</span>)}
          </div>
        </div>
      </section>

      {/* Hero stats */}
      <section className={styles.heroStats}>
        <div className={styles.heroStatsInner}>
          {story.heroStats.map((s, i) => (
            <div key={i} className={styles.heroStatItem}>
              <span className={s.numSmall ? styles.heroStatNumSmall : styles.heroStatNum}>{s.num}</span>
              {s.label && <span className={styles.heroStatLabel}>{s.label}</span>}
              <span className={styles.heroStatSub}>{s.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* At a glance */}
      <section className={styles.glance}>
        <div className={styles.glanceInner}>
          <div className={styles.glanceLabel}>At a glance</div>
          <div className={styles.glanceGrid}>
            {story.glance.map((g, i) => (
              <div key={i} className={`${styles.glanceItem} ${g.highlight ? styles.glanceItemHighlight : ''} aig-reveal`}>
                <span className={styles.glanceKey}>{g.label}</span>
                <span className={styles.glanceVal}>{g.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionGrid}>
            <div className={styles.mainCol}>
              <span className={styles.sectionLabel}>{story.challengeLabel}</span>
              <h2 className={styles.sectionH2}>{story.challengeH2}</h2>
              {story.challengeParas.map((p, i) => (
                <p key={i} className={styles.sectionPara}><Html text={p} /></p>
              ))}
            </div>

            {/* No new creatives callout */}
            <aside className={styles.aside}>
              <div className={styles.callout}>
                <div className={styles.calloutTitle}>{story.noNewTitle}</div>
                <p className={styles.calloutBody}>{story.noNewBody}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionLabel}>How AIgnyte Applied Its Technology</span>
          <h2 className={styles.sectionH2}>{story.approachH2}</h2>
          <p className={styles.sectionPara} style={{ maxWidth: '72ch' }}>{story.approachPara}</p>
        </div>
      </section>

      {/* Results */}
      <section className={styles.results}>
        <div className={styles.resultsInner}>
          <span className={styles.sectionLabel}>Results</span>
          <h2 className={styles.resultsH2}>{story.resultsHeadline}</h2>

          <div className={styles.barChart} ref={barChartRef}>
            <div className={styles.barLabel}>{story.resultBarLabel}</div>
            <div className={styles.barRow}>
              <span className={styles.barRowLabel}>{story.resultBarBefore.label}</span>
              <div className={styles.barTrack}>
                <div className={styles.barFillBefore} style={{ width: barsVisible ? story.resultBarBefore.width : '0%' }} />
              </div>
              <span className={styles.barValue}>{story.resultBarBefore.text}</span>
            </div>
            <div className={styles.barRow}>
              <span className={styles.barRowLabel}>{story.resultBarAfter.label}</span>
              <div className={styles.barTrack}>
                <div className={styles.barFillAfter} style={{ width: barsVisible ? story.resultBarAfter.width : '0%' }} />
              </div>
              <span className={styles.barValue}>{story.resultBarAfter.text}</span>
            </div>
            <div className={styles.liftBadge}>{story.resultLiftBadge}</div>
          </div>

          <div className={styles.whatDrove}>
            <div className={styles.whatDroveLabel}>{story.whatDroveLabel}</div>
            <ul className={styles.whatDroveList}>
              {story.whatDroveItems.map((item, i) => (
                <li key={i} className={styles.whatDroveItem}>
                  <span className={styles.whatDroveDot} />
                  <Html text={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why it worked */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionLabel}>Why It Worked</span>
          <h2 className={styles.sectionH2}>{story.whyH2}</h2>
          <p className={styles.sectionPara} style={{ maxWidth: '68ch', marginBottom: 32 }}><Html text={story.whyPara} /></p>
          <div className={styles.whyGrid}>
            {story.whyItems.map((item, i) => (
              <div key={i} className={`${styles.whyCard} aig-reveal`}>
                <h3 className={styles.whyCardTitle}>{item.title}</h3>
                <p className={styles.whyCardBody}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaH2}>{story.ctaH2}</h2>
          <p className={styles.ctaPara}>{story.ctaPara}</p>
          <div className={styles.ctaBtns}>
            <button className="btn-primary" onClick={openLetsTalk}>Let&apos;s Talk</button>
            <Link className="btn-ghost" href="/success-stories">See All Stories</Link>
          </div>
        </div>
      </section>
    </>
  );
}
