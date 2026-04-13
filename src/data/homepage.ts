export const proofCards = [
  {
    num: '+70',
    metric: 'Click-through rate',
    context: 'Large hospital chain · ~$10B revenue',
    channel: 'Email',
  },
  {
    num: '+50',
    metric: 'Response rate',
    context: 'Large non-profit · Donor contribution',
    channel: 'Direct Mail',
  },
  {
    num: '+40',
    metric: 'Response rate',
    context: 'Large personal loan provider · Top 5 direct mailer',
    channel: 'Direct Mail',
  },
  {
    num: '+28',
    metric: 'Response rate',
    context: 'Mid-size credit card issuer · ~3M mail/month',
    channel: 'Direct Mail',
  },
  {
    num: '+20',
    metric: 'Bookings',
    context: 'Mid-size personal loan provider · $1B+ originations',
    channel: 'Direct Mail',
  },
] as const;

export const tickerItems = [
  'Financial Services',
  'Telecom & Cable',
  'Healthcare',
  'Non-Profit',
  'Insurance',
  'D2C & E-Commerce',
  'Collections',
  'Retail Banking',
] as const;

export const whatWhyItems = [
  {
    icon: '01',
    title: 'Proof before commitment',
    body: 'Every engagement starts with a blind holdout on your historical campaigns — demonstrable lift on your data, your creatives, your vertical. Before a single live campaign runs.',
  },
  {
    icon: '02',
    title: 'Drops into your existing stack',
    body: 'One new step between selection and execution. Your targeting models, CRM, print vendors, and email platforms are untouched. Direct mail files back in 2 days. Email via API in real time.',
  },
  {
    icon: '03',
    title: 'Gets sharper every cycle',
    body: "Every campaign's response data feeds back into the next cycle's individual models. No retraining. No manual tuning. The system improves automatically — indefinitely.",
  },
] as const;

export const results = [
  {
    vertical: 'Financial Services',
    industry: 'Mid-size Credit Card Issuer',
    channel: 'Direct Mail',
    big: '+28%',
    metric: 'Response Rate',
    note: '~3M mail volume per month',
  },
  {
    vertical: 'Financial Services',
    industry: 'Mid-size Personal Loan Provider',
    channel: 'Direct Mail',
    big: '+20%',
    metric: 'Bookings',
    note: '$1B+ loan originations',
  },
  {
    vertical: 'Financial Services',
    industry: 'Large Personal Loan Provider',
    channel: 'Direct Mail',
    big: '+40%',
    metric: 'Response Rate',
    note: 'Top 5 direct mailer, $10B+ outstanding',
  },
  {
    vertical: 'Healthcare',
    industry: 'Large Hospital Chain',
    channel: 'Email',
    big: '+70%',
    metric: 'Click-Through Rate',
    note: '~$10B in revenue',
  },
  {
    vertical: 'Non-Profit',
    industry: 'Large Animal Welfare Non-Profit',
    channel: 'Direct Mail',
    big: '+50%',
    metric: 'Response Rate',
    note: 'Donor contribution campaign',
  },
] as const;

export const resultsFooterChecks = [
  'No change in target population',
  'No new creatives',
  'No additional data',
  'No A/B testing or experimentation',
] as const;
