import skills from '../data/skills'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <h2 className="text-2xl font-bold text-violet-700 dark:text-lavender-100 sm:text-3xl">
          Sobre mí
        </h2>

        <p className="mt-6 max-w-2xl text-violet-600/90 dark:text-lavender-300 leading-relaxed">
          {/* TODO: personaliza tu bio */}
          Soy Alberto, tengo 20 años y me apasiona la tecnología desde que tengo
          uso de razón. Tras completar el ciclo de ASIR, estoy ampliando mis
          conocimientos en inteligencia artificial y Big Data. Me motiva diseñar
          infraestructuras robustas, automatizar procesos y aprender algo nuevo
          cada día.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ category, items }, index) => (
          <Reveal key={category} delay={index * 100}>
            <div>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-violet-700 dark:text-lavender-300">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-violet-600/20 bg-lavender-200/40 px-3 py-1 text-xs font-semibold text-violet-800 transition-colors dark:border-violet-500/40 dark:bg-violet-700/50 dark:text-lavender-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
