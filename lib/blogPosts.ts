export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  authorRole: string
  publishedAt: string
  readTime: string
  category: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'why-contact-forms-fail-b2b',
    title: 'Why Contact Forms Are Quietly Killing Your B2B Pipeline',
    excerpt: 'The average B2B contact form converts around 2% of visitors. The rest leave — and most never come back. Here\'s why, and what to do about it.',
    content: `
## The problem with contact forms

Contact forms were designed around an assumption: that visitors who are interested will make the effort to fill them in. In the early days of the web, that was broadly true. There wasn't much else to do.

Today, the same visitor who lands on your website also has five browser tabs open, a LinkedIn inbox, two competitor demos scheduled this week, and a Slack thread demanding their attention. The bar for "making an effort" has gone up considerably.

The data reflects this. Industry benchmarks put average B2B contact form completion rates at 20–30%. That means for every 100 qualified visitors who find your page, 70 or 80 leave without leaving any trace of who they were or what they needed.

## What changes when you shift to conversation

The insight behind conversational lead capture isn't complicated. People respond to dialogue differently than to forms. When someone asks you a question, the instinct is to answer it. When a form demands your details upfront, the instinct is to weigh whether it's worth it.

AI-powered chat flips the dynamic. Rather than asking visitors to fill in boxes before they've got anything in return, it starts with something useful — a relevant question, a piece of advice, a clarification of what they're looking for.

Research from platforms like Drift and Intercom consistently shows this produces conversion rates of 20–30% from conversations, versus 2% from static forms. That's the same traffic, working ten times harder.

## The qualification problem

Forms also have a second, less-discussed limitation: they tell you almost nothing useful.

A name, a company name, and an email address don't tell your sales team whether this is a decision-maker or a junior researcher. They don't reveal budget, timeline, or urgency. Every lead looks roughly the same until someone spends 20 minutes on a discovery call — and by then, the prospect may already be further down the funnel with a competitor who engaged them faster.

AI conversation handles discovery naturally. By the time a lead reaches your CRM, it already carries context: what the visitor was looking for, how they described their situation, how they responded to specific questions. Your team can walk into that first call already informed.

## A practical starting point

If you're not ready to replace your form entirely, start with high-intent pages. Your pricing page, your demo request page, or any page where a visitor is clearly in research mode — these are where the gap between form completion and conversation engagement is largest.

The goal isn't to be clever with technology. It's to make it easier for someone who is genuinely interested to tell you they're interested. The simpler that feels for them, the more of them will do it.
    `.trim(),
    author: 'AIS Team',
    authorRole: 'Product & Research',
    publishedAt: '2025-05-10',
    readTime: '5 min read',
    category: 'Lead Generation',
    tags: ['Lead Capture', 'Conversion Rate', 'B2B Sales'],
  },
  {
    id: '2',
    slug: 'ai-lead-scoring-what-the-research-shows',
    title: 'AI Lead Scoring: What the Research Actually Shows',
    excerpt: 'Predictive lead scoring has been around for years. Here\'s what the data from Salesforce, HubSpot, and others tells us about where it genuinely helps — and where it doesn\'t.',
    content: `
## The premise behind predictive lead scoring

The idea is straightforward. Historical data about which leads converted and which didn't, combined with behavioural signals from your current pipeline, can be used to rank new leads by their likelihood of closing. Instead of treating a 50-person list of prospects as equally worthy of your time, your team focuses on the 10 most likely to buy.

Done well, this is genuinely useful. The question is what "done well" actually requires.

## What the data shows

Salesforce's research on Einstein AI lead scoring found that organisations using predictive scoring reduced lead qualification time by 35% and increased the volume of qualified leads reaching their sales team by 40%. Some cohorts saw conversion rate improvements ranging from 28% to over 200%, depending on data quality and baseline.

HubSpot's 2024 State of Sales report found that 73% of sales professionals using AI tools said it had significantly boosted team productivity. The average time saving from AI-assisted qualification was around two hours per day per rep.

These are meaningful numbers. But they come with a caveat worth understanding.

## Where it works — and where it doesn't

Predictive scoring works best when there is enough clean historical data to train against. If you've run a relatively consistent sales process for two or three years and have reliable conversion records in your CRM, the models have something meaningful to learn from.

If your data is sparse, inconsistent, or incomplete — or if your business has changed significantly in recent periods — the predictions become less reliable. The model will learn from the past, but the past may not reflect where your market is now.

The second caveat is integration. AI scoring tools that sit inside your existing CRM (where reps already work) tend to drive higher adoption and therefore better outcomes than standalone platforms that require a separate login and workflow change.

## What this means practically

The most honest framing is this: AI lead scoring is a force multiplier, not a magic solution. If your team is currently spending significant time sorting through undifferentiated leads, scoring can meaningfully improve that. If the underlying data isn't there, the first step is building better capture and tracking — and scoring becomes valuable later.

For most growing B2B businesses, a practical starting point is behavioural scoring based on website and email engagement. Page visits, time on site, email open rates, and content downloads are all reliable indicators of intent that don't require years of historical data to be useful.
    `.trim(),
    author: 'AIS Team',
    authorRole: 'Product & Research',
    publishedAt: '2025-04-28',
    readTime: '6 min read',
    category: 'AI & Technology',
    tags: ['Lead Scoring', 'AI Research', 'Salesforce', 'HubSpot'],
  },
  {
    id: '3',
    slug: 'response-time-and-lead-conversion',
    title: 'The 5-Minute Rule: Why Response Time Is Your Biggest Conversion Lever',
    excerpt: 'A lead that waits more than five minutes for a response is nine times less likely to convert. The research behind this is robust — and the implications are significant.',
    content: `
## The research

The finding comes from a frequently cited study published in the Harvard Business Review and replicated across multiple subsequent analyses. When a new lead submits an enquiry, the probability of converting them drops significantly with every minute that passes. Reaching out within five minutes makes a lead nine times more likely to convert than waiting 30 minutes. After an hour, the odds drop further still.

This isn't particularly surprising when you think about it. The moment someone submits a form or initiates a chat, their intent is at its peak. They've made a decision to reach out. The longer they wait, the more time they have to rethink, to find an alternative, or simply to move on to something else.

## What happens at most businesses

The average lead response time for B2B companies, according to multiple research reports, sits somewhere between 42 hours and 5 days. That's not a typo. By the time most companies follow up, the prospect has already spoken to competitors, cooled considerably, or decided to defer the decision.

The reason isn't negligence. It's that manual follow-up depends on a human noticing a new lead, finding a moment in their day, and reaching out. Even with good intentions, that process introduces delays.

## Where AI changes the dynamic

The most direct application of this research is simple: if instant response is the goal, only automation can guarantee it consistently. An AI system can acknowledge, engage, and qualify a lead within seconds of their first interaction — at any hour of the day.

This doesn't mean replacing human sales conversations. It means ensuring that the initial response happens quickly enough to catch the prospect while their intent is high, and then passing a warm, qualified lead to a human when the timing is right.

The business case is straightforward. If your current lead-to-opportunity conversion rate is 10% and response time is a significant factor — which the research suggests it often is — even a modest improvement in response time can produce a material increase in qualified pipeline from the same volume of inbound traffic.
    `.trim(),
    author: 'AIS Team',
    authorRole: 'Product & Research',
    publishedAt: '2025-04-12',
    readTime: '4 min read',
    category: 'Sales Strategy',
    tags: ['Response Time', 'Conversion', 'Lead Engagement'],
  },
  {
    id: '4',
    slug: 'conversational-marketing-b2b-guide',
    title: 'Conversational Marketing for B2B: A Practical Guide',
    excerpt: 'What conversational marketing actually means, how it differs from a basic chatbot, and how to approach it in a way that feels natural rather than intrusive.',
    content: `
## What conversational marketing is — and isn't

The term gets used loosely, but at its core, conversational marketing means using real-time, two-way dialogue to move buyers through the funnel — rather than asking them to complete static forms and wait.

This is different from a standard chatbot in an important way. Most chatbots are reactive: they answer questions when someone asks. Conversational marketing is proactive: the system identifies a visitor's likely intent and initiates a relevant conversation at the right moment.

The goal isn't to replicate a human sales call. It's to handle the earliest, most repetitive parts of the qualification process — so that when a human does get involved, the conversation is already productive.

## Where it fits in a B2B buying process

B2B buying cycles are longer and involve more stakeholders than B2C. This has a specific implication for conversational marketing: the first interaction with a prospect often isn't a sale — it's the beginning of a research process that may take weeks or months.

That changes the design of the conversation. Rather than pushing towards a close, the goal of a first interaction is often to understand what stage the visitor is at, what they're trying to solve, and whether your product is a plausible fit. A useful conversation leaves the prospect better informed and creates a clear path to follow up.

## The practical implementation questions

**Where to start:** High-intent pages — pricing, product comparison, demo request — are typically where the ROI from conversational tools is clearest. Visitors on these pages are already in evaluation mode. A well-timed question can dramatically improve the yield from that traffic.

**What to ask:** The best conversational flows are specific to your ideal customer. What are the two or three things you'd most want to know about a prospect before deciding they're worth a call? Those are your qualification questions.

**When to hand off:** The AI's role is to qualify and warm the lead. The handoff to a human should happen when there's enough intent and context to make a live conversation worthwhile — and it should happen quickly once that threshold is crossed.

**What to avoid:** Generic, pushy openers ("Hi! Can I help you today?") tend to get ignored. Contextual, specific openers based on what the visitor is looking at perform significantly better.

## A note on expectations

Conversational marketing works because it makes the experience better for the visitor. When it's implemented well, most people don't mind — they find it useful. When it's implemented poorly (aggressive popups, irrelevant questions, interrupting at the wrong moment), it creates friction rather than removing it.

The measure of success isn't engagement metrics. It's the quality and volume of conversations that turn into genuine pipeline.
    `.trim(),
    author: 'AIS Team',
    authorRole: 'Product & Research',
    publishedAt: '2025-03-20',
    readTime: '7 min read',
    category: 'Marketing Strategy',
    tags: ['Conversational Marketing', 'B2B', 'Lead Generation'],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
