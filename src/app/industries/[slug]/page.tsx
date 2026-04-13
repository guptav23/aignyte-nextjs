import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { industryPages, getIndustryBySlug } from '@/data/industries';
import IndustryPageClient from './IndustryPageClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industryPages.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: `${industry.name} | AIgnyte Message Decisioning`,
    description: industry.description,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();
  return <IndustryPageClient industry={industry} />;
}
