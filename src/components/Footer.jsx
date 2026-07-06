const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-400">
          If it needs to hit harder, cut cleaner, and feel more alive — let’s make it.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-white">
          <a href="mailto:riteshbiradar3434@gmail.com" className="transition hover:text-cyan-300">
            hello@yourname.com
          </a>
          <a href="https://www.instagram.com/_riteshbiradar_/" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
