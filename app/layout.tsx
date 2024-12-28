import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import StarryBackground from './components/StarryBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Technotia',
  description: 'CS-IT Department presents Technotia - A Cosmic Inter-Collegiate Fest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        <StarryBackground />
        <main className="container mx-auto p-4 flex-grow relative z-10">
          {children}
        </main>
        <footer className="relative z-10 bg-purple-900 bg-opacity-50 text-white p-4 text-center">
          <p>&copy; 2025 Kamaladevi College of Arts and Commerce. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}

