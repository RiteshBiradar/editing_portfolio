const mentorVideos = [
  {
    id: 'mentor-1',
    title: 'First Assignment',
    note: 'My first edit during the cohort.',
    embed: 'https://www.youtube.com/embed/EVifW2ej1io?rel=0',
  },
  {
    id: 'mentor-2',
    title: 'Fast Paced Edit',
    note: 'Practiced rapid cut techniques and improved pacing.',
    embed: 'https://www.youtube.com/embed/i0FVXceUIdI?rel=0',
  },
  {
    id: 'mentor-3',
    title: 'Documentary Style Edit',
    note: 'Helped shape stronger openings and tighter storytelling decisions.',
    embed: 'https://www.youtube.com/embed/xDHFAka2G7w?rel=0',
  },
]

const MentorSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Mentor Work</p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
            Tharun Speaks Editing Cohort
          </h2>
        </div>
        <p className="max-w-xl text-sm text-zinc-400 sm:text-base">
          Mentored over 700 aspiring editors through practical feedback, pacing drills, and storytelling exercises.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {mentorVideos.map((video) => (
          <article
            key={video.id}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/70 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]"
          >
            <div className="aspect-video overflow-hidden">
              <iframe
                src={video.embed}
                title={video.title}
                loading="lazy"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{video.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{video.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default MentorSection
