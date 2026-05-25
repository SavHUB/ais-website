'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

export function Hero() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Website&apos;s New <span className="gradient-blue bg-clip-text text-transparent">AI Sales Machine</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Stop leaving money on the table. Transform your website into a 24/7 AI sales engine that captures leads, qualifies prospects, and converts customers while you sleep.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              See Your Lead Potential
            </button>
            <button className="px-8 py-3 rounded-lg border border-cyan-400/50 hover:border-cyan-400 text-cyan-400 font-semibold transition-colors">
              Watch Demo
            </button>
          </div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Traditional */}
            <div className="glass rounded-lg p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-semibold text-gray-300 mb-4">
                Traditional Website
              </h3>
              <div className="space-y-3">
                <ComparisonItem icon="x" label="Dumb forms." />
                <ComparisonItem icon="x" label="Generic experience for everyone." />
                <ComparisonItem icon="x" label="You manage everything manually." />
                <ComparisonItem icon="x" label="Limited to business hours." />
                <ComparisonItem icon="x" label="No idea what converts." />
              </div>
            </div>

            {/* AIS Machine */}
            <div className="glass rounded-lg p-6 md:p-8 border-blue-500/30 bg-blue-950/10">
              <h3 className="text-lg md:text-xl font-semibold text-blue-400 mb-4">
                AIS Machine
              </h3>
              <div className="space-y-3">
                <ComparisonItem icon="check" label="Conversational AI captures 70%+ leads." />
                <ComparisonItem icon="check" label="Each visitor sees what converts THEM." />
                <ComparisonItem icon="check" label="AI handles all qualification & follow-up." />
                <ComparisonItem icon="check" label="Works 24/7—even when you sleep." />
                <ComparisonItem icon="check" label="Real-time ROI tracking. Proves every lead." />
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="scroll-fade">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400">70%</div>
              <div className="text-xs md:text-sm text-gray-500 mt-1">Form Completion Rate</div>
            </div>
            <div className="scroll-fade" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400">24/7</div>
              <div className="text-xs md:text-sm text-gray-500 mt-1">Lead Capture</div>
            </div>
            <div className="scroll-fade" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400">5-10x</div>
              <div className="text-xs md:text-sm text-gray-500 mt-1">More Conversions</div>
            </div>
            <div className="scroll-fade" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400">ROI</div>
              <div className="text-xs md:text-sm text-gray-500 mt-1">Measurable & Proven</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="glass rounded-lg max-w-md w-full p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Your Lead Potential</h2>
            <p className="text-gray-400 mb-6">
              Tell us about your business. We&apos;ll estimate how many qualified leads you could capture with AIS.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Calculate My Potential
              </button>
            </form>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}

function ComparisonItem({ icon, label }: { icon: 'x' | 'check'; label: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1">
        {icon === 'check' ? (
          <Check size={20} className="text-cyan-400" />
        ) : (
          <span className="text-blue-400 text-xl leading-none">●</span>
        )}
      </div>
      <span className="text-sm text-gray-300">{label}</span>
    </div>
  )
}
