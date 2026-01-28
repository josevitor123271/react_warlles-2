// Exercício 6 – Menu Lateral (Sidebar)

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  LayoutDashboard,
  FolderKanban,
  Users,
  Settings,
  BarChart3,
  MessageSquare,
  LogOut,
  Menu,
  Bell,
  Search,
  CheckCircle2,
  Clock,
  // AlertCircle
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

// Itens do Menu Lateral
const sidebarItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'projects', label: 'Projetos', icon: FolderKanban },
  { id: 'team', label: 'Equipe', icon: Users },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'messages', label: 'Mensagens', icon: MessageSquare, badge: 3 },
  { id: 'settings', label: 'Configurações', icon: Settings },
];

const Exercicio6 = () => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Conteúdo dinâmico baseado na seleção (apenas visual para o exercício)
  const renderContent = () => {
    switch (activeItem) {
      case 'dashboard':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
                  <span className="text-muted-foreground">$</span>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R$ 45.231,89</div>
                  <p className="text-xs text-muted-foreground">+20.1% em relação ao mês anterior</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Novos Usuários</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">+180.1% em relação ao mês anterior</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Vendas</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground">+19% em relação ao mês anterior</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Ativos Agora</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">+201 desde a última hora</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Visão Geral</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[200px] flex items-center justify-center text-muted-foreground bg-muted/20 rounded-md border border-dashed">
                    Gráfico Placeholder
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Atividades Recentes</CardTitle>
                  <CardDescription className="text-base mt-2 text-muted-foreground">Você tem 265 tarefas completadas este mês.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center bg-primary/10 p-3.5 rounded-md">
                        <div className="mr-4 rounded-full bg-primary/10 p-2 text-primary">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-base font-medium leading-none">Projeto #{i} finalizado</p>
                          <p className="text-xs mt-2 text-muted-foreground">Há 2 horas</p>
                        </div>
                        <div className="font-medium">+$250</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[50vh] text-center animate-in zoom-in duration-300">
            <div className="bg-muted p-6 rounded-full mb-4">
              {activeItem === 'projects' && <FolderKanban className="w-12 h-12 text-muted-foreground" />}
              {activeItem === 'team' && <Users className="w-12 h-12 text-muted-foreground" />}
              {activeItem === 'analytics' && <BarChart3 className="w-12 h-12 text-muted-foreground" />}
              {activeItem === 'messages' && <MessageSquare className="w-12 h-12 text-muted-foreground" />}
              {activeItem === 'settings' && <Settings className="w-12 h-12 text-muted-foreground" />}
            </div>
            <h2 className="text-2xl font-bold mb-2">Página de {sidebarItems.find(i => i.id === activeItem)?.label}</h2>
            <p className="text-muted-foreground max-w-md">
              Esta é uma página de exemplo para demonstrar a navegação da sidebar.
              Selecione "Dashboard" para ver o layout completo.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">

      {/* Sidebar */}
      <aside
        className={cn(
          "bg-card border-r border-border transition-all duration-300 flex flex-col z-20",
          isSidebarOpen ? "w-64" : "w-[70px]"
        )}
      >
        {/* Logo Area */}
        <div className="h-16 flex items-center px-4 border-b border-border">
          <div className="flex items-center gap-2 font-bold text-xl text-primary">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center shrink-0">
              EX
            </div>
            <span className={cn("truncate transition-all duration-300", !isSidebarOpen && "w-0 opacity-0")}>
              Exercicio 6
            </span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 py-6 flex flex-col gap-1 px-2 overflow-y-auto">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium transition-colors relative group",
                activeItem === item.id
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              <span className={cn("truncate transition-all duration-300", !isSidebarOpen && "w-0 opacity-0 absolute")}>
                {item.label}
              </span>

              {/* Tooltip for collapsed state */}
              {!isSidebarOpen && (
                <div className="absolute left-full ml-2 bg-popover text-popover-foreground px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 whitespace-nowrap z-50 shadow-md pointer-events-none transition-opacity">
                  {item.label}
                </div>
              )}

              {/* Badge */}
              {item.badge && isSidebarOpen && (
                <Badge className="ml-auto bg-primary text-primary-foreground h-5 w-5 flex items-center justify-center p-0 rounded-full text-[10px]">
                  {item.badge}
                </Badge>
              )}
            </button>
          ))}
        </nav>

        {/* User Profile / Footer */}
        <div className="p-4 border-t border-border">
          <div className={cn("flex items-center gap-3", !isSidebarOpen && "justify-center")}>
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 shrink-0" />
            {isSidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">Usuário Demo</p>
                <p className="text-xs text-muted-foreground truncate">admin@exemplo.com</p>
              </div>
            )}
            {isSidebarOpen && (
              <Button variant="ghost" size="icon" className="shrink-0 h-8 w-8 ml-auto">
                <LogOut className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-background/50">

        {/* Header */}
        <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              <Menu className="w-5 h-5" />
            </Button>

            <div className="relative hidden md:block w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Pesquisar..."
                className="pl-9 bg-background/50 border-0 focus-visible:ring-1 focus-visible:ring-primary h-9"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="outline" size="sm" className="gap-2 hidden sm:flex">
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
            </Button>
          </div>
        </header>

        {/* Content Scrollable Area */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          {renderContent()}
        </main>

      </div>
    </div>
  );
}

export default Exercicio6;
// Fim Exercício 6
