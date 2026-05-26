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
            What changes when AI handles your lead engagement
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The gap between a standard website and an AI-powered one isn't about design. 
            It's about what happens when someone actually lands on your page.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Traditional Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8 hover:-translate-y-1 transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-300 mb-6">
              Traditional Website
            </h3>
            <div className="space-y-4">
              <Item icon="–" color="text-gray-500" label="Lead Capture" description="A contact form. Visitors fill it out if they feel like it — and most don't. Average completion rates sit around 20–30%." />
              <Item icon="–" color="text-gray-500" label="Visitor Experience" description="The same page, the same message, for every person who arrives — regardless of what brought them there." />
              <Item icon="–" color="text-gray-500" label="Follow-Up" description="Depends on how quickly a human spots a new submission. By the time they do, the window has often closed." />
              <Item icon="–" color="text-gray-500" label="Lead Quality" description="Every submission looks the same until a rep calls. Sorting takes time — time better spent selling." />
              <Item icon="–" color="text-gray-500" label="Hours of Coverage" description="Business hours, with gaps. After-hours enquiries wait until morning — and often go cold." />
              <Item icon="–" color="text-gray-500" label="Reporting" description="Traffic data is easy to find. Understanding what those visitors actually wanted is much harder." />
            </div>
          </motion.div>

          {/* AIS Machine Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-blue-500/30 bg-blue-950/10 rounded-lg p-8 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
              With AIS
            </h3>
            <div className="space-y-4">
              <Item icon="✓" color="text-cyan-400" label="Lead Capture" description="A conversation that feels natural. Visitors engage because it's helpful, not because they had to fill in a box. Completion rates exceed 65%." />
              <Item icon="✓" color="text-cyan-400" label="Visitor Experience" description="The AI adapts to each visitor — what they came from, what they've looked at, and what they seem to need." />
              <Item icon="✓" color="text-cyan-400" label="Follow-Up" description="Instant, automated, and personalised. Every lead gets a relevant response within seconds — not days." />
              <Item icon="✓" color="text-cyan-400" label="Lead Quality" description="Leads arrive pre-qualified. Your team knows who's worth calling before they pick up the phone." />
              <Item icon="✓" color="text-cyan-400" label="Hours of Coverage" description="24 hours a day. Conversations happen whenever visitors are ready — including nights, weekends, and time zones." />
              <Item icon="✓" color="text-cyan-400" label="Reporting" description="Clear attribution from first conversation to closed deal. You always know what's working and what isn't." />
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
        <strong className="text-white block">{label}</strong>
        <span className="text-gray-400 text-sm">{description}</span>
      </div>
    </div>
  )
}
