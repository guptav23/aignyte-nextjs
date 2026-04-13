'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/** Initializes IntersectionObserver for .aig-reveal elements on every route change */
export default function ScrollRevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.aig-reveal');
    targets.forEach((t) => t.classList.add('aig-hidden'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('aig-hidden');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
