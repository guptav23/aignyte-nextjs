import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './LeadershipPage.module.css';
import LetsTalkBtn from '@/components/LetsTalkBtn';

export const metadata: Metadata = {
  title: 'Leadership — AIgnyte Message Decisioning Platform',
  description:
    'Meet the team behind AIgnyte — practitioners who lived the problem of individual-level message matching in direct marketing and built the solution.',
};

const team = [
  {
    initials: 'GG',
    gradient: 'linear-gradient(135deg, #1a2b5e, #3b5cb8)',
    name: 'Gaurav Gupta',
    role: 'CEO & Founder',
    bio: [
      'Gaurav founded AIgnyte after two decades at the intersection of advanced analytics and direct marketing. He has led data science and marketing effectiveness initiatives at major financial services firms, building and deploying predictive models at enterprise scale. He identified the one-to-one creative matching problem firsthand — and spent years developing the methodology that became AIgnyte\'s core technology.',
      'His work spans credit card acquisition, insurance, non-profit fundraising, and collections — the exact verticals where AIgnyte operates today.',
    ],
    tags: ['Machine Learning', 'Predictive Modeling', 'Financial Services', 'Direct Marketing'],
    linkedin: 'https://www.linkedin.com/in/ggupta5/',
  },
  {
    initials: 'LB',
    gradient: 'linear-gradient(135deg, #1a7a45, #27ae60)',
    name: 'Larry Blakeman',
    role: 'COO & Co-Founder',
    bio: [
      'Larry loves solving business problems and building strong teams that deliver results. As COO — and a former Chief Information Officer — he brings a rare combination of operational leadership and technology depth. At AIgnyte, he bridges data science and enterprise IT to help clients improve response rates and better serve their customers through one-to-one marketing.',
      'Larry leads client engagements end-to-end, ensuring every AIgnyte deployment is operationally seamless and delivers measurable, auditable lift.',
    ],
    tags: ['Enterprise Sales', 'Client Delivery', 'Marketing Operations', 'Go-to-Market'],
    linkedin: 'https://www.linkedin.com/in/larry-blakeman-b2a6727/',
  },
  {
    initials: 'NL',
    gradient: 'linear-gradient(135deg, #7c3aed, #a855f7)',
    name: 'Nathan Law',
    role: 'CTO',
    bio: [
      'Nathan has been at the nexus of capital markets, startups, and technology innovation for over 25 years. A collaborative leader who thrives in dynamic environments, he has a track record of crafting solutions with talented teams across Wall Street firms including JPMorgan Chase, Merrill Lynch, and Société Générale.',
      'Joining AIgnyte continues his journey fusing AI, machine learning, and direct marketing — building the production-grade platform that makes individual-level message decisioning real at enterprise scale.',
    ],
    tags: ['Enterprise AI', 'Platform Architecture', 'Capital Markets', 'Production ML'],
    linkedin: 'https://www.linkedin.com/in/nlaw/',
  },
];

const advisors = [
  {
    initials: 'KG',
    gradient: 'linear-gradient(135deg, #0891b2, #06b6d4)',
    name: 'Krishna Gopinathan',
    title: 'Strategic Advisor',
    bio: 'Brings deep experience in enterprise technology, AI strategy, and scaling analytics businesses across global markets.',
  },
  {
    initials: 'BK',
    gradient: 'linear-gradient(135deg, #1a2b5e, #3b5cb8)',
    name: 'Broud Kuhn',
    title: 'Strategic Advisor',
    bio: 'Deep experience in marketing strategy and performance marketing, with a focus on measurable outcomes at enterprise scale.',
  },
  {
    initials: 'RH',
    gradient: 'linear-gradient(135deg, #dc2626, #ef4444)',
    name: 'Raymond Ho',
    title: 'Strategic Advisor',
    bio: 'Brings expertise in data-driven marketing, consumer analytics, and enterprise technology commercialisation.',
  },
  {
    initials: 'RB',
    gradient: 'linear-gradient(135deg, #d97706, #f59e0b)',
    name: 'Rob Biggers',
    title: 'Strategic Advisor',
    bio: 'Extensive background in direct marketing and financial services, with deep knowledge of campaign operations and response optimisation.',
  },
];

const values = [
  {
    icon: '🎯',
    title: 'Domain depth, not just AI',
    body: 'We understand direct marketing from the inside — the operational realities, the measurement frameworks, the compliance requirements. Our technology is built around how these programs actually run.',
  },
  {
    icon: '📊',
    title: 'Proof before commitment',
    body: "Every engagement starts with demonstrable lift on your existing campaigns. We don't ask for long-term commitment before we've earned it. The results speak first.",
  },
  {
    icon: '🔌',
    title: 'No disruption, no rip-and-replace',
    body: 'We built AIgnyte to slot into your existing stack. No IT project. No new data pipelines. Your execution process stays intact — we just make the creative decisions smarter.',
  },
];

export default function LeadershipPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className="section-tag fi">Leadership</span>
          <h1 className="fi">Practitioners who lived the problem — and built the solution</h1>
          <p className={`${styles.heroSub} fi`}>
            AIgnyte was founded by people who spent careers in direct marketing and data science —
            who understood the gap between what one-to-one marketing promised and what the tools
            available could actually deliver.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className={styles.team}>
        <div className={styles.teamInner}>
          <span className="section-tag">Leadership Team</span>
          <div className={styles.teamGrid}>
            {team.map((p) => (
              <div key={p.name} className={`${styles.teamCard} aig-reveal`}>
                <div className={styles.teamAvatar} style={{ background: p.gradient }}>{p.initials}</div>
                <div className={styles.teamName}>{p.name}</div>
                <div className={styles.teamRole}>{p.role}</div>
                <div className={styles.teamBio}>
                  {p.bio.map((para, i) => <p key={i}>{para}</p>)}
                </div>
                <div className={styles.teamTags}>
                  {p.tags.map((t) => <span key={t} className={styles.teamTag}>{t}</span>)}
                </div>
                {p.linkedin && (
                  <Link href={p.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkedinLink}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className={styles.advisors}>
        <div className={styles.advisorsInner}>
          <span className="section-tag">Advisors</span>
          <div className={styles.advisorsGrid}>
            {advisors.map((a) => (
              <div key={a.name} className={`${styles.advisorCard} aig-reveal`}>
                <div className={styles.advisorAvatar} style={{ background: a.gradient }}>{a.initials}</div>
                <div className={styles.advisorName}>{a.name}</div>
                <div className={styles.advisorTitle}>{a.title}</div>
                <p className={styles.advisorBio}>{a.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className={styles.values}>
        <div className={styles.valuesInner}>
          <span className="section-tag light">What Drives Us</span>
          <h2 className="lt" style={{ marginTop: 12, marginBottom: 40 }}>
            We exist to make one-to-one marketing real — not theoretical
          </h2>
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={`${styles.valueCard} aig-reveal`}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueBody}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2>Talk to the people who built it</h2>
          <p>
            The fastest way to understand what AIgnyte can do for your campaigns is a conversation
            with our team. We&apos;ll walk through your setup and tell you honestly what lift looks
            like for your vertical.
          </p>
          <div style={{ marginTop: '32px' }}>
            <LetsTalkBtn />
          </div>
        </div>
      </section>
    </>
  );
}
