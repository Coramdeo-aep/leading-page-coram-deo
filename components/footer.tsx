import Link from "next/link"
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <a
                href="https://wa.me/554999501468"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-[#F9F5F2] border-2 border-[#4B2E2B] text-[#4B2E2B] rounded-lg hover:bg-[#4B2E2B] hover:text-[#F9F5F2] transition-all duration-300 shadow-md hover:shadow-lg font-medium"
                aria-label="Fale conosco via WhatsApp"
              >
                <Phone className="w-4 h-4 mr-2" />
                Fale Conosco
              </a>
            </div>
            <p className="text-amber-200 text-sm leading-relaxed">
              Transformando vidas através da educação cristã de qualidade, formação de caráter e acolhimento social há
              mais de 15 anos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#sobre" className="text-amber-200 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#programas" className="text-amber-200 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#doacao" className="text-amber-200 hover:text-white transition-colors">
                  Doações
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-amber-200 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-amber-200">Programa de Bolsas</span>
              </li>
              <li>
                <span className="text-amber-200">Palestras e Treinamentos</span>
              </li>
              <li>
                <span className="text-amber-200">Eventos Educacionais</span>
              </li>
              <li>
                <span className="text-amber-200">Acolhimento Social</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-300 mt-0.5 flex-shrink-0" />
                <span className="text-amber-200">
                  Rua Romano Albe, 987
                  <br />
                  Bairro São José
                  <br />
                  Caxias do Sul, RS - CEP: 95042-740
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-300" />
                <a
                  href="https://wa.me/5554999501468?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Coram%20Deo."
                  className="text-amber-200 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (54) 9 9950-1468
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-300" />
                <span className="text-amber-200">contato@coramdeo.site</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Siga-nos</h5>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/share/1CPh4NKWiz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/coramdeo.aep?igsh=MTRqanczdDI5NDhlbg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/5554999501468?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Coram%20Deo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                  aria-label="WhatsApp"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-200 text-sm">
            © {new Date().getFullYear()} Coram Deo - Associação de Ensino Integral. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
