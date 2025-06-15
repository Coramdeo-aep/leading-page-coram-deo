"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Hero() {
  useScrollAnimation()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/images/slide-1.jpg",
      title: (
        <>
          <span className="font-bold text-[#CE7725]">Transformando Vidas</span> através da{" "}
          <span className="font-bold text-[#CE7725]">Educação Integral</span>
        </>
      ),
      subtitle:
        "Acreditamos que a educação baseada em princípios bíblicos é o caminho para formar cidadãos íntegros e transformar comunidades.",
      cta: "Conheça Nossa Missão",
      action: () => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      image: "/images/slide-2.jpg",
      title: (
        <>
          Do <span className="font-bold text-[#CE7725]">amor ao próximo</span> nasce a{" "}
          <span className="font-bold text-[#CE7725]">transformação</span>
        </>
      ),
      subtitle: "Coragem, fé e compromisso social definem nossa missão com as crianças e famílias atendidas.",
      cta: "Saiba Mais",
      action: () => document.getElementById("programas")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      image: "/images/slide-3.jpg",
      title: (
        <>
          <span className="font-bold text-[#CE7725]">Educação</span> com{" "}
          <span className="font-bold text-[#CE7725]">Propósito</span>
        </>
      ),
      subtitle: "Nossa metodologia vai além do ensino: ela forma caráter, valores e esperança para o futuro.",
      cta: "Fale Conosco",
      action: () => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" }),
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="inicio" className="relative overflow-hidden scroll-animate" style={{ height: "110vh" }}>
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={typeof slide.title === "string" ? slide.title : "Slide da Coram Deo"}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-end">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
              <div className="max-w-2xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4 leading-tight font-montserrat">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-montserrat font-light">
                  {slide.subtitle}
                </p>
                <Button
                  size="lg"
                  className="bg-[#CE7725] hover:bg-[#3A2420] text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 font-montserrat font-medium"
                  onClick={slide.action}
                >
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Mais discretos */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 z-20 bg-white/5 hover:bg-white/15 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 border border-white/10"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 z-20 bg-white/5 hover:bg-white/15 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 border border-white/10"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots Indicator removido conforme solicitado */}
    </section>
  )
}
