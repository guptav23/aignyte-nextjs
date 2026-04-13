'use client';

import { useEffect, useRef } from 'react';

/** Attach mouse-tracking radial glow to cards via CSS custom props --sx / --sy */
export function useSpotlight(selector: string) {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(selector);

    function onMove(e: MouseEvent) {
      const card = (e.currentTarget as HTMLElement);
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--sx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--sy', `${e.clientY - rect.top}px`);
    }

    cards.forEach((card) => card.addEventListener('mousemove', onMove));
    return () => cards.forEach((card) => card.removeEventListener('mousemove', onMove));
  }, [selector]);
}

/** Ref-based spotlight for a single element container */
export function useSpotlightRef<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const cards = el.querySelectorAll<HTMLElement>('[data-spotlight]');

    function onMove(e: MouseEvent) {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--sx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--sy', `${e.clientY - rect.top}px`);
    }

    cards.forEach((c) => c.addEventListener('mousemove', onMove));
    return () => cards.forEach((c) => c.removeEventListener('mousemove', onMove));
  }, []);

  return ref;
}
