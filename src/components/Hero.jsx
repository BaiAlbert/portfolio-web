import { ArrowDown, Mail } from 'lucide-react'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[90vh] flex-col items-center justify-center px-6 pt-24 pb-16 text-center"
    >
      <Reveal>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-violet-600/90 dark:text-lavender-300 sm:text-sm">
          SysAdmin &amp; DevOps Junior
        </p>

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-violet-800 dark:text-lavender-100 sm:text-5xl md:text-6xl">
          Alberto Ramírez
          <br />
          Fernández
        </h1>
      </Reveal>

      <Reveal delay={150}>
        <p className="mt-6 max-w-xl text-base text-violet-600/90 dark:text-lavender-300 sm:text-lg leading-relaxed">
          {/* TODO: personaliza tu presentación */}
          Titulado en ASIR y actualmente cursando el curso de especialización en
          Inteligencia Artificial y Big Data. Busco mi primera oportunidad
          profesional como administrador de sistemas o en el mundo DevOps.
        </p>
      </Reveal>

      <Reveal delay={300}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 rounded-lg bg-violet-700 px-6 py-3 text-sm font-semibold text-lavender-50 shadow-md transition-all hover:bg-violet-600 hover:shadow-lg dark:bg-lavender-300 dark:text-violet-900 dark:hover:bg-lavender-200"
          >
            <ArrowDown size={16} />
            Ver proyectos
          </a>

          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-lg border border-violet-700/30 px-6 py-3 text-sm font-semibold text-violet-700 transition-colors hover:bg-violet-700/10 dark:border-lavender-300/40 dark:text-lavender-200 dark:hover:bg-lavender-300/10"
          >
            <Mail size={16} />
            Contacto
          </a>
        </div>
      </Reveal>
    </section>
  )
}
