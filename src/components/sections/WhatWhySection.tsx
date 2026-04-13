import { whatWhyItems } from '@/data/homepage';
import styles from './WhatWhySection.module.css';

export default function WhatWhySection() {
  return (
    <section id="what-why" className={styles.section}>
      <div className={styles.container}>
        {/* Left: what it is */}
        <div className={`${styles.left} aig-reveal`}>
          <span className="section-tag light">The Category</span>
          <h2 className={styles.heading}>
            Message Decisioning — <em>the missing layer</em> in direct marketing
          </h2>
          <p className={styles.body}>
            You already optimise <em>who</em> to reach. AIgnyte optimises <em>what to say</em>{' '}
            to each of them. It sits between your selection process and your execution stack —
            receiving your campaign file and returning one individually-reasoned creative decision
            per person. No new creatives. No new data. No IT project.
          </p>
          <div className={styles.tags}>
            <span className={styles.tag}>Direct Mail</span>
            <span className={styles.tag}>Email</span>
            <span className={styles.tag}>Any channel. Any vertical.</span>
          </div>
        </div>

        {/* Right: why AIgnyte */}
        <div className={styles.right}>
          {whatWhyItems.map((item) => (
            <div key={item.icon} className={`${styles.item} aig-reveal`}>
              <div className={styles.itemIcon}>{item.icon}</div>
              <div>
                <div className={styles.itemTitle}>{item.title}</div>
                <div className={styles.itemBody}>{item.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
