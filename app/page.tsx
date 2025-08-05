import Header from "@/components/header"
import Hero from "@/components/hero"
import QuemSomos from "@/components/quem-somos"
import ComoAtuamos from "@/components/como-atuamos"
import ApoieProjeto from "@/components/apoie-projeto"
import NossoImpacto from "@/components/nosso-impacto"
import Voluntariado from "@/components/voluntariado"
import TorneSeAssociado from "@/components/torne-se-associado"
import Contato from "@/components/contato"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <QuemSomos />
      <ComoAtuamos />
      <ApoieProjeto />
      <NossoImpacto />
      <Voluntariado />
      <TorneSeAssociado />
      <Contato />
      <Newsletter />
      <Footer />
      <CookieBanner />
    </main>
  )
}
