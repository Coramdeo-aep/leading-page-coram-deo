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
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
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
            className="md:hidden p-2 text-marrom-escuro"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu de navegação"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#quemsomos"
              className="text-marrom-escuro hover:text-laranja-queimado font-medium transition-colors"
            >
              Quem Somos
            </Link>
            <Link
              href="#projeto"
              className="text-marrom-escuro hover:text-laranja-queimado font-medium transition-colors"
            >
              Projeto
            </Link>
            <Link
              href="#apoie"
              className="text-marrom-escuro hover:text-laranja-queimado font-medium transition-colors"
            >
              Apoie
            </Link>
            <Link
              href="#voluntariado"
              className="text-marrom-escuro hover:text-laranja-queimado font-medium transition-colors"
            >
              Voluntariado
            </Link>
            <Link
              href="#contato"
              className="text-marrom-escuro hover:text-laranja-queimado font-medium transition-colors"
            >
              Contato
            </Link>
          </nav>

          <div className="hidden md:flex">
            <Link href="#associado">
              <Button className="btn-primary">Seja um Associado</Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#quemsomos"
                className="text-marrom-escuro hover:text-laranja-queimado font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Quem Somos
              </Link>
              <Link
                href="#projeto"
                className="text-marrom-escuro hover:text-laranja-queimado font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projeto
              </Link>
              <Link
                href="#apoie"
                className="text-marrom-escuro hover:text-laranja-queimado font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Apoie
              </Link>
              <Link
                href="#voluntariado"
                className="text-marrom-escuro hover:text-laranja-queimado font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Voluntariado
              </Link>
              <Link
                href="#contato"
                className="text-marrom-escuro hover:text-laranja-queimado font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <div className="pt-4">
                <Link href="#associado">
                  <Button className="w-full btn-primary" onClick={() => setIsMenuOpen(false)}>
                    Seja um Associado
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
