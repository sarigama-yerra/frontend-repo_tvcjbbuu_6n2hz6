function TimelineItem({ year, title, desc }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.8)]" />
      <div className="text-sm text-purple-200/80 uppercase tracking-wider">{year}</div>
      <div className="text-white font-semibold">{title}</div>
      <div className="text-purple-200/80 text-sm mt-1">{desc}</div>
    </div>
  )
}

function Timeline() {
  const items = [
    { year: '1996', title: 'Drafted by the Lakers', desc: 'Acquired in a draft-day trade, beginning a legendary 20-year career.' },
    { year: '2000-2002', title: 'Three-peat', desc: 'Won three consecutive NBA championships.' },
    { year: '2006', title: '81-point Game', desc: 'Second-highest single-game scoring performance in NBA history.' },
    { year: '2008', title: 'NBA MVP', desc: 'Named league Most Valuable Player.' },
    { year: '2009-2010', title: 'Back-to-Back Titles', desc: 'Led Lakers to two more championships, earning Finals MVP twice.' },
    { year: '2016', title: 'Mamba Out', desc: 'Dropped 60 points in his final NBA game.' },
    { year: '2018', title: 'Academy Award', desc: 'Won an Oscar for the animated short film "Dear Basketball."' },
  ]

  return (
    <section className="relative py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative">
          <div className="absolute left-1.5 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-400/60 to-transparent" />
          <div className="space-y-8">
            {items.map((it, i) => (
              <TimelineItem key={i} {...it} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
