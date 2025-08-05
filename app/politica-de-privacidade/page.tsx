import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: "Política de Privacidade | Coram Deo - Associação de Ensino Integral",
  description: "Política de Privacidade da Associação Coram Deo conforme a LGPD. Saiba como protegemos seus dados pessoais.",
  robots: { index: true, follow: true },
}

export default function PoliticaPrivacidade() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header simples */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-marrom-escuro hover:text-laranja-queimado transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar ao site
          </Link>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-laranja-queimado mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-heading mb-4">Política de Privacidade</h1>
            <p className="text-xl text-body">Associação Coram Deo</p>
            <p className="text-sm text-muted mt-2">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
          </div>

          {/* Conteúdo da política */}
          <div className="card-coram p-8 lg:p-12 space-y-8">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
              <p className="text-body leading-relaxed">
                A Associação Coram Deo respeita sua privacidade e está em conformidade com a Lei nº 13.709/2018 (LGPD).
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">1. Quais dados coletamos</h2>
              <p className="text-body leading-relaxed">
                Coletamos nome e e-mail apenas para manter contato institucional.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">2. Como usamos seus dados</h2>
              <p className="text-body leading-relaxed">
                Para enviar informações da associação e processar doações via Stripe.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">3. Compartilhamento de dados</h2>
              <p className="text-body leading-relaxed">
                Seus dados podem ser compartilhados com o Stripe, que processa pagamentos de forma segura. Não vendemos ou repassamos seus dados a terceiros.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">4. Segurança</h2>
              <p className="text-body leading-relaxed">
                Todas as conexões utilizam HTTPS e seus dados são tratados com confidencialidade.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">5. Seus direitos</h2>
              <p className="text-body leading-relaxed">
                Você pode solicitar correção, acesso ou exclusão de dados a qualquer momento pelo e-mail:{" "}
                <a href="mailto:contato@coramdeo.site" className="text-laranja-queimado hover:underline">
                  contato@coramdeo.site
                </a>
              </p>
            </section>

            {/* Assinatura */}
            <div className="border-t border-gray-200 pt-8 mt-12">
              <div className="text-center">
                <p className="text-lg font-semibold text-heading mb-2">Associação de Ensino Integral Coram Deo</p>
                <p className="text-muted">CNPJ: 10.730.868/0001-09</p>
                <p className="text-muted">Caxias do Sul, RS - Brasil</p>
              </div>
            </div>
          </div>

          {/* Botão de retorno */}
          <div className="text-center mt-12">
            <Link href="/" className="btn-primary inline-flex items-center">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao site principal
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
