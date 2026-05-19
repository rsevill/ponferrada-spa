import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        }),
      { threshold: 0.1 }
    )
    const els = ref.current?.querySelectorAll('.reveal') ?? []
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return ref
}
