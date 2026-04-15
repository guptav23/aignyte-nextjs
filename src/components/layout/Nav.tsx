'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useModal } from '@/context/ModalContext';
import { industries, caseStudies } from '@/data/navigation';
import styles from './Nav.module.css';

export default function Nav() {
  const { openLetsTalk } = useModal();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileStoriesOpen, setMobileStoriesOpen] = useState(false);
  const [desktopIndustriesOpen, setDesktopIndustriesOpen] = useState(false);
  const [desktopStoriesOpen, setDesktopStoriesOpen] = useState(false);
  const closeTimeRef = useRef(0);
  const pathname = usePathname();

  // Close everything on route change
  useEffect(() => {
    setMobileDrawerOpen(false);
    setDesktopIndustriesOpen(false);
    setDesktopStoriesOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileDrawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileDrawerOpen]);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href + '/');
  }

  function closeDesktopMenus() {
    setDesktopIndustriesOpen(false);
    setDesktopStoriesOpen(false);
    closeTimeRef.current = Date.now();
  }

  function canOpen() {
    return Date.now() - closeTimeRef.current > 400;
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
          <li
            className={styles.dropdownTrigger}
            onMouseEnter={() => { if (canOpen()) setDesktopIndustriesOpen(true); }}
            onMouseLeave={() => setDesktopIndustriesOpen(false)}
          >
            <Link href="/industries" className={`${styles.link} ${styles.chevronLink} ${isActive('/industries') ? styles.active : ''}`}>
              Industries
              <svg className={`${styles.chevron} ${desktopIndustriesOpen ? styles.chevronOpen : ''}`} viewBox="0 0 14 14" fill="none">
                <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className={`${styles.megaMenu} ${styles.megaMenuIndustries} ${desktopIndustriesOpen ? styles.megaMenuOpen : ''}`}>
              <div className={styles.megaHeader}>
                <span className={styles.megaHeaderLabel}>Industries</span>
                <Link className={styles.megaHeaderLink} href="/industries" onClick={closeDesktopMenus}>View all →</Link>
              </div>
              <div className={styles.megaGrid}>
                {industries.map((ind) => {
                  const IndIcon = ind.icon;
                  return (
                    <Link key={ind.href} className={styles.megaItem} href={ind.href} onClick={closeDesktopMenus}>
                      <div className={styles.megaItemIcon}><IndIcon size={16} strokeWidth={1.5} /></div>
                      <div className={styles.megaItemText}>
                        <div className={styles.megaItemName}>
                          {ind.name}
                          {ind.sector && <span className={`${styles.sectorBadge} ${styles[ind.sectorClass]}`}>{ind.sector}</span>}
                        </div>
                        <div className={styles.megaItemDesc}>{ind.desc}</div>
                      </div>
                      <div className={styles.megaItemArrow}>→</div>
                    </Link>
                  );
                })}
              </div>
              <div className={styles.megaFooter}>
                <span className={styles.megaFooterText}>
                  Don&apos;t see your vertical?{' '}
                  <strong>AIgnyte works wherever direct marketing response rates matter.</strong>
                </span>
                <button className={styles.megaFooterCta} onClick={() => { closeDesktopMenus(); openLetsTalk(); }}>Let&apos;s Talk</button>
              </div>
            </div>
          </li>

          {/* Success Stories dropdown */}
          <li
            className={styles.dropdownTrigger}
            onMouseEnter={() => { if (canOpen()) setDesktopStoriesOpen(true); }}
            onMouseLeave={() => setDesktopStoriesOpen(false)}
          >
            <Link href="/success-stories" className={`${styles.link} ${styles.chevronLink} ${isActive('/success-stories') ? styles.active : ''}`}>
              Success Stories
              <svg className={`${styles.chevron} ${desktopStoriesOpen ? styles.chevronOpen : ''}`} viewBox="0 0 14 14" fill="none">
                <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className={`${styles.megaMenu} ${styles.megaMenuStories} ${desktopStoriesOpen ? styles.megaMenuOpen : ''}`}>
              <div className={styles.megaHeader}>
                <span className={styles.megaHeaderLabel}>Success Stories</span>
                <Link className={styles.megaHeaderLink} href="/success-stories" onClick={closeDesktopMenus}>View all →</Link>
              </div>
              <div className={styles.megaStories}>
                {caseStudies.map((cs) => (
                  <Link key={cs.href} className={styles.storyItem} href={cs.href} onClick={closeDesktopMenus}>
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
                <button className={styles.megaFooterCta} onClick={() => { closeDesktopMenus(); openLetsTalk(); }}>Let&apos;s Talk</button>
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
          aria-label={mobileDrawerOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileDrawerOpen}
          onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
        >
          <span className={mobileDrawerOpen ? styles.barOpen1 : ''} />
          <span className={mobileDrawerOpen ? styles.barOpen2 : ''} />
          <span className={mobileDrawerOpen ? styles.barOpen3 : ''} />
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileDrawerOpen && (
        <div className={styles.overlay} aria-hidden onClick={() => setMobileDrawerOpen(false)} />
      )}

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${mobileDrawerOpen ? styles.drawerOpen : ''}`} aria-hidden={!mobileDrawerOpen}>
        <div className={styles.drawerHeader}>Menu</div>
        <Link className={styles.drawerLink} href="/how-it-works">How It Works <span>›</span></Link>
        <Link className={styles.drawerLink} href="/technology">Technology <span>›</span></Link>

        <button
          className={styles.drawerSubLabel}
          onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
          aria-expanded={mobileIndustriesOpen}
        >
          Industries
          <svg className={`${styles.drawerChevron} ${mobileIndustriesOpen ? styles.drawerChevronOpen : ''}`} viewBox="0 0 14 14" fill="none">
            <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className={`${styles.drawerSubPanel} ${mobileIndustriesOpen ? styles.drawerSubPanelOpen : ''}`}>
          {industries.map((ind) => {
            const IndIcon = ind.icon;
            return (
              <Link key={ind.href} className={styles.drawerSubItem} href={ind.href}>
                <IndIcon size={16} strokeWidth={1.5} /> {ind.name}
              </Link>
            );
          })}
        </div>

        <button
          className={styles.drawerSubLabel}
          onClick={() => setMobileStoriesOpen(!mobileStoriesOpen)}
          aria-expanded={mobileStoriesOpen}
        >
          Success Stories
          <svg className={`${styles.drawerChevron} ${mobileStoriesOpen ? styles.drawerChevronOpen : ''}`} viewBox="0 0 14 14" fill="none">
            <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className={`${styles.drawerSubPanel} ${mobileStoriesOpen ? styles.drawerSubPanelOpen : ''}`}>
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
          <button className={styles.drawerCta} onClick={() => { openLetsTalk(); setMobileDrawerOpen(false); }}>
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </>
  );
}
