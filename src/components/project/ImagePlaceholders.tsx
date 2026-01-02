import React from 'react'

interface ImagePlaceholdersProps {
  count?: number
  className?: string
}

export const ImagePlaceholders: React.FC<ImagePlaceholdersProps> = ({
  count = 5,
  className = '',
}) => {
  return (
    <div className={`flex flex-col gap-8 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center"
        >
          <span className="text-gray-400 text-sm">Image {index + 1}</span>
        </div>
      ))}
    </div>
  )
}

interface SingleImagePlaceholderProps {
  index: number
  className?: string
}

export const SingleImagePlaceholder: React.FC<SingleImagePlaceholderProps> = ({
  index,
  className = '',
}) => {
  return (
    <div className={`aspect-video bg-gray-200 rounded-lg flex items-center justify-center ${className}`}>
      <span className="text-gray-400 text-sm">Image {index}</span>
    </div>
  )
}

