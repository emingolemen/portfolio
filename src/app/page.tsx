import { Hero } from '@/components/Hero'
import { ProjectCard, ProjectData } from '@/components/project/ProjectCard'

const projects: ProjectData[] = [
  {
    title: 'Reiterate',
    tagline: 'AI-powered automation for payment and finance operations',
    logo: '/project-assets/reiterate/projectlogo.svg',
    role: 'Senior Product Designer',
    dateRange: 'April 2025 – Present',
    tags: ['B2B', 'SaaS', 'Startup', 'Finance', 'Web'],
    sections: [
      {
        title: 'Overview',
        content:
          'Designing AI-powered solutions that automate routine processes for payment and finance teams. The product focuses on highly customizable, AI-driven workflows built for enterprise needs — reducing manual work in reconciliation, exception handling, and approval chains.',
      },
      {
        title: 'Research & Discovery',
        content:
          'Mapping the day-to-day realities of payment and finance teams — where human time goes versus where it should. Identifying the bottlenecks that haven\'t changed in decades despite everything else moving to software.',
      },
      {
        title: 'Design Process',
        content:
          'Designing from first principles for a product still finding its shape. The challenge is making powerful AI-driven configuration feel approachable — building modular, flexible interfaces that don\'t overwhelm users with complexity.',
      },
      {
        title: 'Implementation',
        content:
          'Working closely with engineering in a fast-moving startup environment where every decision shapes the product foundation. Shipping iteratively, validating assumptions with real users, and building toward a coherent design system.',
      },
      {
        title: 'Results & Impact',
        content:
          'The product is actively in development. Early user feedback has shaped core interaction patterns, and the team is building toward a scalable, enterprise-ready experience.',
      },
    ],
  },
  {
    title: 'Yolo Group',
    tagline: 'A global technology company innovating across iGaming, FinTech, and Blockchain',
    logo: '/project-assets/yolo-group/projectlogo.svg',
    role: 'Product Designer',
    dateRange: 'July 2023 – April 2025',
    tags: ['B2B', 'SaaS', 'iGaming', 'Web', 'Mobile'],
    sections: [
      {
        title: 'Overview',
        content:
          'Served as sole product designer for Hub88, a leading iGaming integration platform used by game providers and operators worldwide. Responsible for the full design of the platform — from new features to improving existing workflows for power users.',
      },
      {
        title: 'Research & Discovery',
        content:
          'Rapid business growth had created an operational bottleneck — support teams were handling requests that operators and suppliers could resolve themselves with the right tools. Self-serve capability was the key opportunity.',
      },
      {
        title: 'Design Process',
        content:
          'Designed HubConnect — a self-serve platform with distinct zones for suppliers and operators to manage their daily operations independently. Prioritized information density and clarity for B2B users who live in the product.',
      },
      {
        title: 'Implementation',
        content:
          'Built data-heavy B2B interfaces: dashboards, reporting tools, configuration panels, and onboarding flows. Balanced high information density with usability for both technical and non-technical users.',
      },
      {
        title: 'Results & Impact',
        content:
          'HubConnect reduced operational burden on support teams by enabling operators and suppliers to self-manage daily tasks — improving time-to-value for new integrations and freeing the team to focus on growth.',
      },
    ],
  },
  {
    title: 'n11.com',
    tagline: 'One of the leading shopping platforms in Turkey',
    logo: '/project-assets/n11/projectlogo.svg',
    role: 'UI Designer',
    dateRange: 'July 2022 – July 2023',
    tags: ['B2C', 'eCommerce', 'Web', 'Mobile'],
    sections: [
      {
        title: 'Overview',
        content:
          'Worked on one of Turkey\'s largest eCommerce platforms, collaborating across UX, product, and engineering on mobile and desktop experiences for millions of users.',
      },
      {
        title: 'Research & Discovery',
        content:
          'Identified low conversion among value-conscious shoppers on the product detail page. Users were missing relevant coupons and struggling to compare options efficiently — friction at the exact moment of decision.',
      },
      {
        title: 'Design Process',
        content:
          'Ran A/B tests to improve the product detail page: horizontally-scrollable product tags for easier filtering, and a redesigned coupon module that surfaced savings more prominently at the right moment in the purchase flow.',
      },
      {
        title: 'Implementation',
        content:
          'Led the team\'s transition from Sketch to Figma and drove the design system revamp, unifying the visual language across iOS, Android, and web. The new system helped the team ship faster and more consistently.',
      },
      {
        title: 'Results & Impact',
        content:
          'A/B tests showed improved engagement and conversion on the product detail page. The Figma migration and design system overhaul increased team efficiency and improved quality across all platforms.',
      },
    ],
  },
  {
    title: 'ForInvest',
    tagline: 'Providing cutting-edge investment solutions for industry needs',
    logo: '/project-assets/forinvest/projectlogo.svg',
    role: 'Product Designer',
    dateRange: 'January 2022 – June 2022',
    tags: ['B2C', 'FinTech', 'Investment', 'Web', 'Mobile'],
    sections: [
      {
        title: 'Overview',
        content:
          'Led product design for multiple financial investment products — including new builds and white-labeled solutions — serving a range of clients in the financial services sector.',
      },
      {
        title: 'Research & Discovery',
        content:
          'Worked across very different user segments: retail investors learning the market and professional traders managing complex positions. Each required a distinct design approach and a different mental model to design for.',
      },
      {
        title: 'Design Process',
        content:
          'Designed ZBorsa, a redesign of Ziraat Bankası\'s stock trading app — balancing the brand\'s signature red with financial market conventions. Also designed MetalsLive, a customizable commodity terminal for the London Metals Exchange, built for manufacturing executives using multi-monitor setups.',
      },
      {
        title: 'Implementation',
        content:
          'Created UI designs, interactive prototypes, and design guidelines. Maintained shared design systems across multiple concurrent products, ensuring consistent components and patterns.',
      },
      {
        title: 'Results & Impact',
        content:
          'Delivered multiple products with distinct visual identities suited to their audiences — from a retail-friendly stock trading app to a professional-grade terminal used by commodity market specialists.',
      },
    ],
  },
  {
    title: 'Tendon',
    tagline: 'Companion app for personal trainers and their clients',
    logo: '/project-assets/tendon/projectlogo.svg',
    role: 'Product Designer',
    dateRange: 'September 2020 – August 2021',
    tags: ['B2C', 'Fitness', 'Health', 'Web', 'Mobile'],
    sections: [
      {
        title: 'Overview',
        content:
          'Led product design for a London-based health and fitness startup, creating the B2B and B2C platforms that connect personal trainers with their clients.',
      },
      {
        title: 'Research & Discovery',
        content:
          'Interviewed trainers and clients to understand how they manage programs, nutrition, and communication — typically spread across multiple disconnected apps. The need was clear: an integrated, trainers-first platform.',
      },
      {
        title: 'Design Process',
        content:
          'Designed a companion platform enabling trainers to create workout programs, meal plans, and client communities. Supported one-time purchases and subscriptions to allow trainers to build both active and passive revenue streams.',
      },
      {
        title: 'Implementation',
        content:
          'Created wireframes, interfaces, and interactive prototypes for mobile and web. Wrote and edited UX copy and marketing materials, ensuring the product communicated clearly across every touchpoint.',
      },
      {
        title: 'Results & Impact',
        content:
          'Delivered a cohesive platform allowing trainers to manage their full client relationship in one place — from onboarding through recurring programs — reducing the operational overhead of running a personal training practice.',
      },
    ],
  },
]

export default function Home() {
  return (
    <main>
      <Hero />
      <div
        className="w-full border-t transition-colors duration-300"
        style={{ borderColor: 'var(--border)' }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </main>
  )
}
