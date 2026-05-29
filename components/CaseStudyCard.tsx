'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
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
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16,1,0.3,1] }}
    >
      <Link href={`/case-studies/${caseStudy.slug}`} className="block group h-full">
        <div
          className="h-full rounded-2xl p-6 flex flex-col transition-all duration-300 cursor-pointer"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement
            el.style.background = 'rgba(255,255,255,0.055)'
            el.style.borderColor = 'rgba(0,212,255,0.2)'
            el.style.transform = 'translateY(-3px)'
            el.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3), 0 0 30px rgba(0,212,255,0.06)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            el.style.background = 'rgba(255,255,255,0.03)'
            el.style.borderColor = 'rgba(255,255,255,0.07)'
            el.style.transform = 'translateY(0)'
            el.style.boxShadow = 'none'
          }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-white mb-1">{caseStudy.company}</h3>
              <p className="text-xs text-gray-500">{caseStudy.industry}</p>
            </div>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.15)' }}>
              <ArrowRight size={14} className="text-cyan-400 group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed mb-5 line-clamp-2 flex-1">
            {caseStudy.challenge}
          </p>

          {/* Results grid */}
          <div className="grid grid-cols-2 gap-3 mb-5 p-4 rounded-xl"
            style={{ background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.1)' }}>
            <div>
              <p className="text-xs text-gray-500 mb-1">Lead Increase</p>
              <p className="text-xl font-bold text-emerald-400">+{caseStudy.results.leadsIncreasePercent}%</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">ROI Year 1</p>
              <p className="text-xl font-bold text-cyan-400">{caseStudy.results.roi.split(' ')[0]}</p>
            </div>
          </div>

          {/* Quote */}
          <div className="pb-4 mb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <p className="text-xs text-gray-400 italic leading-relaxed line-clamp-2">
              &quot;{caseStudy.quote.substring(0, 80)}…&quot;
            </p>
            <p className="text-xs text-gray-600 mt-1.5">— {caseStudy.quoteAuthor}, {caseStudy.quoteRole}</p>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500">Read case study</span>
            <ArrowRight size={13} className="text-cyan-400 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
