'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import {
  calculateROI,
  formatCurrency,
  ROIInput,
  ROIOutput,
} from '@/lib/roiCalculations';

export default function ROICalculator() {
  const [input, setInput] = useState<ROIInput>({
    monthlyVisitors: 5000,
    currentConversionRate: 2,
    averageDealValue: 5000,
  });

  const roi = calculateROI(input);

  const handleVisitorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Math.max(parseInt(e.target.value) || 0, 100), 100000);
    setInput((prev) => ({ ...prev, monthlyVisitors: value }));
  };

  const handleConversionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(
      Math.max(parseFloat(e.target.value) || 0, 0.1),
      20
    );
    setInput((prev) => ({ ...prev, currentConversionRate: value }));
  };

  const handleDealChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Math.max(parseInt(e.target.value) || 0, 100), 1000000);
    setInput((prev) => ({ ...prev, averageDealValue: value }));
  };

  return (
    <section id="roi-calculator" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20"
          >
            <TrendingUp size={16} className="text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">
              ROI Calculator
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Estimate your lead potential
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            Enter your current numbers and see a projection of what a meaningful improvement in conversion could mean for your revenue.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 p-8 backdrop-blur-xl"
        >
          {/* Input Controls */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Monthly Visitors */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">
                Monthly Visitors
              </label>
              <input
                type="range"
                min="100"
                max="100000"
                step="100"
                value={input.monthlyVisitors}
                onChange={handleVisitorChange}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="mt-2 flex justify-between items-center">
                <input
                  type="number"
                  value={input.monthlyVisitors}
                  onChange={handleVisitorChange}
                  className="w-24 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm"
                />
                <span className="text-slate-400 text-sm">per month</span>
              </div>
            </div>

            {/* Conversion Rate */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">
                Current Conversion Rate
              </label>
              <input
                type="range"
                min="0.1"
                max="20"
                step="0.1"
                value={input.currentConversionRate}
                onChange={handleConversionChange}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="mt-2 flex justify-between items-center">
                <input
                  type="number"
                  step="0.1"
                  value={input.currentConversionRate}
                  onChange={handleConversionChange}
                  className="w-24 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm"
                />
                <span className="text-slate-400 text-sm">%</span>
              </div>
            </div>

            {/* Average Deal Value */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">
                Average Deal Value
              </label>
              <input
                type="range"
                min="100"
                max="1000000"
                step="100"
                value={input.averageDealValue}
                onChange={handleDealChange}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="mt-2 flex justify-between items-center">
                <input
                  type="number"
                  value={input.averageDealValue}
                  onChange={handleDealChange}
                  className="w-24 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm"
                />
                <span className="text-slate-400 text-sm">USD</span>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Current State */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-slate-700/30 rounded-xl border border-slate-700/50 p-6"
            >
              <p className="text-slate-400 text-sm mb-2">
                Current Monthly Revenue
              </p>
              <motion.p
                key={roi.currentMonthlyRevenue}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-3xl font-bold text-white mb-4"
              >
                {formatCurrency(roi.currentMonthlyRevenue)}
              </motion.p>
              <p className="text-slate-500 text-xs">
                Based on {Math.round((input.monthlyVisitors * input.currentConversionRate) / 100)}{' '}
                leads/month
              </p>
            </motion.div>

            {/* Projected State */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gradient-to-br from-blue-500/20 to-emerald-500/10 rounded-xl border border-blue-500/30 p-6"
            >
              <p className="text-slate-400 text-sm mb-2">
                With AI Sales Executive
              </p>
              <motion.p
                key={roi.projectedMonthlyRevenue}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-3xl font-bold text-emerald-400 mb-4"
              >
                {formatCurrency(roi.projectedMonthlyRevenue)}
              </motion.p>
              <p className="text-emerald-300/70 text-xs">
                +{roi.roiMultiplier}x revenue potential
              </p>
            </motion.div>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-700/50">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center"
            >
              <p className="text-slate-400 text-sm mb-2">Monthly Lift</p>
              <motion.p
                key={roi.monthlyLift}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold text-green-400"
              >
                {formatCurrency(roi.monthlyLift)}
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-center"
            >
              <p className="text-slate-400 text-sm mb-2">Annual Potential</p>
              <motion.p
                key={roi.annualLifted}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold text-blue-400"
              >
                {formatCurrency(roi.annualLifted)}
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center"
            >
              <p className="text-slate-400 text-sm mb-2">Improvement</p>
              <motion.p
                key={roi.percentageLift}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold text-emerald-400"
              >
                +{roi.percentageLift}%
              </motion.p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors hover:scale-105 active:scale-95"
            >
              How it works
            </button>
            <a
              href="mailto:hello@ais-machine.com?subject=Demo Request"
              className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors text-center hover:scale-105 active:scale-95"
            >
              Request a walkthrough
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
