import Link from 'next/link'

const links = {
  Product: [
    { label: 'Features',       href: '#features' },
    { label: 'ROI Calculator', href: '#roi-calculator' },
    { label: 'Pricing',        href: '#pricing' },
    { label: 'Case Studies',   href: '/case-studies' },
    { label: 'Results',        href: '#proof' },
    { label: 'Blog',           href: '/blog' },
  ],
  Company: [
    { label: 'FAQ',     href: '#faq' },
    { label: 'Contact', href: 'mailto:hello@ais-machine.com' },
  ],
  Legal: [
    { label: 'Privacy Policy',   href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-10 overflow-hidden"
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)', background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%)' }}>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 w-fit">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                style={{ background: 'linear-gradient(135deg,#0066ff,#00d4ff)', boxShadow: '0 0 14px rgba(0,102,255,0.35)' }}>
                AI
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                AIS<span className="text-cyan-400">.</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-[220px]">
              AI-powered lead engagement that turns website visitors into qualified pipeline.
            </p>
            <a
              href="mailto:hello@ais-machine.com"
              className="text-cyan-400 text-sm hover:underline"
            >
              hello@ais-machine.com
            </a>
          </div>

          {/* Nav columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-gray-500 hover:text-gray-200 text-sm transition-colors duration-150"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} AIS Machine. All rights reserved.
          </p>
          <div className="flex gap-5">
            {[
              { label: 'Twitter',  href: '#' },
              { label: 'LinkedIn', href: '#' },
            ].map(({ label, href }) => (
              <a key={label} href={href}
                className="text-gray-600 hover:text-gray-300 text-sm transition-colors duration-150">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
