'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Tag } from './Tag'

export interface ProjectSection {
  title: string
  content: string
  visualElement?: React.ReactNode
}

interface ProjectSectionsProps {
  title?: string
  sections: ProjectSection[]
  tagline?: string
  category?: string
  year?: string
  logo?: string
  role?: string
  dateRange?: string
  tags?: string[]
}

export const ProjectSections: React.FC<ProjectSectionsProps> = ({ 
  title,
  sections,
  tagline,
  category,
  year,
  logo,
  role,
  dateRange,
  tags,
}) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])
  const intersectionRatiosRef = useRef<Map<number, number>>(new Map())
  const observersRef = useRef<Map<number, IntersectionObserver>>(new Map())

  // Generic portfolio headings - exactly 5
  const portfolioHeadings = [
    'Overview',
    'Research & Discovery',
    'Design Process',
    'Implementation',
    'Results & Impact',
  ]

  // Ensure we always have exactly 5 accordions and 5 images
  const NUM_SECTIONS = 5
  const displaySections = Array.from({ length: NUM_SECTIONS }, (_, index) => {
    return sections[index] || {
      title: portfolioHeadings[index],
      content: 'Content for this section will be added here.',
    }
  })

  const updateMostVisible = React.useCallback(() => {
    // Find the image with the highest intersection ratio
    let maxRatio = 0
    let maxIndex = -1
    
    intersectionRatiosRef.current.forEach((ratio, idx) => {
      if (ratio > maxRatio && ratio > 0.2) {
        maxRatio = ratio
        maxIndex = idx
      }
    })
    
    // Open the accordion for the most visible image
    if (maxIndex !== -1) {
      setOpenAccordion(maxIndex)
    }
  }, [])

  // Setup observer when ref is set
  const setImageRef = React.useCallback((index: number) => (el: HTMLDivElement | null) => {
    // Clean up old observer for this index
    const oldObserver = observersRef.current.get(index)
    if (oldObserver) {
      oldObserver.disconnect()
      observersRef.current.delete(index)
    }

    imageRefs.current[index] = el

    if (el) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Track intersection ratio for each image
            if (entry.isIntersecting) {
              intersectionRatiosRef.current.set(index, entry.intersectionRatio)
            } else {
              intersectionRatiosRef.current.delete(index)
            }
            
            // Update which accordion should be open
            updateMostVisible()
          })
        },
        {
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
          rootMargin: '-15% 0px -15% 0px',
        }
      )

      observer.observe(el)
      observersRef.current.set(index, observer)
    }
  }, [updateMostVisible])

  useEffect(() => {
    return () => {
      // Cleanup all observers on unmount
      observersRef.current.forEach((observer) => observer.disconnect())
      observersRef.current.clear()
      intersectionRatiosRef.current.clear()
    }
  }, [])

  const toggleAccordion = (index: number) => {
    const imageElement = imageRefs.current[index]
    
    if (openAccordion === index) {
      // If clicking the same accordion, close it
      setOpenAccordion(null)
    } else {
      // Open the clicked accordion and close others
      setOpenAccordion(index)
      
      // Scroll to the corresponding image
      if (imageElement) {
        imageElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }
    }
  }

  return (
    <div className="mx-auto px-8 flex flex-col md:flex-row gap-8 py-0 max-w-[1600px]">
        {/* Sticky text container - 100vh encompassing all text */}
        <div className="w-full md:w-[320px] flex-shrink-0 flex flex-col justify-start items-start">
          <div className="md:sticky md:top-0 md:h-screen flex flex-col justify-start items-start py-12 md:py-0">
            <div className="space-y-4 text-[8px] py-8 flex flex-col">
              {logo && (
                <div className="project-logo-wrapper mb-0 w-fit">
                  <Image
                    src={logo}
                    alt={`${title || tagline || 'Project'} logo`}
                    width={64}
                    height={64}
                    className="rounded-lg"
                    unoptimized
                  />
                </div>
              )}
              <div className="project-title-wrapper flex flex-col gap-1 mt-0 h-fit">
                {title && (
                  <h1 className="text-2xl font-bold text-[#314158] max-w-[300px] h-[28px] leading-[28px]">
                    {title}
                  </h1>
                )}
                {tagline && (
                  <p className="text-[20px] leading-[24px] font-medium text-mid max-w-[300px] font-sans" style={{ color: 'rgba(98, 116, 142, 1)', fontFamily: '__Figtree_2ca027' }}>
                    {tagline}
                  </p>
                )}
              </div>
              {(role && dateRange) && (
                <div className="project-role-wrapper text-xs !text-mid tracking-[0.01em] leading-4 mb-4 mt-2 font-sans" style={{ color: 'rgba(98, 116, 142, 1)' }}>
                  {role} • {dateRange}
                </div>
              )}
              {(!role || !dateRange) && category && year && (
                <div className="project-category-wrapper text-xs !text-mid tracking-[0.01em] leading-4 mb-4 font-sans" style={{ color: 'rgba(98, 116, 142, 1)' }}>
                  {category} • {year}
                </div>
              )}
              {tags && tags.length > 0 && (
                <div className="project-tags-wrapper flex flex-wrap gap-2 mb-4 mt-2">
                  {tags.map((tag, index) => (
                    <Tag key={index}>
                      {tag}
                    </Tag>
                  ))}
                </div>
              )}
              {displaySections.map((section, index) => {
                const isOpen = openAccordion === index
                const heading = portfolioHeadings[index] || section.title
                
                return (
                  <div key={index} className="project-section-item flex flex-col gap-1 pt-4 pb-0 last:pb-0 !mt-0">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full text-left p-0 group opacity-100"
                      aria-expanded={isOpen}
                    >
                      <h2 className="text-base font-semibold leading-[20px] text-[#314158] group-hover:text-gray-600 transition-colors opacity-100 font-sans mt-0">
                        {heading}
                      </h2>
                    </button>
                    <div
                      className={`overflow-hidden ${
                        isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="p-0">
                        <div className="prose prose-lg">
                          <p className="text-base md:text-lg leading-relaxed font-sans" style={{ fontSize: '16px', lineHeight: '20px', color: 'rgba(98, 116, 142, 1)' }}>
                            {section.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        
        {/* Images section - exactly 5 images */}
        <div className="flex-1 flex flex-col gap-8 py-8">
          {displaySections.map((section, index) => {
            const visualElement = section.visualElement || (
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Image {index + 1}</span>
              </div>
            )
            
            return (
              <div
                key={index}
                ref={setImageRef(index)}
                className="flex flex-col gap-8"
              >
                <div className="w-full">
                  {visualElement}
                </div>
              </div>
            )
          })}
        </div>
      </div>
  )
}

