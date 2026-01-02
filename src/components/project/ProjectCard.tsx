import React from 'react'
import { ProjectSections, ProjectSection } from './ProjectSections'

export interface ProjectData {
  title: string
  tagline: string
  category?: string
  year?: string
  logo?: string
  role?: string
  dateRange?: string
  tags?: string[]
  sections: ProjectSection[]
}

interface ProjectCardProps {
  project: ProjectData
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="w-full border-b border-gray-200 last:border-b-0">
      <ProjectSections 
        title={project.title}
        sections={project.sections}
        tagline={project.tagline}
        category={project.category}
        year={project.year}
        logo={project.logo}
        role={project.role}
        dateRange={project.dateRange}
        tags={project.tags}
      />
    </div>
  )
}

