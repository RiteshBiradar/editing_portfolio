const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.28),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.92),rgba(0,0,0,0.55))]" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 sm:px-10 lg:px-16">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-400/90">
            Video Editor • Storytelling through cuts
          </p>
          <h1 className="text-5xl font-black tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
            I build sharp, cinematic edits that feel like motion and memory.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-300 sm:text-xl">
            Fast-paced, emotion-first editing for creators, brands, and personal stories.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/_riteshbiradar_/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:-translate-y-0.5 hover:bg-cyan-400/20"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@riteshbiradar421"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              YouTube
            </a>
            <a
              href="mailto:riteshbiradar3434@gmail.com"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
