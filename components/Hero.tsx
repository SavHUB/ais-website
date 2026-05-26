'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Send, Loader2, CheckCircle2 } from 'lucide-react'
import InteractiveDemo from './InteractiveDemo'
import AnimatedStat from './AnimatedStat'

export function Hero() {
  const [showDemo, setShowDemo] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [messages, setMessages] = useState<{role: 'ai' | 'user', text: string}[]>([])
  
  // Form state
  const [formData, setFormData] = useState({ name: '', email: '', company: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Simulate an AI chat sequence
  useEffect(() => {
    const sequence = [
      { role: 'ai', text: "Hi there! I notice you're looking to scale your B2B revenue.", delay: 1000 },
      { role: 'user', text: "Yes, we need more qualified leads.", delay: 3000 },
      { role: 'ai', text: "I can help with that. Are you currently running paid ads or relying on organic traffic?", delay: 4500 },
      { role: 'user', text: "Mainly LinkedIn ads.", delay: 7000 },
      { role: 'ai', text: "Perfect. I can instantly qualify those visitors, capture their info, and book them directly into your calendar. Want to see how?", delay: 8500 }
    ]

    let timeouts: NodeJS.Timeout[] = []
    
    sequence.forEach((msg) => {
      const timeout = setTimeout(() => {
        setMessages(prev => [...prev, { role: msg.role as 'ai' | 'user', text: msg.text }])
      }, msg.delay)
      timeouts.push(timeout)
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
          setShowModal(false)
          setIsSuccess(false)
          setFormData({ name: '', email: '', company: '' })
        }, 3000)
      }
    } catch (error) {
      console.error('Error capturing lead:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-b border-white/10 overflow-hidden relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>Next-Gen Lead Capture</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Website&apos;s New <span className="gradient-blue bg-clip-text text-transparent">AI Sales Machine</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Stop leaving money on the table. Transform your website into a 24/7 AI sales engine that captures leads, qualifies prospects, and converts customers while you sleep.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <button
                onClick={() => setShowDemo(true)}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all hover:scale-105 active:scale-95"
              >
                See Your Lead Potential
              </button>
              <button
                onClick={() => setShowDemo(true)}
                className="px-8 py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold transition-all hover:scale-105 active:scale-95"
              >
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-left border-t border-white/10 pt-8">
              <AnimatedStat
                value={70}
                label="Form Completion"
                isPercentage={true}
                highlightColor="text-white"
              />
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-gray-500 mt-1">Lead Capture</div>
              </div>
              <AnimatedStat
                value="5-10x"
                label="More Conversions"
                highlightColor="text-cyan-400"
              />
            </div>
          </motion.div>

          {/* AI Chat Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-md mx-auto lg:ml-auto"
          >
            <div className="glass-dark rounded-xl overflow-hidden border border-white/10 shadow-2xl relative">
              {/* Header */}
              <div className="bg-white/5 border-b border-white/10 p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                  <Sparkles size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">AIS Sales Agent</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs text-gray-400">Online 24/7</span>
                  </div>
                </div>
              </div>

              {/* Chat Area */}
              <div className="p-4 h-[320px] overflow-y-auto flex flex-col gap-3 scrollbar-hide">
                {messages.length === 0 && (
                  <div className="flex items-center gap-2 text-gray-500 text-sm mt-auto mb-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                )}
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`max-w-[85%] rounded-2xl p-3 text-sm ${
                      msg.role === 'ai' 
                        ? 'bg-blue-600/20 border border-blue-500/20 text-white self-start rounded-tl-sm' 
                        : 'bg-white/10 border border-white/5 text-gray-200 self-end rounded-tr-sm'
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-3 bg-black/20 border-t border-white/10 flex items-center gap-2">
                <div className="flex-1 bg-white/5 rounded-full px-4 py-2 text-sm text-gray-400 border border-white/5">
                  Type your message...
                </div>
                <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center">
                  <Send size={16} className="text-white -ml-0.5" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo */}
      <InteractiveDemo isOpen={showDemo} onClose={() => setShowDemo(false)} />

      {/* Lead Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-dark border border-white/10 rounded-xl max-w-md w-full p-8 shadow-2xl relative"
          >
            {!isSuccess ? (
              <>
                <h2 className="text-2xl font-bold text-white mb-2">Your Lead Potential</h2>
                <p className="text-gray-400 mb-6 text-sm">
                  Tell us about your business. We&apos;ll estimate how many qualified leads you could capture with AIS.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Company Website"
                    className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all hover:scale-105 active:scale-95 mt-2 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? <Loader2 size={20} className="animate-spin" /> : 'Calculate My Potential'}
                  </button>
                </form>
              </>
            ) : (
              <div className="py-8 text-center flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                >
                  <CheckCircle2 size={64} className="text-cyan-400 mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                <p className="text-gray-400">Our team will be in touch shortly with your custom lead generation report.</p>
              </div>
            )}
            
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </>
  )
}

