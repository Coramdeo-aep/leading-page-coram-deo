"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useScrollDirection } from "@/hooks/use-scroll-direction"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isVisible } = useScrollDirection()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <header
      className={`bg-white/95 backdrop-blur-md shadow-sm fixed top-0 z-50 w-full transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
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
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu de navegação"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#sobre"
              className="text-amber-800 hover:text-amber-600 font-medium transition-colors relative group font-montserrat"
            >
              Sobre
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#programas"
              className="text-amber-800 hover:text-amber-600 font-medium transition-colors relative group font-montserrat"
            >
              Ações Sociais
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#doacao"
              className="text-amber-800 hover:text-amber-600 font-medium transition-colors relative group font-montserrat"
            >
              Doações
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#contato"
              className="text-amber-800 hover:text-amber-600 font-medium transition-colors relative group font-montserrat"
            >
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="hidden md:flex">
            <Link href="#contato">
              <Button
                className="bg-[#4B2E2B] hover:bg-[#3A2420] text-white border-none font-montserrat font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ backgroundColor: "#4B2E2B" }}
              >
                Faça Parte
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-gray-200 pt-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#sobre"
                className="text-amber-800 hover:text-amber-600 font-medium transition-colors py-2 px-4 rounded-lg hover:bg-amber-50 font-montserrat"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="#programas"
                className="text-amber-800 hover:text-amber-600 font-medium transition-colors py-2 px-4 rounded-lg hover:bg-amber-50 font-montserrat"
                onClick={() => setIsMenuOpen(false)}
              >
                Ações Sociais
              </Link>
              <Link
                href="#doacao"
                className="text-amber-800 hover:text-amber-600 font-medium transition-colors py-2 px-4 rounded-lg hover:bg-amber-50 font-montserrat"
                onClick={() => setIsMenuOpen(false)}
              >
                Doações
              </Link>
              <Link
                href="#contato"
                className="text-amber-800 hover:text-amber-600 font-medium transition-colors py-2 px-4 rounded-lg hover:bg-amber-50 font-montserrat"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <div className="pt-4">
                <Link href="#contato">
                  <Button
                    className="w-full bg-[#4B2E2B] hover:bg-[#3A2420] text-white border-none font-montserrat font-medium"
                    style={{ backgroundColor: "#4B2E2B" }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Faça Parte
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
