'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimatedStat from './AnimatedStat'
import Link from 'next/link'

const testimonials = [
  {
    id: 'sarah',
    quote:
      "We'd tried a couple of chatbot tools before. The difference with AIS is that it actually qualifies — it doesn't just answer FAQs. Our sales team now spends their time on people who are genuinely interested.",
    author: 'Sarah Chen',
    role: 'Marketing Director',
    company: 'TechFlow Inc',
    avatar: '/testimonial-sarah.jpg',
  },
  {
    id: 'james',
    quote:
      "Within the first month our qualified lead volume had roughly doubled. What surprised me most was the quality — the AI was asking better discovery questions than some of our junior reps.",
    author: 'James Mitchell',
    role: 'CEO',
    company: 'Growth Labs',
    avatar: '/testimonial-james.jpg',
  },
  {
    id: 'lisa',
    quote:
      "We were sceptical, honestly. But the numbers spoke for themselves after six weeks. The ROI case was clear and our team actually like it — it takes the repetitive work off their plate.",
    author: 'Lisa Rodriguez',
    role: 'VP Sales',
    company: 'Enterprise Solutions',
    avatar: '/testimonial-lisa.jpg',
  },
]

export function SocialProof() {
  return (
    <section id="proof" className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-b border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What AI-powered lead generation actually delivers
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Figures drawn from published research across Salesforce, HubSpot, Intercom, and Drift — the platforms that have already deployed this at scale.
          </p>
        </motion.div>

        {/* Source link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Link
            href="/case-studies"
            className="text-cyan-400 text-sm hover:underline"
          >
            View verified case studies →
          </Link>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { value: 73, label: 'Increase in qualified leads', suffix: '%', isNum: true },
            { value: '20–30%', label: 'Chat-to-lead conversion', isNum: false },
            { value: 67, label: 'Average sales increase', suffix: '%', isNum: true },
            { value: '2 hrs', label: 'Per day saved per rep', isNum: false },
          ].map((stat, idx) => (
            <motion.div
              key={`stat-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 text-center hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all duration-300"
            >
              {stat.isNum ? (
                <AnimatedStat
                  value={stat.value as number}
                  label={stat.label}
                  suffix={stat.suffix}
                  highlightColor="text-cyan-400"
                />
              ) : (
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-500">{stat.label}</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            What clients say
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                key={testimonial.id}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] transition-all duration-300"
              >
                {/* Star rating with proper aria label */}
                <div
                  className="flex gap-1 mb-4"
                  aria-label="5 out of 5 stars"
                  role="img"
                >
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-cyan-400 text-lg" aria-hidden="true">★</span>
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.quote}"</p>

                {/* Author with photo */}
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-blue-500/30">
                    <Image
                      src={testimonial.avatar}
                      alt={`${testimonial.author} — ${testimonial.role} at ${testimonial.company}`}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{testimonial.author}</p>
                    <p className="text-xs text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
