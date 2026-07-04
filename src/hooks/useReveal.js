import { useEffect, useRef, useState } from 'react'

/**
 * Hook de animación de entrada al hacer scroll.
 * Devuelve una ref y una bandera `visible`; añade la clase `is-visible`
 * cuando el elemento entra en el viewport (una sola vez).
 */
export function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || visible) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, options)

    observer.observe(node)
    return () => observer.disconnect()
  }, [visible, options])

  return { ref, visible }
}
