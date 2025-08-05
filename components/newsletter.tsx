"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, AlertCircle } from 'lucide-react'
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Newsletter() {
useScrollAnimation()
const [formData, setFormData] = useState({
  nome: "",
  email: "",
})
const [isSubmitting, setIsSubmitting] = useState(false)
const [submitSuccess, setSubmitSuccess] = useState(false)
const [submitError, setSubmitError] = useState("")

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  setSubmitError("")

  try {
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.error || "Erro ao cadastrar na newsletter")
    }

    setSubmitSuccess(true)
    setFormData({ nome: "", email: "" })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false)
    }, 5000)
  } catch (error) {
    console.error("Erro ao enviar newsletter:", error)
    setSubmitError(error instanceof Error ? error.message : "Ocorreu um erro. Por favor, tente novamente.")
  } finally {
    setIsSubmitting(false)
  }
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  })
}

const isFormValid = formData.nome.trim() && formData.email.trim()

return (
  <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 scroll-animate">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-heading mb-6">Assine nossa Newsletter</h2>
          <p className="text-xl text-body leading-relaxed max-w-2xl mx-auto">
            Receba em primeira mão as novidades da Coram Deo, histórias de transformação e oportunidades para fazer a
            diferença na vida de crianças e famílias.
          </p>
        </div>

        <Card className="card-coram scroll-animate">
          <CardContent className="p-8 lg:p-12">
            {submitSuccess ? (
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-heading mb-4">Inscrição Realizada!</h3>
                <p className="text-body mb-6">
                  Obrigado por se inscrever em nossa newsletter. Em breve você receberá nossas novidades e histórias
                  inspiradoras.
                </p>
                <Button onClick={() => setSubmitSuccess(false)} className="btn-outline">
                  Fazer nova inscrição
                </Button>
              </div>
            ) : (
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-heading mb-4">Fique por dentro de tudo!</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="nome" className="text-heading font-semibold">
                        Nome Completo *
                      </Label>
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className="mt-2 border-amber-200 focus:border-laranja-queimado focus:ring-laranja-queimado"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-heading font-semibold">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2 border-amber-200 focus:border-laranja-queimado focus:ring-laranja-queimado"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  {submitError && (
                    <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                      <AlertCircle className="w-5 h-5" />
                      <span className="text-sm">{submitError}</span>
                    </div>
                  )}

                  <div className="text-center">
                    <Button
                      type="submit"
                      className="btn-primary text-lg px-12 py-4"
                      disabled={isSubmitting || !isFormValid}
                    >
                      {isSubmitting ? "Cadastrando..." : "Assinar Newsletter"}
                    </Button>
                    <p className="text-xs text-muted mt-3">
                      * Campos obrigatórios. Você pode cancelar a inscrição a qualquer momento.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Informações adicionais */}
        <div className="text-center mt-8 scroll-animate">
          <p className="text-sm text-body">
            Enviamos no máximo 2 emails por mês • Seus dados estão seguros •
            <a
              href="/politica-de-privacidade"
              target="_blank"
              className="text-laranja-queimado hover:underline ml-1"
              rel="noreferrer"
            >
              Política de Privacidade
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
)
}
