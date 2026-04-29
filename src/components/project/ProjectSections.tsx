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

const HEADINGS = [
  'Overview',
  'Research & Discovery',
  'Design Process',
  'Implementation',
  'Results & Impact',
]

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

  const displaySections = Array.from({ length: 5 }, (_, i) => ({
    title: HEADINGS[i],
    content: sections[i]?.content || '',
    visualElement: sections[i]?.visualElement,
  }))

  const updateMostVisible = React.useCallback(() => {
    let maxRatio = 0
    let maxIndex = -1
    intersectionRatiosRef.current.forEach((ratio, idx) => {
      if (ratio > maxRatio && ratio > 0.2) {
        maxRatio = ratio
        maxIndex = idx
      }
    })
    if (maxIndex !== -1) setOpenAccordion(maxIndex)
  }, [])

  const setImageRef = React.useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      observersRef.current.get(index)?.disconnect()
      observersRef.current.delete(index)
      imageRefs.current[index] = el

      if (el) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                intersectionRatiosRef.current.set(index, entry.intersectionRatio)
              } else {
                intersectionRatiosRef.current.delete(index)
              }
              updateMostVisible()
            })
          },
          {
            threshold: Array.from({ length: 11 }, (_, i) => i / 10),
            rootMargin: '-15% 0px -15% 0px',
          }
        )
        observer.observe(el)
        observersRef.current.set(index, observer)
      }
    },
    [updateMostVisible]
  )

  useEffect(() => {
    return () => {
      observersRef.current.forEach((o) => o.disconnect())
      observersRef.current.clear()
      intersectionRatiosRef.current.clear()
    }
  }, [])

  const toggleAccordion = (index: number) => {
    if (openAccordion === index) {
      setOpenAccordion(null)
    } else {
      setOpenAccordion(index)
      imageRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <div
      className="mx-auto px-8 flex flex-col md:flex-row gap-8 py-0 max-w-[1600px]"
      style={{ borderColor: 'var(--border)' }}
    >
      {/* Sticky sidebar */}
      <div className="w-full md:w-[320px] flex-shrink-0">
        <div className="md:sticky md:top-0 md:h-screen flex flex-col justify-start py-10 md:py-0">
          <div className="flex flex-col gap-4 md:pt-10">
            {logo && (
              <div className="mb-1">
                <Image
                  src={logo}
                  alt={`${title || 'Project'} logo`}
                  width={56}
                  height={56}
                  className="rounded-lg"
                  unoptimized
                />
              </div>
            )}

            <div className="flex flex-col gap-1">
              {title && (
                <h2
                  className="text-2xl font-bold leading-tight"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {title}
                </h2>
              )}
              {tagline && (
                <p
                  className="text-base leading-snug"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {tagline}
                </p>
              )}
            </div>

            {(role || dateRange || category || year) && (
              <p className="text-xs tracking-wide" style={{ color: 'var(--text-secondary)' }}>
                {role && dateRange ? `${role} · ${dateRange}` : `${category} · ${year}`}
              </p>
            )}

            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </div>
            )}

            {/* Accordion */}
            <div className="flex flex-col mt-2">
              {displaySections.map((section, index) => {
                const isOpen = openAccordion === index
                return (
                  <div
                    key={index}
                    className="border-t py-3 last:border-b"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full text-left group"
                      aria-expanded={isOpen}
                    >
                      <span
                        className="text-sm font-semibold leading-snug transition-opacity group-hover:opacity-60"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {section.title}
                      </span>
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-300"
                      style={{ maxHeight: isOpen ? '600px' : '0', opacity: isOpen ? 1 : 0 }}
                    >
                      <p
                        className="text-sm leading-relaxed pt-2"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {section.content || 'Content coming soon.'}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Images */}
      <div className="flex-1 flex flex-col gap-8 py-10">
        {displaySections.map((section, index) => (
          <div key={index} ref={setImageRef(index)}>
            {section.visualElement ?? (
              <div
                className="aspect-video rounded-xl flex items-center justify-center transition-colors duration-300"
                style={{ backgroundColor: 'var(--bg-surface)' }}
              >
                <span className="text-sm" style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>
                  {section.title}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
