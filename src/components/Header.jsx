import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Formación', href: '#formacion' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header({ dark, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-violet-600/10 dark:border-violet-600/40 backdrop-blur-md bg-lavender-100/95 dark:bg-violet-800/95">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo / nombre */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-violet-800 dark:text-lavender-100 hover:text-violet-600 dark:hover:text-lavender-300 transition-colors duration-300 ease-in-out"
          aria-label="Inicio"
        >
          Alberto R.F.
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold text-violet-700/80 dark:text-lavender-300 hover:text-violet-900 dark:hover:text-lavender-100 transition-colors duration-300 ease-in-out"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Acciones */}
        <div className="flex items-center gap-3">
          {/* Botón tema */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="cursor-pointer rounded-lg p-2 text-violet-700 dark:text-lavender-300 hover:bg-violet-600/10 dark:hover:bg-violet-700 transition-colors duration-300 ease-in-out"
            aria-label={dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Botón menú móvil */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer rounded-lg p-2 text-violet-700 dark:text-lavender-300 hover:bg-violet-600/10 dark:hover:bg-violet-700 transition-colors duration-300 ease-in-out md:hidden"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Nav móvil */}
      {menuOpen && (
        <nav
          className="border-t border-violet-600/10 dark:border-violet-600/40 bg-lavender-100/95 dark:bg-violet-800/95 md:hidden"
          aria-label="Navegación móvil"
        >
          <ul className="flex flex-col px-6 py-4 gap-4">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-semibold text-violet-700/80 dark:text-lavender-300 hover:text-violet-900 dark:hover:text-lavender-100 transition-colors duration-300 ease-in-out"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
