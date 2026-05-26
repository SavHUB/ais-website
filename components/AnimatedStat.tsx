'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface AnimatedStatProps {
  value: number | string;
  label: string;
  isPercentage?: boolean;
  prefix?: string;
  suffix?: string;
  highlightColor?: string;
}

export default function AnimatedStat({
  value,
  label,
  isPercentage = false,
  prefix = '',
  suffix = '',
  highlightColor = 'text-white',
}: AnimatedStatProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useMotionValue(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric value if it's a string like "5-10x"
    let numValue = 0;
    if (typeof value === 'number') {
      numValue = value;
    } else if (typeof value === 'string') {
      const match = value.match(/\d+/);
      if (match) {
        numValue = parseInt(match[0]);
      }
    }

    const controls = count.set(0);

    const timeout = setTimeout(() => {
      count.set(numValue);
    }, 100);

    return () => clearTimeout(timeout);
  }, [isInView, value, count]);

  const displayValue = useTransform(count, (latest) => {
    if (typeof value === 'string') {
      return value; // Return non-numeric values as-is
    }
    if (isPercentage) {
      return `${Math.floor(latest)}%`;
    }
    return Math.floor(latest).toString();
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <div className={`text-3xl md:text-4xl font-bold mb-2 ${highlightColor}`}>
          {prefix}
          {typeof value === 'string' && value}
          {typeof value === 'number' && isInView && (
            <motion.span>{displayValue}</motion.span>
          )}
          {suffix}
        </div>
        <div className="text-xs md:text-sm text-gray-500">{label}</div>
      </div>
    </motion.div>
  );
}
