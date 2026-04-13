import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import styles from './BlogPage.module.css';

export const metadata: Metadata = {
  title: 'Blog | AIgnyte',
  description:
    'Perspectives on Message Decisioning, direct marketing AI, and individual-level creative optimisation from the AIgnyte team.',
};

export default function BlogPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className="section-tag">Blog</span>
          <h1>Thinking on Message Decisioning</h1>
          <p className={styles.heroSub}>
            Perspectives on AI, direct marketing, and the individual-level future of campaign
            optimisation from the AIgnyte team.
          </p>
        </div>
      </section>

      <section className={styles.grid}>
        <div className={styles.gridInner}>
          {blogPosts.map((post) => (
            <Link key={post.slug} className={styles.card} href={`/blog/${post.slug}`}>
              <div className={styles.cardMeta}>
                <span className={styles.cardTag}>{post.tag}</span>
                <span className={styles.cardReadTime}>{post.readTime}</span>
              </div>
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.cardDeck}>{post.deck}</p>
              <div className={styles.cardFooter}>
                <div className={styles.cardAuthor}>
                  <div className={styles.cardAvatar}>{post.authorInitials}</div>
                  <div>
                    <div className={styles.cardAuthorName}>{post.author}</div>
                    <div className={styles.cardAuthorTitle}>{post.date}</div>
                  </div>
                </div>
                <span className={styles.cardArrow}>Read →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
