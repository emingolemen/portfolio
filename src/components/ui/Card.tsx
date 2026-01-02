import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
}) => {
  const hoverStyles = hover ? 'transition-transform hover:scale-[1.02] cursor-pointer' : ''
  
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  )
}

