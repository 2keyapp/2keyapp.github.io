'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Store, Users, ArrowRight, ArrowLeft } from 'lucide-react'

export default function SignUpPage() {
  const router = useRouter()
  const [role, setRole] = useState(null) // null | 'merchant' | 'influencer'
  
  const [formData, setFormData] = useState({
    name: '',
    handle: '',
    email: '',
    password: ''
  })
  
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    
    // Name validation
    if (!formData.name) {
      newErrors.name = role === 'merchant' ? "Company name is required" : "Full name is required"
    }

    // Handle validation (Influencers only)
    if (role === 'influencer' && !formData.handle) {
      newErrors.handle = "A primary social handle is required"
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      router.push(`/dashboard/${role}`)
    }
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full p-4 sm:p-6 lg:p-8 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
          <span className="text-xl sm:text-2xl font-bold font-heading text-navy tracking-tight">
            2Key<span className="text-teal">.app</span>
          </span>
        </Link>
      </div>
      <main className="min-h-screen bg-gray-50 flex items-center justify-center py-12 sm:py-20 font-body">
        
        {/* State 1: Choose Role */}
        {!role ? (
          <div className="w-full max-w-4xl px-4 mt-6">
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold font-heading text-navy mb-4">Join 2Key Network</h1>
              <p className="text-gray-500 text-base sm:text-lg">Choose how you want to use the platform.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div 
                onClick={() => { setRole('influencer'); setErrors({}) }}
                className="bg-white rounded-[24px] border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all group flex flex-col justify-between h-full cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:scale-110 transition-transform">
                    <Users className="w-32 h-32 text-navy" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-teal" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-navy mb-3">I'm an Influencer</h3>
                  <p className="text-gray-500 leading-relaxed mb-8">Join campaigns, share your unique links, and earn automated recurring commissions directly to your bank account.</p>
                </div>
                <span className="relative z-10 inline-flex items-center text-sm font-bold text-teal">
                  Create Influencer Account <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>

              <div 
                onClick={() => { setRole('merchant'); setErrors({}) }}
                className="bg-white rounded-[24px] border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all group flex flex-col justify-between h-full cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:scale-110 transition-transform">
                    <Store className="w-32 h-32 text-navy" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-navy/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Store className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-navy mb-3">I'm a Merchant</h3>
                  <p className="text-gray-500 leading-relaxed mb-8">Run affiliate programs on top of Stripe. Create campaigns, set deterministic commission rules, and let us handle the payouts automatically.</p>
                </div>
                <span className="relative z-10 inline-flex items-center text-sm font-bold text-navy">
                  Create Merchant Account <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>

            <p className="text-center text-sm font-medium text-gray-500 mt-10">
              Already have an account? <Link href="/login" className="text-teal font-bold hover:underline">Log in</Link>
            </p>
          </div>
        ) : (
          /* State 2: Registration Form - Premium Layout */
          <div className="w-full max-w-5xl px-4 mt-6">
            <button 
              onClick={() => { setRole(null); setErrors({}); setFormData({name:'', handle:'', email:'', password:''}); }} 
              className="flex items-center text-sm font-bold text-gray-500 hover:text-navy transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Role Selection
            </button>
            
            <div className="bg-white rounded-[24px] border border-gray-100/50 shadow-[0_8px_40px_rgb(0,0,0,0.06)] overflow-hidden flex flex-col md:flex-row">
              {/* Left Column: Form */}
              <div className="flex-1 p-6 sm:p-12 lg:p-16">
                <div className="flex items-center mb-8">
                   {role === 'merchant' ? (
                     <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center mr-5">
                       <Store className="w-6 h-6 text-navy" />
                     </div>
                   ) : (
                     <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mr-5">
                       <Users className="w-6 h-6 text-teal" />
                     </div>
                   )}
                   <div>
                     <h1 className="text-2xl font-bold font-heading text-navy tracking-tight">
                       {role === 'merchant' ? 'Create Merchant Account' : 'Create Influencer Account'}
                     </h1>
                     <p className="text-gray-400 text-[13px] mt-1 font-medium">Join the 2Key Network today.</p>
                   </div>
                </div>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-[13px] font-bold text-navy mb-2 tracking-wide uppercase">
                      {role === 'merchant' ? 'Company Name' : 'Full Name'}
                    </label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className={`w-full px-4 py-3.5 rounded-xl border focus:ring-2 focus:ring-teal/50 focus:border-teal outline-none transition-all text-sm text-navy font-medium ${errors.name ? 'border-red-500 bg-red-50/20' : 'border-gray-200 bg-gray-50/50'}`}
                      placeholder={role === 'merchant' ? 'TechNova Inc.' : 'Alex Developer'}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1.5 font-semibold">{errors.name}</p>}
                  </div>
                  {role === 'influencer' && (
                    <div>
                      <label className="block text-[13px] font-bold text-navy mb-2 tracking-wide uppercase">Primary Social Handle / Website</label>
                      <input 
                        type="text" 
                        value={formData.handle}
                        onChange={(e) => setFormData({...formData, handle: e.target.value})}
                        className={`w-full px-4 py-3.5 rounded-xl border focus:ring-2 focus:ring-teal/50 focus:border-teal outline-none transition-all text-sm text-navy font-medium ${errors.handle ? 'border-red-500 bg-red-50/20' : 'border-gray-200 bg-gray-50/50'}`}
                        placeholder="@handle or domain.com"
                      />
                      {errors.handle && <p className="text-red-500 text-xs mt-1.5 font-semibold">{errors.handle}</p>}
                    </div>
                  )}
                  <div>
                    <label className="block text-[13px] font-bold text-navy mb-2 tracking-wide uppercase">Work Email Address</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`w-full px-4 py-3.5 rounded-xl border focus:ring-2 focus:ring-teal/50 focus:border-teal outline-none transition-all text-sm text-navy font-medium ${errors.email ? 'border-red-500 bg-red-50/20' : 'border-gray-200 bg-gray-50/50'}`}
                      placeholder="name@company.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1.5 font-semibold">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-navy mb-2 tracking-wide uppercase">Password</label>
                    <input 
                      type="password" 
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className={`w-full px-4 py-3.5 rounded-xl border focus:ring-2 focus:ring-teal/50 focus:border-teal outline-none transition-all text-sm text-navy font-medium ${errors.password ? 'border-red-500 bg-red-50/20' : 'border-gray-200 bg-gray-50/50'}`}
                      placeholder="••••••••"
                    />
                    {errors.password && <p className="text-red-500 text-xs mt-1.5 font-semibold">{errors.password}</p>}
                  </div>
                  
                  <div className="pt-4">
                    <button 
                      type="submit"
                      className="w-full bg-navy hover:bg-navy/90 text-white font-bold py-4 rounded-xl shadow-[0_8px_25px_rgb(10,25,47,0.25)] transition-all flex items-center justify-center text-sm"
                    >
                      Complete Registration <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Column: Branded Value Prop */}
              <div className="hidden lg:flex w-[40%] bg-navy flex-col justify-center p-12 text-white relative overflow-hidden">
                 {/* Decorative background elements */}
                 <div className="absolute -top-32 -right-32 w-80 h-80 bg-teal rounded-full blur-[120px] opacity-20"></div>
                 <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-500 rounded-full blur-[120px] opacity-20"></div>
                 
                 <div className="relative z-10 space-y-10">
                   <h2 className="text-3xl font-bold font-heading leading-snug">
                     {role === 'merchant' ? 'Automate your affiliate tracking with Stripe.' : 'Earn automatically without the manual hustle.'}
                   </h2>
                   
                   <ul className="space-y-8">
                     <li className="flex items-start">
                       <div className="mr-5 mt-1.5"><div className="w-2 h-2 rounded-full bg-teal shadow-[0_0_12px_rgba(0,240,181,1)]"></div></div>
                       <div>
                         <p className="font-bold text-sm mb-1.5 tracking-wide">{role === 'merchant' ? 'Deterministic Engine' : 'Automated Routing'}</p>
                         <p className="text-[13px] text-gray-400 leading-relaxed font-medium">
                           {role === 'merchant' ? 'Connects directly to your payment gateway for flawless programmatic tracking.' : 'Commissions are pushed straight to your bank account via Stripe Connect or PayPal.'}
                         </p>
                       </div>
                     </li>
                     <li className="flex items-start">
                       <div className="mr-5 mt-1.5"><div className="w-2 h-2 rounded-full bg-teal shadow-[0_0_12px_rgba(0,240,181,1)]"></div></div>
                       <div>
                         <p className="font-bold text-sm mb-1.5 tracking-wide">{role === 'merchant' ? 'Zero Manual Edits' : 'Trust Immutable Ledgers'}</p>
                         <p className="text-[13px] text-gray-400 leading-relaxed font-medium">
                           {role === 'merchant' ? 'Automated net-30 payouts ensure you never have to manually cut checks again.' : 'Our ledger prevents merchants from selectively declining your valid sales.'}
                         </p>
                       </div>
                     </li>
                   </ul>

                   <div className="pt-8 border-t border-white/10 mt-8 text-xs font-bold text-gray-500 uppercase tracking-widest">
                     Trusted by 1,000+ Brands
                   </div>
                 </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  )
}
