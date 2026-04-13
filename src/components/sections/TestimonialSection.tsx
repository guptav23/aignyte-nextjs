import styles from './TestimonialSection.module.css';

export default function TestimonialSection() {
  return (
    <section id="testimonial" className={styles.section}>
      <div className={`${styles.container} aig-reveal`}>
        <span className={styles.quoteMark}>&ldquo;</span>
        <p className={styles.quote}>
          Even though our direct marketing process was highly optimized to begin with,{' '}
          <span className={styles.brand}>AIgnyte</span> was able to increase our funding rate by{' '}
          <em>20% across multiple campaigns</em>. The lift even crossed{' '}
          <em>25% for 2 campaigns.</em>
        </p>
        <div className={styles.bottom}>
          <span className={styles.attr}>CEO · Installment Lending Company</span>
          <div className={styles.stats}>
            <div>
              <span className={styles.statNum}>20–25%</span>
              <span className={styles.statLabel}>Lift in already-optimized environment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
