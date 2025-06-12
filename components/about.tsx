"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function About() {
  useScrollAnimation()
  return (
    <section id="sobre" className="py-20 bg-white scroll-animate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 scroll-animate">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl font-bold text-amber-900 mb-4 scroll-animate">Nossa Missão</h2>
          <p className="text-xl text-amber-700 max-w-4xl mx-auto leading-relaxed scroll-animate">
            Promover uma formação integral fundamentada em princípios cristãos, fortalecendo famílias e impactando
            gerações com excelência, verdade e propósito.
          </p>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 lg:p-12 scroll-animate">
          <div className="grid lg:grid-cols-2 gap-12 items-center scroll-animate">
            <div className="scroll-animate">
              <h3 className="text-3xl font-bold text-amber-900 mb-6 scroll-animate">Nossa História</h3>
              <div className="space-y-4 text-amber-700 scroll-animate">
                <p className="scroll-animate">
                  Fundada em 2009, a Associação de Ensino Integral Coram Deo nasceu do sonho de transformar vidas
                  através da educação cristã de qualidade.
                </p>
                <p className="scroll-animate">
                  Nossa metodologia única combina excelência acadêmica com formação espiritual, preparando nossos alunos
                  para serem agentes de transformação em suas comunidades.
                </p>
              </div>
            </div>
            <div className="relative scroll-animate">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg scroll-animate">
                <Image
                  src="/images/community-support.jpg"
                  alt="Comunidade unida - jovens apoiando uns aos outros com esperança no futuro"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
