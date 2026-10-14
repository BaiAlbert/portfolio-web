import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

/**
 * Hook para gestionar el tema claro/oscuro.
 * - Sincronizado con el script anti-flash de index.html.
 * - Respeta prefers-color-scheme del sistema al inicio.
 * - Guarda la preferencia del usuario en localStorage.
 * - Aplica/quita la clase "dark" en <html>.
 */
export function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false

    // Si el script de <head> ya colocó la clase 'dark' en <html>, sincronizar inmediatamente
    if (typeof document !== 'undefined' && document.documentElement.classList.contains('dark')) {
      return true
    }

    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored !== null) return stored === 'dark'

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light')
  }, [dark])

  const toggle = () => setDark((prev) => !prev)

  return { dark, toggle }
}
