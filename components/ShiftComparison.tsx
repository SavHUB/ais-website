'use client'

export function ShiftComparison() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Shift: Traditional vs AIS Machine
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The difference isn&apos;t small. If a traditional website converts 1 out of 100 visitors, an AIS Machine converts 5-10. At scale, that&apos;s the difference between survival and thriving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Traditional Column */}
          <div className="glass rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-300 mb-6">
              Traditional Website
            </h3>
            <div className="space-y-4">
              <Item
                icon="●"
                color="text-blue-400"
                label="Primary Function"
                description="Looks good. Hopes people buy."
              />
              <Item
                icon="●"
                color="text-blue-400"
                label="Lead Capture"
                description="Forms that annoy visitors. 30% completion. No follow-up."
              />
              <Item
                icon="●"
                color="text-blue-400"
                label="Visitor Experience"
                description="Generic. Same experience for everyone."
              />
              <Item
                icon="●"
                color="text-blue-400"
                label="Follow-Up"
                description="Manual emails. You remember. They don&apos;t."
              />
              <Item
                icon="●"
                color="text-blue-400"
                label="SEO"
                description="Static content. Hope it ranks."
              />
              <Item
                icon="●"
                color="text-blue-400"
                label="Data Insights"
                description="Confusing analytics reports. No clear ROI."
              />
              <Item
                icon="●"
                color="text-blue-400"
                label="Your Time"
                description="Hours updating, managing, troubleshooting."
              />
              <Item
                icon="●"
                color="text-blue-400"
                label="Revenue Impact"
                description="Maybe some leads. No idea on ROI."
              />
            </div>
          </div>

          {/* AIS Machine Column */}
          <div className="glass rounded-lg p-8 border-blue-500/30 bg-blue-950/10">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">
              AIS Machine
            </h3>
            <div className="space-y-4">
              <Item
                icon="✓"
                color="text-cyan-400"
                label="Primary Function"
                description="Captures leads 24/7. Qualifies automatically. Converts while you sleep."
              />
              <Item
                icon="✓"
                color="text-cyan-400"
                label="Lead Capture"
                description="Conversational AI (70%+ completion). Instant qualification. Sorted by readiness."
              />
              <Item
                icon="✓"
                color="text-cyan-400"
                label="Visitor Experience"
                description="Dynamic personalization. Each visitor sees what converts THEM."
              />
              <Item
                icon="✓"
                color="text-cyan-400"
                label="Follow-Up"
                description="Automated sequences at perfect timing. Never misses a lead."
              />
              <Item
                icon="✓"
                color="text-cyan-400"
                label="SEO"
                description="Self-evolving (learns what ranks, optimizes daily)."
              />
              <Item
                icon="✓"
                color="text-cyan-400"
                label="Data Insights"
                description="Predictive intelligence. Know what&apos;s happening before it happens."
              />
              <Item
                icon="✓"
                color="text-cyan-400"
                label="Your Time"
                description="Set it and forget it. System manages itself."
              />
              <Item
                icon="✓"
                color="text-cyan-400"
                label="Revenue Impact"
                description="Measurable: X leads → Y revenue → Z profit"
              />
            </div>
          </div>
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
