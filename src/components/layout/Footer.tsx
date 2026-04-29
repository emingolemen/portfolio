import React from 'react'

interface FooterProps {
  className?: string
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer
      className={`border-t transition-colors duration-300 ${className}`}
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="mx-auto px-8 py-6 max-w-[1600px] flex items-center justify-between">
        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          © {new Date().getFullYear()} Emin Gölemen
        </span>
        <div className="flex items-center gap-5">
          <a
            href="mailto:emingolemen@gmail.com"
            className="text-sm transition-opacity hover:opacity-60"
            style={{ color: 'var(--text-secondary)' }}
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/emingolemen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-opacity hover:opacity-60"
            style={{ color: 'var(--text-secondary)' }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
