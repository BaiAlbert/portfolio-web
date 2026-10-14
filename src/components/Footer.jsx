export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-violet-600/10 dark:border-violet-600/40 py-8 text-center text-xs text-violet-700/70 dark:text-lavender-400/80 transition-colors">
      <p>
        &copy; {year} Alberto Ramírez Fernández. Todos los derechos reservados.
      </p>
    </footer>
  )
}
