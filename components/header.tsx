"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <button onClick={scrollToTop} className="relative h-12 w-40 cursor-pointer">
              <Image
                src="/images/coramdeo-logo-new.png"
                alt="Coram Deo - Associação de Ensino Integral"
                fill
                className="object-contain"
                priority
                sizes="160px"
              />
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu de navegação">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#sobre" className="text-amber-800 hover:text-amber-600 font-medium transition-colors">
              Sobre
            </Link>
            <Link href="#programas" className="text-amber-800 hover:text-amber-600 font-medium transition-colors">
              Serviços
            </Link>
            <Link href="#doacao" className="text-amber-800 hover:text-amber-600 font-medium transition-colors">
              Doações
            </Link>
            <Link href="#contato" className="text-amber-800 hover:text-amber-600 font-medium transition-colors">
              Contato
            </Link>
          </nav>

          <div className="hidden md:flex">
            <Link href="#contato">
              <Button
                className="bg-[#4B2E2B] hover:bg-[#3A2420] text-white border-none"
                style={{ backgroundColor: "#4B2E2B" }}
              >
                Seja Associado
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#sobre"
                className="text-amber-800 hover:text-amber-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="#programas"
                className="text-amber-800 hover:text-amber-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link
                href="#doacao"
                className="text-amber-800 hover:text-amber-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Doações
              </Link>
              <Link
                href="#contato"
                className="text-amber-800 hover:text-amber-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <div className="pt-4">
                <Link href="#contato">
                  <Button
                    className="w-full bg-[#4B2E2B] hover:bg-[#3A2420] text-white border-none"
                    style={{ backgroundColor: "#4B2E2B" }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Seja Associado
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
