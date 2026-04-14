'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useModal } from '@/context/ModalContext';
import { industries, caseStudies } from '@/data/navigation';
import styles from './Nav.module.css';

export default function Nav() {
  const { openLetsTalk } = useModal();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [storiesOpen, setStoriesOpen] = useState(false);
  const pathname = usePathname();

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href + '/');
  }

  function closeMegaMenu(e: React.MouseEvent) {
    (e.currentTarget.closest('li[tabindex]') as HTMLElement)?.blur();
  }

  return (
    <>
      <nav className={styles.nav}>
        <Link className={styles.logo} href="/">
          <Image src="/logo.png" alt="AIgnyte" height={36} width={109} style={{ height: 36, width: 'auto' }} priority />
        </Link>

        {/* Desktop links */}
        <ul className={styles.links}>
          <li>
            <Link href="/how-it-works" className={`${styles.link} ${isActive('/how-it-works') ? styles.active : ''}`}>
              How It Works
            </Link>
          </li>
          <li>
            <Link href="/technology" className={`${styles.link} ${isActive('/technology') ? styles.active : ''}`}>
              Technology
            </Link>
          </li>

          {/* Industries dropdown */}
          <li className={styles.dropdownTrigger} tabIndex={0}>
            <Link href="/industries" className={`${styles.link} ${styles.chevronLink} ${isActive('/industries') ? styles.active : ''}`}>
              Industries
              <svg className={styles.chevron} viewBox="0 0 14 14" fill="none">
                <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className={`${styles.megaMenu} ${styles.megaMenuIndustries}`}>
              <div className={styles.megaHeader}>
                <span className={styles.megaHeaderLabel}>Industries</span>
                <Link className={styles.megaHeaderLink} href="/industries" onClick={closeMegaMenu}>View all →</Link>
              </div>
              <div className={styles.megaGrid}>
                {industries.map((ind) => (
                  <Link key={ind.href} className={styles.megaItem} href={ind.href} onClick={closeMegaMenu}>
                    <div className={styles.megaItemIcon}>{ind.icon}</div>
                    <div className={styles.megaItemText}>
                      <div className={styles.megaItemName}>
                        {ind.name}
                        {ind.sector && <span className={`${styles.sectorBadge} ${styles[ind.sectorClass]}`}>{ind.sector}</span>}
                      </div>
                      <div className={styles.megaItemDesc}>{ind.desc}</div>
                    </div>
                    <div className={styles.megaItemArrow}>→</div>
                  </Link>
                ))}
              </div>
              <div className={styles.megaFooter}>
                <span className={styles.megaFooterText}>
                  Don&apos;t see your vertical?{' '}
                  <strong>AIgnyte works wherever direct marketing response rates matter.</strong>
                </span>
                <button className={styles.megaFooterCta} onClick={openLetsTalk}>Let&apos;s Talk</button>
              </div>
            </div>
          </li>

          {/* Success Stories dropdown */}
          <li className={styles.dropdownTrigger} tabIndex={0}>
            <Link href="/success-stories" className={`${styles.link} ${styles.chevronLink} ${isActive('/success-stories') ? styles.active : ''}`}>
              Success Stories
              <svg className={styles.chevron} viewBox="0 0 14 14" fill="none">
                <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className={`${styles.megaMenu} ${styles.megaMenuStories}`}>
              <div className={styles.megaHeader}>
                <span className={styles.megaHeaderLabel}>Success Stories</span>
                <Link className={styles.megaHeaderLink} href="/success-stories" onClick={closeMegaMenu}>View all →</Link>
              </div>
              <div className={styles.megaStories}>
                {caseStudies.map((cs) => (
                  <Link key={cs.href} className={styles.storyItem} href={cs.href} onClick={closeMegaMenu}>
                    <div className={styles.storyStat}>
                      <div className={styles.storyStatNum}>{cs.stat}</div>
                      <div className={styles.storyStatMetric}>{cs.metricLabel}</div>
                    </div>
                    <div className={styles.storyContent}>
                      <div className={styles.storyMeta}>
                        <span className={`${styles.storyVerticalBadge} ${styles[cs.badgeClass]}`}>{cs.badge}</span>
                        <span className={styles.storyChannel}>{cs.channel}</span>
                      </div>
                      <div className={styles.storyName}>{cs.name}</div>
                      <div className={styles.storyDesc}>{cs.desc}</div>
                    </div>
                    <div className={styles.storyArrowWrap}><span className={styles.storyArrow}>→</span></div>
                  </Link>
                ))}
              </div>
              <div className={styles.megaFooter}>
                <span className={styles.megaFooterText}>
                  Results on <strong>existing creatives, existing data, existing processes</strong>.
                </span>
                <button className={styles.megaFooterCta} onClick={openLetsTalk}>Let&apos;s Talk</button>
              </div>
            </div>
          </li>

          <li><Link href="/blog" className={`${styles.link} ${isActive('/blog') ? styles.active : ''}`}>Blog</Link></li>
          <li><Link href="/faq" className={`${styles.link} ${isActive('/faq') ? styles.active : ''}`}>FAQs</Link></li>
          <li><Link href="/leadership" className={`${styles.link} ${isActive('/leadership') ? styles.active : ''}`}>Company</Link></li>
        </ul>

        <button className={styles.cta} onClick={openLetsTalk}>Let&apos;s Talk</button>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          <span className={drawerOpen ? styles.barOpen1 : ''} />
          <span className={drawerOpen ? styles.barOpen2 : ''} />
          <span className={drawerOpen ? styles.barOpen3 : ''} />
        </button>
      </nav>

      {/* Mobile overlay */}
      {drawerOpen && (
        <div className={styles.overlay} aria-hidden onClick={() => setDrawerOpen(false)} />
      )}

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ''}`} aria-hidden={!drawerOpen}>
        <div className={styles.drawerHeader}>Menu</div>
        <Link className={styles.drawerLink} href="/how-it-works">How It Works <span>›</span></Link>
        <Link className={styles.drawerLink} href="/technology">Technology <span>›</span></Link>

        <button
          className={styles.drawerSubLabel}
          onClick={() => setIndustriesOpen(!industriesOpen)}
          aria-expanded={industriesOpen}
        >
          Industries
          <svg className={`${styles.drawerChevron} ${industriesOpen ? styles.drawerChevronOpen : ''}`} viewBox="0 0 14 14" fill="none">
            <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className={`${styles.drawerSubPanel} ${industriesOpen ? styles.drawerSubPanelOpen : ''}`}>
          {industries.map((ind) => (
            <Link key={ind.href} className={styles.drawerSubItem} href={ind.href}>
              {ind.icon} {ind.name}
            </Link>
          ))}
        </div>

        <button
          className={styles.drawerSubLabel}
          onClick={() => setStoriesOpen(!storiesOpen)}
          aria-expanded={storiesOpen}
        >
          Success Stories
          <svg className={`${styles.drawerChevron} ${storiesOpen ? styles.drawerChevronOpen : ''}`} viewBox="0 0 14 14" fill="none">
            <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className={`${styles.drawerSubPanel} ${storiesOpen ? styles.drawerSubPanelOpen : ''}`}>
          {caseStudies.map((cs) => (
            <Link key={cs.href} className={styles.drawerStoryItem} href={cs.href}>
              <div className={styles.drawerStoryStat}>{cs.stat}</div>
              <div>
                <div className={styles.drawerStoryName}>{cs.name}</div>
                <div className={styles.drawerStoryMeta}>{cs.badge} · {cs.channel}</div>
              </div>
            </Link>
          ))}
        </div>

        <Link className={styles.drawerLink} href="/blog">Blog <span>›</span></Link>
        <Link className={styles.drawerLink} href="/faq">FAQs <span>›</span></Link>
        <Link className={styles.drawerLink} href="/leadership">Company <span>›</span></Link>
        <div className={styles.drawerCtaWrap}>
          <button className={styles.drawerCta} onClick={() => { openLetsTalk(); setDrawerOpen(false); }}>
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </>
  );
}
