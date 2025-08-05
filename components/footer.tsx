import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, MessageCircle, ExternalLink, Shield } from 'lucide-react'

export default function Footer() {
return (
  <footer className="bg-marrom-escuro text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo e Frase Institucional */}
        <div className="lg:col-span-2">
          <div className="flex items-center space-x-3 mb-4">
            <div className="relative h-12 w-40">
              <Image
                src="/images/coramdeo-logo-new.png"
                alt="Coram Deo - Associação de Ensino Integral"
                fill
                className="object-contain brightness-0 invert"
                sizes="160px"
              />
            </div>
          </div>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            <strong className="text-laranja-queimado">Formando vidas</strong> com esperança, fé e direção
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            A Coram Deo é uma associação cristã dedicada à educação integral, transformando vidas através de
            princípios bíblicos e amor ao próximo.
          </p>
        </div>

        {/* Links Úteis */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-laranja-queimado">Links Úteis</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#quemsomos" className="text-gray-300 hover:text-white transition-colors">
                Quem Somos
              </Link>
            </li>
            <li>
              <Link href="#associado" className="text-gray-300 hover:text-white transition-colors">
                Associados
              </Link>
            </li>
            <li>
              <Link href="#voluntariado" className="text-gray-300 hover:text-white transition-colors">
                Voluntariado
              </Link>
            </li>
            <li>
              <Link href="#contato" className="text-gray-300 hover:text-white transition-colors">
                Contato
              </Link>
            </li>
            <li>
              <Link
                href="/politica-de-privacidade"
                className="text-gray-300 hover:text-white transition-colors flex items-center"
              >
                <Shield className="w-4 h-4 mr-2" />
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </div>

        {/* Redes Sociais e Portal */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-laranja-queimado">Conecte-se</h4>
          <div className="space-y-3 mb-6">
            <a
              href="https://www.instagram.com/coramdeo.aep"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span className="text-sm">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/share/1CPh4NKWiz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <Facebook className="w-4 h-4" />
              <span className="text-sm">Facebook</span>
            </a>
            <a
              href="https://wa.me/5554999501468"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">WhatsApp</span>
            </a>
          </div>

          <a
            href="https://billing.stripe.com/p/login/eVq28r9J55qO7hb6sw0Ny00"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-laranja-queimado hover:text-yellow-300 transition-colors text-sm font-semibold"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Portal do Associado</span>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Coram Deo - Associação de Ensino Integral. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-400">CNPJ: 10.730.868/0001-09</p>
        </div>
      </div>
    </div>
  </footer>
)
}
