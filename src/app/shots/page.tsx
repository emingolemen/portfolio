export default function Shots() {
  return (
    <main className="mx-auto px-8 max-w-[1600px] py-20 md:py-28">

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
        <h1
          className="font-serif text-4xl md:text-5xl font-bold tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          Shots
        </h1>
        <p className="text-sm max-w-[360px]" style={{ color: 'var(--text-secondary)' }}>
          Design details, UI moments, and craft — not full case studies, just things worth showing.
        </p>
      </div>

      {/* Divider */}
      <div className="w-full border-t mb-12" style={{ borderColor: 'var(--border)' }} />

      {/* Placeholder grid — ready for shots */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-[4/3] rounded-xl transition-colors duration-300"
            style={{ backgroundColor: 'var(--bg-surface)' }}
          />
        ))}
      </div>

      <p
        className="text-sm text-center mt-16"
        style={{ color: 'var(--text-secondary)', opacity: 0.5 }}
      >
        Shots coming soon
      </p>

    </main>
  )
}
