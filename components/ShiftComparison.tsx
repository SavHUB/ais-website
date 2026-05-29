'use client'

import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

const rows = [
  {
    label: 'Lead Capture',
    before: 'A contact form. Most visitors ignore it — average completion is 20–30%.',
    after:  'A guided conversation that feels natural. Completion rates exceed 65%.',
  },
  {
    label: 'Visitor Experience',
    before: 'The same page, same message, for every visitor regardless of intent.',
    after:  'The AI adapts to each visitor — source, behaviour, and what they need.',
  },
  {
    label: 'Follow-Up',
    before: 'Depends on when a human spots the submission. The window often closes.',
    after:  'Instant, automated, personalised — every lead responded to in seconds.',
  },
  {
    label: 'Lead Quality',
    before: 'Every submission looks the same until a rep calls to find out.',
    after:  'Leads arrive pre-qualified. Your team knows who to call before calling.',
  },
  {
    label: 'Coverage',
    before: 'Business hours only. After-hours enquiries wait until morning.',
    after:  '24/7. Conversations happen whenever visitors are ready.',
  },
  {
    label: 'Reporting',
    before: 'Traffic data is easy. Understanding what visitors wanted — much harder.',
    after:  'Clear attribution from first conversation to closed deal.',
  },
]

export function ShiftComparison() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative overflow-hidden" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>

      <div aria-hidden className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,102,255,0.03) 50%, transparent 100%)' }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4">The Difference</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            What changes when AI handles<br className="hidden md:block" /> your lead engagement
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            The gap isn't about design — it's about what happens when someone actually lands on your page.
          </p>
        </motion.div>

        {/* Column headers */}
        <div className="hidden md:grid md:grid-cols-[1.2fr_1fr_1fr] gap-4 mb-3 px-5">
          <div />
          <div className="text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-500">Traditional Website</span>
          </div>
          <div className="text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400">With AIS</span>
          </div>
        </div>

        {/* Rows */}
        <div className="space-y-2">
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16,1,0.3,1] }}
              className="rounded-xl p-5 transition-colors hover:bg-white/[0.025]"
              style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}
            >
              {/* Mobile: stacked layout */}
              <p className="text-sm font-semibold text-white mb-3 md:hidden">{row.label}</p>

              {/* Desktop: columns */}
              <div className="md:grid md:grid-cols-[1.2fr_1fr_1fr] md:gap-4 md:items-start space-y-3 md:space-y-0">
                <span className="hidden md:block text-sm font-semibold text-white self-center">{row.label}</span>

                <div className="flex gap-2.5 items-start">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.2)' }}>
                    <X size={10} className="text-red-400" />
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{row.before}</p>
                </div>

                <div className="flex gap-2.5 items-start">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.22)' }}>
                    <Check size={10} className="text-cyan-400" />
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{row.after}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
