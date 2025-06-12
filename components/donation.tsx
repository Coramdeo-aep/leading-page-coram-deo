"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Copy, Smartphone, Building, CheckCircle, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Donation() {
  useScrollAnimation()
  const [copied, setCopied] = useState(false)

  const pixKey = "10.730.868/0001-09"

  const copyPixKey = () => {
    navigator.clipboard.writeText(pixKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const sendWhatsApp = () => {
    const phone = "5554999501468"
    const message = "Olá, realizei uma doação para a Coram Deo e gostaria de enviar o comprovante."
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section id="doacao" className="scroll-animate py-16 md:py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="scroll-animate container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-animate text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Faça uma Doação para a Coram Deo</h2>
          <p className="text-lg md:text-xl text-amber-700 max-w-3xl mx-auto">
            As doações à Coram Deo podem ser realizadas via PIX ou depósito bancário. Sua generosidade é fundamental
            para continuarmos transformando vidas através da educação cristã.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* PIX Information */}
          <Card className="scroll-animate bg-white shadow-xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-amber-900">Como Doar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* PIX Section */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Smartphone className="w-6 h-6 text-amber-600" />
                  <h3 className="text-xl font-semibold text-amber-900">PIX (Recomendado)</h3>
                </div>
                <p className="text-amber-700 mb-4">
                  Para facilitar, disponibilizamos a chave PIX (CNPJ), que pode ser copiada diretamente:
                </p>
                <div className="bg-white p-4 rounded-lg border-2 border-amber-200">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-lg text-amber-900">{pixKey}</span>
                    <Button
                      onClick={copyPixKey}
                      variant="outline"
                      size="sm"
                      className="border-amber-800 text-amber-800 hover:bg-amber-50"
                    >
                      {copied ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Copiado!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copiar
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Bank Transfer Section */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Building className="w-6 h-6 text-amber-600" />
                  <h3 className="text-xl font-semibold text-amber-900">Depósito Bancário</h3>
                </div>
                <p className="text-amber-700">
                  Entre em contato conosco pelo WhatsApp ou e-mail para receber os dados bancários para depósito.
                </p>
              </div>

              {/* WhatsApp Instructions */}
              <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-green-800">Após realizar sua doação</h3>
                </div>
                <p className="text-green-700 mb-4">
                  <strong>Envie o comprovante para nosso WhatsApp:</strong>
                </p>
                <div className="flex flex-col items-center space-y-3">
                  <Button
                    onClick={sendWhatsApp}
                    className="w-full max-w-xs bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-base shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    
                    Clique aqui para enviar via WhatsApp
                  </Button>
                  <p className="text-green-600 mt-3 font-semibold">Número: (54) 9 9950-1468</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="scroll-animate mt-12 text-center">
          <Card className="bg-gradient-to-r from-amber-800 to-orange-700 text-white max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Transparência e Confiança</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Sua Doação Faz a Diferença</h4>
                  <ul className="space-y-1 text-left">
                    <li>• 100% das doações vão para os programas educacionais</li>
                    <li>• Transparência total no uso dos recursos</li>
                    <li>• Recibo oficial para dedução no Imposto de Renda</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Formas de Doação Aceitas</h4>
                  <ul className="space-y-1 text-left">
                    <li>• PIX (CNPJ): 10.730.868/0001-09</li>
                    <li>• Depósito bancário (solicite os dados)</li>
                    <li>• Doações mensais ou pontuais</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
