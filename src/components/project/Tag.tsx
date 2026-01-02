'use client'

import React from 'react'

interface TagProps {
  children: React.ReactNode
}

export const Tag: React.FC<TagProps> = ({ children }) => {
  return (
    <div
      className="px-2 py-0.5 text-xs md:text-sm bg-bg-light rounded-full border border-border-light font-sans"
      style={{ color: 'rgba(98, 116, 142, 1)', backgroundColor: '#F8FAFC' }}
    >
      {children}
    </div>
  )
}

