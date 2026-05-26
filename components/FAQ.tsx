'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'How quickly can we expect to see results?',
    answer:
      'Most clients see meaningful changes within the first two weeks — typically in lead volume and engagement rates. Conversion quality tends to improve further over the following month as the AI learns from your specific visitor behaviour. We&apos;ll set clear benchmarks at the start so you know what to look for.',
  },
  {
    question: 'Is there a long-term contract?',
    answer:
      'No. We work month-to-month because we'd rather earn your business every month than lock you in. The clients who stay do so because the results justify it — not because they have to.',
  },
  {
    question: 'Does this work for our industry?',
    answer:
      'AIS has been applied across B2B SaaS, professional services, agencies, consultancies, and e-commerce. The underlying principle is the same: engage visitors at the right moment with the right conversation. If your business depends on website traffic converting into enquiries or customers, it's a strong fit.',
  },
  {
    question: 'Will it integrate with the tools we already use?',
    answer:
      'Yes. AIS connects with CRMs (HubSpot, Salesforce, Pipedrive), calendars, email platforms, and analytics tools. If you use something less common, we'll check compatibility before you commit. We don't want you to sign up only to discover a blocker.',
  },
  {
    question: 'How do you handle data privacy and compliance?',
    answer:
      'We take this seriously. AIS is GDPR and CCPA compliant. Data is encrypted in transit and at rest. We don't sell or share your visitor data with third parties. Full documentation is available on request — we're happy to walk you through it.',
  },
  {
    question: 'How is this different from a standard chatbot?',
    answer:
      'Most chatbots are designed to answer common support questions. AIS is built specifically around the sales qualification process — understanding visitor intent, asking the right questions, and routing promising conversations to your team. It's less about answering FAQs and more about having productive first conversations at scale.',
  },
]

export function FAQ() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="faq" className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-b border-white/10">
      {/* FAQ JSON-LD for Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Common questions
          </h2>
          <p className="text-gray-400 text-lg">
            Straightforward answers to the things people usually ask before getting started.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              key={faq.question.slice(0, 30)}
              className="border border-white/10 rounded-lg overflow-hidden bg-white/[0.02]"
            >
              <button
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                aria-expanded={expanded === idx}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
              >
                <span className="font-semibold text-white">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-cyan-400 flex-shrink-0 transition-transform duration-300 ${
                    expanded === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {expanded === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-blue-950/20 border-t border-white/10">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">Have a question that isn't covered here?</p>
          <a
            href="mailto:hello@ais-machine.com"
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] text-white font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
