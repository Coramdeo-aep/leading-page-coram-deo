"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageCircle, MapPin, Instagram, Facebook } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Contato() {
  useScrollAnimation()

  return (
    <section id="contato" className="py-20 section-light scroll-animate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-heading mb-6">Entre em Contato</h2>
            <p className="text-xl text-body leading-relaxed">
              Estamos aqui para esclarecer suas dúvidas e ajudá-lo a fazer parte desta{" "}
              <strong className="text-subheading">missão transformadora</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* E-mail */}
            <Card className="card-coram scroll-animate">
              <CardContent className="p-6 text-center">
                <Mail className="w-12 h-12 text-laranja-queimado mx-auto mb-4" />
                <h3 className="text-lg font-bold text-heading mb-2">E-mail</h3>
                <p className="text-muted text-sm">contato@coramdeo.site</p>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="card-coram scroll-animate">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-heading mb-2">WhatsApp</h3>
                <a
                  href="https://wa.me/5554999501468"
                  className="text-green-600 text-sm hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (54) 9 9950-1468
                </a>
              </CardContent>
            </Card>

            {/* Instagram */}
            <Card className="card-coram scroll-animate">
              <CardContent className="p-6 text-center">
                <Instagram className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-heading mb-2">Instagram</h3>
                <a
                  href="https://www.instagram.com/coramdeo.aep"
                  className="text-pink-600 text-sm hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @coramdeo.aep
                </a>
              </CardContent>
            </Card>

            {/* Facebook */}
            <Card className="card-coram scroll-animate">
              <CardContent className="p-6 text-center">
                <Facebook className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-heading mb-2">Facebook</h3>
                <a
                  href="https://www.facebook.com/share/1CPh4NKWiz/"
                  className="text-blue-600 text-sm hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coram Deo
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Endereço com Google Maps */}
          <Card className="card-coram scroll-animate">
            <CardContent className="p-0 overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Informações do endereço */}
                <div className="p-8">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-8 h-8 text-laranja-queimado mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-heading mb-4">Nosso Endereço</h3>
                      <div className="space-y-2 text-body leading-relaxed">
                        <p className="font-semibold">Rua Romano Albe, 987</p>
                        <p>Bairro São José</p>
                        <p>Caxias do Sul, RS</p>
                        <p>CEP: 95042-740</p>
                      </div>
                      <div className="mt-6">
                        <a
                          href="https://maps.google.com/?q=Rua+Romano+Albe,+987,+São+José,+Caxias+do+Sul,+RS"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-laranja-queimado hover:underline font-medium text-sm"
                        >
                          Ver mapa ampliado
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Maps */}
                <div className="h-80 lg:h-full min-h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.0979087739473!2d-51.19042992414868!3d-29.16978197499649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ea3a5e9e0c0e7%3A0x9f3d1c2c2f83b0b8!2sR.%20Romano%20Albe%2C%20987%20-%20S%C3%A3o%20Jos%C3%A9%2C%20Caxias%20do%20Sul%20-%20RS%2C%2095042-740!5e0!3m2!1spt-BR!2sbr!4v1718997654321!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Coram Deo - Rua Romano Albe, 987, São José, Caxias do Sul, RS"
                    aria-label="Mapa mostrando a localização da Coram Deo"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
