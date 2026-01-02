import React from 'react'

interface FooterProps {
  className?: string
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`bg-gray-50 border-t border-gray-200 flex justify-center items-end ${className}`}>
      <div className="container mx-auto px-8 py-4 max-w-[1600px] flex justify-end items-end w-full gap-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-[#314158] transition-colors text-sm"
        >
          GitHub
        </a>
        <div className="flex gap-4 mt-4 md:mt-0 items-end">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#314158] transition-colors text-sm"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

