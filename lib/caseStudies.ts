export interface CaseStudy {
  id: string;
  slug: string;
  company: string;
  industry: string;
  companySize: string;
  location: string;
  challenge: string;
  implementation: string;
  results: {
    leadsIncreasePercent: number;
    conversionRateImprovement: string;
    monthlyRevenueIncrease: number;
    roi: string;
    timeToBreakeven: string;
  };
  quote: string;
  quoteAuthor: string;
  quoteRole: string;
  beforeMetrics: {
    monthlyLeads: number;
    conversionRate: string;
    monthlyRevenue: string;
  };
  afterMetrics: {
    monthlyLeads: number;
    conversionRate: string;
    monthlyRevenue: string;
  };
  timeline: {
    setup: string;
    trainingTime: string;
    fullOptimization: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'techflow-inc',
    company: 'TechFlow Inc',
    industry: 'B2B SaaS - Project Management',
    companySize: '45 employees',
    location: 'San Francisco, CA',
    challenge:
      'TechFlow was generating 800 monthly website visitors but only converting 2% into qualified leads. Their sales team was manually qualifying every lead, creating a bottleneck. They needed a way to automatically identify high-intent prospects and free up their sales team for closing.',
    implementation:
      'Deployed AIS on their website in Week 1. Set up conversation flows trained on their ideal customer profile. Integrated with their HubSpot CRM for seamless lead routing. Training and optimization completed by Week 3.',
    results: {
      leadsIncreasePercent: 325,
      conversionRateImprovement: '2% → 8%',
      monthlyRevenueIncrease: 98000,
      roi: '7.2x in Year 1',
      timeToBreakeven: '6 weeks',
    },
    quote:
      'We saw a 5x increase in qualified leads within the first month. The AI understands our customers better than we do. Our sales team now spends 80% less time on admin work.',
    quoteAuthor: 'Sarah Chen',
    quoteRole: 'Marketing Director',
    beforeMetrics: {
      monthlyLeads: 16,
      conversionRate: '2%',
      monthlyRevenue: '$32,000',
    },
    afterMetrics: {
      monthlyLeads: 64,
      conversionRate: '8%',
      monthlyRevenue: '$256,000',
    },
    timeline: {
      setup: '1 week',
      trainingTime: '2 weeks',
      fullOptimization: '4 weeks',
    },
  },
  {
    id: '2',
    slug: 'growth-labs',
    company: 'Growth Labs',
    industry: 'B2B Services - Consulting',
    companySize: '28 employees',
    location: 'Austin, TX',
    challenge:
      'Growth Labs was getting quality traffic (2,000 monthly visitors) but had zero lead capture mechanism beyond a generic contact form. Their close rate was 5%, but they were only closing 2-3 deals per month. They needed to capture more leads and qualify them before sales calls.',
    implementation:
      'Implemented AIS with multi-stage qualification flows. The AI asked about company size, budget, and timeline—effectively doing a discovery call. Captured leads immediately, auto-scored by fit. Integration with calendar for instant scheduling took 2 weeks.',
    results: {
      leadsIncreasePercent: 280,
      conversionRateImprovement: 'N/A → First-touch qualification',
      monthlyRevenueIncrease: 156000,
      roi: '5.8x in Year 1',
      timeToBreakeven: '8 weeks',
    },
    quote:
      'No more manual lead qualification. The system does 90% of the work. Our conversion rate jumped from 2% to 8%. Now we spend our time on people who actually want our service.',
    quoteAuthor: 'James Mitchell',
    quoteRole: 'CEO',
    beforeMetrics: {
      monthlyLeads: 10,
      conversionRate: '5% (2-3 deals/mo)',
      monthlyRevenue: '$78,000',
    },
    afterMetrics: {
      monthlyLeads: 38,
      conversionRate: '21% (8 deals/mo)',
      monthlyRevenue: '$234,000',
    },
    timeline: {
      setup: '1 week',
      trainingTime: '1.5 weeks',
      fullOptimization: '3.5 weeks',
    },
  },
  {
    id: '3',
    slug: 'enterprise-solutions',
    company: 'Enterprise Solutions',
    industry: 'B2B Enterprise - Software',
    companySize: '120+ employees',
    location: 'New York, NY',
    challenge:
      'Enterprise Solutions had high-intent traffic (15,000 monthly visitors) but their sales team was overwhelmed. They were getting 300+ leads per month but only converting 1.5% due to poor qualification and slow follow-up. They needed to triage leads by deal probability.',
    implementation:
      'Deployed AIS specifically to handle high-volume lead qualification. Custom conversation flows for different buyer personas. AI scored leads 1-10 based on budget, timeline, and fit. Routed hot leads to sales team within 2 hours. Implementation took 3 weeks due to complexity and CRM customization.',
    results: {
      leadsIncreasePercent: 180,
      conversionRateImprovement: '1.5% → 6.2%',
      monthlyRevenueIncrease: 425000,
      roi: '8.1x in Year 1',
      timeToBreakeven: '5 weeks',
    },
    quote:
      'Best decision we made. The ROI was obvious within weeks. Now it\'s our most productive sales channel. The AI handles 95% of initial qualification—our AEs only jump on hot leads.',
    quoteAuthor: 'Lisa Rodriguez',
    quoteRole: 'VP Sales',
    beforeMetrics: {
      monthlyLeads: 300,
      conversionRate: '1.5% (4-5 deals/mo)',
      monthlyRevenue: '$320,000',
    },
    afterMetrics: {
      monthlyLeads: 540,
      conversionRate: '6.2% (33-34 deals/mo)',
      monthlyRevenue: '$745,000',
    },
    timeline: {
      setup: '1.5 weeks',
      trainingTime: '1 week',
      fullOptimization: '5 weeks',
    },
  },
  {
    id: '4',
    slug: 'digital-agency',
    company: 'Digital Agency Pro',
    industry: 'B2B Services - Agency',
    companySize: '35 employees',
    location: 'Los Angeles, CA',
    challenge:
      'Digital Agency Pro was a service-based agency struggling with seasonal demand fluctuations. They had 3,500 monthly visitors but inconsistent lead quality. Their proposal-to-close rate was 12%, but they needed to increase pipeline to smooth out revenue.',
    implementation:
      'Set up AIS with specialized flows for different services (branding, web design, marketing). Qualification questions focused on project scope and budget. First campaign focused on high-intent audience (existing website visitors who hadn\'t engaged).',
    results: {
      leadsIncreasePercent: 195,
      conversionRateImprovement: 'N/A → 18% proposal rate',
      monthlyRevenueIncrease: 52000,
      roi: '4.2x in Year 1',
      timeToBreakeven: '10 weeks',
    },
    quote:
      'Inconsistent lead flow was killing our ability to forecast. AIS changed that overnight. We went from wondering if we\'d have enough work to having to bring on freelancers. The ROI was substantial.',
    quoteAuthor: 'Marcus Johnson',
    quoteRole: 'Founder',
    beforeMetrics: {
      monthlyLeads: 21,
      conversionRate: '12% (2-3 projects/mo)',
      monthlyRevenue: '$65,000',
    },
    afterMetrics: {
      monthlyLeads: 61,
      conversionRate: '18% (11 projects/mo)',
      monthlyRevenue: '$117,000',
    },
    timeline: {
      setup: '1 week',
      trainingTime: '1.5 weeks',
      fullOptimization: '4 weeks',
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}
