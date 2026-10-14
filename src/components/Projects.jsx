import projects from '../data/projects'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <h2 className="text-2xl font-bold text-violet-700 dark:text-lavender-100 sm:text-3xl">
          Proyectos
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 130}>
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
