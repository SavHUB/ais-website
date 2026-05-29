'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'How quickly can we expect to see results?',
    answer: 'Most clients see meaningful changes within the first two weeks — typically in lead volume and engagement rates. Conversion quality tends to improve further over the following month as the AI learns from your specific visitor behaviour. We set clear benchmarks at the start so you know what to look for.',
  },
  {
    question: 'Is there a long-term contract?',
    answer: "No. We work month-to-month because we'd rather earn your business every month than lock you in. The clients who stay do so because the results justify it — not because they have to.",
  },
  {
    question: 'Does this work for our industry?',
    answer: "AIS has been applied across B2B SaaS, professional services, agencies, consultancies, and e-commerce. If your business depends on website traffic converting into enquiries or customers, it's a strong fit.",
  },
  {
    question: 'Will it integrate with the tools we already use?',
    answer: "Yes. AIS connects with CRMs (HubSpot, Salesforce, Pipedrive), calendars, email platforms, and analytics tools. If you use something less common, we'll check compatibility before you commit.",
  },
  {
    question: 'How do you handle data privacy and compliance?',
    answer: 'AIS is GDPR and CCPA compliant. Data is encrypted in transit and at rest. We don\'t sell or share your visitor data with third parties. Full documentation is available on request.',
  },
  {
    question: 'How is this different from a standard chatbot?',
    answer: "Most chatbots answer support questions. AIS is built specifically around the sales qualification process — understanding visitor intent, asking the right questions, and routing promising conversations to your team.",
  },
]

export function FAQ() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="faq" className="px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>

      {/* FAQ structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
      })}} />

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Common questions</h2>
          <p className="text-gray-400 text-lg">
            Straightforward answers before you get started.
          </p>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, idx) => {
            const isOpen = expanded === idx
            return (
              <motion.div
                key={faq.question.slice(0, 30)}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.35 }}
                className="rounded-xl overflow-hidden transition-all duration-200"
                style={{
                  border: isOpen ? '1px solid rgba(0,102,255,0.22)' : '1px solid rgba(255,255,255,0.07)',
                  background: isOpen ? 'rgba(0,50,150,0.07)' : 'rgba(255,255,255,0.02)',
                }}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors hover:bg-white/[0.025]"
                >
                  <span className="text-sm font-semibold text-white pr-4">{faq.question}</span>
                  <ChevronDown
                    size={17}
                    className={`shrink-0 transition-all duration-250 ${isOpen ? 'rotate-180 text-cyan-400' : 'text-gray-500'}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.16,1,0.3,1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0" style={{ borderTop: '1px solid rgba(0,102,255,0.12)' }}>
                        <p className="text-sm text-gray-400 leading-relaxed mt-4">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-8 rounded-2xl text-center"
          style={{ background: 'rgba(0,102,255,0.07)', border: '1px solid rgba(0,102,255,0.15)' }}
        >
          <p className="text-gray-400 mb-1 font-medium text-white">Have a question not covered here?</p>
          <p className="text-gray-500 text-sm mb-6">We reply to every email, usually within a few hours.</p>
          <a
            href="mailto:hello@ais-machine.com"
            className="btn-primary inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
