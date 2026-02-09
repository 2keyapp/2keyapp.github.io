import './globals.css'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: '2key.app - The billing layer for influencers',
  description: 'One checkout. Many merchants. Built for influencers. The billing layer that keeps you the Merchant of Record while influencers get paid automatically.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${inter.variable} font-body`}>{children}</body>
    </html>
  )
}


