"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Check, Star, Gift, Shield, Users } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useEffect } from "react"

// Estilos CSS para os botões Stripe
const stripeButtonStyles = `
  stripe-buy-button {
    width: 100% !important;
    max-width: 100% !important;
  }
  
  stripe-buy-button iframe {
    width: 100% !important;
    max-width: 100% !important;
    height: 40px !important;
  }
`

export default function Donation() {
  useScrollAnimation()

  // Carregar o script do Stripe
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://js.stripe.com/v3/buy-button.js"
    script.async = true
    document.head.appendChild(script)

    return () => {
      const existingScript = document.querySelector('script[src="https://js.stripe.com/v3/buy-button.js"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  // Adicionar estilos customizados para os botões Stripe
  useEffect(() => {
    const styleElement = document.createElement("style")
    styleElement.textContent = stripeButtonStyles
    document.head.appendChild(styleElement)

    return () => {
      document.head.removeChild(styleElement)
    }
  }, [])

  const planos = [
    {
      nome: "Semeador",
      valor: "30",
      buyButtonId: "buy_btn_1RaLE4DOW1JQLG44aWUNqcZd",
      beneficios: ["Boletim mensal", "Certificado digital", "Grupo WhatsApp exclusivo"],
      destaque: false,
    },
    {
      nome: "Cultivador",
      valor: "50",
      buyButtonId: "buy_btn_1RaLMuDOW1JQLG44CtgOK0pf",
      beneficios: ["Todos os benefícios anteriores", "Participação em sorteios", "Desconto em eventos"],
      destaque: true,
    },
    {
      nome: "Frutificador",
      valor: "100",
      buyButtonId: "buy_btn_1RaLRODOW1JQLG44Pp6K9LgF",
      beneficios: ["Todos os benefícios anteriores", "Relatórios de impacto", "Descontos em cursos"],
      destaque: false,
    },
  ]

  return (
    <section id="doacao" className="scroll-animate py-20 bg-white">
      <div className="scroll-animate container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-4 font-montserrat">Torne-se um Associado</h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed font-montserrat font-light">
            Sua contribuição mensal fortalece nossos projetos educacionais e transforma vidas com transparência e
            propósito.
          </p>
        </div>

        {/* Planos de Assinatura */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20 justify-items-center">
          {planos.map((plano, index) => (
            <Card
              key={index}
              className={`relative bg-white transition-all duration-300 hover:shadow-lg scroll-animate w-full max-w-sm ${
                plano.destaque ? "border-2 border-amber-600 shadow-lg" : "border border-gray-200 hover:border-amber-300"
              }`}
              style={{ borderRadius: "12px" }}
            >
              {plano.destaque && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center font-montserrat">
                    <Star className="w-3 h-3 mr-1" />
                    Recomendado
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4 px-6 pt-6">
                <CardTitle className="text-xl text-amber-900 mb-3 font-montserrat font-semibold">
                  {plano.nome}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-amber-800 font-montserrat">R$ {plano.valor}</span>
                  <span className="text-amber-600 text-sm font-montserrat font-light">/mês</span>
                </div>
              </CardHeader>

              <CardContent className="px-6 pb-6">
                <ul className="space-y-3 mb-6">
                  {plano.beneficios.map((beneficio, beneficioIndex) => (
                    <li key={beneficioIndex} className="flex items-start text-amber-700">
                      <Check className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-montserrat">{beneficio}</span>
                    </li>
                  ))}
                </ul>

                {/* Botão Stripe Nativo */}
                <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
                  <div className="w-full max-w-full">
                    <stripe-buy-button
                      buy-button-id={plano.buyButtonId}
                      publishable-key="pk_live_51Ra5wHDOW1JQLG44yDaF1z2exgm7vFCPKwIrsmJr6WZg2VlGcoLOKxRAdl5vqTXIZ44mxk8m6tl5i2xJonQ4xdhH00tfD68TkQ"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Transparência */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-16 scroll-animate">
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-amber-600" />
              <span className="text-amber-800 font-medium font-montserrat">100% Transparente</span>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="w-6 h-6 text-amber-600" />
              <span className="text-amber-800 font-medium font-montserrat">Relatórios Regulares</span>
            </div>
            <div className="flex items-center space-x-3">
              <Heart className="w-6 h-6 text-amber-600" />
              <span className="text-amber-800 font-medium font-montserrat">Impacto Real</span>
            </div>
          </div>
        </div>

        {/* Doação Livre */}
        <Card className="bg-gradient-to-r from-amber-800 to-orange-700 text-white scroll-animate">
          <CardContent className="p-8 text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-6 h-6 text-white" />
            </div>

            <h3 className="text-2xl font-bold mb-3 font-montserrat">Doação Única</h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto font-montserrat font-light">
              Prefere contribuir com um valor específico? Faça uma doação pontual sem compromisso mensal.
            </p>

            {/* Botão Stripe Nativo para Doação Única */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
              <div className="w-full max-w-xs">
                <stripe-buy-button
                  buy-button-id="buy_btn_1RaMG3DOW1JQLG44EgPUuMxJ"
                  publishable-key="pk_live_51Ra5wHDOW1JQLG44yDaF1z2exgm7vFCPKwIrsmJr6WZg2VlGcoLOKxRAdl5vqTXIZ44mxk8m6tl5i2xJonQ4xdhH00tfD68TkQ"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
