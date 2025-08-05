import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Shield, Eye, Mail, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Política de Privacidade | Coram Deo - Associação de Ensino Integral",
  description:
    "Política de Privacidade da Associação Coram Deo. Saiba como protegemos seus dados pessoais e respeitamos sua privacidade conforme a LGPD.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Política de Privacidade | Coram Deo",
    description: "Conheça nossa política de privacidade e como protegemos seus dados pessoais.",
    url: "https://coramdeo.site/politica-privacidade",
  },
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
            <p className="text-xl text-body">Transparência e respeito aos seus dados pessoais</p>
            <p className="text-sm text-muted mt-2">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
          </div>

          {/* Conteúdo da política */}
          <div className="card-coram p-8 lg:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-heading mb-4 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-laranja-queimado" />
                Quem somos
              </h2>
              <p className="text-body leading-relaxed">
                A <strong>Associação de Ensino Integral Coram Deo</strong> (CNPJ: 10.730.868/0001-09) é uma organização
                cristã sem fins lucrativos, localizada na Rua Romano Albe, 987, Bairro São José, Caxias do Sul, RS, CEP:
                95042-740.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Uso de Cookies</h2>
              <p className="text-body leading-relaxed mb-4">Nosso site utiliza cookies para:</p>
              <ul className="list-disc list-inside text-body space-y-2 ml-4">
                <li>Melhorar sua experiência de navegação</li>
                <li>Lembrar suas preferências de consentimento</li>
                <li>Analisar o tráfego do site para melhorias</li>
                <li>Garantir o funcionamento adequado de formulários de contato</li>
              </ul>
              <p className="text-body leading-relaxed mt-4">
                Você pode gerenciar ou desativar os cookies através das configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Coleta de Dados</h2>
              <p className="text-body leading-relaxed mb-4">Coletamos apenas as informações necessárias quando você:</p>
              <ul className="list-disc list-inside text-body space-y-2 ml-4">
                <li>Preenche nossos formulários de contato</li>
                <li>Se inscreve para receber informações</li>
                <li>Envia comprovantes de doação</li>
                <li>Manifesta interesse em ser voluntário ou associado</li>
              </ul>
              <p className="text-body leading-relaxed mt-4">
                Os dados típicos incluem: nome, e-mail, telefone e mensagem (quando fornecidos voluntariamente).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Uso dos Dados</h2>
              <p className="text-body leading-relaxed mb-4">Utilizamos seus dados exclusivamente para:</p>
              <ul className="list-disc list-inside text-body space-y-2 ml-4">
                <li>Responder às suas solicitações e dúvidas</li>
                <li>Enviar informações sobre nossos programas e atividades</li>
                <li>Processar doações e emitir recibos</li>
                <li>Manter contato sobre oportunidades de voluntariado</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Compartilhamento de Dados</h2>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                <p className="text-body leading-relaxed font-semibold">
                  <strong>Garantia:</strong> Seus dados pessoais NÃO são compartilhados, vendidos ou cedidos a terceiros
                  para fins comerciais ou publicitários.
                </p>
              </div>
              <p className="text-body leading-relaxed mt-4">
                Compartilhamos informações apenas quando necessário para o funcionamento de nossos serviços (como
                processamento de pagamentos) ou quando exigido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Seus Direitos (LGPD)</h2>
              <p className="text-body leading-relaxed mb-4">
                Conforme a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
              </p>
              <ul className="list-disc list-inside text-body space-y-2 ml-4">
                <li>Saber quais dados pessoais temos sobre você</li>
                <li>Solicitar a correção de dados incompletos ou incorretos</li>
                <li>Pedir a exclusão de seus dados pessoais</li>
                <li>Revogar seu consentimento a qualquer momento</li>
                <li>Solicitar a portabilidade de seus dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Segurança</h2>
              <p className="text-body leading-relaxed">
                Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso
                não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Contato</h2>
              <p className="text-body leading-relaxed mb-6">
                Para exercer seus direitos, esclarecer dúvidas ou fazer solicitações sobre esta política, entre em
                contato conosco:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Mail className="w-6 h-6 text-laranja-queimado" />
                  <div>
                    <p className="font-semibold text-heading">E-mail</p>
                    <a href="mailto:contato@coramdeo.site" className="text-laranja-queimado hover:underline">
                      contato@coramdeo.site
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-heading">WhatsApp</p>
                    <a
                      href="https://wa.me/5554999501468?text=Olá,%20tenho%20uma%20dúvida%20sobre%20privacidade%20de%20dados."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      (54) 9 9950-1468
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading mb-4">Alterações</h2>
              <p className="text-body leading-relaxed">
                Esta política pode ser atualizada periodicamente. Recomendamos que você a revise regularmente.
                Alterações significativas serão comunicadas através de nossos canais oficiais.
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
