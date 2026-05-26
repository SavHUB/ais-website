'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import ChatMessage from './ChatMessage';
import {
  demoFlows,
  suggestedQuestions,
  CompanyType,
  Message,
} from '@/lib/demoFlows';

interface InteractiveDemoProps {
  isOpen: boolean;
  onClose: () => void;
  initialCompanyType?: CompanyType;
}

export default function InteractiveDemo({
  isOpen,
  onClose,
  initialCompanyType = 'general',
}: InteractiveDemoProps) {
  const [companyType, setCompanyType] = useState<CompanyType>(
    initialCompanyType
  );
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const flow = demoFlows[companyType];
  const questions = suggestedQuestions[companyType];

  // Initialize with bot greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMessage: Message = {
        id: '0',
        type: 'bot',
        content: flow.initialMessage,
        timestamp: new Date(),
      };
      setMessages([initialMessage]);
    }
  }, [isOpen, flow, messages.length]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleQuestionClick = (question: string) => {
    if (isTyping) return;

    // Find the response key from the question
    let responseKey = 'about';

    if (question.includes('capture'))
      responseKey = 'lead-capture';
    else if (question.includes('ROI') || question.includes('results'))
      responseKey = 'roi';
    else if (
      question.includes('implement') ||
      question.includes('timeline') ||
      question.includes('setup') ||
      question.includes('started')
    )
      responseKey = 'timeline';
    else if (question.includes('cost') || question.includes('price'))
      responseKey = 'roi';

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      type: 'user',
      content: question,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Get and add bot response
    setIsTyping(true);
    setTimeout(() => {
      const response = flow.responses[responseKey];
      if (response) {
        const botMessage: Message = {
          id: `bot-${Date.now()}`,
          type: 'bot',
          content: response.message,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);

        if (response.showLeadForm) {
          setShowLeadForm(true);
        }
      }
      setIsTyping(false);
    }, 500);
  };

  const handleLeadFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userEmail) {
      setFormSubmitted(true);
      // Here you would normally send the email to your backend
      setTimeout(() => {
        setShowLeadForm(false);
        setFormSubmitted(false);
        setUserEmail('');
        const thankYouMessage: Message = {
          id: `bot-${Date.now()}`,
          type: 'bot',
          content:
            "Perfect! I'll send you a personalized ROI report to your email. We'll also have someone reach out within 24 hours to discuss your specific situation. Looking forward to helping you grow! 🚀",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, thankYouMessage]);
      }, 800);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', damping: 20 }}
            className="bg-slate-950 rounded-xl shadow-2xl max-w-lg w-full max-h-[600px] flex flex-col border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="border-b border-slate-800 p-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-white">AI Sales Executive</h3>
                <p className="text-xs text-slate-400">
                  Live demo - {demoFlows[companyType].label}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-1 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X size={20} className="text-slate-400" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <ChatMessage
                  key={msg.id}
                  type={msg.type}
                  content={msg.content}
                  isTyping={isTyping && idx === messages.length - 1}
                />
              ))}
              {isTyping && messages[messages.length - 1]?.type === 'user' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-slate-800 px-4 py-3 rounded-lg border border-slate-700">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Lead Form */}
            <AnimatePresence>
              {showLeadForm && !formSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="border-t border-slate-800 p-4 bg-slate-900"
                >
                  <p className="text-sm text-slate-300 mb-3">
                    Send me the personalized ROI report:
                  </p>
                  <form
                    onSubmit={handleLeadFormSubmit}
                    className="flex gap-2"
                  >
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      required
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      Send
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

            {formSubmitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border-t border-slate-800 p-4 bg-slate-900 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 10 }}
                  className="inline-block mb-2"
                >
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full" />
                  </div>
                </motion.div>
                <p className="text-sm text-green-400">
                  Email sent! Check your inbox.
                </p>
              </motion.div>
            )}

            {/* Suggested Questions */}
            {!showLeadForm && !isTyping && messages.length > 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border-t border-slate-800 p-4 bg-slate-900"
              >
                <p className="text-xs text-slate-400 mb-3">
                  Suggested questions:
                </p>
                <div className="space-y-2">
                  {questions.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleQuestionClick(q)}
                      className="w-full text-left px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
