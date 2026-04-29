'use client'

import React from 'react'

interface TagProps {
  children: React.ReactNode
}

export const Tag: React.FC<TagProps> = ({ children }) => {
  return (
    <span
      className="inline-block px-2.5 py-0.5 text-xs rounded-full border transition-colors duration-300"
      style={{
        color: 'var(--text-secondary)',
        backgroundColor: 'var(--bg-surface)',
        borderColor: 'var(--border)',
      }}
    >
      {children}
    </span>
  )
}
