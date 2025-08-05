"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Heart, User, Users } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function ComoAtuamos() {
  useScrollAnimation()

  const atuacoes = [
    {
      icon: BookOpen,
      title: "Acompanhamento pedagógico",
      description: "Reforço escolar personalizado com metodologia que respeita o ritmo de cada criança",
    },
    {
      icon: Heart,
      title: "Princípios cristãos em ação",
      description: "Valores bíblicos aplicados no dia a dia, formando caráter e identidade",
    },
    {
      icon: User,
      title: "Atenção individualizada",
      description: "Cada criança é única e recebe cuidado específico para seu desenvolvimento",
    },
    {
      icon: Users,
      title: "Ambiente de vínculo e afeto",
      description: "Espaço seguro onde relacionamentos saudáveis florescem e transformam",
    },
  ]

  return (
    <section id="projeto" className="py-20 section-subtle scroll-animate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-heading mb-6">Como Atuamos</h2>
          <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed">
            Nossa abordagem integral combina educação de qualidade com formação de caráter, criando um ambiente onde
            cada criança pode florescer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {atuacoes.map((item, index) => (
            <Card key={index} className="card-coram scroll-animate">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-marrom-escuro rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-heading mb-4">{item.title}</h3>
                <p className="text-body leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
