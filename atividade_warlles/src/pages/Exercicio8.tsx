// import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MapPin, Link as LinkIcon, Calendar, Mail, Github, Twitter, Linkedin, ArrowLeft } from 'lucide-react';

const Exercicio8 = () => {
  const navigate = useNavigate();
  

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header com botão de voltar */}
      <header className="sticky top-0 z-10 p-4 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-2xl px-0 cursor-pointer">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 -ml-4 text-muted-foreground hover:text-foreground hover:bg-transparent"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-lg">Voltar</span>
          </Button>
        </div>
      </header>

      <div className="flex-1 flex justify-center items-start pt-8 pb-12 px-4">
        <Card className="w-full max-w-2xl overflow-hidden shadow-2xl border-border animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Cover Image Background */}
          <div className="h-48 bg-linear-to-r from-blue-600 to-purple-600 relative">
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <CardHeader className="relative pt-0 pb-2">
            {/* Avatar overlapped on cover */}
            <div className="flex flex-col md:flex-row items-start md:items-end gap-4 -mt-16 mb-4 px-4">
              <Avatar className="w-32 h-32 border-4 border-card shadow-xl">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback className="text-2xl font-bold bg-muted text-foreground">CN</AvatarFallback>
              </Avatar>

              <div className="flex-1 mt-2 md:mt-0 md:mb-2 -space-y-1">
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">José Vitor</h1>
                <p className="text-muted-foreground font-medium">@jvitor</p>
              </div>

              <div className="flex gap-2 mt-4 md:mt-0 md:mb-2">
                <Button>Follow</Button>
                <Button variant="outline">Message</Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6 px-8">
            {/* Basic Info Section */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Sobre</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Desenvolvedor Full Stack apaixonado por criar interfaces modernas e acessíveis.
                  Especialista em React, TypeScript e ecossistema Node.js.
                  Sempre buscando aprender novas tecnologias e contribuir com a comunidade open source.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <MapPin className="w-4 h-4" />
                  <span>Piauí, Brasil</span>
                </div>
                <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <LinkIcon className="w-4 h-4" />
                  <a href="#" className="hover:underline">jvitor.dev.br</a>
                </div>
                <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Calendar className="w-4 h-4" />
                  <span>Entrou em Janeiro de 2026</span>
                </div>
                <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>contato@jvitor.dev</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Skills Section */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Habilidades & Interesses</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js", "UI/UX Design", "Accessibility", "Open Source"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-4">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>

          <CardFooter className="bg-muted/50 p-6 flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">1.2k</span> Seguidores
              <span className="mx-2">•</span>
              <span className="font-bold text-foreground">450</span> Seguindo
            </div>

            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Exercicio8;
