import Link from 'next/link'

interface LogoProps {
  size?: 'sm' | 'md'
}

export function Logo({ size = 'md' }: LogoProps) {
  const boxSize = size === 'sm' ? 'w-7 h-7' : 'w-8 h-8'
  const textSize = size === 'sm' ? 'text-xs' : 'text-sm'
  const nameSize = size === 'sm' ? 'text-lg' : 'text-xl'

  return (
    <Link href="/" className="flex items-center gap-2 group" aria-label="AIS Machine home">
      <div className={`${boxSize} rounded bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.5)] transition-shadow`}>
        <span className={`text-white font-bold ${textSize}`}>AI</span>
      </div>
      <span className={`${nameSize} font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent`}>
        AIS
      </span>
    </Link>
  )
}
