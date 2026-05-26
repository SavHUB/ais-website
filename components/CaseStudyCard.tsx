'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { CaseStudy } from '@/lib/caseStudies'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  index: number
}

export default function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={`/case-studies/${caseStudy.slug}`}>
        <div className="group glass rounded-xl p-6 h-full hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] transition-all duration-300 cursor-pointer hover:-translate-y-1">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{caseStudy.company}</h3>
              <p className="text-sm text-gray-400">{caseStudy.industry}</p>
            </div>
            <div className="p-3 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
              <TrendingUp className="text-cyan-400" size={20} />
            </div>
          </div>

          {/* Challenge Preview */}
          <p className="text-sm text-gray-300 mb-4 line-clamp-2">
            {caseStudy.challenge}
          </p>

          {/* Results Highlight */}
          <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-lg bg-white/5">
            <div>
              <p className="text-xs text-gray-500 mb-1">Lead Increase</p>
              <p className="text-lg font-bold text-green-400">
                +{caseStudy.results.leadsIncreasePercent}%
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">ROI</p>
              <p className="text-lg font-bold text-cyan-400">
                {caseStudy.results.roi}
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="mb-4 pb-4 border-b border-white/10">
            <p className="text-sm text-gray-300 italic">
              &quot;{caseStudy.quote.substring(0, 60)}...&quot;
            </p>
            <p className="text-xs text-gray-500 mt-2">
              — {caseStudy.quoteAuthor}, {caseStudy.quoteRole}
            </p>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">View full case study</span>
            <ArrowRight
              size={16}
              className="text-cyan-400 group-hover:translate-x-1 transition-transform"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
