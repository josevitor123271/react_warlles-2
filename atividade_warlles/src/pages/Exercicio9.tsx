import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogClose, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ZoomIn, X, Download, Share2, Heart } from 'lucide-react';
import Loading from '@/components/system/Loading';

// Tipos para a API Nekos (mantidos para referência)
// interface NekosImage {
//   id: string;
//   signature: string;
//   url: string;
//   width: number;
//   height: number;
//   extension: string;
//   categories: string[];
//   tags: string[];
//   characters: any[];
//   artists: any[];
//   rating: 'safe' | 'suggestive' | 'borderline' | 'explicit';
//   created_at: string;
//   updated_at: string;
// }

// Interface para personagem da Dragon Ball API
interface DragonBallCharacter {
  id: string;
  name: string;
  imageUrl: string;
  race: string;
  gender: string;
  description: string;
  originPlanet: string;
  affiliations: string[];
  transformations: string[];
}

// Interface para controle de loading individual
interface ImageLoadState {
  [key: string]: boolean;
}

// Hook personalizado para buscar personagens da Dragon Ball API
const useDragonBallCharacters = () => {
  const [characters, setCharacters] = useState<DragonBallCharacter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCharacters = async (limit: number = 12) => {
    try {
      setLoading(true);
      setError(null);

      // Buscar personagens da Dragon Ball API
      const response = await fetch(`https://dragonball-api.com/api/characters?limit=${limit}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Verificar se os dados estão no formato esperado
      if (!data || !Array.isArray(data.items)) {
        throw new Error('Formato de dados inválido da API - esperava array em data.items');
      }

      // Transformar os dados da API para nosso formato
      const formattedCharacters: DragonBallCharacter[] = data.items.map((item: any) => ({
        id: item.id,
        name: item.name,
        imageUrl: item.imageUrl || item.image || '',
        race: item.race || 'Desconhecida',
        gender: item.gender || 'Desconhecido',
        description: item.description || item.bio || 'Sem descrição disponível',
        originPlanet: item.originPlanet?.name || 'Desconhecido',
        affiliations: item.affiliations || [],
        transformations: item.transformations || []
      }));

      setCharacters(formattedCharacters);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar personagens');
      console.error('Erro ao buscar personagens:', err);
    } finally {
      setLoading(false);
    }
  };

  // Buscar personagens ao montar o componente
  useEffect(() => {
    fetchCharacters();
  }, []);

  return { characters, loading, error, refetch: fetchCharacters };
};

// Componente 9
const Exercicio9 = () => {
  const navigate = useNavigate();
  const [selectedRace, setSelectedRace] = useState("Todas");
  const [selectedCharacter, setSelectedCharacter] = useState<DragonBallCharacter | null>(null);
  const [imageLoadStates, setImageLoadStates] = useState<ImageLoadState>({});

  // Usar o hook personalizado para buscar personagens da API
  const { characters, loading, error, refetch } = useDragonBallCharacters();

  // Extrair raças únicas dos personagens
  const races = ["Todas", ...new Set(characters.map(char => char.race))];

  const filteredCharacters = selectedRace === "Todas"
    ? characters
    : characters.filter(char => char.race === selectedRace);

  // Função para lidar com o carregamento individual de imagens
  const handleImageLoad = (characterId: string) => {
    setImageLoadStates(prev => ({
      ...prev,
      [characterId]: false
    }));
  };

  const handleImageError = (characterId: string) => {
    setImageLoadStates(prev => ({
      ...prev,
      [characterId]: false
    }));
  };

  // Inicializar estado de loading para novos personagens
  useEffect(() => {
    const newLoadStates: ImageLoadState = {};
    characters.forEach(char => {
      if (!(char.id in imageLoadStates)) {
        newLoadStates[char.id] = true;
      }
    });
    if (Object.keys(newLoadStates).length > 0) {
      setImageLoadStates(prev => ({ ...prev, ...newLoadStates }));
    }
  }, [characters]);

  // Mostrar estado de carregamento
  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <header className="sticky top-0 z-10 p-4 border-b border-border bg-background/80 backdrop-blur-sm flex items-center justify-between">
          <div className="container mx-auto px-0 flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center gap-2 -ml-4 text-muted-foreground hover:text-foreground hover:bg-transparent"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-lg">Voltar</span>
            </Button>
            <div className="h-6 w-px bg-border mx-2 hidden sm:block"></div>
            <h1 className="text-xl font-bold hidden sm:block">Galeria Dragon Ball</h1>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 flex-1 flex items-center justify-center">
          <Loading message="Carregando imagens..." />
        </main>
      </div>
    );
  }

  // Mostrar erro se ocorrer
  if (error) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <header className="sticky top-0 z-10 p-4 border-b border-border bg-background/80 backdrop-blur-sm flex items-center justify-between">
          <div className="container mx-auto px-0 flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center gap-2 -ml-4 text-muted-foreground hover:text-foreground hover:bg-transparent"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-lg">Voltar</span>
            </Button>
            <div className="h-6 w-px bg-border mx-2 hidden sm:block"></div>
            <h1 className="text-xl font-bold hidden sm:block">Galeria Dragon Ball</h1>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 flex-1 flex items-center justify-center">
          <div className="text-center max-w-md">
            <div className="text-destructive mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">Erro ao carregar imagens</h2>
            <p className="text-muted-foreground mb-6">{error}</p>
            <Button onClick={(_) => refetch()} className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Tentar novamente
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header com botão de voltar */}
      <header className="sticky top-0 z-10 p-4 border-b border-border bg-background/80 backdrop-blur-sm flex items-center justify-between">
        <div className="container mx-auto px-0 flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 -ml-4 text-muted-foreground hover:text-foreground hover:bg-transparent"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-lg">Voltar</span>
          </Button>
          <div className="h-6 w-px bg-border mx-2 hidden sm:block"></div>
          <h1 className="text-xl font-bold hidden sm:block">Galeria de Imagens</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex-1">

        {/* Filtros por Raça */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {races.map((race) => (
            <Button
              key={race}
              variant={selectedRace === race ? "default" : "outline"}
              onClick={() => setSelectedRace(race)}
              className="rounded-full px-6 transition-all duration-300"
            >
              {race}
            </Button>
          ))}
        </div>

        {/* Grid de Personagens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCharacters.map((character) => (
            <Card
              key={character.id}
              className="group overflow-hidden border-0 bg-transparent cursor-pointer relative"
              onClick={() => setSelectedCharacter(character)}
            >
              <div className="relative aspect-3/4 overflow-hidden rounded-xl bg-muted">
                {/* Loading overlay para cada imagem */}
                {imageLoadStates[character.id] && (
                  <div className="absolute inset-0 z-10">
                    <Loading
                      message=""
                      className="h-full"
                      overlay={true}
                    />
                  </div>
                )}

                <img
                  src={character.imageUrl}
                  alt={character.name}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onLoad={() => handleImageLoad(character.id)}
                  onError={() => handleImageError(character.id)}
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-background/20 p-3 rounded-full backdrop-blur-md border border-white/20 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>

                {/* Info Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <p className="text-white font-semibold truncate">{character.name}</p>
                  <p className="text-white/70 text-xs">{character.race}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredCharacters.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg">Nenhum personagem encontrado nesta raça.</p>
          </div>
        )}

      </main>

      {/* Modal de Detalhes do Personagem */}
      <Dialog open={!!selectedCharacter} onOpenChange={(open) => !open && setSelectedCharacter(null)}>
        <DialogContent showCloseButton={false} className="max-w-6xl w-[95vw] h-[90vh] md:h-auto p-0 overflow-hidden bg-background border-border sm:rounded-2xl">
          <DialogTitle className="sr-only">{selectedCharacter?.name}</DialogTitle>
          <DialogDescription className="sr-only">{selectedCharacter?.description}</DialogDescription>

          <div className="relative flex flex-col md:flex-row h-full max-h-[90vh]">

            {/* Coluna 1: Imagem do personagem */}
            <div className="flex-1 bg-black flex items-center justify-center relative overflow-hidden group">
              <img
                src={selectedCharacter?.imageUrl}
                alt={selectedCharacter?.name}
                className="max-h-[60vh] md:max-h-[85vh] w-full object-contain"
              />
            </div>

            {/* Coluna 2: Informações do personagem */}
            <div className="w-full md:w-96 min-w-xs bg-card p-6 md:p-8 flex flex-col justify-between border-l border-border h-full md:h-auto overflow-y-auto">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="mb-2 text-sm px-3 py-1">{selectedCharacter?.race}</Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
                      <Heart className="w-6 h-6" />
                    </Button>
                    <DialogClose>
                      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full md:hidden">
                        <X className="w-6 h-6" />
                      </Button>
                    </DialogClose>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-3">{selectedCharacter?.name}</h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  {selectedCharacter?.description}
                </p>

                <div className="space-y-6">
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground mb-3 text-base">Informações do Personagem</p>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium">Raça:</span>
                        <span>{selectedCharacter?.race}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Gênero:</span>
                        <span>{selectedCharacter?.gender}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Planeta de Origem:</span>
                        <span>{selectedCharacter?.originPlanet}</span>
                      </div>

                      {selectedCharacter?.affiliations && selectedCharacter.affiliations.length > 0 && (
                        <div>
                          <span className="font-medium block mb-2">Afiliações:</span>
                          <div className="flex flex-wrap gap-2">
                            {selectedCharacter.affiliations.map((affiliation, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {affiliation}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedCharacter?.transformations && selectedCharacter.transformations.length > 0 && (
                        <div>
                          <span className="font-medium block mb-2">Transformações:</span>
                          <div className="flex flex-wrap gap-2">
                            {selectedCharacter.transformations.map((transformation, index) => (
                              <Badge key={index} variant="default" className="text-xs">
                                {transformation}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-8">
                <Button className="w-full flex gap-2 h-12 text-base" size="lg">
                  <Download className="w-5 h-5" /> Baixar Imagem
                </Button>
                <Button variant="outline" className="w-full flex gap-2 h-12 text-base" size="lg">
                  <Share2 className="w-5 h-5" /> Compartilhar
                </Button>
              </div>
            </div>

            {/* Close Button Absolute for Desktop */}
            <DialogClose>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-50 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full hidden md:flex h-12 w-12"
              >
                <X className="w-8 h-8" />
                <span className="sr-only">Fechar</span>
              </Button>
            </DialogClose>

          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Exercicio9;

// Fonte onde peguei a API: https://nekosapi.com/docs/api-introduction