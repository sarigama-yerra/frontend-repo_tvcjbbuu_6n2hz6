function Stat({ label, value }) {
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
      <div className="text-3xl md:text-4xl font-extrabold text-white">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-purple-200/80">{label}</div>
    </div>
  )
}

function Stats() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(234,179,8,0.12),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <Stat label="NBA Titles" value="5" />
          <Stat label="All-Star Selections" value="18" />
          <Stat label="Points" value="33,643" />
          <Stat label="Games" value="1,346" />
        </div>
      </div>
    </section>
  )
}

export default Stats
