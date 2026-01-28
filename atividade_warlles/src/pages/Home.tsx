// Importar o react router dom para navegação
import { Link } from 'react-router-dom'

// Componentes UI
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// Dados dos exercícios
const exercises = [
  {
    id: 1,
    title: "Layout Completo",
    description: "Construa um layout contendo: Header; Área principal (Main); Footer",
    path: "/exercicio1",
    tags: ["Layout", "Header", "Footer"]
  },
  {
    id: 2,
    title: "Navbar Responsiva",
    description: "Implemente uma Navbar com links de navegação conforme o layout",
    path: "/exercicio2",
    tags: ["Navbar", "Navegação", "Links"]
  },
  {
    id: 3,
    title: "Formulário de Login",
    description: "Crie um formulário de login contendo: Campo de e-mail; Campo de senha; Botão de login.",
    path: "/exercicio3",
    tags: ["Login", "Formulário", "Autenticação"]
  },
  {
    id: 4,
    title: "Layout com Cards",
    description: "Desenvolva um layout utilizando cartões (Card) reutilizáveis",
    path: "/exercicio4",
    tags: ["Cards", "Layout", "Reutilizável"]
  },
  {
    id: 5,
    title: "Lista de Produtos",
    description: "Implemente uma lista de produtos exibindo: Imagem; Nome; Preço; Botão de ação",
    path: "/exercicio5",
    tags: ["Produtos", "Lista", "Catálogo"]
  },
  {
    id: 6,
    title: "Layout com Menu Lateral",
    description: "Construa um layout com menu lateral fixo e área principal de conteúdo",
    path: "/exercicio6",
    tags: ["Menu", "Lateral", "Layout"]
  },
  {
    id: 7,
    title: "Layout de Duas Colunas",
    description: "Implemente um layout dividido em duas colunas: Informações do usuário; Conteúdo adicional",
    path: "/exercicio7",
    tags: ["Colunas", "Usuário", "Layout"]
  },
  {
    id: 8,
    title: "Página de Perfil",
    description: "Crie uma página de perfil contendo: Foto do usuário; Nome; Informações básicas",
    path: "/exercicio8",
    tags: ["Perfil", "Usuário", "Informações"]
  },
  {
    id: 9,
    title: "Galeria de Imagens",
    description: "Exercício 9 – Galeria de Imagens: Desenvolva uma galeria de imagens organizada em grade.",
    path: "/exercicio9",
    tags: ["Galeria", "Imagens", "Grade"]
  },
  {
    id: 10,
    title: "Dashboard Completo",
    description: "Implemente um dashboard contendo: Header; Menu lateral; Cartões de informações",
    path: "/exercicio10",
    tags: ["Dashboard", "Menu", "Cartões"]
  }
];

// Componente Home - Layout de Cards
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">

      {/* Header - Fixed at top */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                React Exercises
              </h1>
              <p className="text-muted-foreground mt-2">
                Coleção de Layouts React - Disciplina de Programação para Internet II
              </p>
              <p className="text-muted-foreground mt-2">
                Equipe: José Vitor e Maria Monalisa
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="px-4 py-4 rounded-full">
                {exercises.length} Exercícios
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Scrollable Content Area */}
      <div className="grow overflow-y-auto">

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {exercises.map((exercise) => (
              <Card
                key={exercise.id}
                className="flex flex-col h-full bg-card/80 hover:bg-card transition-all duration-300 hover:shadow-lg border-border"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-semibold">{exercise.title}</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground mt-2 line-clamp-3">
                    {exercise.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="grow pb-4">
                  <div className="flex flex-wrap gap-2">
                    {exercise.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <Link to={exercise.path} className="w-full">
                    <Button
                      variant="default"
                      className="w-full group"
                      size="lg"
                    >
                      Live Demo
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border bg-card/30 mt-12 py-8">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p>© 2026 Coleções de Exercícios de React: Disciplina de Programação para Web - Prof. Warlles</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
