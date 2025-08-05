"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Copy, CheckCircle, QrCode } from "lucide-react"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function TorneSeAssociado() {
  useScrollAnimation()
  const [copied, setCopied] = useState(false)
  const pixKey = "10.730.868/0001-09"

  const copyPixKey = () => {
    navigator.clipboard.writeText(pixKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const niveis = [
    {
      nome: "Semeador",
      valor: "R$ 30,00",
      descricao: "Plante a semente da transformação",
      link: "https://buy.stripe.com/eVq28r9J55qO7hb6sw0Ny00",
    },
    {
      nome: "Cultivador",
      valor: "R$ 50,00",
      descricao: "Cultive o crescimento das crianças",
      destaque: true,
      link: "https://buy.stripe.com/eVq4gz5sP2eC5930480Ny01",
    },
    {
      nome: "Frutificador",
      valor: "R$ 100,00",
      descricao: "Colha os frutos da educação integral",
      link: "https://buy.stripe.com/9B68wPdZl7yW30V3gk0Ny02",
    },
  ]

  return (
    <section id="associado" className="py-20 section-subtle scroll-animate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-heading mb-6">Torne-se um Associado</h2>
            <p className="text-xl text-body leading-relaxed max-w-3xl mx-auto">
              Escolha a forma que mais combina com você para apoiar a
              <strong className="text-subheading"> educação transformadora</strong> da Coram Deo.
            </p>
          </div>

          {/* Níveis de Apoio */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {niveis.map((nivel, index) => (
              <Card
                key={index}
                className={`${
                  nivel.destaque ? "bg-gradient-coram text-white shadow-2xl scale-105" : "card-coram"
                } transition-all duration-300 hover:-translate-y-1 scroll-animate`}
              >
                <CardContent className="p-8 text-center">
                  <h3 className={`text-2xl font-bold mb-4 ${nivel.destaque ? "text-white" : "text-heading"}`}>
                    {nivel.nome}
                  </h3>
                  <div className={`text-4xl font-bold mb-4 ${nivel.destaque ? "text-white" : "text-subheading"}`}>
                    {nivel.valor}
                  </div>
                  <p className={`mb-8 ${nivel.destaque ? "text-white/90" : "text-body"}`}>{nivel.descricao}</p>
                  <Button
                    className={`w-full ${
                      nivel.destaque ? "bg-white text-marrom-escuro hover:bg-gray-100" : "btn-primary"
                    } font-semibold py-3 text-lg`}
                    onClick={() => window.open(nivel.link, "_blank")}
                  >
                    Apoiar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Área PIX */}
          <Card className="card-coram scroll-animate">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <QrCode className="w-16 h-16 text-laranja-queimado mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-heading mb-4">Apoie via PIX</h3>
                <p className="text-body">Para doações pontuais ou mensais, use nossa chave PIX</p>
              </div>

              <div className="max-w-md mx-auto">
                <div className="bg-cinza-claro p-6 rounded-lg border-2 border-gray-200 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-lg text-marrom-escuro">{pixKey}</span>
                    <Button onClick={copyPixKey} className="btn-outline text-sm px-4 py-2">
                      {copied ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Copiado!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copiar chave PIX
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm text-muted mb-4">
                    Chave CNPJ: <strong>{pixKey}</strong>
                  </p>
                  <Button
                    className="btn-secondary"
                    onClick={() => {
                      const phone = "5554999501468"
                      const message =
                        "Olá! Realizei uma doação via PIX para a Coram Deo e gostaria de enviar o comprovante."
                      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
                    }}
                  >
                    Enviar comprovante via WhatsApp
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
