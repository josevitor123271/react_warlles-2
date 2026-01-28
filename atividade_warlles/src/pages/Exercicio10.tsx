import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Home, Users, BarChart3, Settings, Bell, Search } from 'lucide-react';

const Exercicio10 = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Dados fictícios para os cartões
  const dashboardData = [
    {
      title: "Total de Usuários",
      value: "1,248",
      description: "+12% desde o último mês",
      icon: Users,
      color: "bg-blue-500"
    },
    {
      title: "Receita Total",
      value: "R$ 24,560",
      description: "+8% desde o último mês",
      icon: BarChart3,
      color: "bg-green-500"
    },
    {
      title: "Novos Pedidos",
      value: "142",
      description: "+5% desde o último mês",
      icon: Home,
      color: "bg-purple-500"
    },
    {
      title: "Taxa de Conversão",
      value: "24.8%",
      description: "+2% desde o último mês",
      icon: Settings,
      color: "bg-orange-500"
    }
  ];

  const menuItems = [
    { name: "Dashboard", icon: Home, href: "/exercicio10" },
    { name: "Usuários", icon: Users, href: "/usuarios" },
    { name: "Analytics", icon: BarChart3, href: "/analytics" },
    { name: "Configurações", icon: Settings, href: "/configuracoes" },
  ];

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar Mobile */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetTrigger>
          <Button variant="ghost" size="icon" className="md:hidden fixed top-4 left-4 z-50">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex flex-col h-full bg-sidebar border-sidebar-border">
            <div className="p-6 border-b border-sidebar-border">
              <h2 className="text-xl font-bold text-sidebar-foreground">Dashboard</h2>
            </div>
            <nav className="flex-1 p-4">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3 px-4 py-2 text-left text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      onClick={() => {
                        navigate(item.href);
                        setSidebarOpen(false);
                      }}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </SheetContent>
      </Sheet>

      {/* Sidebar Desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col grow border-r border-sidebar-border bg-sidebar pt-5">
          <div className="flex items-center justify-center px-4">
            <h2 className="text-xl font-bold text-sidebar-foreground">Dashboard</h2>
          </div>
          <div className="mt-5 grow flex flex-col">
            <nav className="flex-1 px-2 space-y-4">
              {menuItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="w-full justify-start gap-3 px-4 py-2 text-base font-medium text-left text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  onClick={() => navigate(item.href)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:pl-64 flex flex-col flex-1">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-background border-b border-border shadow-sm">
          <div className="flex items-center justify-between px-4 py-4 md:px-8">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-foreground hidden md:block">Dashboard</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="pl-10 pr-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
                />
              </div>
              
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </Button>
              
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="hidden md:flex items-center gap-2"
              >
                Voltar para Home
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 md:p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Visão Geral</h2>
            <p className="text-muted-foreground">Aqui estão suas estatísticas mais importantes</p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {dashboardData.map((card, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {card.title}
                  </CardTitle>
                  <div className={`p-2 rounded-lg ${card.color}`}>
                    <card.icon className="h-5 w-5 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{card.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Atividade Recente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-base text-foreground">Nova atividade registrada</span>
                      </div>
                      <span className="text-xs text-muted-foreground">2 min atrás</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-base text-foreground">Conversão</span>
                      <span className="text-sm font-medium">75%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-base text-foreground">Engajamento</span>
                      <span className="text-sm font-medium">82%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '82%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-base text-foreground">Satisfação</span>
                      <span className="text-sm font-medium">91%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '91%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Exercicio10;
