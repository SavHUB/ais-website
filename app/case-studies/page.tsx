import { caseStudies } from '@/lib/caseStudies'
import CaseStudyCard from '@/components/CaseStudyCard'

export const metadata = {
  title: 'Case Studies | AIS - AI Sales Intelligence',
  description:
    'See how real businesses transformed their lead generation with AI Sales Intelligence. Real results, real numbers.',
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 border-b border-white/10 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-cyan-400 text-sm font-medium mb-4">Case Studies</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real Businesses. Real Results.
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            See how companies like yours used AIS to transform their lead generation, qualify
            prospects automatically, and grow revenue — with numbers to prove it.
          </p>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to write your own case study?</h2>
          <p className="text-gray-400 mb-8">
            Join 50+ businesses already generating more qualified leads with AIS.
          </p>
          <a
            href="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all hover:scale-105 active:scale-95"
          >
            See Your Lead Potential
          </a>
        </div>
      </section>
    </div>
  )
}
