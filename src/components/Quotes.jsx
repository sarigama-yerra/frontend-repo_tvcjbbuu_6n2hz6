import { useEffect, useState } from 'react'

const QUOTES = [
  "The most important thing is to try and inspire people so that they can be great in whatever they want to do.",
  "Everything negative – pressure, challenges – is all an opportunity for me to rise.",
  "If you’re afraid to fail, then you’re probably going to fail.",
  "Great things come from hard work and perseverance. No excuses.",
]

function Quotes() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % QUOTES.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <blockquote className="text-xl md:text-2xl text-purple-50/95 leading-relaxed">
          “{QUOTES[index]}”
        </blockquote>
        <div className="mt-4 text-purple-200/70">— Kobe Bryant</div>
      </div>
    </section>
  )
}

export default Quotes
