'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Store, Users, Megaphone, Wallet, ArrowLeftRight, Settings, Compass } from 'lucide-react'

export default function DashboardLayout({ children }) {
  const pathname = usePathname()
  const isMerchant = pathname?.includes('/dashboard/merchant')
  const isInfluencer = pathname?.includes('/dashboard/influencer')
  
  // Logical rules to enforce strict separation in the UI mockups
  const showMerchant = isMerchant || (!isMerchant && !isInfluencer)
  const showInfluencer = isInfluencer && !isMerchant

  return (
    <div className="flex h-screen bg-gray-100 text-navy font-body">
      {/* Sidebar */}
      <aside className="w-64 bg-navy flex-shrink-0 shadow-[4px_0_24px_rgb(0,0,0,0.05)] z-10 relative">
        <div className="h-full flex flex-col">
          <div className="h-16 flex items-center px-6">
            <span className="text-xl font-bold font-heading text-white">
              2Key<span className="text-teal">.app</span>
            </span>
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

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto w-full relative">
        {children}
      </main>
    </div>
  )
}
