"use client"
import { useState } from 'react'
import Link from 'next/link'
import { Search, Filter, Store, Star, ArrowRight, Zap, ChevronRight, SearchX } from 'lucide-react'

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('')

  const merchants = [
    {
      id: "m_1",
      name: "TechNova Pro",
      niche: "Electronics",
      commission: "15% per sale",
      tier: "Instant Join",
      description: "Premium mechanical keyboards and office accessories for professionals.",
      cookie: "30 days"
    },
    {
      id: "m_2",
      name: "FitnessCore",
      niche: "Health & Fitness",
      commission: "20% per sale",
      tier: "Apply Required",
      description: "High quality fitness supplements and workout gear.",
      cookie: "60 days"
    },
    {
      id: "m_3",
      name: "SaaS Analytics",
      niche: "Software",
      commission: "10% Recurring",
      tier: "Instant Join",
      description: "Powerful analytics tools for modern businesses.",
      cookie: "90 days"
    },
    {
      id: "m_4",
      name: "AeroTravel",
      niche: "Travel",
      commission: "$50 flat rate",
      tier: "Apply Required",
      description: "Flight and hotel booking aggregator.",
      cookie: "7 days"
    },
    {
      id: "m_5",
      name: "GourmetBox",
      niche: "Food & Beverage",
      commission: "12% per sale",
      tier: "Instant Join",
      description: "Monthly subscription boxes for exotic snacks.",
      cookie: "30 days"
    },
    {
      id: "m_6",
      name: "EcoHome",
      niche: "Home Goods",
      commission: "18% per sale",
      tier: "Apply Required",
      description: "Sustainable and eco-friendly home cleaning products.",
      cookie: "45 days"
    }
  ]

  // Filter logic: Tokenize search and match word beginnings for higher accuracy
  const filteredMerchants = merchants.filter(merchant => {
    const terms = searchQuery.toLowerCase().trim().split(/\s+/).filter(Boolean)
    if (terms.length === 0) return true
    
    const searchableText = `${merchant.name} ${merchant.niche} ${merchant.description}`.toLowerCase()
    
    // Every term must be the start of SOME word in the searchable text
    return terms.every(term => {
      // Escape special characters to safely use in regex
      const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      const regex = new RegExp(`\\b${escapedTerm}`, 'i')
      return regex.test(searchableText)
    })
  })

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-body">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold font-heading text-navy">
              2Key<span className="text-teal">.app</span>
            </span>
            <div className="hidden ml-10 flex space-x-8">
              <span className="text-navy border-b-2 border-navy px-1 py-5 text-sm font-bold">Marketplace</span>
              <Link href="/dashboard/influencer" className="border-transparent text-gray-500 hover:text-navy hover:border-gray-300 px-1 py-5 border-b-2 text-sm font-medium transition">My Dashboard</Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-bold font-heading text-navy tracking-tight">Marketplace</h1>
            <p className="mt-2 text-gray-500 text-sm">Find new campaigns and start earning today.</p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              <input 
                type="text" 
                placeholder="Search campaigns, niches..." 
                className="w-full pl-11 pr-4 py-3 border border-gray-200/80 rounded-full focus:ring-2 focus:ring-gray-200 focus:border-gray-300 outline-none text-sm transition bg-white shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {filteredMerchants.length === 0 ? (
          <div className="bg-white rounded-[24px] border border-gray-100/50 shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-16 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <SearchX className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-xl font-bold font-heading text-navy mb-2">No campaigns found</h3>
            <p className="text-gray-500">We couldn't find any merchants matching "{searchQuery}". Try a different keyword or niche.</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-6 px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-navy font-semibold rounded-full transition-colors text-sm"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMerchants.map(merchant => (
              <div key={merchant.id} className="bg-white rounded-[24px] border border-gray-100/50 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col p-8 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center border border-teal/20 flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Store className="w-5 h-5 text-teal" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold font-heading text-navy">{merchant.name}</h3>
                      <p className="text-[13px] text-gray-400 font-medium">{merchant.niche}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-500 text-[14px] leading-relaxed mb-8 h-10 line-clamp-2">
                  {merchant.description}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-medium text-gray-400">Commission</span>
                    <span className="font-extrabold text-teal bg-teal/5 px-2.5 py-1 rounded-full text-sm">{merchant.commission}</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                    <span className="text-[13px] font-medium text-gray-400">Cookie Window</span>
                    <span className="font-semibold text-navy text-sm">{merchant.cookie}</span>
                  </div>
                </div>
                
                <div className="mt-auto flex items-center justify-between pt-2">
                  {merchant.tier === "Instant Join" ? (
                    <span className="flex items-center text-[12px] font-bold text-gray-500 uppercase tracking-widest">
                      <Zap className="w-3.5 h-3.5 mr-1.5 text-teal" /> Instant Join
                    </span>
                  ) : (
                    <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Apply Required</span>
                  )}
                  
                  <Link 
                    href={`/campaigns/${merchant.id}`}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-navy group-hover:bg-navy group-hover:text-white transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
