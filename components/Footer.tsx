import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10 bg-slate-900/50">

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Logo />
            <p className="text-gray-500 text-sm">
              Helping businesses grow with intelligent lead generation.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#roi-calculator" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  ROI Calculator
                </a>
              </li>
              <li>
                <a href="#proof" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Results
                </a>
              </li>
              <li>
                <a href="/case-studies" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="mailto:hello@ais-machine.com" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            © 2025 AIS Machine. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">
              Twitter
            </a>
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
