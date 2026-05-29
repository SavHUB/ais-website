'use client'

import { motion } from 'framer-motion'
import AnimatedStat from './AnimatedStat'

const testimonials = [
  {
    quote: 'We saw a 5x increase in qualified leads within the first month. The AI understands our customers better than we do.',
    author: 'Sarah Chen',
    role: 'Marketing Director',
    company: 'TechFlow Inc',
    initials: 'SC',
    color: '#0066ff',
  },
  {
    quote: 'No more manual lead qualification. The system does 90% of the work. Our conversion rate jumped from 2% to 8%.',
    author: 'James Mitchell',
    role: 'CEO',
    company: 'Growth Labs',
    initials: 'JM',
    color: '#00d4ff',
  },
  {
    quote: "Best decision we made. The ROI was obvious within weeks. Now it's our most productive sales channel.",
    author: 'Lisa Rodriguez',
    role: 'VP Sales',
    company: 'Enterprise Solutions',
    initials: 'LR',
    color: '#6366f1',
  },
]

export function SocialProof() {
  return (
    <section id="proof" className="px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative overflow-hidden"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', background: 'linear-gradient(180deg, rgba(0,102,255,0.03) 0%, transparent 100%)' }}>

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4">Proven Results</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Real results. Real businesses.
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Numbers from companies like yours — not projections.
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { value: 50, label: 'Businesses Transformed', suffix: '+' },
            { value: 10000, label: 'Qualified Leads Captured', suffix: '+' },
            { value: '3.2M', label: 'Revenue Generated' },
            { value: '7x', label: 'Average ROI' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16,1,0.3,1] }}
              className="glass-hover rounded-xl p-6 text-center"
            >
              <AnimatedStat
                value={stat.value as number | string}
                label={stat.label}
                suffix={stat.suffix}
                highlightColor="text-cyan-400"
              />
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-bold text-white mb-8 text-center"
        >
          What our clients say
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16,1,0.3,1] }}
              className="glass-hover rounded-xl p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-cyan-400 text-sm">★</span>
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed italic flex-1">
                &quot;{t.quote}&quot;
              </p>

              <div className="flex items-center gap-3 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, rgba(0,212,255,0.8))` }}>
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-white text-sm font-semibold truncate">{t.author}</p>
                  <p className="text-gray-500 text-xs truncate">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
