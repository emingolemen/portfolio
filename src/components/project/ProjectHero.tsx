import React from 'react'

interface ProjectHeroProps {
  title: string
  tagline: string
  category?: string
  year?: string
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({
  title,
  tagline,
  category,
  year,
}) => {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40">
      <div className="w-full">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            {title}
          </h1>
        </div>
      </div>
    </section>
  )
}

