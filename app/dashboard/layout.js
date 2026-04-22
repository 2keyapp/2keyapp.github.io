'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { LayoutDashboard, Store, Users, Megaphone, Wallet, ArrowLeftRight, Settings, Compass, Menu, X } from 'lucide-react'

export default function DashboardLayout({ children }) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile menu when Route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])
  
  const isMerchant = pathname?.includes('/dashboard/merchant')
  const isInfluencer = pathname?.includes('/dashboard/influencer') || pathname?.includes('/marketplace') || pathname?.includes('/campaigns')
  
  // Logical rules to enforce strict separation in the UI mockups
  const showInfluencer = isInfluencer
  const showMerchant = isMerchant || (!isMerchant && !isInfluencer)

  return (
    <div className="flex h-screen bg-gray-100 text-navy font-body overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-navy/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-navy flex-shrink-0 shadow-[4px_0_24px_rgb(0,0,0,0.05)] z-50 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full flex flex-col">
          <div className="h-16 flex items-center justify-between px-6">
            <span className="text-xl font-bold font-heading text-white">
              Earnfluence<span className="text-teal">.io</span>
            </span>
            <button 
              className="lg:hidden p-2 -mr-2 text-gray-400 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="flex-1 px-4 py-8 space-y-8 overflow-y-auto">
            {/* Merchant Section */}
            {showMerchant && (
              <div>
                <p className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Merchant</p>
                <ul className="space-y-1">
                  <li>
                    <Link href="/dashboard/merchant" className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all group ${pathname === '/dashboard/merchant' ? 'bg-white/10 text-white shadow-inner' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}>
                      <Store className={`w-5 h-5 mr-3 transition-colors ${pathname === '/dashboard/merchant' ? 'text-teal' : 'text-gray-400 group-hover:text-teal'}`} />
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/merchant/approvals" className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all group ${pathname === '/dashboard/merchant/approvals' ? 'bg-white/10 text-white shadow-inner' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}>
                      <Users className={`w-5 h-5 mr-3 transition-colors ${pathname === '/dashboard/merchant/approvals' ? 'text-teal' : 'text-gray-400 group-hover:text-teal'}`} />
                      Approvals
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/merchant/promo-codes" className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all group ${pathname === '/dashboard/merchant/promo-codes' ? 'bg-white/10 text-white shadow-inner' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}>
                      <Megaphone className={`w-5 h-5 mr-3 transition-colors ${pathname === '/dashboard/merchant/promo-codes' ? 'text-teal' : 'text-gray-400 group-hover:text-teal'}`} />
                      Promo Codes
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/merchant/settings" className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all group ${pathname === '/dashboard/merchant/settings' ? 'bg-white/10 text-white shadow-inner' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}>
                      <Settings className={`w-5 h-5 mr-3 transition-colors ${pathname === '/dashboard/merchant/settings' ? 'text-teal' : 'text-gray-400 group-hover:text-teal'}`} />
                      Settings & Billing
                    </Link>
                  </li>
                </ul>
              </div>
            )}

            {/* Influencer Section */}
            {showInfluencer && (
              <div>
                <p className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Influencer</p>
                <ul className="space-y-1">
                  <li>
                    <Link href="/dashboard/influencer" className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all group ${pathname === '/dashboard/influencer' ? 'bg-white/10 text-white shadow-inner' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}>
                      <Users className={`w-5 h-5 mr-3 transition-colors ${pathname === '/dashboard/influencer' ? 'text-teal' : 'text-gray-400 group-hover:text-teal'}`} />
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace" className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all group ${pathname === '/marketplace' ? 'bg-white/10 text-white shadow-inner' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}>
                      <Compass className={`w-5 h-5 mr-3 transition-colors ${pathname === '/marketplace' ? 'text-teal' : 'text-gray-400 group-hover:text-teal'}`} />
                      Find Campaigns
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/influencer/settings" className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all group ${pathname === '/dashboard/influencer/settings' ? 'bg-white/10 text-white shadow-inner' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}>
                      <Settings className={`w-5 h-5 mr-3 transition-colors ${pathname === '/dashboard/influencer/settings' ? 'text-teal' : 'text-gray-400 group-hover:text-teal'}`} />
                      Payout Settings
                    </Link>
                  </li>
                </ul>
              </div>
            )}

          </nav>
          
          <div className="p-4 border-t border-white/10">
            <Link href="/" className="flex items-center text-sm text-gray-400 hover:text-white transition-colors group cursor-pointer w-full">
              <div className="w-8 h-8 rounded-full bg-white/10 mr-3 flex items-center justify-center font-bold text-white group-hover:bg-teal group-hover:text-navy transition-all">A</div>
              <div>
                <p className="font-semibold text-white">Account</p>
                <p className="text-xs group-hover:text-teal transition-colors">Log out</p>
              </div>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen">
        {/* Mobile Top Nav */}
        <header className="h-16 flex items-center justify-between px-4 sm:px-6 bg-white border-b border-gray-200 lg:hidden flex-shrink-0">
          <span className="text-xl font-bold font-heading text-navy">
            Earnfluence<span className="text-teal">.io</span>
          </span>
          <button 
            className="p-2 -mr-2 text-gray-500 hover:text-navy transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </header>

        {/* Dynamic Content */}
        <main className="flex-1 overflow-y-auto w-full relative">
          {children}
        </main>
      </div>
    </div>
  )
}
