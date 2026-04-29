'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="mx-auto px-8 max-w-[1600px] py-20 md:py-28">
      <div className="flex flex-col md:flex-row md:items-center gap-16 md:gap-8">

        {/* Left — text */}
        <motion.div
          className="flex-1 flex flex-col gap-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex flex-col gap-3">
            <h1
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              Hi, I&apos;m Emin.
            </h1>
            <h2
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.1] tracking-tight"
              style={{ color: 'var(--text-secondary)' }}
            >
              Senior Product Designer.
            </h2>
          </div>

          <p
            className="text-base md:text-lg leading-relaxed max-w-[480px]"
            style={{ color: 'var(--text-secondary)' }}
          >
            I craft digital products that feel intuitive and intentional — clean interfaces that communicate without getting in the way.
          </p>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
            <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Open to new opportunities
            </span>
          </div>
        </motion.div>

        {/* Right — blob + placeholder */}
        <motion.div
          className="flex-shrink-0 flex items-center justify-center md:w-[420px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
        >
          <div className="relative w-[340px] h-[340px] md:w-[400px] md:h-[400px]">
            {/* Soft blob */}
            <div
              className="absolute inset-0 transition-colors duration-300"
              style={{
                backgroundColor: 'var(--blob)',
                borderRadius: '62% 38% 46% 54% / 60% 44% 56% 40%',
              }}
            />
            {/* Dashed circle placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-44 h-44 rounded-full flex flex-col items-center justify-center gap-1.5"
                style={{
                  border: '1.5px dashed var(--text-secondary)',
                  opacity: 0.35,
                }}
              >
                <span
                  className="text-[10px] tracking-widest uppercase font-sans text-center leading-tight px-4"
                  style={{ color: 'var(--text-primary)' }}
                >
                  doodle
                  <br />
                  coming soon
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
