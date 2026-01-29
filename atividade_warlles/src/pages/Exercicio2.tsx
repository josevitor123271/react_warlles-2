// Exercício 2 – Formulário de Registro
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  ArrowLeft,
  Eye,
  EyeOff,
  UserPlus,
  Github,
  Chrome,
  Loader2,
  ShieldCheck
} from 'lucide-react';

const Exercicio2 = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{ username?: string, email?: string, password?: string, confirmPassword?: string }>({});
  const [signupError, setSignupError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação
    const newErrors: { username?: string, email?: string, password?: string, confirmPassword?: string } = {};
    
    if (!username) newErrors.username = 'Nome de usuário é obrigatório';
    if (!email) newErrors.email = 'E-mail é obrigatório';
    if (!password) newErrors.password = 'Senha é obrigatória';
    if (!confirmPassword) newErrors.confirmPassword = 'Confirmação de senha é obrigatória';
    
    if (password && password.length < 8) {
      newErrors.password = 'A senha deve ter pelo menos 8 caracteres';
    }
    
    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSignupError('');
    setIsLoading(true);

    try {
      // Conexão com o backend Django
      const response = await fetch('http://localhost:8000/api/auth/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Registro bem-sucedido
        localStorage.setItem('access_token', data.tokens.access);
        localStorage.setItem('refresh_token', data.tokens.refresh);
        localStorage.setItem('user_data', JSON.stringify(data.user));
        
        setIsLoading(false);
        alert(`Conta criada com sucesso!\nBem-vindo, ${data.user.username}!`);
        // Redirecionar para login ou dashboard
        navigate('/exercicio3');
      } else {
        // Erro no registro
        setIsLoading(false);
        if (data.email) {
          setSignupError(data.email[0]);
        } else if (data.username) {
          setSignupError(data.username[0]);
        } else {
          setSignupError(data.detail || 'Erro ao criar conta');
        }
      }
    } catch (error) {
      setIsLoading(false);
      setSignupError('Erro de conexão com o servidor');
      console.error('Erro:', error);
    }
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
              <UserPlus className="w-6 h-6" />
            </div>
            <CardTitle className="text-2xl font-bold tracking-tight">
              Crie sua conta
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Preencha os dados abaixo para começar
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username Input */}
              <div className="space-y-2">
                <Label htmlFor="username" className={errors.username ? "text-destructive" : ""}>
                  Nome de Usuário
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="seunomedeusuario"
                  className={errors.username ? "border-destructive focus-visible:ring-destructive" : ""}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && (
                  <p className="text-xs text-destructive animate-in slide-in-from-left-1">
                    {errors.username}
                  </p>
                )}
              </div>

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
                <Label htmlFor="password" className={errors.password ? "text-destructive" : ""}>
                  Senha
                </Label>
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

              {/* Confirm Password Input */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className={errors.confirmPassword ? "text-destructive" : ""}>
                  Confirmar Senha
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className={`pr-10 ${errors.confirmPassword ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-9 w-9 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                    <span className="sr-only">Toggle confirm password visibility</span>
                  </Button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-xs text-destructive animate-in slide-in-from-left-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-sm font-normal cursor-pointer">
                  Concordo com os <a href="#" className="text-primary hover:underline">Termos de Serviço</a> e <a href="#" className="text-primary hover:underline">Política de Privacidade</a>
                </Label>
              </div>

              {/* Signup Error Message */}
              {signupError && (
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                  <p className="text-sm text-destructive text-center">{signupError}</p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-primary/25 transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Criando conta...
                  </>
                ) : (
                  <>
                    <UserPlus className="mr-2 h-4 w-4" />
                    Criar Conta
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
                  Ou registre-se com
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
              Já tem uma conta?{" "}
              <Link to="/exercicio3" className="font-medium text-primary hover:underline transition-all">
                Faça login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>

      {/* Footer minimalista */}
      <footer className="py-6 text-center text-sm text-muted-foreground/60">
        <p>&copy; 2026 React Registration Exercise. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Exercicio2;
// Fim Exercício 2