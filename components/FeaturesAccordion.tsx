'use client'

import { useState } from 'react'
import { ChevronDown, Check, TrendingUp } from 'lucide-react'
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
    roi: 'AI-powered chat achieves 20–30% lead conversion from conversations, versus roughly 2% for standard contact forms. Same traffic, significantly more pipeline.',
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
    title: 'Predictive Lead Scoring',
    description: 'Know who\'s worth calling before you call',
    details: [
      'Analyses behavioural signals to predict purchase likelihood',
      'Surfaces accounts showing strong buying intent',
      'Prioritises your team\'s time based on data, not instinct',
      'Feeds insights directly into your CRM',
    ],
    roi: 'Predictive scoring reduces lead qualification time by 35% and increases the volume of qualified leads reaching sales by 40%. Your team closes more by working smarter.',
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
    roi: 'Rather than a one-off content push, this builds compounding organic traffic over time — without requiring a dedicated content team.',
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
    roi: '80% of deals close after the 5th interaction. Most businesses give up after one or two. Automated nurture means no lead falls through the cracks.',
  },
  {
    title: 'Ongoing Conversion Testing',
    description: 'Gradual, data-driven improvement',
    details: [
      'Runs continuous A/B tests on messaging, timing, and CTAs',
      'Identifies what\'s working and scales it automatically',
      'Retires underperforming variants without manual oversight',
      'Provides clear reporting on what each change achieved',
    ],
    roi: 'A single percentage point improvement in conversion rate often represents significant revenue at scale. Systematic testing finds those improvements consistently — not by guesswork.',
  },
]

export function FeaturesAccordion() {
  const [expanded, setExpanded] = useState<number | null>(0)

  return (
    <section id="features" className="px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative overflow-hidden"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Everything your pipeline needs
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Each component is designed around one goal: moving the right visitors towards a conversation with your team.
          </p>
        </motion.div>

        <div className="space-y-2">
          {features.map((feature, idx) => {
            const isOpen = expanded === idx
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4, ease: [0.16,1,0.3,1] }}
                className="rounded-xl overflow-hidden transition-all duration-200"
                style={{
                  border: isOpen ? '1px solid rgba(0,102,255,0.25)' : '1px solid rgba(255,255,255,0.07)',
                  background: isOpen ? 'rgba(0,50,150,0.08)' : 'rgba(255,255,255,0.02)',
                }}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-4 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                      style={{ background: isOpen ? 'rgba(0,212,255,0.15)' : 'rgba(255,255,255,0.06)',
                               border: isOpen ? '1px solid rgba(0,212,255,0.25)' : '1px solid rgba(255,255,255,0.08)' }}>
                      <span className="text-xs font-bold" style={{ color: isOpen ? '#00d4ff' : '#6b7280' }}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <span className="text-sm font-semibold text-white block">{feature.title}</span>
                      <span className="text-xs text-gray-500">{feature.description}</span>
                    </div>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-gray-500 shrink-0 ml-4 transition-all duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : 'group-hover:text-gray-300'}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16,1,0.3,1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1" style={{ borderTop: '1px solid rgba(0,102,255,0.15)' }}>
                        <ul className="space-y-2 mb-4 mt-4">
                          {feature.details.map((detail, i) => (
                            <li key={i} className="flex gap-2.5 items-start text-sm">
                              <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                                style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }}>
                                <Check size={8} className="text-cyan-400" />
                              </div>
                              <span className="text-gray-400 leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="rounded-lg p-4 flex gap-3 items-start"
                          style={{ background: 'rgba(0,102,255,0.08)', border: '1px solid rgba(0,102,255,0.15)' }}>
                          <TrendingUp size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-400 leading-relaxed">
                            <span className="text-cyan-400 font-semibold">Why it matters: </span>
                            {feature.roi}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
