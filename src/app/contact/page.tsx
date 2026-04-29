export default function Contact() {
  const links = [
    {
      label: 'Email',
      value: 'emingolemen@gmail.com',
      href: 'mailto:emingolemen@gmail.com',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/emingolemen',
      href: 'https://linkedin.com/in/emingolemen',
    },
  ]

  return (
    <main className="mx-auto px-8 max-w-[1600px] py-20 md:py-28">
      <div className="max-w-[480px]">

        <h1
          className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          Let&apos;s talk.
        </h1>
        <p
          className="text-base md:text-lg leading-relaxed mb-12"
          style={{ color: 'var(--text-secondary)' }}
        >
          Open to new opportunities and interesting conversations.
        </p>

        <div className="flex flex-col">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center justify-between py-5 border-t last:border-b group transition-opacity hover:opacity-60"
              style={{ borderColor: 'var(--border)' }}
            >
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>
                {link.label}
              </span>
              <span className="text-sm" style={{ color: 'var(--text-primary)' }}>
                {link.value}
              </span>
            </a>
          ))}
        </div>

      </div>
    </main>
  )
}
