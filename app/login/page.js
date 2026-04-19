'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address"
    }
    
    if (!password) {
      newErrors.password = "Password is required"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      // In a real app we would check credentials here, for demo we route straight to merchant
      router.push('/dashboard/merchant')
    }
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full p-6 sm:p-8 z-50">
        <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
          <span className="text-2xl font-bold font-heading text-navy tracking-tight">
            2Key<span className="text-teal">.app</span>
          </span>
        </Link>
      </div>
      <main className="min-h-screen bg-gray-50 flex items-center justify-center py-20 font-body">
        <div className="w-full max-w-md px-4">
          <div className="bg-white rounded-[24px] border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 sm:p-10">
            <h1 className="text-3xl font-bold font-heading text-navy text-center mb-2">Welcome Back</h1>
            <p className="text-gray-500 text-center text-sm mb-8">Enter your credentials to access your dashboard.</p>
            
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-teal/50 focus:border-teal outline-none transition-all text-sm text-navy ${errors.email ? 'border-red-500 bg-red-50/20' : 'border-gray-200'}`}
                  placeholder="name@company.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1.5 font-semibold">{errors.email}</p>}
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-bold text-gray-700">Password</label>
                  <a href="#" className="text-xs font-bold text-teal hover:underline">Forgot?</a>
                </div>
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-teal/50 focus:border-teal outline-none transition-all text-sm text-navy ${errors.password ? 'border-red-500 bg-red-50/20' : 'border-gray-200'}`}
                  placeholder="••••••••"
                />
                {errors.password && <p className="text-red-500 text-xs mt-1.5 font-semibold">{errors.password}</p>}
              </div>
              <button type="submit" className="w-full bg-navy hover:bg-navy/90 text-white font-bold py-3.5 rounded-xl shadow-[0_8px_20px_rgb(10,25,47,0.2)] transition-all flex items-center justify-center text-sm mt-8">
                Log In <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </form>

            <p className="text-center text-sm font-medium text-gray-500 mt-8">
              Don't have an account? <Link href="/signup" className="text-teal font-bold hover:underline">Sign up</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
