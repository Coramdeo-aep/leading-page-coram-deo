"use client"

import { Button } from "@/components/ui/button"
import { Heart, Eye } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function ApoieProjeto() {
  useScrollAnimation()

  return (
    <section id="apoie" className="py-20 section-light scroll-animate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-heading mb-8">Apoie Esse Projeto</h2>
            <p className="text-xl text-body leading-relaxed max-w-2xl mx-auto">
              Apoie quem acredita na <strong className="text-subheading">educação como missão</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto scroll-animate">
            <div className="bg-gradient-coram rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <Heart className="w-16 h-16 mx-auto mb-6 text-white" />
              <h3 className="text-2xl font-bold mb-4">Quero apoiar mensalmente</h3>
              <p className="text-white/90 mb-8 leading-relaxed">
                Torne-se um associado e faça parte da transformação contínua na vida das crianças.
              </p>
              <Button
                className="w-full bg-white text-marrom-escuro hover:bg-gray-100 font-semibold py-4 text-lg"
                onClick={() => document.getElementById("associado")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ser Associado
              </Button>
            </div>

            <div className="card-coram p-8 text-marrom-escuro hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <Eye className="w-16 h-16 mx-auto mb-6 text-laranja-queimado" />
              <h3 className="text-2xl font-bold mb-4">Quero apenas acompanhar</h3>
              <p className="text-body mb-8 leading-relaxed">
                Siga nosso trabalho nas redes sociais e acompanhe as transformações que acontecem.
              </p>
              <div className="space-y-3">
                <Button
                  className="w-full btn-secondary font-semibold py-3"
                  onClick={() => window.open("https://www.instagram.com/coramdeo.aep", "_blank")}
                >
                  Instagram
                </Button>
                <Button
                  className="w-full btn-outline font-semibold py-3"
                  onClick={() => window.open("https://www.facebook.com/share/1CPh4NKWiz/", "_blank")}
                >
                  Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
