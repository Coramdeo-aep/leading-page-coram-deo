"use client"

import { useEffect } from "react"

export function useScrollAnimation() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        } else {
          entry.target.classList.remove("visible")
        }
      })
    }, observerOptions)

    // Observar todos os elementos com a classe scroll-animate
    const animatedElements = document.querySelectorAll(".scroll-animate")
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [])
}
