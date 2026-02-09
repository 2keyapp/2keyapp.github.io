import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <span className="text-teal text-2xl font-bold font-heading">2key</span>
              <span className="text-white/80 text-2xl font-bold font-heading">.app</span>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              The billing layer that keeps you the Merchant of Record while influencers get paid automatically.
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com/2keyapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a
                href="https://github.com/2keyapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-heading font-semibold text-base sm:text-lg mb-4 sm:mb-6">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/how-it-works" className="text-gray-300 hover:text-teal transition-colors text-sm sm:text-base">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/merchants" className="text-gray-300 hover:text-teal transition-colors text-sm sm:text-base">
                  For Merchants
                </Link>
              </li>
              <li>
                <Link href="/influencers" className="text-gray-300 hover:text-teal transition-colors text-sm sm:text-base">
                  For Influencers
                </Link>
              </li>
              <li>
                <Link href="/buyers" className="text-gray-300 hover:text-teal transition-colors text-sm sm:text-base">
                  For Buyers
                </Link>
              </li>
              <li>
                <Link href="/trust" className="text-gray-300 hover:text-teal transition-colors text-sm sm:text-base">
                  Trust & Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-heading font-semibold text-base sm:text-lg mb-4 sm:mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/docs" className="text-gray-300 hover:text-teal transition-colors text-sm sm:text-base">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-gray-300 hover:text-teal transition-colors text-sm sm:text-base">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-teal transition-colors text-sm sm:text-base">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-heading font-semibold text-base sm:text-lg mb-4 sm:mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-teal transition-colors text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-teal transition-colors text-sm sm:text-base">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-teal transition-colors text-sm sm:text-base">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 sm:pt-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-300 text-sm sm:text-base text-center sm:text-left">
              © {new Date().getFullYear()} 2key.app. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-4 sm:gap-6">
              <Link
                href="/privacy"
                className="text-gray-300 hover:text-teal transition-colors text-sm sm:text-base"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-300 hover:text-teal transition-colors text-sm sm:text-base"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
