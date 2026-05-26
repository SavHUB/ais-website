'use client'

import { motion } from 'framer-motion'

export function ShiftComparison() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-b border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Shift: Traditional vs AIS Machine
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The difference isn&apos;t small. If a traditional website converts 1 out of 100 visitors, an AIS Machine converts 5-10. At scale, that&apos;s the difference between survival and thriving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Traditional Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-lg p-8 hover:-translate-y-1 transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-300 mb-6">
              Traditional Website
            </h3>
            <div className="space-y-4">
              <Item
                icon="●"
                color="text-blue-400"
                label="Primary Function"
                description="Showcases products and services. Passive lead generation."
              />
              <Item
                icon="●"
                color="text-blue-400"
                label="Lead Capture"
                description="Standard contact forms with 20-30% completion rates and inconsistent follow-up."
              />
              <Item
                icon="●"
                color="text-blue-400"
                label="Visitor Experience"
                description="Static, uniform experience. Same content shown to every visitor."
              />
              <Item
                icon="●"
                color="text-blue-400"
                label="Lead Nurturing"
                description="Manual outreach required. Time-intensive, prone to delays."
              />
              <Item
                icon="●"
                color="text-blue-400"
                label="Content Management"
                description="Requires ongoing updates and maintenance. Subject to ranking fluctuations."
              />
              <Item
                icon="●"
                color="text-blue-400"
                label="Performance Tracking"
                description="Basic metrics available. Difficult to correlate with actual revenue."
              />
              <Item
                icon="●"
                color="text-blue-400"
                label="Operational Effort"
                description="Continuous updates and manual process management needed."
              />
              <Item
                icon="●"
                color="text-blue-400"
                label="Revenue Attribution"
                description="Unclear lead-to-revenue path. Hard to measure true ROI."
              />
            </div>
          </motion.div>

          {/* AIS Machine Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-lg p-8 border-blue-500/30 bg-blue-950/10 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,102,255,0.2)] transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">
              AIS Machine
            </h3>
            <div className="space-y-4">
              <Item
                icon="✓"
                color="text-cyan-400"
                label="Primary Function"
                description="24/7 AI-powered lead generation and qualification engine."
              />
              <Item
                icon="✓"
                color="text-cyan-400"
                label="Lead Capture"
                description="Conversational AI with 65%+ completion rates. Instant lead qualification and segmentation."
              />
              <Item
                icon="✓"
                color="text-cyan-400"
                label="Visitor Experience"
                description="Dynamic, personalized interactions adapted to individual user behavior and interests."
              />
              <Item
                icon="✓"
                color="text-cyan-400"
                label="Lead Nurturing"
                description="Automated, intelligent follow-up sequences. Perfect timing, zero manual effort."
              />
              <Item
                icon="✓"
                color="text-cyan-400"
                label="Content Management"
                description="AI-optimized content that learns and improves. Continuous ranking optimization."
              />
              <Item
                icon="✓"
                color="text-cyan-400"
                label="Performance Tracking"
                description="Real-time dashboards with actionable insights. Lead quality and conversion metrics."
              />
              <Item
                icon="✓"
                color="text-cyan-400"
                label="Operational Effort"
                description="Set once, runs automatically. Self-optimizing system requires minimal oversight."
              />
              <Item
                icon="✓"
                color="text-cyan-400"
                label="Revenue Attribution"
                description="Clear lead-to-revenue tracking. Measurable ROI on every campaign."
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Item({
  icon,
  color,
  label,
  description,
}: {
  icon: string
  color: string
  label: string
  description: string
}) {
  return (
    <div className="flex gap-3">
      <div className={`${color} font-semibold text-lg flex-shrink-0 w-6 text-center`}>
        {icon}
      </div>
      <div>
        <strong className="text-white block">{label}:</strong>
        <span className="text-gray-400 text-sm">{description}</span>
      </div>
    </div>
  )
}
