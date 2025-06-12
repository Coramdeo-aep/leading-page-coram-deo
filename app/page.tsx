import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Values from "@/components/values"
import Services from "@/components/services"
import Donation from "@/components/donation"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Values />
      <Services />
      <Donation />
      <Contact />
      <Footer />
    </main>
  )
}
