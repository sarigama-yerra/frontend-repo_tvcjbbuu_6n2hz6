import Hero from './components/Hero'
import Stats from './components/Stats'
import Quotes from './components/Quotes'
import Timeline from './components/Timeline'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-950 to-black text-white">
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-purple-950/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-yellow-400" />
            <span className="font-semibold tracking-tight">Kobe Tribute</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-purple-200/80">
            <a href="#stats" className="hover:text-white">Stats</a>
            <a href="#timeline" className="hover:text-white">Timeline</a>
            <a href="#quotes" className="hover:text-white">Quotes</a>
          </nav>
          <a href="/test" className="text-xs px-3 py-1 rounded bg-white/10 hover:bg-white/20 border border-white/10">System Test</a>
        </div>
      </header>

      <main>
        <Hero />

        <section id="stats">
          <Stats />
        </section>

        <section id="timeline">
          <Timeline />
        </section>

        <section id="quotes">
          <Quotes />
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-purple-300/70">
          Built with love for the Mamba. This is a fan-made tribute site.
        </div>
      </footer>
    </div>
  )
}

export default App
