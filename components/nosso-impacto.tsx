"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function NossoImpacto() {
  useScrollAnimation()

  return (
    <section className="py-20 section-accent scroll-animate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Bloco 1 */}
          <div className="mb-16 scroll-animate">
            <div className="grid lg:grid-cols-2 gap-12 items-center card-coram p-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-heading mb-6">
                  <span className="text-subheading">Turno Inverso:</span> educação transformadora em construção
                </h2>
                <p className="text-lg text-body leading-relaxed">
                  Estamos dando os primeiros passos de um sonho que vai muito além das salas de aula. Nosso projeto de
                  Turno Inverso nasceu da certeza de que cada criança merece uma
                  <strong className="text-subheading"> educação integral</strong> que forme não apenas a mente, mas o
                  coração e o caráter.
                </p>
              </div>
              <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/criancas-felizes-na-escola-primaria.jpg"
                  alt="Crianças felizes participando do projeto Turno Inverso da Coram Deo - educação transformadora"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Bloco 2 */}
          <div className="mb-16 scroll-animate">
            <div className="grid lg:grid-cols-2 gap-12 items-center card-coram p-8">
              <div className="lg:order-2">
                <h3 className="text-3xl font-bold text-heading mb-6">
                  <span className="text-subheading">Ações sociais que</span> conectam e fortalecem
                </h3>
                <p className="text-lg text-body leading-relaxed">
                  Através de oficinas, campanhas solidárias e formação de jovens líderes, criamos uma rede de apoio que
                  vai além da educação formal. Cada ação é pensada para{" "}
                  <strong className="text-subheading">fortalecer vínculos</strong> e construir uma comunidade mais unida
                  e esperançosa.
                </p>
              </div>
              <div className="lg:order-1 relative w-full h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/community-support.jpg"
                  alt="Ações sociais e apoio comunitário da Associação Coram Deo fortalecendo vínculos familiares"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Bloco 3 - Removido botão do Facebook */}
          <div className="bg-gradient-coram rounded-3xl p-8 lg:p-12 text-center text-white shadow-xl scroll-animate">
            <h3 className="text-3xl font-bold mb-6">
              Faça parte da <strong>mudança</strong>
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
              Acompanhe de perto cada passo dessa jornada. Nas nossas redes sociais, você verá histórias reais de
              transformação e poderá celebrar conosco cada conquista.
            </p>
            <div className="flex justify-center">
              <Button
                className="bg-white text-marrom-escuro hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                onClick={() => window.open("https://www.instagram.com/coramdeo.aep", "_blank")}
              >
                Siga-nos no Instagram
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
