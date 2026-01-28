// Exercício 1 – Header, Main e Footer

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  Target,
  Code2,
  Palette,
  Smartphone,
  Zap,
  Wrench,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Home,
  Book,
  FileCode,
  Shield,
  FileText,
  Cookie
} from 'lucide-react';

const Exercicio1 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">

      {/* ========== HEADER ========== */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo & Brand */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md">
                <span className="text-primary-foreground font-bold text-xl">R</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  React Exercises
                </h1>
                <p className="text-base text-muted-foreground">Exercício 1</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                Sobre
              </a>
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Recursos
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contato
              </a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Link to="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ========== MAIN ========== */}
      <main className="grow">

        {/* Hero Section */}
        <section className="bg-linear-to-b from-card to-background border-b border-border py-20">
          <div className="container mx-auto px-6 text-center">
            <Badge className="mb-4 px-4 py-2 text-sm" variant="secondary">
              <Target className="w-4 h-4 mr-2 inline" />
              Exercício 1
            </Badge>
            <h2 className="text-5xl font-bold mb-6 bg-linear-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
              Header, Main e Footer
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Uma página moderna e responsiva construída com React e TypeScript,
              demonstrando a estrutura básica de uma aplicação web profissional.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="px-8">
                Começar Agora
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Saber Mais
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Recursos Principais</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore as funcionalidades que tornam esta página especial
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature Card 1 */}
              <Card className="bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <Code2 className="w-6 h-6 text-black" />
                  </div>
                  <CardTitle>React + TypeScript</CardTitle>
                  <CardDescription>
                    Desenvolvido com as melhores práticas usando React e TypeScript para máxima type-safety
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature Card 2 */}
              <Card className="bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <Palette className="w-6 h-6 text-black" />
                  </div>
                  <CardTitle>Design Moderno</CardTitle>
                  <CardDescription>
                    Interface elegante com dark theme, gradientes suaves e micro-animações
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature Card 3 */}
              <Card className="bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <Smartphone className="w-6 h-6 text-black" />
                  </div>
                  <CardTitle>Totalmente Responsivo</CardTitle>
                  <CardDescription>
                    Layout adaptável que funciona perfeitamente em dispositivos de todos os tamanhos
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature Card 4 */}
              <Card className="bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <Zap className="w-6 h-6 text-black" />
                  </div>
                  <CardTitle>Performance</CardTitle>
                  <CardDescription>
                    Otimizado para carregamento rápido e experiência de usuário fluida
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature Card 5 */}
              <Card className="bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <Wrench className="w-6 h-6 text-black" />
                  </div>
                  <CardTitle>Componentizado</CardTitle>
                  <CardDescription>
                    Arquitetura baseada em componentes reutilizáveis e de fácil manutenção
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature Card 6 */}
              <Card className="bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <Sparkles className="w-6 h-6 text-black" />
                  </div>
                  <CardTitle>Acessível</CardTitle>
                  <CardDescription>
                    Seguindo padrões de acessibilidade para garantir inclusão de todos os usuários
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-card/30 border-y border-border">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">100+</div>
                <div className="text-muted-foreground">Componentes</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">50k+</div>
                <div className="text-muted-foreground">Linhas de Código</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">98%</div>
                <div className="text-muted-foreground">Satisfação</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">24/7</div>
                <div className="text-muted-foreground">Suporte</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 text-center">Sobre o Projeto</h3>
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Este exercício demonstra a criação de uma página web moderna com três seções fundamentais:
                    <strong className="text-foreground"> Header</strong>,
                    <strong className="text-foreground"> Main</strong> e
                    <strong className="text-foreground"> Footer</strong>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    O <strong className="text-foreground">Header</strong> contém a navegação principal e está fixo no topo
                    da página, proporcionando fácil acesso aos links importantes durante a rolagem.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A seção <strong className="text-foreground">Main</strong> inclui múltiplas subseções,
                    como Hero, Features, Stats e About, demonstrando diferentes padrões de layout e design.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    O <strong className="text-foreground">Footer</strong> fornece informações adicionais,
                    links úteis e dados de contato, completando a estrutura da página.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </main>

      {/* ========== FOOTER ========== */}
      <footer className="bg-card border-t border-border pt-12 pb-6">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-primary-foreground font-bold">R</span>
                </div>
                <span className="font-bold text-foreground">React Exercises</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Aprendendo React através de exercícios práticos e projetos reais.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    Início
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Recursos
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                    <Book className="w-4 h-4" />
                    Sobre
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Recursos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                    <Book className="w-4 h-4" />
                    Documentação
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                    <FileCode className="w-4 h-4" />
                    Tutoriais
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                    <FileCode className="w-4 h-4" />
                    API Reference
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contato</h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  contato@react.com
                </li>
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (11) 99999-9999
                </li>
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  São Paulo, Brasil
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                © 2026 Programação para Web - Prof. Warlles. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  Privacidade
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  <FileText className="w-4 h-4" />
                  Termos
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  <Cookie className="w-4 h-4" />
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Exercicio1;
// Fim Exercício 1
