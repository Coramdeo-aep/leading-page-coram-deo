"use client"

import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function Services() {
  useScrollAnimation()
  const [currentSlide, setCurrentSlide] = useState(0)

  const acoesData = [
    {
      nome_campanha: "Em breve - Novidades chegando",
      data: "Estamos preparando novidades",
      localizacao: "Aguarde mais informações",
      imagem_url: "/images/community-support.jpg",
      cta_url: "https://www.instagram.com/coramdeo.aep",
    },
    {
      nome_campanha: "Em breve - Mais informações",
      data: "Estamos preparando novidades",
      localizacao: "Aguarde mais informações",
      imagem_url: "/images/family-support.jpg",
      cta_url: "https://www.instagram.com/coramdeo.aep",
    },
    {
      nome_campanha: "Em breve - Mais informações",
      data: "Estamos preparando novidades",
      localizacao: "Aguarde mais informações",
      imagem_url: "/images/children-studying.jpg",
      cta_url: "https://www.instagram.com/coramdeo.aep",
    },
    {
      nome_campanha: "Em breve - Mais informações",
      data: "Estamos preparando novidades",
      localizacao: "Aguarde mais informações",
      imagem_url: "/images/team-unity.jpg",
      cta_url: "https://www.instagram.com/coramdeo.aep",
    },
    {
      nome_campanha: "Em breve - Mais informações",
      data: "Estamos preparando novidades",
      localizacao: "Aguarde mais informações",
      imagem_url: "/images/community-impact.jpg",
      cta_url: "https://www.instagram.com/coramdeo.aep",
    },
  ]

  // Agrupar ações em slides de até 3 itens
  const groupIntoSlides = (items: typeof acoesData) => {
    const slides = []
    for (let i = 0; i < items.length; i += 3) {
      slides.push(items.slice(i, i + 3))
    }
    return slides
  }

  const slides = groupIntoSlides(acoesData)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000)
    return () => clearInterval(timer)
  }, [])

  const renderSlideLayout = (slideItems: typeof acoesData) => {
    if (slideItems.length === 1) {
      // 1 item: ocupa todo o espaço
      return (
        <div className="w-full h-96">
          <ActionCard item={slideItems[0]} className="w-full h-full" />
        </div>
      )
    } else if (slideItems.length === 2) {
      // 2 itens: layout lado a lado
      return (
        <div className="grid grid-cols-2 gap-4 h-96">
          <ActionCard item={slideItems[0]} className="w-full h-full" />
          <ActionCard item={slideItems[1]} className="w-full h-full" />
        </div>
      )
    } else {
      // 3 itens: layout como na imagem (1 grande + 2 pequenos)
      return (
        <div className="grid grid-cols-2 gap-4 h-96">
          {/* Card grande à esquerda */}
          <ActionCard item={slideItems[0]} className="w-full h-full" />

          {/* Cards pequenos à direita */}
          <div className="grid grid-rows-2 gap-4 h-full">
            <ActionCard item={slideItems[1]} className="w-full h-full" />
            <ActionCard item={slideItems[2]} className="w-full h-full" />
          </div>
        </div>
      )
    }
  }

  const renderMobileSlideLayout = (slideItems: typeof acoesData) => {
    if (slideItems.length === 1) {
      // 1 item: ocupa todo o espaço
      return (
        <div className="w-full h-64">
          <ActionCard item={slideItems[0]} className="w-full h-full" />
        </div>
      )
    } else if (slideItems.length === 2) {
      // 2 itens: layout lado a lado
      return (
        <div className="grid grid-cols-2 gap-2 h-64">
          <ActionCard item={slideItems[0]} className="w-full h-full" />
          <ActionCard item={slideItems[1]} className="w-full h-full" />
        </div>
      )
    } else {
      // 3 itens: layout como na imagem (1 grande + 2 pequenos) - versão mobile
      return (
        <div className="grid grid-cols-2 gap-2 h-64">
          {/* Card grande à esquerda */}
          <ActionCard item={slideItems[0]} className="w-full h-full" />

          {/* Cards pequenos à direita */}
          <div className="grid grid-rows-2 gap-2 h-full">
            <ActionCard item={slideItems[1]} className="w-full h-full" />
            <ActionCard item={slideItems[2]} className="w-full h-full" />
          </div>
        </div>
      )
    }
  }

  return (
    <section id="programas" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 scroll-animate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Ações Sociais</h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            A Coram Deo realiza ações sociais voltadas ao apoio de famílias, crianças e todos os interessados em sua
            missão. Por meio de eventos, campanhas e atividades comunitárias, oferece suporte prático, acolhimento e
            formação, promovendo dignidade, vínculos e transformação social.
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:block relative mb-16 scroll-animate">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slideItems, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                  {renderSlideLayout(slideItems)}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-amber-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 z-10"
          >
            <ChevronRight className="w-6 h-6 text-amber-800" />
          </button>
        </div>

        {/* Mobile Layout - Grid similar ao desktop */}
        <div className="md:hidden relative mb-16 scroll-animate">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slideItems, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-2">
                  {renderMobileSlideLayout(slideItems)}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows para mobile */}
          <button
            onClick={prevSlide}
            className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-10"
          >
            <ChevronLeft className="w-5 h-5 text-amber-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-10"
          >
            <ChevronRight className="w-5 h-5 text-amber-800" />
          </button>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <div
            className="rounded-3xl p-8 lg:p-12 text-white max-w-4xl mx-auto relative overflow-hidden scroll-animate"
            style={{ background: "linear-gradient(135deg, #4B2E1B 0%, #D86629 100%)" }}
          >
            <div className="relative z-10">
              <h3
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 800,
                }}
              >
                Participe das Nossas Ações Sociais
              </h3>
              <p
                className="text-lg md:text-xl mb-8 opacity-90"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 400,
                  lineHeight: "1.6em",
                }}
              >
                Junte-se a nós nas próximas campanhas e ajude a transformar vidas em nossa comunidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="bg-white text-[#4B2E1B] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
                  onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Fale Conosco
                </button>
                <button
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#4B2E1B] transition-colors shadow-lg"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
                  onClick={() => {
                    const phone = "5554999501468"
                    const message = "Olá, gostaria de participar das ações sociais da Coram Deo."
                    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
                  }}
                >
                  Seja Voluntário
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente para cada card de ação
function ActionCard({
  item,
  className,
}: {
  item: {
    nome_campanha: string
    data: string
    localizacao: string
    imagem_url: string
    cta_url: string
  }
  className?: string
}) {
  return (
    <Card
      className={`group cursor-pointer overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 ${className}`}
      onClick={() => window.open(item.cta_url, "_blank")}
    >
      <div className="relative w-full h-full">
        <Image
          src={item.imagem_url || "/placeholder.svg"}
          alt={item.nome_campanha}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Content overlay */}
        <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
          <h3 className="text-lg font-bold mb-2 font-montserrat group-hover:text-amber-300 transition-colors">
            {item.nome_campanha}
          </h3>

          <div className="space-y-1">
            <div className="flex items-center text-sm opacity-90">
              <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="font-montserrat">{item.data}</span>
            </div>

            <div className="flex items-center text-sm opacity-90">
              <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="font-montserrat">{item.localizacao}</span>
            </div>
          </div>

          {/* Hover indicator */}
          <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs bg-amber-600 px-2 py-1 rounded-full font-montserrat">Clique para ver mais</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
