// Exercício 7 – Layout em Duas Colunas

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Mail,
  Link2,
  Github,
  Twitter,
  Award,
  TrendingUp,
  Heart,
  MessageCircle,
  Share2,
  Bookmark
} from 'lucide-react';

const Exercicio7 = () => {
  // Dados mockados de posts/atividades
  const activities = [
    {
      id: 1,
      type: 'post',
      content: 'Acabei de finalizar o novo projeto em React! 🚀 Utilizando TypeScript, Tailwind CSS e shadcn/ui para criar uma experiência moderna e responsiva.',
      timestamp: 'Há 2 horas',
      likes: 24,
      comments: 5
    },
    {
      id: 2,
      type: 'achievement',
      title: 'Conquista Desbloqueada',
      content: 'Completou 100 commits no GitHub este mês! 🏆',
      timestamp: 'Há 5 horas',
      likes: 18,
      comments: 3
    },
    {
      id: 3,
      type: 'post',
      content: 'Dica do dia: Use o hook useMemo para otimizar cálculos pesados em componentes React. Pode fazer uma diferença enorme na performance! 💡',
      timestamp: 'Ontem',
      likes: 42,
      comments: 12
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold">Perfil do Usuário</h1>
              <p className="text-xs text-muted-foreground">Exercício 7 - Layout em Duas Colunas</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Two Column Layout */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* COLUNA ESQUERDA - Informações do Usuário */}
          <aside className="lg:col-span-1 space-y-6">

            {/* Card de Perfil */}
            <Card className="overflow-hidden">
              {/* Cover Image */}
              <div className="h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

              <CardContent className="relative pt-0 pb-6">
                {/* Avatar */}
                <div className="flex justify-center -mt-16 mb-4">
                  <div className="w-32 h-32 rounded-full border-4 border-card bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-4xl font-bold text-white shadow-xl">
                    JV
                  </div>
                </div>

                {/* User Info */}
                <div className="text-center mb-4">
                  <h2 className="text-2xl font-bold mb-1">José Vitor</h2>
                  <p className="text-muted-foreground mb-3">@josevitor</p>
                  <p className="text-sm leading-relaxed">
                    Full Stack Developer apaixonado por criar experiências web incríveis.
                    Especialista em React, TypeScript e Node.js.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
                  <div className="text-center">
                    <div className="text-2xl font-semibold">127</div>
                    <div className="text-xs text-muted-foreground">Posts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold">1.2k</div>
                    <div className="text-xs text-muted-foreground">Seguidores</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold">342</div>
                    <div className="text-xs text-muted-foreground">Seguindo</div>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 mt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Piauí, Brasil</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Entrou em Janeiro 2026</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>josevitor@exemplo.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Link2 className="w-4 h-4" />
                    <a href="#" className="text-primary hover:underline">josevitor.com</a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="icon" className="flex-1 rounded-full">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="flex-1 rounded-full">
                    <Twitter className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Skills Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Habilidades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'Tailwind', 'Next.js', 'GraphQL'].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  Conquistas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-base">100 Commits</p>
                    <p className="text-base text-muted-foreground">Completado este mês</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-base">10 Projetos</p>
                    <p className="text-base text-muted-foreground">Publicados no GitHub</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* COLUNA DIREITA - Conteúdo Adicional */}
          <div className="lg:col-span-2 space-y-6">

            {/* Activity Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total de Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-semibold">127</div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3 text-green-500" />
                    +12% este mês
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Engajamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-semibold">2.4k</div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3 text-green-500" />
                    +28% este mês
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Alcance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-semibold">8.9k</div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3 text-green-500" />
                    +15% este mês
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Feed de Atividades */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Atividades Recentes</h3>

              {activities.map((activity) => (
                <Card key={activity.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shrink-0">
                        JD
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">João Developer</span>
                          {activity.type === 'achievement' && (
                            <Badge variant="secondary" className="text-xs">
                              <Award className="w-3 h-3 mr-1" />
                              Conquista
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {activity.type === 'achievement' && (
                      <p className="font-medium mb-2">{activity.title}</p>
                    )}
                    <p className="text-sm leading-relaxed">{activity.content}</p>

                    {/* Interaction Buttons */}
                    <div className="flex items-center gap-6 mt-4 pt-4 border-t border-border">
                      <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <Heart className="w-4 h-4" />
                        <span>{activity.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span>{activity.comments}</span>
                      </button>
                      <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors ml-auto">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <Bookmark className="w-4 h-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Exercicio7;
// Fim Exercício 7
