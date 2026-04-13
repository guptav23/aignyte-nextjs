'use client';
import { useModal } from '@/context/ModalContext';

export default function LetsTalkBtn({ className }: { className?: string }) {
  const { openLetsTalk } = useModal();
  return (
    <button className={className ?? 'btn-primary'} onClick={openLetsTalk}>
      Let&apos;s Talk
    </button>
  );
}
