import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/96/Kobe_Bryant_2014.jpg"
          alt="Kobe Bryant"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-purple-900/70 to-purple-950"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-3 bg-yellow-400/10 text-yellow-300 px-4 py-2 rounded-full border border-yellow-400/30">
            <span className="text-xs tracking-widest">MAMBA MENTALITY</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Kobe Bryant
          </h1>
          <p className="text-purple-100/90 max-w-2xl mx-auto">
            1978 – 2020 • 5× NBA Champion • MVP • 18× All-Star • 2× Finals MVP
          </p>

          <div className="flex items-center justify-center gap-3 text-xs text-purple-200/80">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Los Angeles Lakers</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">No. 8 & 24</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Shooting Guard</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
