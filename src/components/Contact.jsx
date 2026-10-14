import { Mail, Download } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './icons/BrandIcons'
import Reveal from './Reveal'

const LINKS = [
  {
    label: 'albertoramirez@outlook.com',
    href: 'mailto:albertoramirez@outlook.com',
    icon: Mail,
    ariaLabel: 'Enviar email',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/BaiAlbert',
    icon: GitHubIcon,
    ariaLabel: 'Perfil de GitHub',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alberto-ramirez-fernandez/',
    icon: LinkedInIcon,
    ariaLabel: 'Perfil de LinkedIn',
  },
]

export default function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <h2 className="text-2xl font-bold text-violet-700 dark:text-lavender-100 sm:text-3xl">
          Contacto
        </h2>

        <p className="mt-4 max-w-xl text-violet-600/90 dark:text-lavender-300 leading-relaxed">
          ¿Te interesa mi perfil o quieres colaborar en un proyecto? No dudes en
          escribirme.
        </p>
      </Reveal>

      <Reveal delay={150}>
        <ul className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-6">
          {LINKS.map(({ label, href, icon: Icon, ariaLabel }) => (
            <li key={href}>
              <a
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="inline-flex items-center gap-2 rounded-lg border border-violet-600/15 bg-white/40 px-4 py-2.5 text-sm font-semibold text-violet-700 transition-all hover:bg-violet-600/10 hover:text-violet-900 dark:border-violet-500/30 dark:bg-violet-700/30 dark:text-lavender-300 dark:hover:bg-violet-700/60 dark:hover:text-lavender-100"
                aria-label={ariaLabel}
              >
                <Icon size={18} className="shrink-0" />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* Botón descargar CV */}
      <Reveal delay={250}>
        <div className="mt-12">
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-violet-700 px-6 py-3 text-sm font-semibold text-lavender-50 shadow-md transition-all hover:bg-violet-600 hover:shadow-lg dark:bg-lavender-300 dark:text-violet-900 dark:hover:bg-lavender-200"
          >
            <Download size={16} />
            Descargar CV
          </a>
          <p className="mt-2 text-xs text-violet-600/70 dark:text-lavender-400/80">
            {/* TODO: sube tu CV a public/cv.pdf */}
            Archivo PDF — asegúrate de que public/cv.pdf existe.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
