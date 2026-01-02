import React from 'react'
import Link from 'next/link'

interface HeaderProps {
  className?: string
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`bg-white border-b border-gray-200 ${className}`}>
      <nav className="container mx-auto px-8 py-4 max-w-[1600px]">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[#314158]">
            Portfolio
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="text-[#314158] hover:text-gray-600 transition-colors">
              Work
            </Link>
            <Link href="/about" className="text-[#314158] hover:text-gray-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-[#314158] hover:text-gray-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

