'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight, Sparkles } from 'lucide-react'

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
    period: '/month',
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
    period: '/month',
    description: 'For teams serious about turning traffic into a consistent pipeline.',
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
    cta: 'Start free trial',
    highlight: true,
  },
  {
    id: 'scale',
    name: 'Scale',
    price: 'Custom',
    period: 'tailored pricing',
    description: 'For larger teams with higher volumes or specific compliance needs.',
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
  const scrollToCalculator = () => {
    document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative overflow-hidden"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>

      <div aria-hidden className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(99,102,241,0.04) 0%, transparent 60%)' }} />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            No setup fees. No long-term contracts. Cancel anytime.
          </p>
        </motion.div>

        {/* Tiers */}
        <div className="grid md:grid-cols-3 gap-5 items-start">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.16,1,0.3,1] }}
              className="relative rounded-2xl flex flex-col"
              style={tier.highlight ? {
                background: 'linear-gradient(145deg, rgba(0,60,180,0.25) 0%, rgba(0,20,60,0.4) 100%)',
                border: '1px solid rgba(0,102,255,0.35)',
                boxShadow: '0 0 50px rgba(0,102,255,0.12), 0 20px 40px rgba(0,0,0,0.3)',
              } : {
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Popular badge */}
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white"
                    style={{ background: 'linear-gradient(135deg,#0066ff,#00d4ff)', boxShadow: '0 0 16px rgba(0,102,255,0.5)' }}>
                    <Sparkles size={11} />
                    Most popular
                  </div>
                </div>
              )}

              <div className="p-7 pb-6">
                {/* Name */}
                <p className={`text-xs font-semibold tracking-widest uppercase mb-4 ${tier.highlight ? 'text-cyan-400' : 'text-gray-500'}`}>
                  {tier.name}
                </p>

                {/* Price */}
                <div className="flex items-end gap-1 mb-3">
                  <span className={`text-5xl font-bold tracking-tight ${tier.highlight ? 'gradient-text-blue' : 'text-white'}`}>
                    {tier.price}
                  </span>
                  {tier.price !== 'Custom' && (
                    <span className="text-gray-500 text-sm pb-1.5">{tier.period}</span>
                  )}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{tier.description}</p>
              </div>

              {/* Divider */}
              <div className="mx-7" style={{ height: '1px', background: tier.highlight ? 'rgba(0,102,255,0.2)' : 'rgba(255,255,255,0.07)' }} />

              {/* Features */}
              <ul className="p-7 space-y-3 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: tier.highlight ? 'rgba(0,212,255,0.15)' : 'rgba(99,102,241,0.15)',
                               border: tier.highlight ? '1px solid rgba(0,212,255,0.3)' : '1px solid rgba(99,102,241,0.3)' }}>
                      <Check size={9} className={tier.highlight ? 'text-cyan-400' : 'text-indigo-400'} />
                    </div>
                    <span className="text-gray-300 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="p-7 pt-0">
                {tier.id === 'scale' ? (
                  <a
                    href="mailto:hello@ais-machine.com?subject=Scale Plan Enquiry"
                    className="btn-secondary flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl text-sm"
                  >
                    {tier.cta} <ArrowRight size={15} />
                  </a>
                ) : (
                  <button
                    onClick={scrollToCalculator}
                    className={`flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                      tier.highlight ? 'btn-primary' : 'btn-secondary'
                    }`}
                  >
                    {tier.cta} <ArrowRight size={15} />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-500 text-sm mt-10"
        >
          All plans include a 14-day free trial · No credit card required · Questions?{' '}
          <a href="mailto:hello@ais-machine.com" className="text-cyan-400 hover:underline">
            Email us directly
          </a>
        </motion.p>
      </div>
    </section>
  )
}
