export interface BlogPost {
  slug: string;
  tag: string;
  readTime: string;
  title: string;
  deck: string;
  date: string;
  author: string;
  authorTitle: string;
  authorInitials: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-ab-testing-is-lying-to-you',
    tag: 'Direct Marketing',
    readTime: '7 min read',
    title: 'Your A/B tests are lying to you.',
    deck: 'Three structural flaws mean the creative "winners" your tests identify are wrong — not occasionally, but by design. And the damage compounds with every campaign cycle.',
    date: 'May 2025',
    author: 'Gaurav Gupta',
    authorTitle: 'CEO & Co-Founder, AIgnyte',
    authorInitials: 'GG',
  },
];
