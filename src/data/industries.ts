import type { LucideIcon } from 'lucide-react';
import {
  CreditCard, Landmark, Home, Building2, Shield, Heart,
  FileText, Wifi, Stethoscope, ShoppingBag,
} from 'lucide-react';

export interface WhyPoint { title: string; body: string; }
export interface UseCase  { title: string; body: string; }

export interface IndustryPage {
  slug: string;
  icon: LucideIcon;
  name: string;
  heroTagline: string;
  sector: string;
  heroStat: string;
  heroStatLabel: string;
  heroSub: string;
  // Problem section
  problemHeading: string;
  problemParas: string[];
  // Use cases
  useCases: UseCase[];
  // Why different
  whyPoints: WhyPoint[];
  // CTA
  cta: string;
  // Navigation data (used on index cards)
  description: string;
}

export const industryPages: IndustryPage[] = [
  {
    slug: 'credit-cards',
    icon: CreditCard,
    name: 'Credit Cards',
    heroTagline: 'The right card offer for every individual — at every stage',
    sector: 'Financial Services',
    heroStat: '60%+',
    heroStatLabel: 'Response Rate Lift',
    heroSub: 'Acquisition, activation, and retention — every lifecycle stage individually matched.',
    description: 'Credit card direct mail depends on matching the right offer framing to each prospect. AIgnyte analyses your creative components and individually assigns the variant most likely to convert each prospect in your mailing list.',
    problemHeading: 'One message per segment — but hundreds of thousands of very different people within each',
    problemParas: [
      'A 25-year-old student with a FICO of 515 and a 52-year-old professional with a FICO of 780 are both in your acquisition file. They will respond to completely different messages — different emotional appeals, different product terms, different CTAs, different visual cues.',
      'Segmentation divides your file into groups and assigns a creative to each group. But within any segment, the range of individual preferences is still enormous. A/B testing tells you which creative performed better on average — it can\'t tell you which creative was right for each person.',
      'The result: a significant portion of every campaign is being shown a message that isn\'t optimal for them. AIgnyte closes that gap — encoding every creative at an atomic level, building an individual preference profile for every person in the file, and assigning the best match automatically.',
    ],
    useCases: [
      {
        title: 'New cardholder acquisition',
        body: 'A 25-year-old student with a FICO of 580 and a 52-year-old professional with a FICO of 780 are both in the same acquisition segment. They\'re receiving the same pre-screened envelope. But one is motivated by approval confidence and credit-building; the other by miles rewards and a premium card experience. Same segment — completely different people.',
      },
      {
        title: 'Card activation & early engagement',
        body: 'Two new cardholders receive their cards on the same day. One applied online after seeing a miles promotion; the other called in after responding to a credit-limit headline. Most issuers send both the same activation message. But the signals from acquisition — the channel, the creative that closed, the product motivation — are strong predictors of what will drive activation.',
      },
      {
        title: 'Retention & churn prevention',
        body: 'Three at-risk cardholders in the same churn-risk segment: one is a seven-year high-spend holder whose activity has recently declined; one is a two-year holder who has stopped using the rewards program; one is a newer cardholder who has made only minimum payments for three months. The message that retains each of them is completely different.',
      },
    ],
    whyPoints: [
      { title: 'Individual, not segment', body: 'One creative per person — not one per group.' },
      { title: 'Gets sharper every cycle', body: 'Response data feeds back automatically. More precise with every mailing.' },
      { title: 'No IT project, no new creatives', body: 'Slots into your existing stack. Returns a matched file in your format. Nothing else changes.' },
      { title: 'Built for issuer compliance', body: 'Volume caps, FCRA rules, suppression lists, carrier-route requirements — hard constraints, never overridden.' },
      { title: 'No PII. FCRA-safe.', body: 'De-identified data only at every stage.' },
      { title: 'Proof before commitment', body: 'Lift demonstrated on your existing campaigns before any long-term commitment.' },
    ],
    cta: 'See what AIgnyte can do for your credit card campaigns',
  },
  {
    slug: 'personal-loans',
    icon: Landmark,
    name: 'Personal Loans',
    heroTagline: 'Match each borrower to the offer framing that fits their situation',
    sector: 'Financial Services',
    heroStat: '60%+',
    heroStatLabel: 'Response Rate Lift',
    heroSub: 'Match each borrower to the offer framing that fits their situation.',
    description: 'Personal loan campaigns live and die by how well the offer matches each prospect\'s immediate financial situation. AIgnyte optimises across loan amount, rate framing, term options, and purpose messaging to drive the highest response for every individual.',
    problemHeading: 'One message per segment — but very different borrowers within each',
    problemParas: [
      'A borrower looking to consolidate $25,000 in credit card debt responds to completely different messaging than one funding a kitchen renovation or covering an unexpected medical expense. Their credit profiles differ. Their urgency differs. What they need to hear to act differs.',
      'Most personal loan direct mail programs segment by credit tier and apply a single creative per segment. Within any tier, the range of borrower motivations, financial situations, and messaging preferences is still enormous — and a significant portion of every mailing is receiving a message that doesn\'t speak to their specific situation.',
      'AIgnyte fixes that. It encodes every creative in your catalog at an atomic level — rate framing, loan purpose language, urgency cues, approval messaging, visual hierarchy — and builds an individual preference model for every borrower in the file. Each person gets the creative most likely to move them. Not the best creative for their segment — the best creative for them.',
    ],
    useCases: [
      {
        title: 'New loan acquisition',
        body: 'Two borrowers in the same credit-tier segment: one is consolidating $22,000 in high-rate credit card debt; the other is funding a kitchen renovation. Both receive the same pre-screened offer. But the debt-consolidation borrower needs to see monthly payment relief and simplicity — the renovation borrower responds to aspirational framing and flexible terms. Same segment, completely different motivations.',
      },
      {
        title: 'Refinance campaigns',
        body: 'Three refinance prospects in the same rate-reduction segment: one took out their loan two years ago and their credit score has since improved significantly; one is mid-term with high revolving utilisation suggesting financial pressure; one is near the end of their term and may welcome a fresh-start offer. Each needs a different message to make the case for refinancing now.',
      },
      {
        title: 'Cross-sell & upsell to existing customers',
        body: 'Two existing customers in the same on-time-payer cross-sell segment: one took a debt consolidation loan 18 months ago and has since reduced their revolving balances to near-zero; the other took a home improvement loan and has since opened two new credit accounts. The first may respond to a savings or investment product. The second shows emerging credit demand and may respond to a higher-limit or second-purpose loan offer.',
      },
    ],
    whyPoints: [
      { title: 'Motivation-level matching', body: 'Segmentation assigns by credit tier. AIgnyte assigns by inferred borrower motivation — the specific purpose framing and emotional tone right for that individual.' },
      { title: 'Gets sharper every cycle', body: 'Response data feeds back automatically. More precise with every campaign cycle.' },
      { title: 'No IT project, no new creatives', body: 'Slots into your existing stack. Returns a matched file in your format. Nothing else changes.' },
      { title: 'Built for lending compliance', body: 'FCRA requirements, unsolicited credit offer rules — hard constraints, never overridden.' },
      { title: 'No PII. FCRA-safe.', body: 'De-identified data only at every stage.' },
      { title: 'Proof before commitment', body: 'Lift demonstrated on your existing campaigns before any long-term commitment.' },
    ],
    cta: 'See what AIgnyte can do for your personal loan campaigns',
  },
  {
    slug: 'mortgage',
    icon: Home,
    name: 'Mortgage & Home Equity',
    heroTagline: 'The right mortgage message for every homeowner and prospect',
    sector: 'Financial Services',
    heroStat: '60%+',
    heroStatLabel: 'Response Rate Lift',
    heroSub: 'Purchase, refinance, and HELOC — the right message for every homeowner.',
    description: 'Mortgage marketing requires precision. Rate sensitivity, LTV considerations, and life stage signals all determine which message resonates. AIgnyte makes individual-level decisions across your entire campaign file.',
    problemHeading: 'One message per segment — but every borrower\'s situation is different',
    problemParas: [
      'A mortgage or home equity decision is among the largest financial commitments a person makes. The prospect considering their first home purchase, the existing homeowner sitting on significant equity, and the borrower whose rate is significantly above current market are three fundamentally different targets — with different motivations, different anxieties, and different messages that will move them to act.',
      'Most mortgage direct mail programs segment by geography, loan-to-value estimates, and credit tier — then apply a single creative per segment. Within any segment, the variation in individual circumstances, financial readiness, and emotional orientation toward homeownership is enormous. A creative optimised for the average borrower in a segment is the wrong message for most of them.',
      'AIgnyte encodes every element of every creative — rate framing, equity emphasis, urgency language, approval confidence, life-stage imagery, loan structure presentation — and builds a Preference Profile for every individual. Each person gets the message calibrated to their specific situation. Not the best message for their zip code — the best message for them.',
    ],
    useCases: [
      {
        title: 'Purchase mortgage acquisition',
        body: 'Three prospects in the same purchase segment by credit tier and geography: a 29-year-old renter who has never owned a home; a 42-year-old in a starter home looking to trade up; a 61-year-old in a large family home whose children have left. All three are likely purchase prospects — but the message that moves each of them is completely different.',
      },
      {
        title: 'Mortgage refinance',
        body: 'Three homeowners in the same rate-reduction segment: one is three years into a 30-year mortgage at a rate 2% above current market; one is 20 years in with a lot of equity and high revolving credit utilisation; one took out their loan 18 months ago at a rate just slightly above today\'s market. All three are potential refi candidates — but the compelling reason to act is completely different for each.',
      },
      {
        title: 'Home equity lending (HELOC & HEL)',
        body: 'Three homeowners with similar equity positions: one has an older home, has lived there 15 years, and has no significant revolving debt; one has high credit card utilisation and a stable income; one is a retiree with conservative credit behaviour and no outstanding balances. All three have borrowable equity — but the use case and the product that fits each is completely different.',
      },
    ],
    whyPoints: [
      { title: 'Situation-level matching', body: 'Assigns by inferred borrower situation — purchase readiness, refi motivation, equity use case — not geography and credit tier alone.' },
      { title: 'Gets sharper every cycle', body: 'Response data feeds back automatically. More precise with every campaign cycle.' },
      { title: 'No IT project, no new creatives', body: 'Slots into your existing stack. Returns a matched file in your format. Nothing else changes.' },
      { title: 'Built for mortgage compliance', body: 'TRID & disclosure requirements, qualified mortgage rules, ATR/QM constraints — hard constraints, never overridden.' },
      { title: 'No PII. FCRA-safe.', body: 'De-identified data only at every stage.' },
      { title: 'Proof before commitment', body: 'Lift demonstrated on your existing campaigns before any long-term commitment.' },
    ],
    cta: 'See what AIgnyte can do for your mortgage campaigns',
  },
  {
    slug: 'retail-banking',
    icon: Building2,
    name: 'Retail Banking',
    heroTagline: 'The right banking message for every individual — at every stage of the relationship',
    sector: 'Financial Services',
    heroStat: '50%+',
    heroStatLabel: 'Response Rate Lift',
    heroSub: 'Acquisition, onboarding, and relationship deepening at the individual level.',
    description: 'Checking account acquisition, savings products, and cross-sell campaigns all depend on matching the offer to the prospect\'s relationship with money. AIgnyte optimises your creative palette for each individual.',
    problemHeading: 'One message per segment — but very different customers and prospects within each',
    problemParas: [
      'A retail bank\'s marketing file spans an enormous range of individuals — a young professional opening their first real checking account, a family looking for a mortgage, a small business owner who banks personally but hasn\'t brought their business, a long-tenured customer who uses only a checking account when they could be using four products. Each of them needs a different message.',
      'Most retail banking direct marketing programmes segment by product, geography, and basic credit or demographic attributes — then assign a single creative per segment. Within any segment, the variation in individual financial circumstances, relationship stage, product orientation, and what will actually move someone to respond is enormous.',
      'AIgnyte encodes every element of every creative in the bank\'s catalog — product emphasis, benefit framing, relationship tone, urgency cues, channel preference signals, visual treatment — and builds a precise individual Preference Profile for every person in the file. Each individual gets the message calibrated to where they actually are in their relationship with the bank.',
    ],
    useCases: [
      {
        title: 'New account acquisition',
        body: 'Three prospects in the same acquisition segment by geography and income tier: a 24-year-old recent graduate with limited credit history; a 42-year-old homeowner with a mortgage elsewhere and two children; a 58-year-old approaching retirement who currently banks entirely online. All three receive the same acquisition mailing — but what will move each of them to open an account is completely different.',
      },
      {
        title: 'Onboarding & early activation',
        body: 'Three new customers all 30 days into their accounts with no direct deposit set up: one opened online after clicking a rewards offer; one came in-branch on a referral; one opened a premium account with investment features but hasn\'t logged into the app. All three need activation — but the message that works for each is completely different.',
      },
      {
        title: 'Cross-sell & relationship deepening',
        body: 'Three checking-only customers in the same cross-sell eligible segment: one has been making regular $500 transfers to an external savings account every month; one has a personal loan elsewhere and has recently increased their credit card utilisation; one received a new employer direct deposit three months ago at a much higher income level. All three are cross-sell opportunities — but the product and message right for each is completely different.',
      },
    ],
    whyPoints: [
      { title: 'Relationship-stage matching', body: 'Assigns by the individual\'s actual relationship stage and observable financial behaviour — not product and demographic alone.' },
      { title: 'Gets sharper every cycle', body: 'Response data feeds back automatically. More precise with every campaign cycle.' },
      { title: 'No IT project, no new creatives', body: 'Slots into your existing stack. Returns a matched file in your format. Nothing else changes.' },
      { title: 'Built for banking compliance', body: 'CRA rules, pricing disclosure requirements, anti-steering constraints — hard constraints, never overridden.' },
      { title: 'No PII. FCRA-safe.', body: 'De-identified data only at every stage.' },
      { title: 'Proof before commitment', body: 'Lift demonstrated on your existing campaigns before any long-term commitment.' },
    ],
    cta: 'See what AIgnyte can do for your retail banking campaigns',
  },
  {
    slug: 'insurance',
    icon: Shield,
    name: 'Insurance',
    heroTagline: 'The right insurance message for every prospect and policyholder',
    sector: 'Insurance',
    heroStat: '60%+',
    heroStatLabel: 'Response Rate Lift',
    heroSub: 'Policy acquisition and renewal — matched to each prospect\'s coverage motivation.',
    description: 'Insurance messaging is highly personal — the right message depends on whether a prospect values price, coverage breadth, brand trust, or claims simplicity. AIgnyte learns which framing drives response for each individual.',
    problemHeading: 'One message per segment — but very different motivations and risk profiles within each',
    problemParas: [
      'A 28-year-old renter shopping for their first renters policy responds to completely different messaging than a 52-year-old homeowner with an existing auto policy being cross-sold on home insurance. A price-sensitive prospect responds differently than a coverage-oriented one. A long-tenured policyholder approaching renewal needs a different message than a prospect who has never engaged with the carrier.',
      'Most insurance direct mail programs segment by line of business, estimated household risk profile, and basic demographics — then assign a single creative per segment. Within any segment, the variation in individual coverage motivation, price orientation, carrier trust level, and what will actually prompt a response is enormous.',
      'AIgnyte encodes every element of every creative — coverage emphasis, price framing, peace-of-mind vs. value messaging, bundling incentives, urgency cues, social proof signals — and builds a Preference Profile for every individual in the file. Each person gets the message calibrated to their specific situation and motivation. Not the best message for their zip code — the best message for them.',
    ],
    useCases: [
      {
        title: 'Policy acquisition',
        body: 'Three prospects in the same homeowners acquisition segment: one purchased their home six months ago and is shopping for coverage for the first time; one already has auto with a competitor and is comparing rates; one is a long-term renter who just bought and is overwhelmed by the process. All three are receiving the same creative — but the message that moves each of them is completely different.',
      },
      {
        title: 'Cross-sell & multi-line',
        body: 'Three auto policyholders in the same cross-sell eligible segment: one just purchased a home; one recently added a teen driver to their policy; one has had a clean, claim-free auto policy for six years and has never been offered a second line. All three are cross-sell opportunities — but the product and framing right for each is completely different.',
      },
      {
        title: 'Renewal & retention',
        body: 'Three policyholders approaching renewal: a nine-year multi-line holder who has never filed a claim; one who filed a claim eight months ago and is likely watching their premium closely; one who has a single low-premium renter\'s policy and has never responded to any cross-sell messaging. Each is at risk of not renewing — for completely different reasons.',
      },
    ],
    whyPoints: [
      { title: 'Motivation-level matching', body: 'Assigns by the individual\'s inferred coverage priority and price orientation — not just line of business and demographics.' },
      { title: 'Gets sharper every cycle', body: 'Response data feeds back automatically. More precise with every campaign cycle.' },
      { title: 'Direct mail and email', body: 'Email via API in real time. Direct mail matched file in your format within 2 days. One system, both channels.' },
      { title: 'Built for insurance compliance', body: 'Unfair/deceptive practice rules, rate suppression zones, underwriting compliance — hard constraints, never overridden.' },
      { title: 'No PII. Privacy by design.', body: 'De-identified data only at every stage. Built for regulated insurance marketing environments.' },
      { title: 'Proof before commitment', body: 'Lift demonstrated on your existing campaigns before any long-term commitment.' },
    ],
    cta: 'See what AIgnyte can do for your insurance campaigns',
  },
  {
    slug: 'non-profit',
    icon: Heart,
    name: 'Non-Profit',
    heroTagline: 'The right appeal for every donor and prospect, individually matched',
    sector: 'Non-Profit',
    heroStat: '+50%',
    heroStatLabel: 'Donor Response Rate',
    heroSub: '50%+ proven lift in donor response rates — same appeals, smarter matching.',
    description: 'Donor acquisition and retention in direct mail is highly sensitive to which appeal resonates with each individual. AIgnyte has demonstrated 50%+ lifts in donor response by matching each donor to the emotional and rational appeal that aligns with their giving history.',
    problemHeading: 'One message per segment — but very different donors within each',
    problemParas: [
      'A first-time donor who gave $25 after an emergency appeal responds to completely different messaging than a multi-year donor who gives $250 annually to a specific program. A lapsed donor who stopped after seven consistent years is a completely different reactivation target than one who gave twice and disappeared. A prospect who has never given needs a different message than one who gives to similar causes.',
      'Most non-profit direct mail programs segment by RFM tier, giving level, and acquisition source, then assign a single creative package per segment. Within any segment, the range of individual giving motivation, emotional connection to the cause, and what will actually prompt a response is enormous.',
      'AIgnyte encodes every element of every creative — emotional appeal, cause framing, urgency language, social proof signals, gift ask structure, imagery tone, and CTA format — and builds a Preference Profile for every donor and prospect. Each individual gets the package calibrated to their specific giving history and motivation.',
    ],
    useCases: [
      {
        title: 'New donor acquisition',
        body: 'Three prospects in the same acquisition segment: one has responded to direct mail from similar causes before; one has never given to a non-profit but shows strong cause-affinity signals; one previously gave to a local chapter of a related organisation and has recently moved into this geography. All three are acquisition targets, but the message most likely to generate a first gift from each is completely different.',
      },
      {
        title: 'Renewal & upgrade',
        body: 'Three active donors in the same annual giving tier: one has given the same amount every year for five years and never responded to an upgrade ask; one increased their gift last year after receiving a specific impact report; one gives reactively, responding to emergency appeals but ignoring standard renewal packages. All three need renewal messaging, but what will retain and grow each of them is completely different.',
      },
      {
        title: 'Lapsed donor reactivation',
        body: 'Three donors lapsed at 18 months: one gave consistently for seven years before stopping with no apparent trigger; one gave twice in response to an emergency appeal and then never again; one was a mid-level donor who stopped giving after their contribution was never acknowledged in subsequent communications. All three are lapsed, but the message that will re-engage each is completely different.',
      },
    ],
    whyPoints: [
      { title: 'Motivation-level matching', body: 'Assigns by inferred donor motivation and giving pattern — the appeal and ask structure most likely to move each individual.' },
      { title: 'Gets sharper every cycle', body: 'Response data feeds back automatically. More precise with every campaign cycle.' },
      { title: 'No new creatives required', body: 'Existing copy, imagery, and appeal designs. AIgnyte handles the componentisation and matching.' },
      { title: 'Component-level assembly', body: 'Hero section, supporting copy, imagery tone, ask level, signature — mixed and matched per individual.' },
      { title: 'Works with limited data', body: 'Effective even with minimal donor history. Learns from the file itself.' },
      { title: 'Proof before commitment', body: 'Lift demonstrated on your existing campaigns before any long-term commitment.' },
    ],
    cta: 'See what AIgnyte can do for your fundraising campaigns',
  },
  {
    slug: 'collections',
    icon: FileText,
    name: 'Collections',
    heroTagline: 'The right outreach for every delinquent account — individually matched',
    sector: 'Financial Services',
    heroStat: '60%+',
    heroStatLabel: 'Response Rate Lift',
    heroSub: 'Individually-matched outreach that improves contact and resolution rates.',
    description: 'Collections outreach effectiveness depends on matching the right message tone and offer structure to each debtor\'s situation. AIgnyte optimises across settlement framing, payment plans, and communication style to maximise contact and resolution rates.',
    problemHeading: 'One message per bucket — but very different accounts within each',
    problemParas: [
      'Two accounts in the 60-day delinquency bucket may have arrived there for completely different reasons. One is a long-tenured customer who had a sudden income disruption and intends to pay — they respond to empathetic, solution-oriented outreach that makes it easy to engage. Another is a strategic non-payer who responds only to clear consequence and settlement framing.',
      'Most collections direct mail programs segment by delinquency stage, balance tier, and product type — then apply a single creative per segment. Within any segment, the variation in account characteristics, delinquency cause, and what will actually prompt a response is large. The creative optimised for the average account in the bucket is wrong for many of them.',
      'AIgnyte encodes every element of every collections creative — tone (empathetic vs. firm), offer structure (payment plan vs. settlement vs. hardship), urgency framing, consequence messaging, CTA type (phone vs. online vs. mail-back) — and builds a Preference Profile for every account based on its delinquency characteristics and how accounts with similar profiles have responded in prior campaigns.',
    ],
    useCases: [
      {
        title: 'Early-stage delinquency outreach',
        body: 'Three accounts in the same 45-day delinquency bucket: one is a seven-year customer who has never missed a payment before and has a high balance; one is an 18-month account with a thin payment history that has missed its second consecutive payment; one has made a partial payment this cycle but hasn\'t cleared the balance. All three are in the same segment — but the message likely to produce contact from each is completely different.',
      },
      {
        title: 'Mid-stage collections',
        body: 'Three accounts at 90 days in the same balance-tier segment: one had a phone contact 30 days ago, made a commitment, and then didn\'t follow through; one has never responded to any outreach across four attempts; one has a high balance, a long account history, and has never been delinquent before this episode. All three are in the same bucket — but what will generate a response is completely different.',
      },
      {
        title: 'Settlement & resolution',
        body: 'Three accounts in the same settlement-eligible segment: one has a high balance and three broken commitments; one has a lower balance, has been cooperative but genuinely unable to pay in full, and has responded online in prior campaigns; one is a very aged account with no contact in over a year. All three need a settlement offer — but the structure, depth, and framing that will generate an accepted resolution differs completely.',
      },
    ],
    whyPoints: [
      { title: 'Account-level matching', body: 'Assigns by account delinquency characteristics and payment history — inferred account type and willingness to resolve.' },
      { title: 'Gets sharper every cycle', body: 'Response data feeds back automatically. More precise with every campaign cycle.' },
      { title: 'Direct mail and email', body: 'Email via API in real time. Direct mail matched file in your format within 2 days. One system, both channels.' },
      { title: 'Built for collections compliance', body: 'FDCPA regulations, state licensing requirements, debt validation rules — hard constraints, never overridden.' },
      { title: 'No PII. Privacy by design.', body: 'De-identified data only at every stage. Built for regulated collections environments.' },
      { title: 'Proof before commitment', body: 'Lift demonstrated on your existing campaigns before any long-term commitment.' },
    ],
    cta: 'See what AIgnyte can do for your collections campaigns',
  },
  {
    slug: 'telecom',
    icon: Wifi,
    name: 'Telecom & Cable',
    heroTagline: 'The right message for every subscriber — acquisition, upsell, and churn prevention',
    sector: 'Telecom',
    heroStat: '60%+',
    heroStatLabel: 'Response Rate Lift',
    heroSub: 'Acquisition, upsell, and churn prevention — message-matched to each subscriber.',
    description: 'Telecom campaigns require matching each prospect or customer to the right bundle, speed tier, or promotional offer. AIgnyte learns which message framing drives response for each individual.',
    problemHeading: 'One message per segment — but very different households within each',
    problemParas: [
      'A household switching from a competitor responds to a very different acquisition message than one that has never had the service. A subscriber on a basic internet plan has different upsell motivations than one on a mid-tier bundle. A long-tenured customer approaching contract expiry needs a different retention message than one who has recently raised a service complaint.',
      'Most telecom and cable direct mail programs segment by geography, estimated income, and current service status — then assign a single creative per segment. Within any segment, the variation in household composition, service priorities, price sensitivity, and what will actually generate a response is enormous.',
      'AIgnyte encodes every element of every creative — service bundle emphasis, price framing, speed and reliability messaging, streaming content angles, contract framing, installation convenience — and builds a Preference Profile for every individual. Each household gets the message calibrated to their specific situation. Not the best message for their zip code — the best message for them.',
    ],
    useCases: [
      {
        title: 'New subscriber acquisition',
        body: 'Three households in the same geographic acquisition segment: a recent mover with no current provider; a family estimated to be on a competitor\'s basic cable plan; a sports-oriented household currently internet-only. All three receive the same offer. But the recent mover responds to installation simplicity; the competitor household responds to switching-incentive messaging; the sports household responds to a live TV package lead.',
      },
      {
        title: 'Upsell & bundle upgrade',
        body: 'Three internet-only subscribers eligible for a bundle upgrade: one is a heavy data user who has never enquired about TV; one has called twice asking about streaming add-ons; one is approaching contract renewal and has shown price sensitivity on their account. All three are in the same upsell segment and would typically receive the same upgrade offer.',
      },
      {
        title: 'Churn prevention & retention',
        body: 'Three at-risk subscribers in the same churn-prevention segment: a seven-year subscriber whose contract expires in 30 days with no service complaints; one who has logged two technician visits in the past six months; one who downgraded their bundle three months ago and is now paying below the new-customer promotional rate in the market. Each is at risk — but for completely different reasons.',
      },
    ],
    whyPoints: [
      { title: 'Situation-level matching', body: 'Assigns by each household\'s inferred service situation — not just geography and service tier.' },
      { title: 'Gets sharper every cycle', body: 'Response data feeds back automatically. More precise with every campaign cycle.' },
      { title: 'Direct mail and email', body: 'Email via API in real time. Direct mail matched file in your format within 2 days. One system, both channels.' },
      { title: 'Service eligibility built in', body: 'Encodes service availability rules, network compatibility, technology requirements — constraints automatically applied.' },
      { title: 'No new creatives, no new data', body: 'Works with your existing direct mail and email campaigns and data. Zero additional requirements.' },
      { title: 'Proof before commitment', body: 'Lift demonstrated on your existing campaigns before any long-term commitment.' },
    ],
    cta: 'See what AIgnyte can do for your telecom campaigns',
  },
  {
    slug: 'healthcare',
    icon: Stethoscope,
    name: 'Healthcare & Medicare',
    heroTagline: 'The right message for every patient and member — individually matched',
    sector: 'Healthcare',
    heroStat: '+70%',
    heroStatLabel: 'Email Click-Through Rate',
    heroSub: 'Patient and member engagement — individually relevant content, every send.',
    description: 'Healthcare marketing must navigate both regulatory constraints and personal relevance. AIgnyte has demonstrated 70% lifts in email CTR for large hospital systems by individually matching patients to the content and service lines most relevant to their profile.',
    problemHeading: 'One message per segment — but very different health situations and priorities within each',
    problemParas: [
      'A 67-year-old managing a chronic condition who has been with the same plan for years responds to completely different messaging than a 65-year-old newly Medicare-eligible who has never engaged with this organisation. A patient who regularly uses preventive services responds differently than one who only seeks acute care. A member shopping on premium responds differently than one prioritising network breadth or prescription coverage.',
      'Most healthcare and Medicare direct marketing programs segment by age band, geography, plan type, and basic health status — then apply a single creative per segment. Within any segment, the range of individual health situations, coverage priorities, and what will actually prompt a response is enormous.',
      'AIgnyte encodes every element of every creative — condition-specific language, coverage benefit emphasis, cost framing, network and provider messaging, tone, and CTA structure — and builds a Preference Profile for every individual. Each person gets the message calibrated to their specific health situation and engagement history.',
    ],
    useCases: [
      {
        title: 'Patient acquisition',
        body: 'Three prospects in the same patient acquisition segment: a 34-year-old new parent who hasn\'t established a primary care relationship; a 52-year-old with a chronic condition who is currently unaffiliated; a 68-year-old who sees specialists but has no primary care provider with this organisation. All three are acquisition targets — but the message that will move each of them is completely different.',
      },
      {
        title: 'Medicare plan enrollment',
        body: 'Three Medicare-eligible individuals: one is turning 65 with no prior Medicare experience and is shopping across multiple plans; one is a long-standing beneficiary in their annual enrollment period who has been with a competitor; one is a dual-eligible individual who prioritises zero-cost benefits and transportation access. All three are enrollment opportunities — but the plan features and framing that matter to each are completely different.',
      },
      {
        title: 'Member engagement',
        body: 'Three plan members in the same low-engagement segment: one has not completed an annual wellness visit in two years despite reminders; one uses urgent care regularly but has never seen a specialist despite a chronic condition flag; one completed all preventive care last year but hasn\'t refilled a key prescription in three months. All three are engagement opportunities — but the intervention that will move each is completely different.',
      },
    ],
    whyPoints: [
      { title: 'Health-situation level matching', body: 'Assigns by each individual\'s health situation, coverage priority, and engagement history — not age band and geography alone.' },
      { title: 'Gets sharper every cycle', body: 'Response data feeds back automatically. More precise with every campaign cycle.' },
      { title: 'Direct mail and email', body: 'Email via API in real time. Direct mail matched file in your format within 2 days. One system, both channels.' },
      { title: 'Built for healthcare compliance', body: 'HIPAA-compatible de-identification, CMS marketing guidelines for Medicare, state-level restrictions — hard constraints, never overridden.' },
      { title: 'No PII. Privacy by design.', body: 'De-identified data only at every stage. Built for regulated healthcare marketing environments.' },
      { title: 'Proof before commitment', body: 'Lift demonstrated on your existing campaigns before any long-term commitment.' },
    ],
    cta: 'See what AIgnyte can do for your healthcare campaigns',
  },
  {
    slug: 'd2c-ecommerce',
    icon: ShoppingBag,
    name: 'D2C & E-Commerce',
    heroTagline: 'The right message for every customer — acquisition, retention, and win-back',
    sector: 'Retail',
    heroStat: '1.4x',
    heroStatLabel: 'Response Rate',
    heroSub: 'Acquisition, retention, and win-back — matched to purchase behaviour.',
    description: 'D2C and e-commerce direct mail performance depends on matching promotional messaging — discount depth, product category, offer urgency — to individual purchase patterns. AIgnyte optimises across your creative variants to maximise response for every person in your file.',
    problemHeading: 'One message per segment — but enormously diverse individuals within each',
    problemParas: [
      'D2C and e-commerce brands invest heavily in creative development — seasonal campaigns, product launches, promotional offers, loyalty messaging, category-specific content. The result is a rich creative inventory. But most of that inventory gets deployed by segment or by rule: this offer goes to lapsed customers, that creative goes to high-value buyers, this email goes to the women\'s category affinity segment.',
      'Within any of those segments, the individuals are enormously diverse. A high-value buyer who purchases across categories every few months responds to completely different messaging than one who makes a single high-ticket purchase once a year. A lapsed customer who stopped buying because of a price point issue needs a different message than one who simply drifted.',
      'AIgnyte encodes every element of every creative — product category emphasis, offer structure, urgency framing, visual tone, loyalty vs. promotional vs. aspirational positioning — and builds a Preference Profile for every individual based on their purchase behaviour, engagement history, and how people with similar profiles have responded in prior campaigns.',
    ],
    useCases: [
      {
        title: 'New customer acquisition',
        body: 'Three prospects in the same acquisition segment: one browsed the outdoor gear category twice but didn\'t purchase; one came through a lifestyle editorial about home interiors; one was matched via a lookalike audience and shows high price-sensitivity signals. All three are being sent the same acquisition creative. But each is motivated by something completely different.',
      },
      {
        title: 'Retention & loyalty',
        body: 'Three active customers in the same high-value retention segment: one buys across five categories multiple times a year; one makes a single high-ticket purchase every 12 months and hasn\'t expanded categories; one has been buying regularly but their frequency has dropped noticeably in the last quarter. Same RFM tier — completely different situations.',
      },
      {
        title: 'Win-back & reactivation',
        body: 'Three lapsed customers all flagged at 12 months with no purchase: one was a high-frequency buyer who stopped abruptly after a likely price-sensitive moment; one was a single-category seasonal buyer who may simply have satisfied their need; one drifted gradually over six months with no clear trigger. Each needs a completely different re-engagement message.',
      },
    ],
    whyPoints: [
      { title: 'Purchase-behaviour matching', body: 'Assigns by each individual\'s actual purchase pattern — not RFM bucket or category affinity group.' },
      { title: 'Gets sharper every cycle', body: 'Response data feeds back automatically. More precise with every campaign cycle.' },
      { title: 'Direct mail and email', body: 'Email via API in real time. Direct mail matched file in your format within 2 days. One system, both channels.' },
      { title: 'Margin-aware offer matching', body: 'Encodes product margin, promotion depth, and discount profitability. Matches offers that maximise AOV and LTV.' },
      { title: 'No new creatives, no new data', body: 'Works with your existing direct mail and email campaigns and data. Zero additional requirements.' },
      { title: 'Proof before commitment', body: 'Lift demonstrated on your existing campaigns before any long-term commitment.' },
    ],
    cta: 'See what AIgnyte can do for your D2C campaigns',
  },
];

export function getIndustryBySlug(slug: string): IndustryPage | undefined {
  return industryPages.find((i) => i.slug === slug);
}
