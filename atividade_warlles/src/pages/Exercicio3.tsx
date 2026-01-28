// Exercício 3 – Formulário de Login

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  ArrowLeft,
  Eye,
  EyeOff,
  LogIn,
  Github,
  Chrome,
  Loader2,
  ShieldCheck
} from 'lucide-react';

const Exercicio3 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string, password?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples
    const newErrors: { email?: string, password?: string } = {};
    if (!email) newErrors.email = 'E-mail é obrigatório';
    if (!password) newErrors.password = 'Senha é obrigatória';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    // Simulação de login
    setTimeout(() => {
      setIsLoading(false);
      alert(`Login realizado com sucesso!\nE-mail: ${email}`);
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[100px]" />
      </div>

      {/* Header com botão voltar */}
      <header className="absolute top-0 w-full p-6 z-10">
        <div className="container mx-auto">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-card/50">
              <ArrowLeft className="w-4 h-4" />
              Voltar para Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content - Centralizado */}
      <main className="flex-grow flex items-center justify-center p-4 sm:p-8">
        <Card className="w-full max-w-md bg-card/95 backdrop-blur-sm border-border shadow-2xl animate-in fade-in zoom-in duration-500">
          <CardHeader className="space-y-1 text-center">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <CardTitle className="text-2xl font-bold tracking-tight">
              Acesse sua conta
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Entre com suas credenciais para continuar
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Email Input */}
              <div className="space-y-2">
                <Label htmlFor="email" className={errors.email ? "text-destructive" : ""}>
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nome@exemplo.com"
                  className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-xs text-destructive animate-in slide-in-from-left-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className={errors.password ? "text-destructive" : ""}>
                    Senha
                  </Label>
                  <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                    Esqueceu a senha?
                  </a>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className={`pr-10 ${errors.password ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-9 w-9 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                    <span className="sr-only">Toggle password visibility</span>
                  </Button>
                </div>
                {errors.password && (
                  <p className="text-xs text-destructive animate-in slide-in-from-left-1">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Remember Me */}
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">
                  Lembrar-me neste dispositivo
                </Label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-primary/25 transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Entrando...
                  </>
                ) : (
                  <>
                    <LogIn className="mr-2 h-4 w-4" />
                    Entrar
                  </>
                )}
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  Ou continue com
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full gap-2 hover:bg-card/50 hover:text-foreground hover:border-foreground/20 transition-all">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline" className="w-full gap-2 hover:bg-card/50 hover:text-foreground hover:border-foreground/20 transition-all">
                <Chrome className="h-4 w-4" />
                Google
              </Button>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col items-center justify-center p-6 bg-muted/20 border-t border-border mt-2">
            <p className="text-sm text-muted-foreground text-center">
              Não tem uma conta?{" "}
              <a href="#" className="font-medium text-primary hover:underline transition-all">
                Cadastre-se gratuitamente
              </a>
            </p>
          </CardFooter>
        </Card>
      </main>

      {/* Footer minimalista */}
      <footer className="py-6 text-center text-sm text-muted-foreground/60">
        <p>&copy; 2026 React Login Exercise. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}

export default Exercicio3;
// Fim Exercício 3
