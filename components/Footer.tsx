'use client'

export function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold text-white">AIS</span>
            </div>
            <p className="text-gray-500 text-sm">
              Transform your website into a 24/7 AI sales machine.
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
                <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Careers
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
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  GDPR
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            © 2024 AIS Machine. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
