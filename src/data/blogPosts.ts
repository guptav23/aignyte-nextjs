export interface BlogPost {
  slug: string;
  tag: string;
  readTime: string;
  title: string;
  titleHtml?: string;
  deck: string;
  date: string;
  author: string;
  authorTitle: string;
  authorInitials: string;
  ctaH2?: string;
  ctaPara?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'right-message-right-customer',
    tag: 'Direct Marketing',
    readTime: '6 min read',
    title: 'From Static to Dynamic: What "Right Message, Right Customer, Right Time" Actually Requires',
    titleHtml: 'From Static to Dynamic: What &ldquo;Right Message, Right Customer, Right Time&rdquo; <em>Actually Requires</em>',
    deck: 'Most direct marketing programs accept that the variables are dynamic in theory, then build systems that treat them as static in practice. Here\'s what it actually takes to close that gap.',
    date: 'April 2026',
    author: 'Broud Kuhn',
    authorTitle: 'Advisor, AIgnyte',
    authorInitials: 'BK',
    ctaH2: 'What would your campaigns look like with truly dynamic decisioning?',
    ctaPara: 'Talk to us about how Message Decisioning works for your program — and what response lift you\'re currently leaving on the table.',
  },
  {
    slug: 'why-ab-testing-is-lying-to-you',
    tag: 'Direct Marketing',
    readTime: '7 min read',
    title: 'Your A/B tests are lying to you.',
    titleHtml: 'Your A/B tests are <em>lying</em> to you.',
    deck: 'Three structural flaws mean the creative "winners" your tests identify are wrong — not occasionally, but by design. And the damage compounds with every campaign cycle.',
    date: 'May 2025',
    author: 'Gaurav Gupta',
    authorTitle: 'CEO & Co-Founder, AIgnyte',
    authorInitials: 'GG',
    ctaH2: 'What would your campaigns look like without A/B testing?',
    ctaPara: 'Talk to us about how Message Decisioning works for your program — and what response lift you\'re currently leaving on the table.',
  },
];
