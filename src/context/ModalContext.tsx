'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface ModalContextValue {
  isLetsTalkOpen: boolean;
  openLetsTalk: () => void;
  closeLetsTalk: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isLetsTalkOpen, setLetsTalkOpen] = useState(false);

  const openLetsTalk = useCallback(() => {
    setLetsTalkOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLetsTalk = useCallback(() => {
    setLetsTalkOpen(false);
    document.body.style.overflow = '';
  }, []);

  return (
    <ModalContext.Provider value={{ isLetsTalkOpen, openLetsTalk, closeLetsTalk }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModal must be used within ModalProvider');
  return ctx;
}
