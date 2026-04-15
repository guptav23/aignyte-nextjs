export interface HeroMetaItem { iconKey: string; text: string; }

export interface SuccessStory {
  slug: string;
  badge: string;
  channel: string;
  stat: string;
  statLabel: string;
  statNote: string;
  headline: string;
  subhead: string;
  details: {
    volume: string;
    campaigns: string;
    channel: string;
    approach: string;
  };
  // Hero section
  heroH1: string;
  heroSub: string;
  heroMeta: HeroMetaItem[];
  heroStats: { num: string; numSmall?: boolean; label?: string; sub: string }[];
  // At a glance
  glance: { label: string; val: string; highlight?: boolean }[];
  // Challenge
  challengeLabel: string;
  challengeH2: string;
  challengeParas: string[];
  challengeCards?: { iconKey: string; title: string; body: string; val: string }[];
  // No new creatives callout
  noNewTitle: string;
  noNewBody: string;
  // Approach
  approachH2: string;
  approachPara: string;
  // Results
  resultsHeadline: string;
  resultBarLabel: string;
  resultBarBefore: { label: string; width: string; text: string };
  resultBarAfter: { label: string; width: string; text: string };
  resultLiftBadge: string;
  whatDroveLabel: string;
  whatDroveItems: string[];
  // Why it worked
  whyH2: string;
  whyPara: string;
  whyItems: { title: string; body: string }[];
  // CTA
  ctaH2: string;
  ctaPara: string;
  // Legacy fields kept for index page card
  challenge: string;
  solution: string;
  results: { num: string; label: string; note: string }[];
  quote?: { text: string; attribution: string };
}

export const successStories: SuccessStory[] = [
  {
    slug: 'nonprofit',
    badge: 'Non-Profit',
    channel: 'Direct Mail',
    stat: '50%+',
    statLabel: 'Response Rate Lift',
    statNote: 'Across 10 live campaigns',
    headline: '50%+ increase in donor response rate for a large national non-profit',
    subhead: '10.8 million pieces · 10 campaigns · existing creative components only',
    details: {
      volume: '10.8M pieces across 10 campaigns',
      campaigns: '10 live production campaigns',
      channel: 'Direct Mail',
      approach: 'Individual-level message matching',
    },

    heroH1: '50%+ increase in response rate for a large national non-profit',
    heroSub: 'A major non-profit with an established segmented direct mail program — testing-led, experience-driven. AIgnyte replaced hypothesis-based assignment with individually-matched creative decisions. No new creatives, no IT project.',
    heroMeta: [
      { iconKey: 'mail',     text: '10.8M direct mail pieces' },
      { iconKey: 'calendar', text: '10 campaigns · 12 months' },
      { iconKey: 'layers',   text: 'Envelope · Insert · Letter components' },
    ],
    heroStats: [
      { num: '50%+', label: 'Increase in response rate', sub: 'Across all campaigns vs. baseline' },
      { num: 'No new creatives', numSmall: true, sub: 'Entirely within existing creative inventory' },
      { num: 'No A/B testing', numSmall: true, sub: 'No experimentation or holdout groups required' },
      { num: 'No third-party data', numSmall: true, sub: 'Only data the client already had' },
    ],

    glance: [
      { label: 'Client', val: 'Large national non-profit' },
      { label: 'Channel', val: 'Direct mail appeals' },
      { label: 'Objective', val: 'Increase donation response rate — donors & prospects' },
      { label: 'Result', val: '50%+ lift in response rate', highlight: true },
    ],

    challengeLabel: 'The Challenge',
    challengeH2: 'Segments and testing — but not individual decisions.',
    challengeParas: [
      'This non-profit ran a sophisticated direct mail program — segmenting donors and prospects by giving history, recency, and demographic profile, then assigning creative packages based on accumulated experience and ongoing A/B testing. The program was well-managed. But segment-level assignment has a ceiling: within any segment, individuals vary enormously in what will actually drive them to respond. The testing measured which hypotheses were least wrong on average.',
      'The creative inventory was already in place — envelope designs, inserts, and letter body variants, assembled into packages. What was missing was a system capable of making an individual-level decision about which combination was right for each specific donor or prospect in each campaign cycle.',
    ],

    noNewTitle: 'No new creatives. No additional testing. No IT project.',
    noNewBody: 'AIgnyte delivered transformative results entirely within the client\'s existing constraints — using the envelope designs, inserts, and letter bodies already in inventory, the existing campaign history, and the available donor data. No new components were created. No new infrastructure was required. No changes to the client\'s existing execution stack.',

    approachH2: 'Three stages. One individual decision per donor.',
    approachPara: 'AIgnyte\'s standard three-stage methodology: every creative component — each envelope design, insert, and letter body — encoded into a Genetic Signature; a fresh Preference Profile generated for every donor and prospect at campaign time, inferring from their own attributes and how others like them have responded and not responded before; then each individual matched to their highest-scoring combination of components. One individually-reasoned creative package per person, every campaign cycle. Output delivered in the client\'s existing file format — no changes to their execution stack.',

    resultsHeadline: 'A 50%+ increase in response rate — across 10.8 million pieces, 10 campaigns.',
    resultBarLabel: 'Donation response rate',
    resultBarBefore: { label: 'Baseline', width: '40%', text: '2.4%' },
    resultBarAfter: { label: 'With aignyte', width: '60%', text: '3.63%' },
    resultLiftBadge: '↑ 50%+ lift in response rate',
    whatDroveLabel: 'What drove the lift',
    whatDroveItems: [
      'Same components — assembled into the combination most likely to resonate with each individual',
      'Atomic-level matching across envelope, insert, and letter body simultaneously',
      'Response signals from each campaign fed back in, sharpening predictions with every cycle',
    ],

    whyH2: 'The untapped value was already in the inventory.',
    whyPara: 'Segmentation and testing find the best answer on average — not the right answer for each individual. The non-profit had the creative inventory and the strategic intent. What AIgnyte added was the ability to act on that intent at an individual level, every campaign cycle, without ongoing testing overhead.',
    whyItems: [
      {
        title: 'Individual decisions, not segments',
        body: 'Every donor and prospect received an individually-reasoned creative assignment — not a segment default, but a decision made specifically for that person in that campaign cycle.',
      },
      {
        title: 'Self-sharpening across campaigns',
        body: 'Each campaign\'s response data fed back into the next cycle\'s Preference Profiles. More precise with every mailing — no retraining, no manual tuning.',
      },
    ],

    ctaH2: 'Your creative inventory is more valuable than you think.',
    ctaPara: 'AIgnyte works with your existing creatives, your existing campaign file, and your existing execution stack. The lift comes from matching — not from building more.',

    challenge:
      'The organization had a robust creative library — multiple offer tiers, emotional appeals, and imagery variants — but was sending the same package to every donor segment. Response rates had plateaued despite increasing volume and creative investment. Leadership needed a way to do more with what they already had.',
    solution:
      'AIgnyte generated a Genetic Signature for each of the existing creative packages, decomposing them into their core components: offer structure, emotional framing, imagery type, and call-to-action pattern. For every individual in every campaign file, AIgnyte selected the single package most likely to generate a response — based on that person\'s giving history, demographic profile, and behavioural signals. No new creative was produced. No PII was required.',
    results: [
      { num: '50%+', label: 'Response rate lift', note: 'vs. control / prior send' },
      { num: '10.8M', label: 'Pieces processed', note: 'Across 10 campaigns' },
      { num: '0', label: 'New creatives required', note: 'Existing catalog only' },
    ],
    quote: {
      text: 'We had the creative. We had the data. We just didn\'t have a way to connect them at the individual level. AIgnyte did that.',
      attribution: 'VP, Direct Response — Large National Non-Profit',
    },
  },
  {
    slug: 'retailer',
    badge: 'Retail',
    channel: 'Direct Mail',
    stat: '1.4×',
    statLabel: 'Response Rate',
    statNote: '2× campaign efficiency',
    headline: '1.4× response rate and 2× campaign efficiency for a Fortune 10 retailer',
    subhead: '4,000+ offer combinations · matched individually · no new creatives',
    details: {
      volume: '4,000+ active offer combinations',
      campaigns: 'Ongoing production campaigns',
      channel: 'Direct Mail',
      approach: 'Offer-level decisioning at individual scale',
    },

    heroH1: '1.4x improvement in response rates and 2x increase in campaign efficiency',
    heroSub: 'A Fortune 10 retailer was running high-volume direct mail campaigns with a fixed approach to offer assignment. AIgnyte matched every prospect to their individually optimal offer combination — selecting from 4,000+ possibilities — with no new creatives and no changes to the existing execution stack.',
    heroMeta: [
      { iconKey: 'mail',        text: 'High-volume direct mail' },
      { iconKey: 'shoppingBag', text: 'Fortune 10 retailer' },
      { iconKey: 'layers',      text: '4,000+ offer combinations' },
    ],
    heroStats: [
      { num: '1.4x', label: 'Improvement in response rate', sub: 'vs. all previous campaigns without AIgnyte' },
      { num: '2x', label: 'Increase in campaign efficiency', sub: 'Compared to prior direct mail campaigns' },
      { num: '4,000+', label: 'Possible offer combinations', sub: 'One optimal match per individual' },
    ],

    glance: [
      { label: 'Client', val: 'Fortune 10 retailer' },
      { label: 'Channel', val: 'Direct mail' },
      { label: 'Objective', val: 'Improve campaign response rate and cost efficiency' },
      { label: 'Result', val: '1.4x response rate · 2x campaign efficiency', highlight: true },
    ],

    challengeLabel: 'The Challenge',
    challengeH2: 'The right question was being overlooked.',
    challengeParas: [
      'This Fortune 10 retailer ran extensive direct mail campaigns — large files, tested offers, optimised targeting. The existing approach focused on a well-established question: <em>who</em> is likely to respond? Response models, selection criteria, and segment-level targeting were all built around that framing.',
      'What wasn\'t being asked — and what no existing system could answer — was a different question: <em>what will stimulate this specific prospect to respond?</em> The retailer had a deep offer catalog. Multiple product combinations, price points, promotional structures, and message framings were all in play. But every prospect in the file received the same offer, regardless of which of the thousands of possible combinations was most likely to move them.',
      'The untapped value wasn\'t in the targeting. It was in the offer matching. And it was large.',
    ],
    challengeCards: [
      {
        iconKey: 'target',
        title: 'The wrong question',
        body: 'Existing models asked <em>who</em> will respond. AIgnyte reframed this as <em>what</em> will make each individual respond — a fundamentally different problem requiring a fundamentally different approach.',
        val: 'New framing',
      },
      {
        iconKey: 'layers',
        title: 'Deep offer catalog',
        body: 'The retailer had a rich set of product combinations, promotional structures, and creative elements — resulting in 4,000+ possible offer combinations. No manual process could match these to individuals at scale.',
        val: '4,000+ combinations',
      },
      {
        iconKey: 'trendingDown',
        title: 'Untapped efficiency',
        body: 'Sending sub-optimal offers to prospects isn\'t just a missed opportunity — it\'s a direct cost. Every campaign cycle, a significant portion of spend was reaching people with the wrong message.',
        val: 'Systematic mismatch',
      },
    ],

    noNewTitle: 'No new creatives. No new data. No IT project.',
    noNewBody: 'AIgnyte delivered transformative results entirely within the client\'s existing constraints — using the offer catalog already in production, the existing campaign history, and the available prospect data. No new creative development was required. No new data sources were needed. No changes were made to the client\'s existing execution stack.',

    approachH2: 'Three stages. 4,000+ combinations. Every individual.',
    approachPara: 'AIgnyte\'s standard three-stage methodology: every offer combination in the retailer\'s catalog encoded into a Genetic Signature; at campaign time, a fresh Preference Profile derived for every prospect — i.e. how will each offer element influence this individual to respond or not, inferred from their own attributes and how others like them have responded and not responded before; then each prospect matched to the highest-scoring offer from 4,000+ possible combinations. One individually-reasoned offer decision per person, every campaign cycle. Output delivered in the client\'s existing file format — no changes to their execution stack.',

    resultsHeadline: '1.4x response rate. 2x campaign efficiency. Same catalog, same data, same process.',
    resultBarLabel: 'Response rate improvement',
    resultBarBefore: { label: 'Baseline', width: '44%', text: 'Prior campaigns' },
    resultBarAfter: { label: 'With AIgnyte', width: '62%', text: '1.4x improvement' },
    resultLiftBadge: '↑ 1.4x response rate vs. all prior campaigns',
    whatDroveLabel: 'What drove the results',
    whatDroveItems: [
      'Reframing the problem from <em>who</em> will respond to <em>what</em> will make each individual respond',
      'Matching each individual to the optimal offer from 4,000+ combinations — not the best on average',
      '2x campaign efficiency — more response per pound of campaign spend, with the same budget',
    ],

    whyH2: 'The value was already in the catalog.',
    whyPara: 'The retailer\'s existing models were optimised to answer <em>who</em> is likely to respond. AIgnyte added the second layer — given that this person is being mailed, <em>what offer</em> is most likely to make them respond? These are separate problems. With 4,000+ possible combinations and millions of prospects, no manual process could answer the second question at scale. AIgnyte did — making a distinct, individually-reasoned offer decision for every person in the file, entirely complementary to the existing targeting approach, without touching the selection process or the execution stack.',
    whyItems: [],

    ctaH2: 'Your offer catalog is more valuable than you think.',
    ctaPara: 'AIgnyte works with your existing offers, your existing campaign file, and your existing execution stack. The lift comes from matching — not from building more.',

    challenge:
      'The retailer had an enormous catalog of offer combinations — discount tiers, category focuses, seasonal themes — and was relying on broad segment rules to assign them. With 4,000+ possible combinations and millions of recipients, human-defined segmentation rules couldn\'t capture individual-level affinity. They were leaving significant lift on the table.',
    solution:
      'AIgnyte ingested the full offer catalog and generated Genetic Signatures across all 4,000+ combinations. For each recipient in each campaign file, the decisioning engine scored every offer and selected the optimal match. The process ran end-to-end in the existing production workflow with no disruption to the execution stack.',
    results: [
      { num: '1.4×', label: 'Response rate', note: 'vs. segment-based assignment' },
      { num: '2×', label: 'Campaign efficiency', note: 'Revenue per piece mailed' },
      { num: '4,000+', label: 'Offer combinations', note: 'Managed by AIgnyte' },
    ],
    quote: {
      text: 'The scale of decisioning AIgnyte handles would be impossible to replicate with manual rules — and the results prove it.',
      attribution: 'Director of Direct Marketing — Fortune 10 Retailer',
    },
  },
  {
    slug: 'email-ctr',
    badge: 'Healthcare',
    channel: 'Email',
    stat: '70%',
    statLabel: 'Email CTR Lift',
    statNote: 'Patient & prospect engagement',
    headline: '70% increase in email click-through rate for a large hospital chain',
    subhead: 'Patient & prospect engagement · individually matched content · no new creatives',
    details: {
      volume: 'Millions of patient & prospect records',
      campaigns: 'Ongoing email engagement programmes',
      channel: 'Email (API integration)',
      approach: 'Real-time individual-level content matching',
    },

    heroH1: '70% increase in email click-through rate for a large hospital chain',
    heroSub: 'A large hospital chain with a segmented email strategy — hypothesis-driven, with ongoing experimentation. AIgnyte replaced the guesswork with individually-matched decisions, with no new creatives and no changes to the existing campaign execution process.',
    heroMeta: [
      { iconKey: 'mail',        text: 'Email engagement campaign' },
      { iconKey: 'stethoscope', text: 'Large hospital chain' },
      { iconKey: 'layers',      text: 'Existing content catalog only' },
    ],
    heroStats: [
      { num: '70%', label: 'Increase in click-through rate', sub: 'vs. baseline email campaigns' },
      { num: 'No new creatives', numSmall: true, sub: 'Entirely within the existing content inventory' },
      { num: 'No A/B testing', numSmall: true, sub: 'No experimentation or holdout groups required' },
      { num: 'No third-party data', numSmall: true, sub: 'Only data the client already had' },
    ],

    glance: [
      { label: 'Client', val: 'Large hospital chain' },
      { label: 'Channel', val: 'Email engagement campaigns' },
      { label: 'Objective', val: 'Increase patient and prospect email engagement' },
      { label: 'Result', val: '70% lift in email click-through rate', highlight: true },
    ],

    challengeLabel: 'The Challenge',
    challengeH2: 'Segments and hypotheses. But not individual decisions.',
    challengeParas: [
      'This hospital chain was already running a segmented email strategy — grouping patients and prospects by age, condition, care history, and engagement level, and assigning content based on hypotheses about what each segment would respond to. The approach was thoughtful, and supported by ongoing experimentation. But it had a ceiling: segment-level logic, however well-designed, assigns the same content to everyone within a segment. Within any segment, individuals vary enormously in what will actually drive them to click.',
      'The content library was rich — different service lines, health topics, tones, and CTAs. The problem wasn\'t the content, and it wasn\'t the segmentation. It was that no system was making an individual-level decision for each person. The experimentation was measuring which hypotheses were least wrong on average — not which content was right for each individual.',
    ],

    noNewTitle: 'No new content. No additional data. No IT project.',
    noNewBody: 'AIgnyte delivered a 70% improvement in click-through rate entirely within the client\'s existing constraints — using the email content already in production, the existing campaign history, and the available patient and prospect data. No new content was developed. No new data sources were required. No changes were made to the client\'s existing email execution stack.',

    approachH2: 'Three stages. One individual decision per recipient.',
    approachPara: 'AIgnyte\'s standard three-stage methodology: every email content variant encoded into a Genetic Signature; a fresh Preference Profile generated for every recipient at campaign time — inferring from their own attributes and how others like them have responded and not responded before; then each recipient matched to their highest-scoring content variant. One individually-reasoned decision per person, every campaign cycle. Output delivered in the client\'s existing format — no changes to their email execution stack.',

    resultsHeadline: 'A 70% increase in click-through rate — same content, same list, same send process.',
    resultBarLabel: 'Email click-through rate',
    resultBarBefore: { label: 'Baseline', width: '37%', text: 'Prior campaigns' },
    resultBarAfter: { label: 'With AIgnyte', width: '63%', text: '70% improvement' },
    resultLiftBadge: '↑ 70% lift in click-through rate vs. baseline',
    whatDroveLabel: 'What drove the lift',
    whatDroveItems: [
      'Each recipient received the content most likely to resonate with their specific health profile and engagement history',
      'Atomic-level content matching — the specific combination of topic, tone, and CTA that was right for each individual',
      'Response signals from each campaign fed back in, sharpening individual content predictions with every send cycle',
    ],

    whyH2: 'The content was already there. The matching wasn\'t.',
    whyPara: 'Segmentation and experimentation have a ceiling — they find the best answer on average, not the right answer for each individual. The hospital had the content and the strategic intent. What AIgnyte added was the ability to act on that intent at an individual level, every campaign cycle, without ongoing experimentation overhead.',
    whyItems: [
      {
        title: 'Individual decisions, not segments',
        body: 'Every recipient got an individually-reasoned content assignment — not an age-group or condition-category default, but a decision made specifically for that person.',
      },
      {
        title: 'Self-sharpening',
        body: 'Each campaign\'s response data feeds the next cycle\'s Preference Profiles. More precise with every send — no retraining, no manual tuning.',
      },
    ],

    ctaH2: 'Your content library is more valuable than you think.',
    ctaPara: 'AIgnyte works with your existing content, your existing list, and your existing send process. The lift comes from matching — not from building more.',

    challenge:
      'The hospital system was sending broad content blocks to patient and prospect segments defined by service line and geography. Click-through rates were low — not because the content was irrelevant, but because it was rarely the most relevant content for any given individual. The team had the right content; they lacked the routing intelligence to get it to the right person.',
    solution:
      'AIgnyte integrated via API into the email delivery stack, receiving individual records and returning content assignments in real time. For every send, AIgnyte selected the content block — from the existing library — most likely to drive a click for that individual: the right service line, the right emotional framing, the right call to action. No new content was produced. Integration took under three weeks.',
    results: [
      { num: '70%', label: 'Email CTR lift', note: 'vs. segment-based content routing' },
      { num: '<3 weeks', label: 'Integration time', note: 'API into existing ESP' },
      { num: '0', label: 'New content required', note: 'Existing library, smarter routing' },
    ],
    quote: {
      text: 'Our content team spent years building the library. AIgnyte finally lets us use it properly.',
      attribution: 'Head of CRM — Large Hospital Chain',
    },
  },
];

export function getStoryBySlug(slug: string): SuccessStory | undefined {
  return successStories.find((s) => s.slug === slug);
}
