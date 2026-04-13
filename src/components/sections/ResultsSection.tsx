import { results, resultsFooterChecks } from '@/data/homepage';
import styles from './ResultsSection.module.css';

export default function ResultsSection() {
  return (
    <section id="results" className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.header} aig-reveal`}>
          <div>
            <span className="section-tag">Performance Lift</span>
            <h2>Real results.<br />Across verticals and channels.</h2>
          </div>
          <p>
            Measured against control groups in production deployments. No new creatives.
            No additional data. No experimentation required.
          </p>
        </div>

        <div className={`${styles.grid} aig-reveal`}>
          {results.map((r, i) => (
            <div key={i} className={styles.col}>
              <span className={styles.vertical}>{r.vertical}</span>
              <div className={styles.industry}>{r.industry}</div>
              <div className={styles.channel}>{r.channel}</div>
              <div className={styles.big}>{r.big}</div>
              <div className={styles.metric}>{r.metric}</div>
              <p className={styles.note}>{r.note}</p>
            </div>
          ))}
        </div>

        <div className={`${styles.footer} aig-reveal`}>
          <div className={styles.footerLabel}>Every result delivered:</div>
          {resultsFooterChecks.map((check) => (
            <div key={check} className={styles.footerCheck}>
              <div className={styles.checkIcon}>✓</div>
              <span>{check}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
