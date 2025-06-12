import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Home, Utensils, Music, Palette, Users } from "lucide-react"

export default function Programs() {
  const programs = [
    {
      icon: GraduationCap,
      title: "Educação Fundamental",
      description: "Ensino de qualidade do 1º ao 9º ano com metodologia cristã inovadora.",
      features: [
        "Currículo baseado em princípios bíblicos",
        "Acompanhamento individualizado",
        "Atividades extracurriculares",
      ],
    },
    {
      icon: Home,
      title: "Apoio Familiar",
      description: "Suporte integral às famílias em situação de vulnerabilidade social.",
      features: ["Orientação familiar", "Assistência social", "Capacitação profissional"],
    },
    {
      icon: Utensils,
      title: "Alimentação Escolar",
      description: "Refeições nutritivas e balanceadas para todos os nossos alunos.",
      features: ["Cardápio nutricional", "Educação alimentar", "Horta escolar"],
    },
    {
      icon: Music,
      title: "Atividades Culturais",
      description: "Desenvolvimento artístico e cultural através de música, teatro e dança.",
      features: ["Coral infantil", "Teatro bíblico", "Dança e expressão corporal"],
    },
    {
      icon: Palette,
      title: "Artes e Criatividade",
      description: "Estímulo à criatividade através de artes plásticas e artesanato.",
      features: ["Pintura e desenho", "Artesanato", "Exposições artísticas"],
    },
    {
      icon: Users,
      title: "Formação de Líderes",
      description: "Preparação de jovens líderes para impactar suas comunidades.",
      features: ["Liderança cristã", "Projetos sociais", "Mentoria personalizada"],
    },
  ]

  return (
    <section id="programas" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Nossos Programas</h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Oferecemos uma gama completa de programas educacionais e sociais para o desenvolvimento integral de
            crianças, jovens e famílias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="bg-white border-amber-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-amber-900">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-amber-700">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-amber-600">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full border-amber-800 text-amber-800 hover:bg-amber-50 mt-4">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-amber-800 hover:bg-amber-700 text-white px-8 py-4">
            Ver Todos os Programas
          </Button>
        </div>
      </div>
    </section>
  )
}
