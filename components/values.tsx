"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Target, Award, Users, Handshake, Shield, MapPin, Star } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Values() {
  useScrollAnimation()

  const values = [
    {
      icon: Heart,
      title: "Cristocentrismo",
      description:
        "Jesus Cristo é o centro de nossa missão. Ele orienta nossos princípios, decisões e relacionamentos.",
    },
    {
      icon: Target,
      title: "Integralidade",
      description:
        "Educamos para a formação completa do ser humano — espiritual, intelectual, emocional, social e física — conforme os propósitos de Deus.",
    },
    {
      icon: Award,
      title: "Excelência com Propósito",
      description: "Buscamos qualidade em tudo o que fazemos, com intencionalidade e foco na transformação de vidas.",
    },
    {
      icon: Users,
      title: "Inclusão e Equidade",
      description: "Acolhemos a diversidade com justiça, garantindo acesso e oportunidades iguais para todos.",
    },
    {
      icon: Handshake,
      title: "Parcerias Estratégicas",
      description: "Caminhamos com famílias, igrejas e organizações para ampliar nosso impacto e cumprir nossa missão.",
    },
    {
      icon: Shield,
      title: "Transparência e Responsabilidade",
      description: "Agimos com ética e integridade, prestando contas com clareza e compromisso com o bem comum.",
    },
    {
      icon: MapPin,
      title: "Engajamento Comunitário",
      description: "Incentivamos a participação ativa da comunidade, fortalecendo vínculos, solidariedade e cidadania.",
    },
    {
      icon: Star,
      title: "Valorização da Equipe",
      description:
        "Promovemos o cuidado, a valorização e a qualificação contínua de nossos colaboradores, reconhecendo seu papel essencial na missão institucional.",
    },
  ]

  return (
    <section className="py-16 md:py-20 scroll-animate" style={{ backgroundColor: "#FAF9F7" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4 scroll-animate"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "#4B2E1B",
              fontWeight: 800,
            }}
          >
            Nossos Valores
          </h2>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto scroll-animate"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "#444444",
              fontWeight: 400,
              lineHeight: "1.6em",
            }}
          >
            Nossos valores fundamentam cada ação e decisão, guiando-nos na missão de formar vidas com propósito e
            excelência cristã.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-[#D86629] scroll-animate group"
              style={{ borderRadius: "12px" }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start space-x-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-[#D86629] transition-colors duration-300"
                    style={{ backgroundColor: "#F5F5F5" }}
                  >
                    <value.icon
                      className="w-6 h-6 group-hover:text-white transition-colors duration-300"
                      style={{ color: "#D86629" }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="mb-2 scroll-animate"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "18px",
                        fontWeight: 600,
                        color: "#333333",
                        lineHeight: "1.4em",
                      }}
                    >
                      {value.title}
                    </h3>
                    <p
                      className="scroll-animate"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#444444",
                        lineHeight: "1.6em",
                      }}
                    >
                      {value.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

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
                Viva Estes Valores Conosco
              </h3>
              <p
                className="text-lg md:text-xl mb-8 opacity-90"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 400,
                  lineHeight: "1.6em",
                }}
              >
                Convidamos você a fazer parte desta jornada de transformação, onde cada valor se torna realidade na vida
                de famílias e comunidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="bg-white text-[#4B2E1B] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
                  onClick={() => document.getElementById("programas")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Conheça Nossos Serviços
                </button>
                <button
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#4B2E1B] transition-colors shadow-lg"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
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
