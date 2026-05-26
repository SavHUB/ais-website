'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'

interface PricingTier {
  id: string
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlight: boolean
}

const tiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '£299',
    period: 'per month',
    description: 'For businesses taking their first steps with AI lead generation.',
    features: [
      'AI conversation agent on your website',
      'Up to 500 qualified conversations/month',
      'CRM integration (HubSpot, Pipedrive)',
      'Lead qualification & scoring',
      'Email notifications for hot leads',
      'Monthly performance report',
      'Email support',
    ],
    cta: 'Get started',
    highlight: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '£699',
    period: 'per month',
    description: 'For teams serious about turning website traffic into a consistent pipeline.',
    features: [
      'Everything in Starter',
      'Up to 2,000 conversations/month',
      'Full CRM sync (Salesforce, HubSpot, Pipedrive)',
      'Calendar booking integration',
      'A/B testing on conversation flows',
      'Predictive lead scoring',
      'Fortnightly strategy review',
      'Priority support',
    ],
    cta: 'Most popular',
    highlight: true,
  },
  {
    id: 'scale',
    name: 'Scale',
    price: 'Custom',
    period: 'tailored pricing',
    description: 'For larger teams with higher volumes, custom integrations, or specific compliance needs.',
    features: [
      'Everything in Growth',
      'Unlimited conversations',
      'Custom AI training on your brand voice',
      'Multi-site / multi-language support',
      'Dedicated account manager',
      'Custom integrations',
      'SLA-backed uptime guarantee',
      'Quarterly business reviews',
    ],
    cta: 'Talk to us',
    highlight: false,
  },
]

export function Pricing() {
  const scrollToDemo = () => {
    const el = document.getElementById('roi-calculator')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            No setup fees. No long-term contracts. Cancel anytime. We'd rather prove the value every month than lock you in.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className={`relative rounded-xl border p-8 flex flex-col ${
                tier.highlight
                  ? 'bg-gradient-to-b from-blue-950/60 to-slate-900/80 border-blue-500/40 shadow-[0_0_40px_rgba(59,130,246,0.15)]'
                  : 'bg-white/[0.03] border-white/10'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                    Most popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-4xl font-bold ${tier.highlight ? 'text-cyan-400' : 'text-white'}`}>
                    {tier.price}
                  </span>
                  <span className="text-gray-500 text-sm">{tier.period}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{tier.description}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2
                      size={16}
                      className={`flex-shrink-0 mt-0.5 ${tier.highlight ? 'text-cyan-400' : 'text-blue-400'}`}
                    />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {tier.id === 'scale' ? (
                <a
                  href="mailto:hello@ais-machine.com?subject=Scale Plan Enquiry"
                  className={`flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:scale-105 active:scale-95 ${
                    tier.highlight
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight size={16} />
                </a>
              ) : (
                <button
                  onClick={scrollToDemo}
                  className={`flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:scale-105 active:scale-95 ${
                    tier.highlight
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight size={16} />
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Trust signals */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-10"
        >
          All plans include a 14-day free trial. No credit card required. Questions?{' '}
          <a href="mailto:hello@ais-machine.com" className="text-cyan-400 hover:underline">
            Email us directly
          </a>
          .
        </motion.p>
      </div>
    </section>
  )
}
