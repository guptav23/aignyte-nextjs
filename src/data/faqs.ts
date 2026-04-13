export interface FAQ {
  category: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    category: 'Process & Integration',
    question: 'Will AIgnyte increase the complexity and duration of our DM campaign process?',
    answer: `We understand that campaign execution is a critical business process. We work closely with your team to minimise changes to process and timelines.

**Process changes are marginal:** You send de-identified prospect data (e.g. a pre-screen bureau record) after your selection process to AIgnyte. We've built tools to make data exchange a standardised, automatable process. We return an output mail file in whatever format you need — ready for validation and export to printers.

**Timeline changes are limited, if any:** Once production scoring is set up, our cycle time from receipt of selection file to optimised campaign file is 2–3 days — generally no addition to your total DM timeline.

**AIgnyte can actually reduce complexity** by eliminating the need to generate, review, produce and execute live tests with new creatives every 3–6 months.`,
  },
  {
    category: 'Process & Integration',
    question: 'Can AIgnyte incorporate our product or offer targeting segmentation?',
    answer: `Yes. AIgnyte is built to be highly flexible in incorporating segmentation schemas and any other business, legal, or regulatory constraints — including prospect characteristics, segmentation, financial or other population attributes, and state-level product/offer restrictions.`,
  },
  {
    category: 'Process & Integration',
    question: 'We optimise creatives by mail carrier route to reduce mailing cost. Can AIgnyte accommodate that?',
    answer: `Yes. We can incorporate a variety of constraints including volume and creative limitations based on carrier route. AIgnyte is built to be highly flexible in terms of incorporating business, legal, and regulatory constraints — including floor and/or cap on creative volume, "at least" creative volume requirements, and a cap on total number of creatives in a campaign.`,
  },
  {
    category: 'Compliance & Data',
    question: 'How does AIgnyte ensure creatives meet all regulatory and compliance requirements?',
    answer: `AIgnyte only uses creatives supplied directly by our clients — we do not generate alternative content. We rely on your creatives having been vetted and approved for regulatory compliance before being provided to AIgnyte for scoring.

We also incorporate any additional compliance requirements (e.g. certain creatives can only be targeted to prospects in specific states) as processing constraint rules within the AIgnyte system.`,
  },
  {
    category: 'Compliance & Data',
    question: 'Will AIgnyte need any PII or HIPAA-related information?',
    answer: `No. AIgnyte does not require any PII or HIPAA-related information, nor do we take possession of any personalised data from our clients. This significantly reduces collective data security and privacy exposure for both parties.`,
  },
  {
    category: 'Cost & ROI',
    question: 'Will AIgnyte increase our direct mail production cost?',
    answer: `AIgnyte works to maximise the likelihood of eliciting the desired response. We can adjust the objective function to maximise gross response, net response, or net value (expected value less production and mailing cost). Total DM production cost could increase or decrease depending on the objective function chosen.

Alternatively, AIgnyte can incorporate specific constraints related to total production budget, volumes of specific creatives, or total number of creatives assigned — giving clients more control over cost and quality assurance.

In either case, **Cost Per Acquisition will be lower.**`,
  },
  {
    category: 'Cost & ROI',
    question: 'Can AIgnyte help with low response populations?',
    answer: `Yes, within limits. AIgnyte works to maximise response likelihood by optimising creative selection across all response score ranges — including low ones. There are likely segments of your prospect base that you don't mail today where the response lift from AIgnyte is sufficient to push them over your mail hurdle, lowering cost per account and driving higher NPV. This can be demonstrated during AIgnyte's Setup phase.`,
  },
  {
    category: 'Creatives & Catalogue',
    question: "What if I don't have a lot of creatives? Does AIgnyte still work?",
    answer: `Yes. We understand that not every business has a deep catalogue of marketing creatives — they're expensive to develop and test. In our Setup work across multiple industries, we've tested with clients that had literally a handful of different creatives.

While more variations tends to provide additional information value, **AIgnyte has demonstrated significant lifts in response even with only a handful of creatives.**`,
  },
  {
    category: 'Creatives & Catalogue',
    question: 'What if we want to introduce a new creative?',
    answer: `No problem. We can take any creative and generate its Genetic Signature — whether you've actually sent it or not. The new creative simply becomes part of your catalogue.

AIgnyte can then simulate whether the new creative is a better match for any prospects than your existing creatives. This lets you discard new creatives unlikely to succeed and narrow live testing to only those with a higher probability of success in targeted populations — dramatically reducing testing investment.`,
  },
  {
    category: 'Setup',
    question: "How does AIgnyte's Setup work?",
    answer: `AIgnyte's Setup phase accomplishes two things simultaneously: process integration and value demonstration — both with minimal effort from your team.

**Process integration:** We work with your team to connect AIgnyte into your existing campaign production workflow. You send us de-identified prospect data and your creative catalogue. We return an optimised assignment file in your required format. This is a one-time setup that can then be automated.

**Value demonstration:** Using your campaign history data, we train the platform and run a blind holdout — a sample of records where we generate AIgnyte's creative recommendations without access to the actual response data. We then compare AIgnyte's selections against what was sent and the observed responses.

What we consistently see is that AIgnyte's selections would have driven meaningfully higher response across score ranges. **This gives you confidence before a single live campaign runs.**`,
  },
  {
    category: 'Technical & AI',
    question: 'I already have ML response models. What value does AIgnyte add over my existing AI/ML models?',
    answer: `AIgnyte operates completely outside of your selection and response modelling process. Your ML models determine *who* to mail. AIgnyte determines *what to say* to each of those people.

We begin with the list of prospects that have already met your selection criteria. The value creation from AIgnyte comes entirely from matching the best creative to each selected prospect — not from changing which prospects you mail. The two systems are complementary, not competing.`,
  },
  {
    category: 'Technical & AI',
    question: 'How can AIgnyte help with a new prospect or one that has never responded?',
    answer: `Yes — this is known as the "Cold Start" problem. AIgnyte uses whatever information is available (e.g. bureau record) to recommend an optimal creative for prospects with no prior history.

Importantly, even a prospect that has never responded has provided information about their preferences — by not responding to specific messages. That signal, combined with available bureau attributes, is used by AIgnyte to make an informed creative recommendation from day one.`,
  },
];

export const faqCategories = [...new Set(faqs.map((f) => f.category))];
