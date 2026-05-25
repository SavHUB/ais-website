'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How quickly will I see results?',
    answer:
      'Most clients see measurable improvements within 7-14 days. Lead capture increases typically show within the first week, with conversion optimization taking 2-4 weeks to fully optimize based on real visitor data.',
  },
  {
    question: 'Do you require long-term contracts?',
    answer:
      'No. We believe in proving value month-over-month. Choose the plan that works for you, and cancel anytime. Most clients stay because the ROI speaks for itself.',
  },
  {
    question: 'Will it work for my industry?',
    answer:
      'Yes. Our AI adapts to any industry: B2B SaaS, professional services, e-commerce, real estate, agencies, coaches, consultants. If visitors matter, we can convert more of them.',
  },
  {
    question: 'Can you integrate with my existing tools?',
    answer:
      'Absolutely. We integrate with your CRM, email platform, analytics, and payment systems. Our API is flexible—if we don\'t have a pre-built integration, we can custom-build one.',
  },
  {
    question: 'What about data privacy and security?',
    answer:
      'Enterprise-grade security. GDPR & CCPA compliant. Your data is encrypted at rest and in transit. We run on AWS with SOC 2 Type II certification. Your privacy is non-negotiable.',
  },
  {
    question: 'How is this different from chatbot builders?',
    answer:
      'Chatbots answer questions. AIS closes deals. We go beyond support—we qualify, personalize, route, and nurture. Every conversation is designed for conversion, not just engagement.',
  },
]

export function FAQ() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="faq" className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-b border-white/10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 scroll-fade">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg scroll-fade">
            Everything you need to know about AIS Machine.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="scroll-fade border border-white/10 rounded-lg overflow-hidden transition-all"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <button
                onClick={() => setExpanded(expanded === idx ? null : idx)}
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

              {expanded === idx && (
                <div className="px-6 py-4 bg-blue-950/20 border-t border-white/10">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Still have questions?</p>
          <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold transition-all shadow-lg hover:shadow-xl">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  )
}
