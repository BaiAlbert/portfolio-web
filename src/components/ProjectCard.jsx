import { ExternalLink } from 'lucide-react'
import { GitHubIcon } from './icons/BrandIcons'

export default function ProjectCard({ title, description, tags, repo, demo }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-violet-600/15 bg-white/70 p-6 backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-violet-500/30 dark:bg-violet-700/30 dark:hover:border-lavender-400/40">
      <h3 className="text-lg font-bold text-violet-800 dark:text-lavender-100">
        {title}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-violet-600/90 dark:text-lavender-300">
        {description}
      </p>

      {/* Tags */}
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologías">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md border border-violet-600/20 bg-lavender-200/40 px-2.5 py-0.5 text-xs font-semibold text-violet-800 dark:border-violet-500/40 dark:bg-violet-800/50 dark:text-lavender-300"
          >
            {tag}
          </li>
        ))}
      </ul>

      {/* Enlaces */}
      <div className="mt-6 flex items-center gap-5 pt-3 border-t border-violet-600/10 dark:border-violet-600/40">
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-700 transition-colors hover:text-violet-900 dark:text-lavender-300 dark:hover:text-lavender-100"
          aria-label={`Repositorio de ${title}`}
        >
          <GitHubIcon size={16} />
          Código
        </a>
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-700 transition-colors hover:text-violet-900 dark:text-lavender-300 dark:hover:text-lavender-100"
            aria-label={`Demo de ${title}`}
          >
            <ExternalLink size={16} />
            Demo
          </a>
        )}
      </div>
    </article>
  )
}
