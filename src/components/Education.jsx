import { GraduationCap, MapPin } from 'lucide-react'
import education from '../data/education'
import Reveal from './Reveal'

export default function Education() {
  return (
    <section id="formacion" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <h2 className="text-2xl font-bold text-violet-700 dark:text-lavender-100 sm:text-3xl">
          Formación
        </h2>
      </Reveal>

      <ol className="relative mt-10 border-l-2 border-lavender-300 dark:border-violet-600 ml-3">
        {education.map(({ title, center, location, period, current }, index) => (
          <li key={title} className="mb-10 ml-8 last:mb-0">
            {/* Punto en la línea temporal: hijo directo de li (posicionado relativo a ol) para alineación perfecta sobre el eje */}
            <span
              className="absolute -left-[11px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-lavender-400 bg-lavender-100 dark:border-lavender-400 dark:bg-violet-800"
              aria-hidden="true"
            >
              <GraduationCap size={12} className="text-violet-600 dark:text-lavender-300" />
            </span>

            <Reveal delay={index * 120}>
              <time className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-600/80 dark:text-lavender-400">
                <span>{period}</span>
                {current && (
                  <span className="inline-block rounded-full bg-violet-600/10 px-2 py-0.5 text-[10px] font-bold text-violet-700 dark:bg-lavender-300/15 dark:text-lavender-300">
                    En curso
                  </span>
                )}
              </time>

              <h3 className="text-base font-bold text-violet-700 dark:text-lavender-100">
                {title}
              </h3>

              <p className="mt-1 text-sm font-medium text-violet-600/90 dark:text-lavender-300">
                {center}
              </p>

              {location && (
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-violet-600/70 dark:text-lavender-400">
                  <MapPin size={13} className="shrink-0 text-violet-500 dark:text-lavender-400" />
                  <span>{location}</span>
                </p>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
