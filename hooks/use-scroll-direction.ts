"use client"

import { useState, useEffect } from "react"

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY ? "down" : "up"

      // Só atualiza se a diferença for significativa (evita micro-movimentos)
      if (Math.abs(scrollY - lastScrollY) < 10) {
        return
      }

      // Se estiver no topo da página, sempre mostra o header
      if (scrollY < 50) {
        setIsVisible(true)
      } else {
        // Oculta quando rola para baixo, mostra quando rola para cima
        setIsVisible(direction === "up")
      }

      setScrollDirection(direction)
      setLastScrollY(scrollY > 0 ? scrollY : 0)
    }

    const handleScroll = () => {
      requestAnimationFrame(updateScrollDirection)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return { scrollDirection, isVisible }
}
