"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Image from "next/image"

export default function Impact() {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Mãe de aluno",
      content:
        "A Corandeo transformou a vida do meu filho. Ele não apenas aprendeu matérias escolares, mas desenvolveu valores que levaremos para toda a vida.",
      image: "/images/testimonial-1.jpg",
    },
    {
      name: "João Santos",
      role: "Ex-aluno",
      content:
        "Hoje sou professor graças aos valores e educação que recebi na Corandeo. Eles me ensinaram que posso fazer a diferença no mundo.",
      image: "/images/testimonial-2.jpg",
    },
    {
      name: "Ana Costa",
      role: "Voluntária",
      content:
        "Participar dos projetos da Corandeo me mostrou o verdadeiro significado de servir ao próximo com amor e dedicação.",
      image: "/images/testimonial-3.jpg",
    },
  ]

  const stats = [
    { number: "500+", label: "Alunos Formados", description: "Jovens preparados para transformar suas comunidades" },
    { number: "150+", label: "Famílias Atendidas", description: "Suporte integral oferecido anualmente" },
    { number: "95%", label: "Taxa de Aprovação", description: "Excelência acadêmica comprovada" },
    { number: "15", label: "Anos de História", description: "Dedicação constante à educação cristã" },
  ]

  return (
    <section id="impacto" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Nosso Impacto</h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Ao longo dos anos, temos sido instrumentos de transformação na vida de centenas de famílias, construindo um
            futuro melhor para nossa comunidade.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 mb-4 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl font-bold text-amber-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-amber-800 mb-2">{stat.label}</div>
                <div className="text-sm text-amber-600">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-amber-900 text-center mb-12">Histórias de Transformação</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-amber-600 mb-4" />
                  <p className="text-amber-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-amber-900">{testimonial.name}</div>
                      <div className="text-sm text-amber-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-800 to-orange-700 rounded-3xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/community-impact.jpg"
              alt="Impacto na comunidade"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Faça Parte Desta Transformação</h3>
            <p className="text-xl mb-8 opacity-90">
              Sua contribuição pode mudar a vida de uma criança e transformar uma família inteira.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-white text-amber-800 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors shadow-lg"
                onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
              >
                Torne-se um Associado
              </button>
              <button
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-800 transition-colors shadow-lg"
                onClick={() => document.getElementById("doacao")?.scrollIntoView({ behavior: "smooth" })}
              >
                Faça uma Doação
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
