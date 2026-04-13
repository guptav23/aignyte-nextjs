'use client';

import { useState } from 'react';
import { useModal } from '@/context/ModalContext';
import { faqs, faqCategories } from '@/data/faqs';
import styles from './FaqPage.module.css';

export default function FaqPageClient() {
  const { openLetsTalk } = useModal();
  const [search, setSearch] = useState('');
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const filtered = faqs.filter((faq) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q) || faq.category.toLowerCase().includes(q);
  });

  const grouped = faqCategories
    .map((cat) => ({ cat, items: filtered.filter((f) => f.category === cat) }))
    .filter((g) => g.items.length > 0);

  function toggle(idx: number) {
    setOpenIdx(openIdx === idx ? null : idx);
  }

  // Global index across all faqs for toggle state
  function globalIdx(faq: typeof faqs[number]) {
    return faqs.indexOf(faq);
  }

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className="section-tag fi">FAQ</span>
          <h1 className={`${styles.heroH1} fi`}>Frequently asked questions</h1>
          <p className={`${styles.heroSub} fi`}>
            Everything you need to know about AIgnyte — process, compliance, cost, and the technology.
          </p>
          <div className={styles.searchWrap}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search questions…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button className={styles.searchClear} onClick={() => setSearch('')} aria-label="Clear search">✕</button>
            )}
          </div>
        </div>
      </section>

      {/* FAQ content */}
      <section className={styles.body}>
        <div className={styles.bodyInner}>
          {filtered.length === 0 ? (
            <div className={styles.noResults}>
              <div className={styles.noResultsIcon}>🔍</div>
              <h3>No results found</h3>
              <p>Try different keywords or <button onClick={() => setSearch('')}>clear your search</button> to browse all questions.</p>
            </div>
          ) : (
            grouped.map(({ cat, items }) => (
              <div key={cat} className={styles.group}>
                <h2 className={styles.groupHeading}>{cat}</h2>
                {items.map((faq) => {
                  const idx = globalIdx(faq);
                  const isOpen = openIdx === idx;
                  return (
                    <div key={idx} className={styles.faqItem}>
                      <button
                        className={styles.faqQ}
                        onClick={() => toggle(idx)}
                        aria-expanded={isOpen}
                      >
                        <span className={styles.faqQText}>{faq.question}</span>
                        <svg
                          className={`${styles.faqChevron} ${isOpen ? styles.faqChevronOpen : ''}`}
                          width="18" height="18" viewBox="0 0 18 18" fill="none"
                        >
                          <path d="M4 6.5L9 11.5L14 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className={styles.faqA}>
                          <div
                            className={styles.faqAInner}
                            dangerouslySetInnerHTML={{
                              __html: faq.answer
                                .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                                .replace(/\*(.+?)\*/g, '<em>$1</em>')
                                .replace(/\n\n/g, '<br /><br />'),
                            }}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* CTA band */}
        <div className={styles.ctaBand}>
          <div className={styles.ctaBandInner}>
            <h2>Still have questions?</h2>
            <p>We&apos;re happy to walk through how AIgnyte would work specifically for your program — channel, vertical, and creative setup.</p>
            <button className="btn-primary" onClick={openLetsTalk}>Let&apos;s Talk</button>
          </div>
        </div>
      </section>
    </>
  );
}
