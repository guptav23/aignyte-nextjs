import type { Metadata } from 'next';
import FaqPageClient from './FaqPageClient';

export const metadata: Metadata = {
  title: 'FAQs | AIgnyte Message Decisioning Platform',
  description: 'Answers to common questions about AIgnyte — process, integration, compliance, cost, ROI, and the technology behind Message Decisioning.',
};

export default function FaqPage() {
  return <FaqPageClient />;
}
