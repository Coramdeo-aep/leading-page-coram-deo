"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Lightbulb, HandHeart, Home, Star, Sunrise } from "lucide-react"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Values() {
  useScrollAnimation()
  const values = [
    {
      icon: Heart,
      title: "Amor que acolhe",
      description: "Acolhemos com empatia, compaixão e cuidado, como Cristo acolheu a todos.",
      verse: "João 13:34",
      color: "bg-red-600",
    },
    {
      icon: Lightbulb,
      title: "Sabedoria que orienta",
      description: "Buscamos discernimento para aplicar a verdade com entendimento e graça.",
      verse: "Tiago 1:5",
      color: "bg-blue-600",
    },
    {
      icon: HandHeart,
      title: "Serviço que transforma",
      description: "Educamos para servir ao próximo, à comunidade e ao Reino de Deus.",
      verse: "Gálatas 5:13",
      color: "bg-green-600",
    },
    {
      icon: Home,
      title: "Família que fortalece",
      description: "Honramos o lar como ambiente de formação e proteção.",
      verse: "Salmos 127:1-3",
      color: "bg-purple-600",
    },
    {
      icon: Star,
      title: "Excelência com propósito",
      description: "Fazemos tudo com zelo, como para o Senhor.",
      verse: "Colossenses 3:23",
      color: "bg-amber-600",
    },
    {
      icon: Sunrise,
      title: "Esperança para o futuro",
      description: "Cremos na transformação de vidas e culturas pelo evangelho.",
      verse: "Romanos 15:13",
      color: "bg-orange-600",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 scroll-animate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-4 scroll-animate">Valores da Instituição</h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto scroll-animate">
            Nossos valores fundamentam cada ação e decisão, guiando-nos na missão de formar vidas com propósito e
            excelência cristã.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-white border-amber-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 scroll-animate"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-3">{value.title}</h3>
                <p className="text-amber-700 mb-4 leading-relaxed">{value.description}</p>
                <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-3">
                  <div className="text-sm font-semibold text-amber-800">📖 {value.verse}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-800 to-orange-700 rounded-3xl p-8 lg:p-12 text-white max-w-4xl mx-auto relative overflow-hidden scroll-animate">
            {/* Imagem de fundo com overlay */}
            <div className="absolute inset-0 opacity-20">
              <Image
                src="/images/team-unity.jpg"
                alt="União e trabalho em equipe"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Conteúdo sobre a imagem */}
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Viva Estes Valores Conosco</h3>
              <p className="text-xl mb-8 opacity-90">
                Convidamos você a fazer parte desta jornada de transformação, onde cada valor se torna realidade na vida
                de famílias e comunidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="bg-white text-amber-800 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
                  onClick={() => document.getElementById("programas")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Conheça Nossos Serviços
                </button>
                <button
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-800 transition-colors"
                  onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Entre em Contato
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
