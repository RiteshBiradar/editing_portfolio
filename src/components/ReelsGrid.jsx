const reels = [
  {
    title: 'Anime Edit',
    label: 'Anime Edit',
    // Replace with your reel post URL or thumbnail
    link: 'https://www.instagram.com/p/DAgTmZfs-ib/',
    thumb: '/reels/anime.jpg',
  },
  {
    title: 'Gaming Montage',
    label: 'Gaming Montage',
    link: 'https://www.instagram.com/p/DA6bpodMK-ihTWVEHnQ9MBW7O3d_9chknHixwU0/',
    thumb: '/reels/gaming.jpg',
  },
  {
    title: 'Story Telling Reel',
    label: 'Lifestyle Reel',
    link: 'https://www.instagram.com/p/DA_ghdWM9oR/',
    thumb: '/reels/story.jpg',
  },
]

const ReelsGrid = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Instagram Reels</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
          Fast cuts, vertical energy, and punchy storytelling.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {reels.map((reel) => (
          <article
            key={reel.title}
            className="group rounded-[1.5rem] border border-white/10 bg-zinc-950/70 p-3 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]"
          >
            <a
              href={reel.link}
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden rounded-[1.1rem] bg-zinc-900"
            >
              {/* Thumbnail area - replace `thumb` with your image URL if available. */}
              <div
                className="aspect-[9/16] flex items-center justify-center bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900"
                style={{ backgroundSize: 'cover', backgroundImage: reel.thumb ? `url(${reel.thumb})` : undefined }}
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-black/40 text-3xl text-cyan-300 transition group-hover:scale-105">
                  ▶
                </div>
              </div>
            </a>

            <div className="px-1 pb-1 pt-4">
              <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                {reel.label}
              </span>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 text-xs text-zinc-500">Click a reel to open it on Instagram (replace `thumb` in <span className="font-mono">ReelsGrid.jsx</span> with your thumbnail URLs to show images inline).</p>
    </section>
  )
}

export default ReelsGrid
