'use client'

import { useState, useId } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

// ─── Mechanical joint ─────────────────────────────────────────────────────────
function Joint({
  cx, cy, r = 7.5, color, hovered, rotateBy = 45, delay = 0,
}: {
  cx: number; cy: number; r?: number
  color: string; hovered: boolean
  rotateBy?: number; delay?: number
}) {
  return (
    <motion.g
      animate={{ rotate: hovered ? rotateBy : 0 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18, delay }}
      style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' } as React.CSSProperties}
    >
      {/* Outer ring */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth="1.8" />
      {/* Centre dot */}
      <circle cx={cx} cy={cy} r={r * 0.34} fill={color} />
      {/* Cross-hair lines */}
      <line x1={cx - r + 1.5} y1={cy} x2={cx + r - 1.5} y2={cy}
        stroke={color} strokeWidth="1.2" opacity="0.55" />
      <line x1={cx} y1={cy - r + 1.5} x2={cx} y2={cy + r - 1.5}
        stroke={color} strokeWidth="1.2" opacity="0.55" />
    </motion.g>
  )
}

// ─── Logo ─────────────────────────────────────────────────────────────────────
interface LogoProps {
  /** Show "AI Solutions" subtitle beside the mark */
  showSubtitle?: boolean
  /** Icon height in px */
  size?: number
}

export function Logo({ showSubtitle = false, size = 44 }: LogoProps) {
  const [hovered, setHovered] = useState(false)
  const uid = useId().replace(/:/g, '') // unique per instance — avoids SVG id collisions

  // Brand colours that shift on hover
  const primary   = hovered ? '#00d4ff' : '#0a8aff'
  const secondary = hovered ? '#818cf8' : '#0066ff'

  const iconW = size * 0.84   // preserve viewBox aspect ratio

  return (
    <Link
      href="/"
      aria-label="AIS — AI Solutions"
      className="inline-flex items-center gap-2.5 select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── SVG Shield Mark ─────────────────────────────────────────────────── */}
      <motion.div
        animate={{ scale: hovered ? 1.07 : 1 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: iconW, height: size, flexShrink: 0 }}
      >
        <svg
          viewBox="-18 0 236 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%', overflow: 'visible' }}
          aria-hidden="true"
        >
          <defs>
            {/* Stroke gradient */}
            <linearGradient id={`${uid}-gs`} x1="0" y1="0" x2="200" y2="210"
              gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor={primary} />
              <stop offset="100%" stopColor={secondary} />
            </linearGradient>
            {/* Fill gradient */}
            <linearGradient id={`${uid}-gf`} x1="0" y1="0" x2="200" y2="210"
              gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor={primary}   stopOpacity={hovered ? 0.14 : 0.04} />
              <stop offset="100%" stopColor={secondary} stopOpacity={hovered ? 0.07 : 0.02} />
            </linearGradient>
            {/* Glow filter (active on hover) */}
            <filter id={`${uid}-glow`} x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ── Shield body ─────────────────────────────────────────────── */}
          <motion.path
            d="M 40 26 Q 40 10 58 10 L 142 10 Q 160 10 160 26
               L 160 122 Q 160 146 142 162 L 100 192 L 58 162
               Q 40 146 40 122 Z"
            fill={`url(#${uid}-gf)`}
            stroke={`url(#${uid}-gs)`}
            strokeWidth={hovered ? 2.2 : 1.6}
            filter={hovered ? `url(#${uid}-glow)` : undefined}
            animate={{ strokeWidth: hovered ? 2.2 : 1.6 }}
            transition={{ duration: 0.3 }}
          />

          {/* ── Arm segments ────────────────────────────────────────────── */}
          {/* Left diagonal: joint → shield top-left */}
          <motion.line x1="9" y1="62" x2="40" y2="28"
            stroke={primary} strokeWidth="2.6" strokeLinecap="round"
            animate={{ stroke: primary, opacity: hovered ? 1 : 0.6 }}
            transition={{ duration: 0.3 }} />

          {/* Top: horizontal across the shield roof */}
          <motion.line x1="40" y1="10" x2="160" y2="10"
            stroke={primary} strokeWidth="2.6" strokeLinecap="round"
            animate={{ stroke: primary, opacity: hovered ? 1 : 0.6 }}
            transition={{ duration: 0.3 }} />

          {/* Right upper: joint → down */}
          <motion.line x1="174" y1="30" x2="174" y2="80"
            stroke={secondary} strokeWidth="2.6" strokeLinecap="round"
            animate={{ stroke: secondary, opacity: hovered ? 1 : 0.6 }}
            transition={{ duration: 0.3 }} />

          {/* Right lower: joint → diagonally into shield */}
          <motion.line x1="172" y1="96" x2="157" y2="128"
            stroke={secondary} strokeWidth="2.6" strokeLinecap="round"
            animate={{ stroke: secondary, opacity: hovered ? 1 : 0.6 }}
            transition={{ duration: 0.3 }} />

          {/* ── Joints ──────────────────────────────────────────────────── */}
          <Joint cx={9}   cy={62}  color={primary}   hovered={hovered} rotateBy={42}  delay={0}    />
          <Joint cx={174} cy={22}  color={primary}   hovered={hovered} rotateBy={-36} delay={0.04} />
          <Joint cx={175} cy={88}  color={secondary} hovered={hovered} rotateBy={58}  delay={0.08} />
          <Joint cx={159} cy={134} color={secondary} hovered={hovered} rotateBy={-44} delay={0.12} />

          {/* ── "AiS" wordmark inside shield ────────────────────────────── */}
          <motion.text
            x="100" y="112"
            textAnchor="middle"
            fontFamily="'DM Sans','Inter',system-ui,sans-serif"
            fontSize="60"
            fontWeight="800"
            letterSpacing="-3"
            animate={{ fill: hovered ? '#ffffff' : '#f0f4ff' }}
            transition={{ duration: 0.2 }}
          >
            AiS
          </motion.text>

          {/* Upward-arrow accent (mimics the arrow detail in the original logo's A) */}
          <motion.path
            d="M 48 100 L 57 80 L 66 100"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            animate={{ stroke: hovered ? '#00d4ff' : '#60a5fa' }}
            transition={{ duration: 0.3 }}
          />

          {/* "AIS" subtitle */}
          <text x="100" y="140"
            textAnchor="middle"
            fontFamily="'Inter',system-ui,sans-serif"
            fontSize="12"
            fontWeight="500"
            letterSpacing="4.5"
            fill={hovered ? '#94a3b8' : '#6b7280'}
          >
            AIS
          </text>

          {/* "AI Solutions" sub-subtitle */}
          <text x="100" y="158"
            textAnchor="middle"
            fontFamily="'Inter',system-ui,sans-serif"
            fontSize="8.5"
            fontWeight="400"
            letterSpacing="2.5"
            fill={hovered ? '#64748b' : '#4b5563'}
          >
            AI Solutions
          </text>
        </svg>
      </motion.div>

      {/* ── Text block beside the mark ───────────────────────────────────────── */}
      <div className="leading-tight">
        <motion.span
          className="text-xl font-bold tracking-tight block"
          animate={{ color: hovered ? '#00d4ff' : '#f0f4ff' }}
          transition={{ duration: 0.2 }}
        >
          Ai<motion.span
            animate={{ color: hovered ? '#818cf8' : '#60a5fa' }}
            transition={{ duration: 0.2 }}
          >S</motion.span>
        </motion.span>
        {showSubtitle && (
          <span className="text-[10px] text-gray-500 tracking-widest uppercase">
            AI Solutions
          </span>
        )}
      </div>
    </Link>
  )
}
