// WelcomePage.tsx - Página de Boas Vindas
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    ArrowLeft,
    User,
    Mail,
    Calendar,
    LogOut,
    ShieldCheck,
    Star,
    Trash2,
    Loader2
} from 'lucide-react';

interface UserData {
    id: number;
    username: string;
    email: string;
    created_at: string;
}

const WelcomePage = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        // Buscar dados do usuário do localStorage
        const fetchUserData = () => {
            try {
                // Verificar se há dados de usuário no localStorage
                const storedUserData = localStorage.getItem('user_data');
                const accessToken = localStorage.getItem('access_token');

                if (!storedUserData || !accessToken) {
                    setError('Dados de usuário não encontrados. Faça login novamente.');
                    setLoading(false);
                    return;
                }

                const parsedUserData = JSON.parse(storedUserData);
                setUserData(parsedUserData);
                setLoading(false);
            } catch (err) {
                setError('Erro ao carregar dados do usuário');
                setLoading(false);
                console.error('Erro:', err);
            }
        };

        fetchUserData();
    }, []);
    
    const handleDeleteAccount = async () => {
        const confirmDelete = window.confirm('Tem certeza que deseja deletar sua conta? Esta ação não pode ser desfeita.');
            
        if (!confirmDelete) return;
            
        setDeleting(true);
            
        try {
            const accessToken = localStorage.getItem('access_token');
                
            if (!accessToken) {
                setError('Token de acesso não encontrado. Faça login novamente.');
                setDeleting(false);
                return;
            }
                
            const response = await fetch('http://localhost:8000/api/auth/delete-account/', {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                }
            });
                
            if (response.ok) {
                // Conta deletada com sucesso
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                localStorage.removeItem('user_data');
                    
                alert('Conta deletada com sucesso!');
                navigate('/exercicio3');
            } else {
                const errorData = await response.json();
                setError(errorData.detail || 'Erro ao deletar conta');
            }
        } catch (error) {
            setError('Erro de conexão com o servidor');
            console.error('Erro:', error);
        } finally {
            setDeleting(false);
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col min-h-screen bg-background text-foreground relative overflow-hidden">
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                        <p className="text-muted-foreground">Carregando seus dados...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col min-h-screen bg-background text-foreground relative overflow-hidden">
                <div className="flex-grow flex items-center justify-center p-4">
                    <Card className="w-full max-w-md bg-card/95 backdrop-blur-sm border-border shadow-2xl">
                        <CardHeader className="text-center">
                            <div className="mx-auto w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                                <ShieldCheck className="w-6 h-6 text-destructive" />
                            </div>
                            <CardTitle className="text-xl text-destructive">Erro</CardTitle>
                            <CardDescription>{error}</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex flex-col gap-2">
                            <Button
                                onClick={() => navigate('/exercicio3')}
                                className="w-full"
                            >
                                Ir para Login
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => window.location.reload()}
                                className="w-full"
                            >
                                Tentar Novamente
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-green-500/5 blur-[100px]" />
            </div>

            {/* Header com botão voltar */}
            <header className="absolute top-0 w-full p-6 z-10">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/">
                        <Button variant="ghost" size="sm" className="gap-2 hover:bg-card/50">
                            <ArrowLeft className="w-4 h-4" />
                            Voltar para Home
                        </Button>
                    </Link>
                    <Badge variant="secondary" className="gap-1">
                        <Star className="w-3 h-3" />
                        Bem-vindo
                    </Badge>
                </div>
            </header>

            {/* Main Content - Centralizado */}
            <main className="flex-grow flex items-center justify-center p-4 sm:p-8">
                <Card className="w-full max-w-2xl bg-card/95 backdrop-blur-sm border-border shadow-2xl animate-in fade-in zoom-in duration-500">
                    <CardHeader className="space-y-1 text-center">
                        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                            <User className="w-8 h-8" />
                        </div>
                        <CardTitle className="text-3xl font-bold tracking-tight">
                            Bem-vindo, {userData?.username}!
                        </CardTitle>
                        <CardDescription className="text-lg text-muted-foreground">
                            Estamos felizes em tê-lo(a) conosco
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        {/* Informações do Usuário */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                    <User className="w-5 h-5 text-primary" />
                                    Informações Pessoais
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                                        <User className="w-4 h-4 text-muted-foreground" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Nome de Usuário</p>
                                            <p className="font-medium">{userData?.username}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                                        <Mail className="w-4 h-4 text-muted-foreground" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">E-mail</p>
                                            <p className="font-medium">{userData?.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-primary" />
                                    Detalhes da Conta
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                                        <ShieldCheck className="w-4 h-4 text-muted-foreground" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">ID da Conta</p>
                                            <p className="font-medium">#{userData?.id}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                                        <Calendar className="w-4 h-4 text-muted-foreground" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Data de Criação</p>
                                            <p className="font-medium">
                                                {userData?.created_at ? new Date(userData.created_at).toLocaleDateString('pt-BR') : 'Não disponível'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mensagem de boas-vindas */}
                        <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                            <p className="text-center text-muted-foreground">
                                Sua conta foi criada com sucesso!
                            </p>
                        </div>
                    </CardContent>

                    <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center p-6 bg-muted/20 border-t border-border mt-2">
                        <Button
                            onClick={handleDeleteAccount}
                            variant="destructive"
                            disabled={deleting}
                            className="gap-2 w-full sm:w-auto"
                        >
                            {deleting ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Deletando...
                                </>
                            ) : (
                                <>
                                    <Trash2 className="w-4 h-4" />
                                    Deletar Conta
                                </>
                            )}
                        </Button>
                        <Button
                            onClick={() => navigate('/')}
                            className="gap-2 w-full sm:w-auto"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Voltar para Home
                        </Button>
                    </CardFooter>
                </Card>
            </main>

            {/* Footer minimalista */}
            <footer className="py-6 text-center text-sm text-muted-foreground/60">
                <p>&copy; 2026 Bem-vindo ao Sistema. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
};

export default WelcomePage;
// Fim WelcomePage.tsx