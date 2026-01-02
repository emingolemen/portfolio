import { ProjectCard, ProjectData } from '@/components/project/ProjectCard'
import { ProjectSection } from '@/components/project/ProjectSections'

// Project data migrated from Framer portfolio
const projects: ProjectData[] = [
  {
    title: 'Reiterate',
    tagline: 'AI-powered automation for payment and finance operations',
    logo: '/project-assets/reiterate/projectlogo.svg',
    role: 'Senior Product Designer',
    dateRange: 'April 2025 – Present',
    tags: ['B2B', 'SaaS', 'Startup', 'Finance', 'Web'],
    sections: [],
  },
  {
    title: 'Yolo Group',
    tagline: 'A global technology company innovating across iGaming, FinTech, and Blockchain',
    logo: '/project-assets/yolo-group/projectlogo.svg',
    role: 'Product Designer',
    dateRange: 'July 2023 – April 2025',
    tags: ['B2B', 'SaaS', 'iGaming', 'Web', 'Mobile'],
    sections: [],
  },
  {
    title: 'n11.com',
    tagline: 'One of the leading shopping platforms in Turkey',
    logo: '/project-assets/n11/projectlogo.svg',
    role: 'UI Designer',
    dateRange: 'July 2022 – July 2023',
    tags: ['B2C', 'eCommerce', 'Web', 'Mobile'],
    sections: [],
  },
  {
    title: 'ForInvest',
    tagline: 'Providing cutting-edge investment solutions that cater to industry\'s unique needs',
    logo: '/project-assets/forinvest/projectlogo.svg',
    role: 'Product Designer',
    dateRange: 'January 2022 – June 2022',
    tags: ['B2C', 'FinTech', 'Investment', 'Web', 'Mobile'],
    sections: [],
  },
  {
    title: 'Tendon',
    tagline: 'Companion app for personal trainers and their clients',
    logo: '/project-assets/tendon/projectlogo.svg',
    role: 'Product Designer',
    dateRange: 'September 2020 – August 2021',
    tags: ['B2C', 'Fitness', 'Health', 'Web', 'Mobile'],
    sections: [],
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </main>
  )
}

