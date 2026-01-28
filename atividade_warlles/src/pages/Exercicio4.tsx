// Exercício 4 – Layout com Cards

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  Code2,
  Brain,
  Globe,
  Database,
  Smartphone,
  Cloud,
  Github,
  Star,
  ExternalLink
} from 'lucide-react';

// Interface para os dados do card
interface ProjectProps {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
  stars: number;
  color: string;
}

// Dados simulados (Mock Data)
const projects: ProjectProps[] = [
  {
    id: 1,
    title: "EcoTracker App",
    description: "Aplicativo mobile para rastreamento de pegada de carbono pessoal com gamificação e recompensas sociais.",
    icon: Smartphone,
    tags: ["React Native", "Firebase", "Eco"],
    stars: 128,
    color: "from-green-500 to-emerald-600"
  },
  {
    id: 2,
    title: "AI Code Assistant",
    description: "Extensão para VS Code que utiliza LLMs para sugerir refatorações e explicar trechos complexos de código.",
    icon: Brain,
    tags: ["TypeScript", "AI", "OpenAI API"],
    stars: 843,
    color: "from-purple-500 to-indigo-600"
  },
  {
    id: 3,
    title: "Cloud Dashboard",
    description: "Interface administrativa para gerenciamento de recursos em nuvem com gráficos em tempo real.",
    icon: Cloud,
    tags: ["Next.js", "Tailwind", "AWS"],
    stars: 45,
    color: "from-blue-500 to-cyan-600"
  },
  {
    id: 4,
    title: "Crypto Wallet",
    description: "Carteira digital segura para armazenamento e transação de criptomoedas com suporte multi-chain.",
    icon: Database,
    tags: ["Solidity", "Web3.js", "Security"],
    stars: 312,
    color: "from-amber-500 to-orange-600"
  },
  {
    id: 5,
    title: "DevPortfolio V2",
    description: "Template de portfólio para desenvolvedores com blog integrado e sistema de temas personalizáveis.",
    icon: Globe,
    tags: ["Astro", "MDX", "Performance"],
    stars: 1890,
    color: "from-pink-500 to-rose-600"
  },
  {
    id: 6,
    title: "API Gateway",
    description: "Serviço de gateway para microsserviços com autenticação JWT, rate limiting e logging centralizado.",
    icon: Code2,
    tags: ["Go", "Docker", "Microservices"],
    stars: 67,
    color: "from-slate-500 to-gray-600"
  }
];

// Componente de Card Reutilizável
const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const Icon = project.icon;

  return (
    <Card className="flex flex-col h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <div className={`p-3 rounded-xl bg-linear-to-br ${project.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex items-center gap-1 text-muted-foreground text-sm bg-secondary/50 px-2 py-1 rounded-full">
            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
            <span>{project.stars}</span>
          </div>
        </div>
        <CardTitle className="mt-4 text-xl group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription className="line-clamp-2 mt-2">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="grow">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-4 border-t border-border/50">
        <div className="flex gap-2 w-full">
          <Button variant="outline" size="sm" className="flex-1 gap-2 hover:bg-card hover:text-foreground">
            <Github className="w-4 h-4" />
            Code
          </Button>
          <Button size="sm" className="flex-1 gap-2 bg-linear-to-r from-primary to-primary/80 hover:brightness-110 border-0">
            <ExternalLink className="w-4 h-4" />
            Demo
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

const Exercicio4 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground relative">

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold">Portfólio de Projetos</h1>
              <p className="text-sm text-muted-foreground">Exercício 4 - Layout com Cards</p>
            </div>
          </div>
          <Button variant="outline" className="hidden sm:flex" onClick={() => window.alert("Este botão adicionaria um novo projeto!")}>
            + Adicionar Projeto
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 grow">

        {/* Intro */}
        <section className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Meus Projetos Recentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Uma coleção de aplicações e experimentos desenvolvidos para demonstrar
            habilidades em front-end, back-end e design de interfaces.
          </p>
        </section>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-muted/20">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>
            Desenvolvido com React, Tailwind CSS e Shadcn/ui.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> • </span>
            Layout responsivo e escalável.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Exercicio4;
// Fim Exercício 4
