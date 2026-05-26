'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const features = [
  {
    title: 'Intelligent Lead Capture',
    description: 'Conversations that qualify — not just collect',
    details: [
      'Replaces passive contact forms with a guided conversation',
      'Asks contextually relevant questions based on visitor behaviour',
      'Scores and segments leads automatically (high/medium/low intent)',
      'Routes promising leads to your team in real time',
    ],
    roi: 'Industry research shows AI-powered chat achieves 20–30% lead conversion from conversations, versus roughly 2% for standard contact forms. That\'s the same traffic producing significantly more pipeline.',
  },
  {
    title: 'Personalised Visitor Experience',
    description: 'Every visitor sees what\'s relevant to them',
    details: [
      'Adapts messaging based on traffic source, behaviour, and visit history',
      'Surfaces the right offer or case study at the right moment',
      'Treats returning visitors differently from first-time ones',
      'Works quietly in the background — no intrusive popups',
    ],
    roi: 'Personalised web experiences typically convert at 12–18% versus 2% for generic pages — a 6 to 9x improvement on the same volume of traffic.',
  },
  {
    title: '24/7 Sales Engagement',
    description: 'Your best sales conversation, available around the clock',
    details: [
      'Engages visitors whenever they arrive — regardless of time zone',
      'Handles initial qualification so your team only fields warm conversations',
      'Books meetings directly into calendars during the conversation',
      'Manages objections and follow-up questions intelligently',
    ],
    roi: 'Engaging a lead within five minutes makes them nine times more likely to convert. AI makes that response time achievable at every hour — without adding headcount.',
  },
  {
    title: 'Continuous SEO Improvement',
    description: 'Content that keeps working after it\'s published',
    details: [
      'Monitors search trends and identifies content gaps',
      'Suggests updates to existing pages based on ranking signals',
      'Optimises metadata, structure, and internal linking',
      'Tracks organic performance and surfaces what\'s gaining traction',
    ],
    roi: 'Rather than a one-off content push, this keeps your site relevant over time — building compounding organic traffic without requiring a dedicated content team.',
  },
  {
    title: 'Predictive Lead Scoring',
    description: 'Know who\'s worth calling before you call',
    details: [
      'Analyses behavioural signals to predict purchase likelihood',
      'Surfaces accounts showing strong buying intent',
      'Prioritises your team\'s time based on data, not instinct',
      'Feeds insights directly into your CRM',
    ],
    roi: 'Salesforce Einstein data shows predictive scoring reduces lead qualification time by 35% and increases the volume of qualified leads reaching sales by 40%. Your team closes more by working smarter.',
  },
  {
    title: 'Automated Follow-Up & Nurture',
    description: 'Consistent follow-up without the manual effort',
    details: [
      'Sends personalised follow-up sequences timed to each lead\'s behaviour',
      'Detects re-engagement signals and acts on them automatically',
      'Keeps your pipeline warm between human touchpoints',
      'Operates across email and SMS where appropriate',
    ],
    roi: 'Research consistently shows that 80% of deals close after the 5th interaction. Most businesses give up after one or two. Automated nurture means no lead falls through the cracks.',
  },
  {
    title: 'Ongoing Conversion Testing',
    description: 'Gradual, data-driven improvement',
    details: [
      'Runs continuous A/B tests on messaging, timing, and CTAs',
      'Identifies what\'s working and scales it',
      'Retires underperforming variants automatically',
      'Provides clear reporting on what each change achieved',
    ],
    roi: 'A single percentage point improvement in conversion rate often represents a significant revenue increase at scale. Systematic testing finds those improvements consistently — not by guesswork.',
  },
]

export function FeaturesAccordion() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="features" className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-b border-white/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How AIS works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Each component is designed around one goal: moving the right visitors towards a conversation with your team. No bloat — just the things that actually affect your pipeline.
          </p>
        </motion.div>

        <div className="space-y-3">
          {features.map((feature, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              key={idx}
              className="border border-white/10 rounded-lg overflow-hidden bg-white/[0.02]"
            >
              <button
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                aria-expanded={expanded === idx}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="text-left">
                  <span className="text-lg font-semibold text-white block">{feature.title}</span>
                  <span className="text-sm text-gray-500">{feature.description}</span>
                </div>
                <ChevronDown
                  size={24}
                  className={`text-cyan-400 flex-shrink-0 transition-transform duration-300 ml-4 ${
                    expanded === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {expanded === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-blue-950/20 border-t border-white/10">
                      <div className="mb-4">
                        <ul className="space-y-2">
                          {feature.details.map((detail, i) => (
                            <li key={i} className="flex gap-2 text-gray-400 text-sm">
                              <span className="text-cyan-400 flex-shrink-0">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-blue-900/20 border border-blue-500/20 rounded p-4">
                        <p className="text-sm">
                          <strong className="text-cyan-400">Why it matters: </strong>
                          <span className="text-gray-400">{feature.roi}</span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
