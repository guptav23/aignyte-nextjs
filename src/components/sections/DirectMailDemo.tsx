'use client';

import { useState } from 'react';
import styles from './DirectMailDemo.module.css';

type HotspotId =
  | 'at-color'
  | 'at-envmsg'
  | 'at-bonus'
  | 'at-nofee'
  | 'at-ease'
  | 'at-cardimg'
  | 'at-milesrew'
  | 'at-sigcard'
  | 'at-prescreened'
  | 'at-cta'
  | null;

function Hotspot({
  id,
  letter,
  dimLabel,
  valLabel,
  tooltipDir,
  style,
  lit,
  onEnter,
  onLeave,
}: {
  id: HotspotId;
  letter: string;
  dimLabel: string;
  valLabel: string;
  tooltipDir?: 'tr' | 'tl' | 'ta';
  style?: React.CSSProperties;
  lit: HotspotId;
  onEnter: (id: HotspotId) => void;
  onLeave: () => void;
}) {
  const tipClass = tooltipDir ? styles[`tooltip${tooltipDir.toUpperCase()}`] : '';
  return (
    <div
      className={styles.hotspot}
      style={style}
      onMouseEnter={() => onEnter(id)}
      onMouseLeave={onLeave}
    >
      {letter}
      <div className={`${styles.tooltip} ${tipClass}`}>
        <div className={styles.tooltipDim}>{dimLabel}</div>
        <div className={styles.tooltipVal}>{valLabel}</div>
      </div>
    </div>
  );
}

export default function DirectMailDemo() {
  const [lit, setLit] = useState<HotspotId>(null);

  function isLit(id: HotspotId) {
    return lit === id;
  }

  return (
    <div className={styles.visualArea}>
      {/* LEFT: annotated direct mail */}
      <div>
        <div className={styles.legend}>
          <div className={styles.legendTitle}>Live creative — hover a pin to reveal the signal</div>
          <div className={styles.legendItems}>
            {['A', 'B', 'C', 'D'].map((l, i) => (
              <span key={l} className={styles.legendItem}>
                <span className={styles.legendDot}>{l}</span>
                {['Creative Elements', 'Emotions', 'Value Propositions', 'Product Terms'][i]}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.mailCard}>
          {/* Left navy stripe — annotation A: Color Blue */}
          <div
            className={`${styles.target} ${styles.stripeTarget} ${isLit('at-color') ? styles.targetLit : ''}`}
            id="at-color"
          />
          <Hotspot
            id="at-color" letter="A" dimLabel="Creative Element" valLabel="Color: Blue (dominant)"
            tooltipDir="tr" style={{ position: 'absolute', top: '50%', left: 2, transform: 'translateY(-50%)', zIndex: 30 }}
            lit={lit} onEnter={setLit} onLeave={() => setLit(null)}
          />

          {/* Return address */}
          <div className={styles.returnAddr}>
            <div className={styles.returnName}>First National Bank</div>
            PO Box 94110<br />Cleveland, OH 44101
          </div>

          {/* Stamp */}
          <div className={styles.stamp}>
            <div className={styles.stampInner}>🦅</div>
            <div className={styles.stampLabel}>USA<br />FOREVER</div>
          </div>
          <div className={styles.firstClass}>First-Class Mail</div>

          {/* Address window */}
          <div className={styles.addrWindow}>
            <div className={`${styles.addrLine} ${styles.addrLineBold}`}>JOHN A SMITH</div>
            <div className={styles.addrLine}>4823 MAPLE GROVE DR APT 2B</div>
            <div className={styles.addrLine}>COLUMBUS OH 43215-3847</div>
          </div>

          {/* Barcode */}
          <div className={styles.barcode}>
            {[12,7,12,7,12,7,12,12,7,12,7,12,7,12,12,7,12,7].map((h, i) => (
              <div key={i} className={styles.bar} style={{ height: h }} />
            ))}
          </div>

          <div className={styles.divider} />

          {/* Right message zone */}
          <div className={styles.messageZone}>
            <div className={styles.annoRow}>
              <div
                className={`${styles.target} ${styles.msgTarget} ${isLit('at-envmsg') ? styles.targetLit : ''}`}
                id="at-envmsg"
              >
                <div className={styles.logoStrip}>First National Bank</div>

                {/* Headline + D hotspot */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 5 }}>
                  <div className={`${styles.target} ${styles.headline} ${isLit('at-bonus') ? styles.targetLit : ''}`} id="at-bonus">
                    Earn 60,000 Miles<br />on your first purchase
                  </div>
                  <Hotspot
                    id="at-bonus" letter="D" dimLabel="Product Terms" valLabel="Bonus Miles: 60,000"
                    tooltipDir="ta" style={{ marginTop: 2, flexShrink: 0 }}
                    lit={lit} onEnter={setLit} onLeave={() => setLit(null)}
                  />
                </div>

                {/* No fee */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <div className={`${styles.target} ${styles.subline} ${isLit('at-nofee') ? styles.targetLit : ''}`} id="at-nofee">
                    No annual fee for the first year.
                  </div>
                  <Hotspot
                    id="at-nofee" letter="D" dimLabel="Product Terms" valLabel="No Annual Fee"
                    tooltipDir="ta"
                    lit={lit} onEnter={setLit} onLeave={() => setLit(null)}
                  />
                </div>

                {/* Ease of application */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <div className={`${styles.target} ${styles.subline} ${isLit('at-ease') ? styles.targetLit : ''}`} id="at-ease">
                    Fast online approval — see your offer inside.
                  </div>
                  <Hotspot
                    id="at-ease" letter="C" dimLabel="Value Proposition" valLabel="Ease of Application"
                    tooltipDir="ta"
                    lit={lit} onEnter={setLit} onLeave={() => setLit(null)}
                  />
                </div>

                {/* Card image + labels */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginTop: 2 }}>
                  <div style={{ position: 'relative', flexShrink: 0 }}>
                    <div
                      className={`${styles.target} ${styles.cardImg} ${isLit('at-cardimg') ? styles.targetLit : ''}`}
                      id="at-cardimg"
                    >
                      <div className={styles.cardChip} />
                      <div className={styles.cardNum}>•••• 4821</div>
                      <div className={styles.cardBrand}>FNB</div>
                    </div>
                    <Hotspot
                      id="at-cardimg" letter="A" dimLabel="Creative Element" valLabel="Card Image"
                      tooltipDir="ta" style={{ position: 'absolute', top: -8, right: -8 }}
                      lit={lit} onEnter={setLit} onLeave={() => setLit(null)}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <div className={`${styles.target} ${styles.milesLabel} ${isLit('at-milesrew') ? styles.targetLit : ''}`} id="at-milesrew">
                        Miles Rewards
                      </div>
                      <Hotspot
                        id="at-milesrew" letter="C" dimLabel="Value Proposition" valLabel="Miles Rewards (8.6)"
                        tooltipDir="ta"
                        lit={lit} onEnter={setLit} onLeave={() => setLit(null)}
                      />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <div className={`${styles.target} ${styles.sigLabel} ${isLit('at-sigcard') ? styles.targetLit : ''}`} id="at-sigcard">
                        Signature Card
                      </div>
                      <Hotspot
                        id="at-sigcard" letter="B" dimLabel="Emotion" valLabel="Aspiration · Optimism"
                        tooltipDir="ta"
                        lit={lit} onEnter={setLit} onLeave={() => setLit(null)}
                      />
                    </div>
                  </div>
                </div>

                {/* Badges row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', marginTop: 2 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <div className={`${styles.target} ${styles.offerBadge} ${isLit('at-prescreened') ? styles.targetLit : ''}`} id="at-prescreened">
                      Pre-Screened Offer Enclosed
                    </div>
                    <Hotspot
                      id="at-prescreened" letter="D" dimLabel="Product Terms" valLabel="Pre-screened offer"
                      tooltipDir="ta"
                      lit={lit} onEnter={setLit} onLeave={() => setLit(null)}
                    />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <Hotspot
                      id="at-cta" letter="C" dimLabel="Value Proposition" valLabel="CTA: Online"
                      tooltipDir="ta"
                      lit={lit} onEnter={setLit} onLeave={() => setLit(null)}
                    />
                    <div className={`${styles.target} ${styles.ctaCorner} ${isLit('at-cta') ? styles.targetLit : ''}`} id="at-cta">
                      Apply Online
                    </div>
                  </div>
                </div>
              </div>

              {/* Envelope message hotspot */}
              <Hotspot
                id="at-envmsg" letter="A" dimLabel="Creative Element" valLabel="Envelope Message"
                tooltipDir="ta" style={{ flexShrink: 0, marginTop: 2 }}
                lit={lit} onEnter={setLit} onLeave={() => setLit(null)}
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
