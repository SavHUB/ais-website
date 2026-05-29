'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Send, CheckCircle2, Loader2, Zap } from 'lucide-react'
import InteractiveDemo from './InteractiveDemo'
import AnimatedStat from './AnimatedStat'

export function Hero() {
  const [showDemo, setShowDemo] = useState(false)
  const [messages, setMessages] = useState<{role: 'ai' | 'user', text: string}[]>([])
  const [formData, setFormData] = useState({ name: '', email: '', company: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const sequence = [
      { role: 'ai',   text: "Hi there — looks like you're exploring ways to grow your pipeline.", delay: 1000 },
      { role: 'user', text: "Yes, we need more qualified leads coming in.",                       delay: 3000 },
      { role: 'ai',   text: "Understood. Are you capturing visitors from paid traffic or organic?", delay: 4500 },
      { role: 'user', text: "Mainly LinkedIn ads.",                                               delay: 7000 },
      { role: 'ai',   text: "LinkedIn traffic is high intent. I can qualify those visitors instantly and route the right ones to your calendar. Want to see how?", delay: 8500 },
    ]
    const timeouts: NodeJS.Timeout[] = []
    sequence.forEach((msg) => {
      timeouts.push(setTimeout(() => {
        setMessages(prev => [...prev, { role: msg.role as 'ai' | 'user', text: msg.text }])
      }, msg.delay))
    })
    return () => timeouts.forEach(clearTimeout)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setIsSuccess(true)
        setTimeout(() => {
          setShowForm(false); setIsSuccess(false)
          setFormData({ name: '', email: '', company: '' })
        }, 3000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-28 overflow-hidden">

        {/* ── Ambient background ── */}
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Primary glow */}
          <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] rounded-full opacity-[0.18]"
            style={{ background: 'radial-gradient(circle, #0066ff 0%, transparent 70%)', filter: 'blur(80px)' }} />
          {/* Secondary glow */}
          <div className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] rounded-full opacity-[0.12]"
            style={{ background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)', filter: 'blur(60px)' }} />
          {/* Accent glow */}
          <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] rounded-full opacity-[0.07]"
            style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)', filter: 'blur(50px)' }} />
          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* ── Left: Copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
              style={{ background: 'rgba(0,102,255,0.12)', border: '1px solid rgba(0,102,255,0.25)', color: '#60a5fa' }}
            >
              <Zap size={14} className="text-cyan-400" />
              AI-Powered Lead Engagement
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl md:text-[3.75rem] font-bold text-white mb-6 leading-[1.08] tracking-tight">
              Turn visitors into{' '}
              <span className="gradient-text-blue">qualified leads</span>
              {' '}— automatically
            </h1>

            <p className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Most websites are passive. AIS gives yours a voice — engaging visitors at the right moment,
              understanding their needs, and connecting the right ones with your team.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-14">
              <button
                onClick={() => setShowDemo(true)}
                className="btn-primary px-8 py-3.5 rounded-xl text-sm w-full sm:w-auto"
              >
                See it in action →
              </button>
              <button
                onClick={() => setShowForm(true)}
                className="btn-secondary px-8 py-3.5 rounded-xl text-sm w-full sm:w-auto"
              >
                Estimate my ROI
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <AnimatedStat value={73} label="More qualified leads" isPercentage highlightColor="text-white" />
              <div>
                <div className="text-2xl font-bold text-white tabular-nums">24/7</div>
                <div className="text-xs text-gray-500 mt-1">Always on</div>
              </div>
              <AnimatedStat value="5–10x" label="Higher conversion" highlightColor="text-cyan-400" />
            </div>
          </motion.div>

          {/* ── Right: Chat mockup ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md mx-auto lg:ml-auto"
          >
            {/* Outer glow ring */}
            <div className="relative">
              <div className="absolute -inset-px rounded-2xl pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(0,102,255,0.3), rgba(0,212,255,0.2), rgba(99,102,241,0.15))', padding: '1px' }}>
                <div className="w-full h-full rounded-2xl" style={{ background: 'var(--bg-elevated)' }} />
              </div>

              <div className="relative glass-dark rounded-2xl overflow-hidden shadow-2xl"
                style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,102,255,0.15)' }}>

                {/* Chat header */}
                <div className="px-4 py-3.5 flex items-center gap-3" style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'linear-gradient(135deg,#0066ff,#00d4ff)', boxShadow: '0 0 12px rgba(0,102,255,0.4)' }}>
                    <Sparkles size={16} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white">AIS Sales Agent</p>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs text-gray-500">Online now</span>
                    </div>
                  </div>
                  {/* Window controls (decorative) */}
                  <div className="flex gap-1.5">
                    {['bg-red-500/60','bg-yellow-500/60','bg-green-500/60'].map(c => (
                      <div key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                    ))}
                  </div>
                </div>

                {/* Messages */}
                <div className="p-4 h-[300px] overflow-y-auto flex flex-col gap-3 scrollbar-hide">
                  {messages.length === 0 && (
                    <div className="flex items-end gap-1 mt-auto">
                      {[0, 0.12, 0.24].map((d, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-gray-600 animate-bounce" style={{ animationDelay: `${d}s` }} />
                      ))}
                    </div>
                  )}
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.25, ease: [0.16,1,0.3,1] }}
                      className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                        msg.role === 'ai'
                          ? 'self-start rounded-tl-sm text-white'
                          : 'self-end rounded-tr-sm text-gray-200'
                      }`}
                      style={msg.role === 'ai'
                        ? { background: 'rgba(0,102,255,0.18)', border: '1px solid rgba(0,102,255,0.2)' }
                        : { background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.06)' }
                      }
                    >
                      {msg.text}
                    </motion.div>
                  ))}
                </div>

                {/* Input */}
                <div className="px-3 py-3 flex items-center gap-2" style={{ background: 'rgba(0,0,0,0.2)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="flex-1 rounded-full px-4 py-2 text-sm text-gray-600" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    Type your message…
                  </div>
                  <button
                    onClick={() => setShowDemo(true)}
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform hover:scale-105"
                    style={{ background: 'linear-gradient(135deg,#0066ff,#00d4ff)', boxShadow: '0 2px 10px rgba(0,102,255,0.4)' }}
                    aria-label="Open demo"
                  >
                    <Send size={14} className="text-white -ml-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom divider glow */}
        <div className="absolute bottom-0 left-0 right-0 divider-glow" />
      </section>

      <InteractiveDemo isOpen={showDemo} onClose={() => setShowDemo(false)} />

      {/* Lead Capture Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="glass-premium rounded-2xl max-w-md w-full p-8 shadow-2xl relative"
            style={{ boxShadow: '0 25px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)' }}
          >
            {!isSuccess ? (
              <>
                <h2 className="text-2xl font-bold text-white mb-2">See your lead potential</h2>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  Tell us about your business and we'll show you what AIS could mean for your pipeline.
                </p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  {[
                    { type: 'text',  key: 'name',    placeholder: 'Your name' },
                    { type: 'email', key: 'email',   placeholder: 'Work email' },
                    { type: 'text',  key: 'company', placeholder: 'Company website' },
                  ].map(({ type, key, placeholder }) => (
                    <input
                      key={key}
                      type={type}
                      required
                      value={formData[key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 text-sm transition-colors"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                      onFocus={e => (e.target.style.borderColor = 'rgba(0,212,255,0.5)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  ))}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2 py-3 rounded-xl mt-1 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : 'Get my free estimate →'}
                  </button>
                </form>
              </>
            ) : (
              <div className="py-8 text-center flex flex-col items-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', bounce: 0.5 }}>
                  <CheckCircle2 size={56} className="text-cyan-400 mb-4" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">We'll be in touch</h3>
                <p className="text-gray-400 text-sm">Expect a personalised breakdown of your lead potential within 24 hours.</p>
              </div>
            )}
            <button
              onClick={() => setShowForm(false)}
              aria-label="Close form"
              className="absolute top-4 right-4 text-gray-500 hover:text-white w-8 h-8 flex items-center justify-center rounded-full transition-colors"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </>
  )
}
