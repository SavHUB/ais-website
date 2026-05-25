'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const features = [
  {
    title: 'Intelligent Lead Capture',
    description: 'Conversational AI replaces dumb forms',
    details: [
      'Conversational AI replaces dumb forms',
      'Asks smart questions, understands intent',
      'Auto-qualifies leads (hot/warm/cold)',
      'Routes to you or queues for follow-up',
    ],
    roi: 'Traditional form: 30% completion, 10% follow-up = 3 real leads from 100 visitors. AIS Lead Engine: 70% completion, 100% follow-up = 70 qualified leads from 100 visitors. That\'s 23x more leads.',
  },
  {
    title: 'Dynamic Personalization',
    description: 'AI reads visitor signals in real-time',
    details: [
      'AI reads visitor signals in real-time',
      'Personalizes headline, CTA, offer based on intent',
      'Different content per visitor type',
      'Same infrastructure, different results',
    ],
    roi: 'Generic websites convert at 2%. Personalized experiences convert at 12-18%. That\'s a 6-9x improvement on the same traffic.',
  },
  {
    title: '24/7 AI Sales Executive',
    description: 'Chatbot that closes deals',
    details: [
      'Chatbot that closes deals (not just answers questions)',
      'Available after-hours (when competitors sleep)',
      'Books appointments directly',
      'Handles objections intelligently',
    ],
    roi: 'Hiring a sales rep costs £25-40k/year, works 40 hours/week. An AI Sales Executive costs £200/month, works 168 hours/week. It closes at a higher rate. Do the math.',
  },
  {
    title: 'Self-Evolving SEO Engine',
    description: 'Analyzes search trends daily',
    details: [
      'Analyzes search trends daily',
      'Auto-generates optimized content',
      'Updates meta tags, headers, schema',
      'Identifies new keyword opportunities',
    ],
    roi: 'SEO agencies: £500-2,000/month, hope for results. AIS SEO Engine: Included in your package, proves results daily. Organic growth on autopilot.',
  },
  {
    title: 'Predictive Customer Intelligence',
    description: 'Analyzes visitor patterns and behaviors',
    details: [
      'Analyzes visitor patterns and behaviors',
      'Predicts next action (will they buy? need discount?)',
      'Recommends products/services based on signals',
      'Forecasts revenue trends',
    ],
    roi: 'Traditional analytics: "What happened?" Our predictive engine: "What\'s about to happen?" That\'s the difference between reacting and winning.',
  },
  {
    title: 'Automated Follow-Up & Nurture',
    description: 'AI-powered email sequences',
    details: [
      'AI-powered email sequences (personalized, not spammy)',
      'Timing optimized per individual',
      'Detects re-engagement triggers',
      'Multi-channel (email, SMS, push)',
    ],
    roi: '80% of deals close after the 5th touchpoint. Most businesses give up after 1. Our system never stops—and it\'s smart enough to know when they\'re ready.',
  },
  {
    title: 'Continuous Conversion Optimization',
    description: 'AI runs A/B tests automatically',
    details: [
      'AI runs A/B tests automatically',
      'Identifies winning variations',
      'Scales winners, kills losers',
      'Never stops testing, always reporting ROI',
    ],
    roi: 'Your current conversion rate: 2%. Improving to 3%: 50% revenue increase. Our system finds that 1% daily.',
  },
]

export function FeaturesAccordion() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="features" className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-b border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 scroll-fade">
            The Components of Your AI Machine
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto scroll-fade">
            Every element is designed to do one thing: move prospects from aware to customer. No bloat. Pure conversion architecture.
          </p>
        </div>

        <div className="space-y-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="scroll-fade border border-white/10 rounded-lg overflow-hidden transition-all duration-300"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <button
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors bg-white/[0.02]"
              >
                <span className="text-lg font-semibold text-white text-left">{feature.title}</span>
                <ChevronDown
                  size={24}
                  className={`text-cyan-400 flex-shrink-0 transition-transform duration-300 ${
                    expanded === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expanded === idx && (
                <div className="px-6 py-4 bg-blue-950/20 border-t border-white/10">
                  <div className="mb-4">
                    <p className="font-semibold text-white mb-2">What it does:</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex gap-2 text-gray-400 text-sm">
                          <span className="text-cyan-400">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-500/20 rounded p-4">
                    <p className="text-sm">
                      <strong className="text-cyan-400">The ROI Angle:</strong>
                      <span className="text-gray-400 ml-2">{feature.roi}</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
