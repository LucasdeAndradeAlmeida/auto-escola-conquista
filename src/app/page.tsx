import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BadgeCheck,
  Car,
  GraduationCap,
  MapPin,
  Phone,
  Star,
  Users,
  ShieldCheck,
  Award,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-traffic-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-accent px-3 py-1 text-sm font-semibold">
                  <Award className="mr-1 h-4 w-4" />
                  98% de Aprovação no Detran
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  Sua CNH mais perto do que você imagina
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Há mais de 20 anos formando condutores seguros e conscientes.
                  Metodologia comprovada e aprovação garantida.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-slate-800 hover:bg-slate-700"
                  asChild
                >
                  <Link href="#contato">
                    <Car className="mr-2 h-5 w-5" />
                    Comece Agora
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-primary text-primary hover:bg-primary hover:text-white"
                  asChild
                >
                  <Link
                    href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    Ligue Agora
                  </Link>
                </Button>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span className="text-gray-600">
                  Aprovação garantida ou seu dinheiro de volta
                </span>
              </div>
            </div>
            <div className="mx-auto lg:mr-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-accent rounded-xl opacity-30 blur-xl" />
                <Image
                  alt="Alunos comemorando aprovação"
                  className="relative aspect-[4/3] object-cover rounded-xl shadow-2xl animate-float"
                  height="400"
                  src="/assets/teste2.jpg"
                  width="600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        id="servicos"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">
                Nossos Serviços
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl">
                Oferecemos uma variedade de serviços para atender suas
                necessidades
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className="card-shadow-hover border-2 border-primary/10"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-lg bg-primary/5">
                      <service.icon className="h-8 w-8 text-primary bg-trnsparent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 mt-2">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-traffic-pattern">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">
                Por que escolher a Autoescola Conquista?
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl">
                Descubra os diferenciais que fazem da Conquista a melhor escolha
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-6 card-shadow-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="mt-1 p-2 rounded-lg bg-accent/20">
                    <BadgeCheck
                      className="h-6 w-6 text-accent-foreground text-white
                    fill-green-600"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">{feature.title}</h3>
                    <p className="text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">
                O que dizem nossos alunos
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl">
                Histórias reais de quem já conquistou sua CNH conosco
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="card-shadow-hover border-2 border-primary/10"
              >
                <CardContent className="p-6">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-500 fill-yellow-500
                      "
                        aria-label="Estrela"
                      />
                    ))}
                  </div>
                  <p className="text-gray-500">{testimonial.content}</p>
                  <div className="mt-4">
                    <p className="font-bold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.type}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-traffic-pattern"
        id="contato"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">
                  Entre em contato
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Tire suas dúvidas ou agende uma visita. Estamos aqui para
                  ajudar você a conquistar sua CNH.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group">
                  <div className="p-2 rounded-lg bg-accent/20">
                    <MapPin className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <p className="text-gray-600">Av. Principal, 1000 - Centro</p>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="p-2 rounded-lg bg-accent/20">
                    <Phone className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <p className="text-gray-600">(99) 99999-9999</p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const services = [
  {
    title: "Primeira Habilitação",
    description:
      "Curso completo para quem deseja tirar a primeira CNH, com aulas teóricas e práticas.",
    icon: Car,
  },
  {
    title: "Reciclagem",
    description:
      "Curso de reciclagem para condutores que precisam renovar seus conhecimentos.",
    icon: GraduationCap,
  },
  {
    title: "Aulas Particulares",
    description: "Aulas extras personalizadas para reforçar seu aprendizado.",
    icon: Users,
  },
];

const features = [
  {
    title: "Instrutores Qualificados",
    description: "Equipe com anos de experiência e certificação.",
  },
  {
    title: "Frota Moderna",
    description: "Veículos novos e bem mantidos para sua segurança.",
  },
  {
    title: "Horários Flexíveis",
    description: "Aulas em horários que se adequam à sua rotina.",
  },
  {
    title: "Simulador Avançado",
    description: "Tecnologia de ponta para melhor preparação.",
  },
  {
    title: "Material Didático",
    description: "Conteúdo atualizado e de fácil compreensão.",
  },
  {
    title: "Suporte Contínuo",
    description: "Acompanhamento durante todo o processo.",
  },
];

const testimonials = [
  {
    content:
      "Consegui minha CNH de primeira graças aos ótimos instrutores da Autoescola Conquista!",
    name: "Maria Silva",
    type: "Categoria B",
    stars: 5,
  },
  {
    content:
      "Excelente metodologia de ensino. Me senti muito seguro para fazer a prova.",
    name: "João Santos",
    type: "Categoria AB",
    stars: 5,
  },
  {
    content: "Profissionais muito atenciosos e dedicados. Super recomendo!",
    name: "Ana Oliveira",
    type: "Categoria B",
    stars: 4,
  },
  {
    content:
      "Aulas claras e interessantes. Obrigado pela qualidade de ensino, meus parabéns!",
    name: "Mathes Oliveira",
    type: "Categoria A",
    stars: 5,
  },
];
