import { useEffect, useRef, useState } from 'react'

/**
 * Componente contenedor para animar elementos al entrar en el viewport con scroll.
 * - Se anima al scrollear hacia abajo.
 * - Si el usuario sube arriba del todo y vuelve a bajar, se vuelve a animar.
 * - Al scrollear hacia arriba, los elementos ya vistos permanecen visibles para evitar parpadeos o espacios en blanco.
 * - No interfiere con el cambio de tema claro/oscuro.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {number} [props.delay=0] - Retardo en ms para efectos escalonados
 * @param {keyof JSX.IntrinsicElements} [props.as='div'] - Elemento HTML contenedor
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  as: Component = 'div',
  ...rest
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasEntered, setHasEntered] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true)
      setHasEntered(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Una vez que entra, quitamos el retardo tras terminar la animación para no retrasar temas ni hovers
          const timer = setTimeout(() => {
            setHasEntered(true)
          }, delay + 500)
          return () => clearTimeout(timer)
        } else {
          // Si el elemento sale por ABAJO de la pantalla (el usuario ha subido hacia arriba),
          // permitimos que se vuelva a animar cuando vuelva a bajar.
          if (entry.boundingClientRect.top > 0) {
            setIsVisible(false)
            setHasEntered(false)
          }
          // Si sale por ARRIBA, no se resetea para que al volver a subir esté visible sin parpadeos.
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px',
      }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
    }
  }, [delay])

  return (
    <Component
      ref={elementRef}
      className={`reveal-hidden ${isVisible ? 'reveal-visible' : ''} ${className}`}
      style={
        delay && isVisible && !hasEntered
          ? { transitionDelay: `${delay}ms` }
          : undefined
      }
      {...rest}
    >
      {children}
    </Component>
  )
}
