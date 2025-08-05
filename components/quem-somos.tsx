"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function QuemSomos() {
  useScrollAnimation()

  return (
    <section id="quemsomos" className="py-20 section-light scroll-animate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-heading mb-8">
              Educação que forma. <span className="text-subheading">Um caminho com propósito.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="scroll-animate">
              <div className="space-y-6 text-lg text-body leading-relaxed">
                <p>
                  A Coram Deo é uma associação cristã que atua na área da educação com uma abordagem integral: mente,
                  corpo e espírito.
                </p>
                <p>
                  Acreditamos que toda criança precisa mais do que conteúdo: precisa de direção, vínculo e propósito.
                </p>
                <p>
                  Por isso, desenvolvemos o modelo <strong className="text-subheading">Turno Inverso</strong> — reforço
                  escolar com acompanhamento pedagógico, princípios cristãos e convivência que transforma.
                </p>
                <p>Nossos educadores não apenas ensinam: caminham junto, escutam, orientam e cuidam.</p>
              </div>
            </div>
            <div className="scroll-animate">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/children-studying.jpg"
                  alt="Crianças estudando com alegria no programa educacional da Coram Deo - educação integral cristã"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          <div className="card-coram p-8 lg:p-12 text-center scroll-animate">
            <h3 className="text-3xl font-bold text-heading mb-6">
              <span className="text-subheading">Formar vidas</span> com direção e esperança
            </h3>
            <p className="text-xl text-body mb-8 max-w-3xl mx-auto leading-relaxed">
              Nossa missão é formar crianças e adolescentes com propósito, caráter e{" "}
              <strong className="text-subheading">esperança viva</strong>.
            </p>
            <Button
              className="btn-primary text-lg px-10 py-5"
              onClick={() => document.getElementById("associado")?.scrollIntoView({ behavior: "smooth" })}
            >
              Quero fazer parte
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
