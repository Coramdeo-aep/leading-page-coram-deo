"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, Calendar, Heart } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Services() {
  useScrollAnimation()

  const services = [
    {
      icon: GraduationCap,
      title: "Programa de Bolsas de Estudo",
      description: "Incentivamos o acesso à educação cristã de excelência.",
      features: [
        "Bolsas parciais e integrais",
        "Critérios socioeconômicos",
        "Acompanhamento pedagógico",
        "Formação integral do aluno",
      ],
    },
    {
      icon: Users,
      title: "Palestras e Treinamentos",
      description: "Oferecemos palestras para famílias, profissionais da educação e líderes.",
      features: ["Capacitação de educadores", "Orientação familiar", "Liderança cristã", "Desenvolvimento pessoal"],
    },
    {
      icon: Calendar,
      title: "Eventos Sociais e Educacionais",
      description: "Promovemos conexões para alcançar nossos objetivos.",
      features: ["Seminários educacionais", "Encontros familiares", "Atividades comunitárias", "Networking cristão"],
    },
    {
      icon: Heart,
      title: "Acolhimento Social",
      description:
        "Apoio psicossocial e espiritual às famílias, oferecendo orientação, aconselhamento e suporte em momentos de dificuldade.",
      features: ["Aconselhamento familiar", "Suporte psicossocial", "Orientação espiritual", "Assistência em crises"],
    },
  ]

  return (
    <section id="programas" className="py-20 bg-white scroll-animate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-4 scroll-animate">Nossos Serviços</h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto scroll-animate">
            Oferecemos uma gama completa de serviços educacionais e sociais para o desenvolvimento integral de crianças,
            jovens e famílias, sempre fundamentados em princípios cristãos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 scroll-animate"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-amber-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-amber-700 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-amber-600">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-amber-800 text-amber-800 hover:bg-amber-50 mt-4"
                  onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-800 to-orange-700 rounded-3xl p-8 lg:p-12 text-center text-white scroll-animate">
          <h3 className="text-3xl font-bold mb-4">Precisa de Algum dos Nossos Serviços?</h3>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato conosco para saber mais sobre como podemos ajudar você, sua família ou sua instituição.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-white text-amber-800 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            >
              Fale Conosco
            </button>
            <button
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-800 transition-colors"
              onClick={() => {
                const phone = "5554999501468"
                const message = "Olá, gostaria de agendar uma visita à Coram Deo."
                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
              }}
            >
              Agende uma Visita
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
