'use client'

import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white flex items-center justify-center py-20">
        <div className="w-full max-w-md px-4">
          {/* Add your login form here */}
        </div>
      </main>
      <Footer />
    </>
  )
}
