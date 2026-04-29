import React from 'react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'

interface HeaderProps {
  className?: string
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${className}`}
      style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
    >
      <nav className="mx-auto px-8 py-4 max-w-[1600px]">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-base font-semibold tracking-tight transition-opacity hover:opacity-70"
            style={{ color: 'var(--text-primary)' }}
          >
            Emin Gölemen
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm transition-opacity hover:opacity-60"
              style={{ color: 'var(--text-secondary)' }}
            >
              Work
            </Link>
            <Link
              href="/shots"
              className="text-sm transition-opacity hover:opacity-60"
              style={{ color: 'var(--text-secondary)' }}
            >
              Shots
            </Link>
            <Link
              href="/about"
              className="text-sm transition-opacity hover:opacity-60"
              style={{ color: 'var(--text-secondary)' }}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm transition-opacity hover:opacity-60"
              style={{ color: 'var(--text-secondary)' }}
            >
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}
