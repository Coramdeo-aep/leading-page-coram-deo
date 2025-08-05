"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, MessageCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Voluntariado() {
  useScrollAnimation()

  return (
    <section id="voluntariado" className="py-20 section-light scroll-animate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-12 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-heading mb-8">Quer servir com a gente?</h2>
            <p className="text-xl text-body leading-relaxed">
              Se você sente no coração que pode doar tempo, dons e presença,
              <strong className="text-subheading"> queremos te ouvir</strong>.
            </p>
          </div>

          <Card className="card-coram scroll-animate">
            <CardContent className="p-8 lg:p-12">
              <Heart className="w-16 h-16 text-laranja-queimado mx-auto mb-8" />
              <p className="text-lg text-body mb-8 leading-relaxed">
                Acreditamos que cada pessoa tem algo único para oferecer. Seja ensinando, cuidando, organizando ou
                simplesmente estando presente, seu <strong className="text-subheading">coração voluntário</strong> pode
                fazer toda a diferença na vida de uma criança.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="btn-primary text-lg px-8 py-4 flex items-center justify-center"
                  onClick={() => {
                    const phone = "5554999501468"
                    const message =
                      "Olá! Tenho interesse em ser voluntário na Coram Deo. Gostaria de saber mais sobre as oportunidades."
                    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
                  }}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </Button>
                <Button
                  className="btn-outline text-lg px-8 py-4"
                  onClick={() => window.open("https://forms.gle/pkuKbd92K3Ztn2Bz6", "_blank")}
                >
                  Me cadastrar como voluntário
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
