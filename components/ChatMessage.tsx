'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ChatMessageProps {
  type: 'user' | 'bot';
  content: string;
  isTyping?: boolean;
}

export default function ChatMessage({
  type,
  content,
  isTyping = false,
}: ChatMessageProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!isTyping) {
      setDisplayedText(content);
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      if (index < content.length) {
        setDisplayedText(content.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [content, isTyping]);

  const isBot = type === 'bot';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}
    >
      <div
        className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-3 rounded-lg ${
          isBot
            ? 'bg-slate-800 text-white border border-slate-700'
            : 'bg-blue-600 text-white'
        }`}
      >
        <p className="text-sm whitespace-pre-wrap leading-relaxed">
          {displayedText}
          {isTyping && displayedText.length < content.length && (
            <span className="inline-block w-2 h-4 ml-1 bg-white animate-pulse" />
          )}
        </p>
      </div>
    </motion.div>
  );
}
