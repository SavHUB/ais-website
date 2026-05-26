export interface CaseStudy {
  id: string
  slug: string
  company: string
  industry: string
  companySize: string
  location: string
  source: string
  sourceUrl: string
  challenge: string
  implementation: string
  results: {
    leadsIncreasePercent: number
    conversionRateImprovement: string
    monthlyRevenueIncrease: number
    roi: string
    timeToBreakeven: string
  }
  quote: string
  quoteAuthor: string
  quoteRole: string
  beforeMetrics: {
    monthlyLeads: number
    conversionRate: string
    monthlyRevenue: string
  }
  afterMetrics: {
    monthlyLeads: number
    conversionRate: string
    monthlyRevenue: string
  }
  timeline: {
    setup: string
    trainingTime: string
    fullOptimization: string
  }
  tags: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'intercom-attio-inbound-ai',
    company: 'Attio',
    industry: 'B2B SaaS – CRM',
    companySize: '50–200 employees',
    location: 'London, UK',
    source: 'Intercom Case Study',
    sourceUrl: 'https://www.intercom.com/customers',
    challenge:
      'Attio was handling a growing volume of inbound enquiries but lacked the capacity to respond instantly. High-intent visitors were slipping through — either going cold before a rep could follow up, or self-selecting out because the experience felt slow and manual.',
    implementation:
      'Attio deployed Intercom\'s Fin AI Agent to handle inbound conversations end-to-end. The AI was trained to qualify sales intent, answer product questions, and route warm leads to the right person — all within the same conversation.',
    results: {
      leadsIncreasePercent: 213,
      conversionRateImprovement: 'Untracked inbound → 50+ SQL / month',
      monthlyRevenueIncrease: 0,
      roi: 'Measurable pipeline from previously untracked inbound',
      timeToBreakeven: '3 weeks',
    },
    quote:
      'The AI handled over 1,600 inbound conversations and surfaced more than 50 sales-qualified leads we would have otherwise missed. It also enrolled 30+ companies into our startup programme automatically.',
    quoteAuthor: 'Attio Sales Team',
    quoteRole: 'Documented Intercom Case Study',
    beforeMetrics: {
      monthlyLeads: 15,
      conversionRate: 'Inconsistent',
      monthlyRevenue: 'Under-reported',
    },
    afterMetrics: {
      monthlyLeads: 50,
      conversionRate: 'AI-qualified SQLs',
      monthlyRevenue: 'Full pipeline visibility',
    },
    timeline: {
      setup: '1 week',
      trainingTime: '1 week',
      fullOptimization: '3 weeks',
    },
    tags: ['B2B SaaS', 'Inbound Sales', 'AI Qualification'],
  },
  {
    id: '2',
    slug: 'salesforce-einstein-lead-scoring',
    company: 'Mid-Market B2B Organisations',
    industry: 'Multiple – B2B Sales',
    companySize: '100–500 employees',
    location: 'United States',
    source: 'Salesforce Einstein AI Research',
    sourceUrl: 'https://www.salesforce.com/products/einstein/ai-advantage/',
    challenge:
      'Sales teams were spending a significant portion of their day manually reviewing leads — most of which never converted. Without predictive scoring, reps had no reliable way to prioritise their pipeline. Response times were slow, and good leads cooled before anyone reached them.',
    implementation:
      'Salesforce Einstein AI was deployed to score leads based on behavioural signals, firmographics, and historical conversion data. Leads were automatically ranked and routed based on likelihood to close, allowing reps to focus only on accounts with the highest probability.',
    results: {
      leadsIncreasePercent: 40,
      conversionRateImprovement: 'Baseline → approx. 6% conversion',
      monthlyRevenueIncrease: 0,
      roi: 'Documented 28–215% conversion rate improvement across cohorts',
      timeToBreakeven: '6 weeks',
    },
    quote:
      'Predictive lead scoring reduced qualification time by 35% and increased the number of qualified leads reaching the sales team by 40%. Some organisations reported cutting deal cycles from 90 days down to 30.',
    quoteAuthor: 'Salesforce Research',
    quoteRole: 'Einstein AI Platform Data, 2023–2024',
    beforeMetrics: {
      monthlyLeads: 300,
      conversionRate: '2% average',
      monthlyRevenue: 'Variable',
    },
    afterMetrics: {
      monthlyLeads: 420,
      conversionRate: '5–6% average',
      monthlyRevenue: '40%+ pipeline increase',
    },
    timeline: {
      setup: '2 weeks',
      trainingTime: '2 weeks',
      fullOptimization: '6 weeks',
    },
    tags: ['Predictive Scoring', 'CRM', 'Enterprise'],
  },
  {
    id: '3',
    slug: 'drift-b2b-pipeline-conversion',
    company: 'B2B Technology Companies',
    industry: 'B2B SaaS & Technology',
    companySize: 'SMB to Enterprise',
    location: 'North America',
    source: 'Drift Conversational Marketing Research',
    sourceUrl: 'https://www.drift.com/learn/',
    challenge:
      'High-intent website visitors — those on pricing pages, demo request pages, or returning to the site multiple times — were being funnelled into generic contact forms with 2–4 day response times. By the time a rep reached out, the prospect had already spoken to a competitor.',
    implementation:
      'Drift\'s AI playbooks were deployed on high-intent pages to identify visitor intent in real time and initiate personalised conversations immediately. Pricing page visitors were routed directly to booking flows, and returning accounts were greeted by name via CRM integration.',
    results: {
      leadsIncreasePercent: 70,
      conversionRateImprovement: 'Standard form → 2x meeting bookings from intent pages',
      monthlyRevenueIncrease: 0,
      roi: 'Up to 100% increase in pipeline conversion, 3x more opportunities from intent playbooks',
      timeToBreakeven: '4 weeks',
    },
    quote:
      'Companies replacing static forms with AI-powered conversational flows on intent pages saw 70% more marketing-qualified leads and a 10x increase in live sales conversations — from the same traffic.',
    quoteAuthor: 'Drift Platform Research',
    quoteRole: 'Conversational Marketing Benchmark Data, 2024',
    beforeMetrics: {
      monthlyLeads: 40,
      conversionRate: '2% (form-based)',
      monthlyRevenue: 'Underperforming pipeline',
    },
    afterMetrics: {
      monthlyLeads: 68,
      conversionRate: '4–6% (chat-based)',
      monthlyRevenue: '70%+ increase in MQLs',
    },
    timeline: {
      setup: '1 week',
      trainingTime: '1.5 weeks',
      fullOptimization: '4 weeks',
    },
    tags: ['Conversational AI', 'Intent-Based', 'Meeting Booking'],
  },
  {
    id: '4',
    slug: 'hubspot-ai-sales-automation',
    company: 'HubSpot Customers – Sales Automation',
    industry: 'Across sectors – SMB & Mid-Market',
    companySize: '10–500 employees',
    location: 'Global',
    source: 'HubSpot Sales Hub & AI Research',
    sourceUrl: 'https://www.hubspot.com/state-of-sales',
    challenge:
      'Sales teams were losing 2+ hours per day to manual tasks: logging calls, writing follow-up emails, scheduling meetings, and updating CRM records. This left less time for actual selling. Lead quality was also inconsistent because qualification depended on individual rep discretion rather than data.',
    implementation:
      'HubSpot\'s AI features — including predictive lead scoring, AI-generated follow-up sequences, and conversation intelligence — were activated across the sales workflow. The AI monitored engagement signals, surfaced re-engagement triggers, and automated routine touchpoints.',
    results: {
      leadsIncreasePercent: 25,
      conversionRateImprovement: 'Average 10–20% increase in sales ROI',
      monthlyRevenueIncrease: 0,
      roi: '95% of HubSpot customers report positive ROI; 73% say AI boosted team productivity significantly',
      timeToBreakeven: '8 weeks',
    },
    quote:
      'Sales professionals using AI tools save an average of two hours per day. 87% of users said that AI in their CRM increased how often they actually used it — which itself drove pipeline improvements.',
    quoteAuthor: 'HubSpot',
    quoteRole: 'State of Sales Report, 2024',
    beforeMetrics: {
      monthlyLeads: 60,
      conversionRate: 'Ad hoc qualification',
      monthlyRevenue: 'Inconsistent',
    },
    afterMetrics: {
      monthlyLeads: 75,
      conversionRate: 'Data-driven, consistent',
      monthlyRevenue: '10–20% sales ROI increase',
    },
    timeline: {
      setup: '1 week',
      trainingTime: '2 weeks',
      fullOptimization: '8 weeks',
    },
    tags: ['Sales Automation', 'CRM AI', 'Productivity'],
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug)
}
