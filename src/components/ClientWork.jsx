const ClientWork = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-16 lg:py-16">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/80 shadow-[0_0_50px_rgba(255,255,255,0.04)]">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="aspect-video overflow-hidden lg:aspect-auto">
            <iframe
              src="https://www.youtube.com/embed/b_CGOGNrpcg?rel=0"
              title="Abhi & Niyu featured edit"
              loading="lazy"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Client Work</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
              Abhi &amp; Niyu
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-400">
              Edited a 2 minute animation video for Abhi & Niyu, focusing on pacing, transitions, and storytelling to enhance the overall impact of the animation. The time frame of my edit is from 5:39 to 6:18. 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientWork
