export default function About() {
  return (
    <main className="mx-auto px-8 max-w-[1600px] py-20 md:py-28">
      <div className="max-w-[640px]">

        {/* Heading */}
        <h1
          className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-10"
          style={{ color: 'var(--text-primary)' }}
        >
          About
        </h1>

        {/* Bio */}
        <div className="flex flex-col gap-5 mb-14">
          <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-primary)' }}>
            I&apos;m a product designer based in Tallinn, Estonia, with five years of experience designing digital products across fintech, iGaming, eCommerce, and health tech. I care about clean interfaces that communicate efficiently — design that gets out of the user&apos;s way.
          </p>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Currently working as Senior Product Designer at Reiterate, where I&apos;m building AI-powered workflows for payment and finance teams. When I&apos;m not drawing rectangles, I&apos;m usually in the kitchen — cooking, baking, brewing, or fermenting something.
          </p>
        </div>

        {/* Skills & Tools */}
        <div className="flex flex-col gap-8 mb-14">
          <div>
            <h2
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              Tools
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-primary)' }}>
              Figma, Sketch, Framer, Adobe Illustrator, Photoshop, Notion, Atlassian Suite
            </p>
          </div>

          <div>
            <h2
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              Skills
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-primary)' }}>
              Design Systems, Wireframing, Prototyping, User Research, Branding, Basic HTML/CSS/JS
            </p>
          </div>

          <div>
            <h2
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              Languages
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-primary)' }}>
              Turkish <span style={{ color: 'var(--text-secondary)' }}>— native</span> &nbsp;·&nbsp; English <span style={{ color: 'var(--text-secondary)' }}>— professional</span> &nbsp;·&nbsp; German <span style={{ color: 'var(--text-secondary)' }}>— elementary</span>
            </p>
          </div>
        </div>

        {/* Education */}
        <div>
          <h2
            className="text-xs font-semibold tracking-widest uppercase mb-6"
            style={{ color: 'var(--text-secondary)' }}
          >
            Education
          </h2>
          <div className="flex flex-col gap-5">
            {[
              {
                degree: 'MA, Media and Visual Studies',
                school: 'Bilkent University',
                years: '2015–2017',
              },
              {
                degree: 'BA, Media and Visual Arts',
                school: 'Koç University',
                years: '2011–2015',
              },
              {
                degree: 'BA, Comparative Literature',
                school: 'Koç University',
                years: '2011–2015',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start justify-between gap-4 py-4 border-t"
                style={{ borderColor: 'var(--border)' }}
              >
                <div>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    {item.degree}
                  </p>
                  <p className="text-sm mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                    {item.school}
                  </p>
                </div>
                <span className="text-sm flex-shrink-0" style={{ color: 'var(--text-secondary)' }}>
                  {item.years}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
