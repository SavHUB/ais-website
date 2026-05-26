'use client'

import { motion } from 'framer-motion'
import AnimatedStat from './AnimatedStat'

export function SocialProof() {
  const metrics = [
    { number: '50+', label: 'Businesses Transformed' },
    { number: '10,000+', label: 'Qualified Leads Captured' },
    { number: '3.2M', label: 'Revenue Generated' },
    { number: '7x', label: 'Average ROI' },
  ]

  const testimonials = [
    {
      quote: 'We saw a 5x increase in qualified leads within the first month. The AI understands our customers better than we do.',
      author: 'Sarah Chen',
      role: 'Marketing Director',
      company: 'TechFlow Inc',
    },
    {
      quote: 'No more manual lead qualification. The system does 90% of the work. Our conversion rate jumped from 2% to 8%.',
      author: 'James Mitchell',
      role: 'CEO',
      company: 'Growth Labs',
    },
    {
      quote: 'Best decision we made. The ROI was obvious within weeks. Now it\'s our most productive sales channel.',
      author: 'Lisa Rodriguez',
      role: 'Sales Lead',
      company: 'Enterprise Solutions',
    },
  ]

  return (
    <section id="proof" className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-b border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Real Results. Real Businesses. Real Growth.
        </motion.h2>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-lg p-6 text-center hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all duration-300"
          >
            <AnimatedStat
              value={50}
              label="Businesses Transformed"
              suffix="+"
              highlightColor="text-cyan-400"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-lg p-6 text-center hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all duration-300"
          >
            <AnimatedStat
              value={10000}
              label="Qualified Leads Captured"
              suffix="+"
              highlightColor="text-cyan-400"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass rounded-lg p-6 text-center hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all duration-300"
          >
            <AnimatedStat
              value="3.2M"
              label="Revenue Generated"
              highlightColor="text-cyan-400"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass rounded-lg p-6 text-center hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all duration-300"
          >
            <AnimatedStat
              value="7x"
              label="Average ROI"
              highlightColor="text-cyan-400"
            />
          </motion.div>
        </div>

        {/* Testimonials */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            What Our Clients Say
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                key={idx}
                className="glass rounded-lg p-6 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-cyan-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
