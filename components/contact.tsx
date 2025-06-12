"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Users, Heart } from "lucide-react"
import { trackContact } from "@/lib/analytics"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Contact() {
  useScrollAnimation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [emailWarning, setEmailWarning] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")
    setEmailWarning("")

    try {
      // Track form submission
      trackContact(formData.interest)

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Erro ao enviar mensagem")
      }

      // Verificar se houve problema com o email
      if (result.emailStatus === "failed") {
        setEmailWarning(
          "Sua mensagem foi recebida, mas houve um problema ao enviar o email de confirmação. Entraremos em contato em breve.",
        )
      }

      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      })
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      setSubmitError(
        error instanceof Error ? error.message : "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contato" className="scroll-animate py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Entre em Contato</h2>
          <p className="text-lg md:text-xl text-amber-700 max-w-3xl mx-auto">
            Estamos aqui para esclarecer suas dúvidas e ajudá-lo a fazer parte desta missão de transformação através da
            educação cristã.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="scroll-animate shadow-xl order-1 lg:order-1">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-900 text-center">Fale Conosco</CardTitle>
            </CardHeader>
            <CardContent>
              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Mensagem Enviada!</h3>
                  <p className="mb-4">Obrigado pelo seu contato. Retornaremos em breve.</p>
                  {emailWarning && (
                    <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-3 rounded mb-4">
                      {emailWarning}
                    </div>
                  )}
                  <Button
                    onClick={() => setSubmitSuccess(false)}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    Enviar nova mensagem
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="interest">Interesse Principal</Label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="associado">Tornar-se Associado</option>
                      <option value="voluntario">Ser Voluntário</option>
                      <option value="doacao">Fazer Doações</option>
                      <option value="matricula">Matrícula de Aluno</option>
                      <option value="parceria">Parceria Empresarial</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="mt-1"
                      placeholder="Conte-nos como podemos ajudá-lo..."
                    />
                  </div>

                  {submitError && <div className="text-red-600 text-sm p-2 bg-red-50 rounded-md">{submitError}</div>}

                  <Button
                    type="submit"
                    className="w-full bg-amber-800 hover:bg-amber-700 text-white py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </Button>

                  <p className="text-sm text-amber-600 text-center">
                    * Campos obrigatórios. Responderemos em até 24 horas.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-2">
            <Card className="scroll-animate bg-gradient-to-br from-amber-50 to-orange-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-6">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-amber-600 mt-1" />
                    <div>
                      <div className="font-semibold text-amber-900">Endereço</div>
                      <div className="text-amber-700">
                        Rua Romano Albe, 987
                        <br />
                        Bairro São José
                        <br />
                        Caxias do Sul, RS
                        <br />
                        CEP: 95042-740
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-amber-600 mt-1" />
                    <div>
                      <div className="font-semibold text-amber-900">WhatsApp</div>
                      <div className="text-amber-700">
                        <a
                          href="https://wa.me/5554999501468?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Coram%20Deo."
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          (54) 9 9950-1468
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-amber-600 mt-1" />
                    <div>
                      <div className="font-semibold text-amber-900">E-mail</div>
                      <div className="text-amber-700">contato@coramdeo.site</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-amber-600 mt-1" />
                    <div>
                      <div className="font-semibold text-amber-900">Horário de Funcionamento</div>
                      <div className="text-amber-700">
                        Segunda a Sexta: 7h às 17h
                        <br />
                        Sábado: 8h às 12h
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="scroll-animate bg-gradient-to-r from-amber-800 to-orange-700 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Como Você Pode Ajudar</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5" />
                    <span>Torne-se um associado e apoie nossa missão</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5" />
                    <span>Faça doações regulares ou pontuais</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5" />
                    <span>Seja voluntário em nossos programas</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="scroll-animate">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-amber-900 mb-4">Localização</h3>
                <div className="bg-amber-100 rounded-lg overflow-hidden h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.0979087739473!2d-51.19042992414868!3d-29.16978197499649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ea3a5e9e0c0e7%3A0x9f3d1c2c2f83b0b8!2sR.%20Romano%20Albe%2C%20987%20-%20S%C3%A3o%20Jos%C3%A9%2C%20Caxias%20do%20Sul%20-%20RS%2C%2095042-740!5e0!3m2!1spt-BR!2sbr!4v1718997654321!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Coram Deo"
                    aria-label="Mapa mostrando a localização da Coram Deo"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
