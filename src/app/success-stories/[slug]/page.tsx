import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { successStories, getStoryBySlug } from '@/data/successStories';
import SuccessStoryClient from './SuccessStoryClient';

export function generateStaticParams() {
  return successStories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return {};
  return {
    title: `${story.headline} | AIgnyte`,
    description: story.subhead,
  };
}

export default async function SuccessStoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) notFound();
  return <SuccessStoryClient story={story} />;
}
