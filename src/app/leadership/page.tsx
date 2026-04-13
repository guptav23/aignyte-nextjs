import type { Metadata } from 'next';
import styles from './LeadershipPage.module.css';
import LetsTalkBtn from '@/components/ui/LetsTalkBtn';

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
    initials: 'RB',
    gradient: 'linear-gradient(135deg, #d97706, #f59e0b)',
    name: 'Rob Biggers',
    title: 'Strategic Advisor',
    bio: 'Extensive background in direct marketing and financial services, with deep knowledge of campaign operations and response optimisation.',
  },
  {
    initials: 'RH',
    gradient: 'linear-gradient(135deg, #dc2626, #ef4444)',
    name: 'Raymond Ho',
    title: 'Strategic Advisor',
    bio: 'Brings expertise in data-driven marketing, consumer analytics, and enterprise technology commercialisation.',
  },
  {
    initials: 'BK',
    gradient: 'linear-gradient(135deg, #1a2b5e, #3b5cb8)',
    name: 'Broud Kuhn',
    title: 'Strategic Advisor',
    bio: 'Deep experience in marketing strategy and performance marketing, with a focus on measurable outcomes at enterprise scale.',
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className={styles.advisors}>
        <div className={styles.advisorsInner}>
          <span className="section-tag">Advisory Board</span>
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
          <LetsTalkBtn className={styles.ctaBtn} />
        </div>
      </section>
    </>
  );
}
