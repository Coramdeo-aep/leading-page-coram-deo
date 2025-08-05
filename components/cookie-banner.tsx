"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Cookie } from 'lucide-react'

export default function CookieBanner() {
const [isVisible, setIsVisible] = useState(false)

useEffect(() => {
  // Verificar se o usuário já aceitou os cookies
  const cookieConsent = localStorage.getItem("cookieConsent")
  if (!cookieConsent) {
    setIsVisible(true)
  }
}, [])

const acceptCookies = () => {
  localStorage.setItem("cookieConsent", "accepted")
  setIsVisible(false)
}

const closeBanner = () => {
  setIsVisible(false)
}

if (!isVisible) return null

return (
  <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in slide-in-from-bottom-2">
    <div className="bg-white border border-amber-200 rounded-lg shadow-xl p-6">
      <div className="flex items-start space-x-3">
        <Cookie className="w-6 h-6 text-laranja-queimado flex-shrink-0 mt-1" />
        <div className="flex-1">
          <p className="text-sm text-body leading-relaxed mb-4">
            Usamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
            <a
              href="/politica-de-privacidade"
              target="_blank"
              rel="noopener noreferrer"
              className="text-laranja-queimado hover:underline font-medium"
            >
              Política de Privacidade
            </a>
            .
          </p>
          <div className="flex items-center space-x-3">
            <Button onClick={acceptCookies} className="btn-secondary text-sm px-4 py-2">
              Aceitar
            </Button>
            <button
              onClick={closeBanner}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Fechar banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}
