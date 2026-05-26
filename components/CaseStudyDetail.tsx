'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, Target, Zap } from 'lucide-react'
import AnimatedStat from './AnimatedStat'
import { CaseStudy } from '@/lib/caseStudies'

interface CaseStudyDetailProps {
  caseStudy: CaseStudy
}

export default function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 border-b border-white/10 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-cyan-400 text-sm font-medium mb-4">Case Study</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {caseStudy.company}
            </h1>
            <p className="text-lg text-gray-400 mb-6">{caseStudy.industry}</p>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              {caseStudy.challenge}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            The Results
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="glass rounded-lg p-6 text-center"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 mx-auto mb-4">
                <TrendingUp className="text-green-400" size={24} />
              </div>
              <AnimatedStat
                value={caseStudy.results.leadsIncreasePercent}
                label="Lead Increase"
                suffix="%"
                highlightColor="text-green-400"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-lg p-6 text-center"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/20 mx-auto mb-4">
                <Zap className="text-cyan-400" size={24} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                {caseStudy.results.roi}
              </div>
              <div className="text-xs md:text-sm text-gray-500">ROI Year 1</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-lg p-6 text-center"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 mx-auto mb-4">
                <Target className="text-blue-400" size={24} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                {caseStudy.results.conversionRateImprovement}
              </div>
              <div className="text-xs md:text-sm text-gray-500">Conversion Rate</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass rounded-lg p-6 text-center"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 mx-auto mb-4">
                <Clock className="text-emerald-400" size={24} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">
                {caseStudy.results.timeToBreakeven}
              </div>
              <div className="text-xs md:text-sm text-gray-500">To Breakeven</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 border-b border-white/10 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Before & After
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-lg p-8 border border-red-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-6">Before AIS</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-400 mb-2">Monthly Leads</p>
                  <p className="text-2xl font-bold text-gray-300">
                    {caseStudy.beforeMetrics.monthlyLeads}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Conversion Rate</p>
                  <p className="text-2xl font-bold text-gray-300">
                    {caseStudy.beforeMetrics.conversionRate}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Monthly Revenue</p>
                  <p className="text-2xl font-bold text-gray-300">
                    {caseStudy.beforeMetrics.monthlyRevenue}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-lg p-8 border border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent"
            >
              <h3 className="text-xl font-bold text-white mb-6">After AIS</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-400 mb-2">Monthly Leads</p>
                  <p className="text-2xl font-bold text-green-400">
                    {caseStudy.afterMetrics.monthlyLeads}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Conversion Rate</p>
                  <p className="text-2xl font-bold text-green-400">
                    {caseStudy.afterMetrics.conversionRate}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Monthly Revenue</p>
                  <p className="text-2xl font-bold text-green-400">
                    {caseStudy.afterMetrics.monthlyRevenue}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Details */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            How We Did It
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="glass rounded-lg p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4">Implementation Timeline</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-cyan-400 font-bold whitespace-nowrap">Setup:</div>
                  <p className="text-gray-400">{caseStudy.timeline.setup}</p>
                </div>
                <div className="flex gap-4">
                  <div className="text-cyan-400 font-bold whitespace-nowrap">Training:</div>
                  <p className="text-gray-400">{caseStudy.timeline.trainingTime}</p>
                </div>
                <div className="flex gap-4">
                  <div className="text-cyan-400 font-bold whitespace-nowrap">Optimization:</div>
                  <p className="text-gray-400">{caseStudy.timeline.fullOptimization}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-lg p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4">The Approach</h3>
              <p className="text-gray-300 leading-relaxed">{caseStudy.implementation}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 border-b border-white/10 bg-gradient-to-b from-blue-600/5 to-transparent">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-8 text-center"
          >
            <div className="flex gap-1 justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-cyan-400 text-2xl">
                  ★
                </span>
              ))}
            </div>
            <p className="text-2xl text-white mb-6 leading-relaxed italic">
              &quot;{caseStudy.quote}&quot;
            </p>
            <div>
              <p className="text-lg font-semibold text-white">{caseStudy.quoteAuthor}</p>
              <p className="text-gray-500">{caseStudy.quoteRole}</p>
              <p className="text-sm text-gray-500 mt-2">{caseStudy.company}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to see your results?</h2>
            <p className="text-lg text-gray-400 mb-8">
              Get a personalized analysis of your lead potential.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all hover:scale-105 active:scale-95">
              Calculate My Potential
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
