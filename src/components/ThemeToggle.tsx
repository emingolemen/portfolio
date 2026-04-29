'use client'

import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-[var(--bg-surface)]"
    >
      {isDark ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="8" y1="1" x2="8" y2="2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="8" y1="13.5" x2="8" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="1" y1="8" x2="2.5" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="13.5" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="2.929" y1="2.929" x2="3.989" y2="3.989" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="12.011" y1="12.011" x2="13.071" y2="13.071" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="13.071" y1="2.929" x2="12.011" y2="3.989" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="3.989" y1="12.011" x2="2.929" y2="13.071" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 8.5C13.5 11.538 11.038 14 8 14C4.962 14 2.5 11.538 2.5 8.5C2.5 5.462 4.962 3 8 3C8.135 3 8.269 3.005 8.401 3.014C7.52 3.733 7 4.802 7 6C7 8.209 8.791 10 11 10C11.885 10 12.702 9.709 13.356 9.215C13.449 8.985 13.5 8.748 13.5 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  )
}
