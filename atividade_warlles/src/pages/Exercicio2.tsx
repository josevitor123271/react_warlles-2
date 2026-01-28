// Exercício 2 – Barra de Navegação

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  ArrowLeft,
  Home,
  BookOpen,
  Code2,
  Rocket,
  Users,
  // Settings,
  FileText,
  Zap,
  Shield,
  Sparkles,
  Trophy,
  Target,
  Package,
  Database,
  Cloud,
  Terminal
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Exercicio2 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">

      {/* ========== HEADER COM NAVEGAÇÃO ========== */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md">
                <span className="text-black font-bold text-xl">R</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">React Exercises</h1>
                <p className="text-xs text-muted-foreground">Exercício 2</p>
              </div>
            </Link>

            {/* Navigation Menu */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>

                {/* Home Link */}
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <Home className="w-4 h-4 mr-2" />
                      Início
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Getting Started - Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <Rocket className="w-4 h-4 mr-2" />
                    Primeiros Passos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-blue-500/20 to-blue-600/20 p-6 no-underline outline-none focus:shadow-md hover:shadow-lg transition-all"
                            href="#"
                          >
                            <Sparkles className="h-6 w-6 text-blue-400 mb-2" />
                            <div className="mb-2 mt-4 text-lg font-medium text-foreground">
                              Bem-vindo ao React
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Aprenda React do zero com exercícios práticos e exemplos reais.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="#intro" title="Introdução" icon={<BookOpen className="w-4 h-4" />}>
                        Conheça os fundamentos do React e JSX
                      </ListItem>
                      <ListItem href="#setup" title="Instalação" icon={<Package className="w-4 h-4" />}>
                        Configure seu ambiente de desenvolvimento
                      </ListItem>
                      <ListItem href="#tutorial" title="Tutorial" icon={<Target className="w-4 h-4" />}>
                        Seu primeiro componente React
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Componentes - Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <Code2 className="w-4 h-4 mr-2" />
                    Componentes
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                      <ListItem href="#buttons" title="Buttons" icon={<Zap className="w-4 h-4" />}>
                        Botões interativos e estilizados
                      </ListItem>
                      <ListItem href="#forms" title="Forms" icon={<FileText className="w-4 h-4" />}>
                        Formulários com validação
                      </ListItem>
                      <ListItem href="#cards" title="Cards" icon={<Package className="w-4 h-4" />}>
                        Cards responsivos e flexíveis
                      </ListItem>
                      <ListItem href="#navigation" title="Navigation" icon={<Target className="w-4 h-4" />}>
                        Menus e barras de navegação
                      </ListItem>
                      <ListItem href="#modals" title="Modals" icon={<Shield className="w-4 h-4" />}>
                        Diálogos e modais acessíveis
                      </ListItem>
                      <ListItem href="#data" title="Data Display" icon={<Database className="w-4 h-4" />}>
                        Tabelas e listas de dados
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Recursos - Simple Link */}
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#resources">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Recursos
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Comunidade - Simple Link */}
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#community">
                    <Users className="w-4 h-4 mr-2" />
                    Comunidade
                  </NavigationMenuLink>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>

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

      {/* ========== MAIN CONTENT ========== */}
      <main className="grow">

        {/* Hero Section */}
        <section className="bg-linear-to-b from-card to-background border-b border-border py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground">
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">Exercício 2</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-linear-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
              Barra de Navegação
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Demonstração de uma barra de navegação moderna e interativa utilizando
              o componente <code className="text-foreground bg-muted px-2 py-1 rounded">NavigationMenu</code> do shadcn/ui.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Recursos da Navegação</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore os recursos implementados nesta barra de navegação
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Feature 1 */}
              <Card className="bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <Target className="w-6 h-6 text-black" />
                  </div>
                  <CardTitle>Menus Dropdown</CardTitle>
                  <CardDescription>
                    Navegação hierárquica com submenus que aparecem ao passar o mouse ou clicar
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 2 */}
              <Card className="bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <Sparkles className="w-6 h-6 text-black" />
                  </div>
                  <CardTitle>Mega Menus</CardTitle>
                  <CardDescription>
                    Menus expansivos com múltiplas colunas, ícones e descrições detalhadas
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 3 */}
              <Card className="bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <Zap className="w-6 h-6 text-black" />
                  </div>
                  <CardTitle>Animações Suaves</CardTitle>
                  <CardDescription>
                    Transições elegantes e animações que melhoram a experiência do usuário
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 4 */}
              <Card className="bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <Shield className="w-6 h-6 text-black" />
                  </div>
                  <CardTitle>Acessibilidade</CardTitle>
                  <CardDescription>
                    Navegação totalmente acessível por teclado com suporte a leitores de tela
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 5 */}
              <Card className="bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <Cloud className="w-6 h-6 text-black" />
                  </div>
                  <CardTitle>Responsivo</CardTitle>
                  <CardDescription>
                    Adapta-se automaticamente a diferentes tamanhos de tela e dispositivos
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 6 */}
              <Card className="bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <Terminal className="w-6 h-6 text-black" />
                  </div>
                  <CardTitle>Personalizável</CardTitle>
                  <CardDescription>
                    Componentes altamente customizáveis com suporte a Tailwind CSS
                  </CardDescription>
                </CardHeader>
              </Card>

            </div>
          </div>
        </section>

        {/* Code Example Section */}
        <section className="py-20 bg-card/30 border-y border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 text-center">Como Funciona</h3>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="w-5 h-5" />
                    Estrutura do NavigationMenu
                  </CardTitle>
                  <CardDescription>
                    O componente NavigationMenu é construído sobre o Radix UI e oferece uma API flexível
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg border border-border">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-yellow-500" />
                        Componentes Principais
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                        <li className="list-disc"><code className="text-foreground">NavigationMenu</code> - Container principal</li>
                        <li className="list-disc"><code className="text-foreground">NavigationMenuList</code> - Lista de itens</li>
                        <li className="list-disc"><code className="text-foreground">NavigationMenuItem</code> - Item individual</li>
                        <li className="list-disc"><code className="text-foreground">NavigationMenuTrigger</code> - Botão que abre dropdown</li>
                        <li className="list-disc"><code className="text-foreground">NavigationMenuContent</code> - Conteúdo do dropdown</li>
                        <li className="list-disc"><code className="text-foreground">NavigationMenuLink</code> - Link dentro do menu</li>
                      </ul>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg border border-border">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-purple-500" />
                        Benefícios
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                        <li className="list-disc">Baseado em Radix UI (acessível e robusto)</li>
                        <li className="list-disc">Animações suaves com Framer Motion</li>
                        <li className="list-disc">Totalmente customizável com Tailwind</li>
                        <li className="list-disc">Suporte a teclado e leitores de tela</li>
                        <li className="list-disc">Mega menus com layouts flexíveis</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </main>

      {/* ========== FOOTER ========== */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2026 Programação para Web - Prof. Warlles. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Documentação
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

// Helper Component for List Items in Navigation
const ListItem = ({
  className,
  title,
  children,
  icon,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & {
  title: string;
  icon?: React.ReactNode;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon && <span className="text-muted-foreground">{icon}</span>}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}

export default Exercicio2;
// Fim Exercício 2
