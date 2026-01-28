// Exercício 5 – Lista de Produtos com Carrinho Funcional

import { useState, createContext, useContext, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  ShoppingCart,
  Heart,
  Star,
  Search,
  Filter
} from 'lucide-react';
import { Input } from '@/components/ui/input';

// Interface do Produto
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  isNew?: boolean;
}

// Interface do Item do Carrinho
interface CartItem extends Product {
  quantity: number;
}

// Tipo para as ações do carrinho
type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' };

// Contexto do Carrinho
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | null>(null);

// Reducer para gerenciar o estado do carrinho
const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload);
    
    case 'UPDATE_QUANTITY':
      if (action.payload.quantity <= 0) {
        return state.filter(item => item.id !== action.payload.id);
      }
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    
    case 'CLEAR_CART':
      return [];
    
    default:
      return state;
  }
};

// Provider do Carrinho
const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const removeFromCart = (productId: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalItems,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook customizado para usar o carrinho
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Dados simulados de produtos (Tech/Gaming Theme)
const products: Product[] = [
  {
    id: 1,
    name: "Headset Gamer Pro X",
    category: "Áudio",
    price: 349.90,
    image: "https://placehold.co/600x400/1e293b/cbd5e1?text=Headset+Pro",
    rating: 4.8,
    isNew: true
  },
  {
    id: 2,
    name: "Teclado Mecânico RGB",
    category: "Periféricos",
    price: 459.00,
    image: "https://placehold.co/600x400/1e293b/cbd5e1?text=Keyboard+RGB",
    rating: 4.6
  },
  {
    id: 3,
    name: "Mouse Wireless Ultra",
    category: "Periféricos",
    price: 199.50,
    image: "https://placehold.co/600x400/1e293b/cbd5e1?text=Mouse+Ultra",
    rating: 4.9,
    isNew: true
  },
  {
    id: 4,
    name: "Monitor 144Hz 27\"",
    category: "Monitores",
    price: 1899.00,
    image: "https://placehold.co/600x400/1e293b/cbd5e1?text=Monitor+144Hz",
    rating: 4.7
  },
  {
    id: 5,
    name: "Webcam 4K Stream",
    category: "Streaming",
    price: 599.90,
    image: "https://placehold.co/600x400/1e293b/cbd5e1?text=Webcam+4K",
    rating: 4.5
  },
  {
    id: 6,
    name: "Microfone Condensador",
    category: "Áudio",
    price: 289.00,
    image: "https://placehold.co/600x400/1e293b/cbd5e1?text=Mic+Studio",
    rating: 4.4
  },
  {
    id: 7,
    name: "Cadeira Ergonômica",
    category: "Móveis",
    price: 1299.00,
    image: "https://placehold.co/600x400/1e293b/cbd5e1?text=Chair+Ergo",
    rating: 4.8
  },
  {
    id: 8,
    name: "Mousepad XXL RGB",
    category: "Acessórios",
    price: 89.90,
    image: "https://placehold.co/600x400/1e293b/cbd5e1?text=Mousepad+XXL",
    rating: 4.3
  }
];

const Exercicio5 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getTotalItems, getTotalPrice } = useCart();

  // Filtra produtos baseado na busca
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <Link to="/">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold">Tech Store</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Exercício 5 - Lista de Produtos</p>
            </div>
          </div>

          {/* Barra de Busca e Carrinho */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar produtos..."
                className="pl-9 bg-secondary/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button 
              size="icon" 
              variant="outline" 
              className="relative shrink-0"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-bold">
                  {getTotalItems()}
                </span>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 grow">

        {/* Filtros e Título */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Produtos em Destaque</h2>
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="w-4 h-4" />
            Filtros
          </Button>
        </div>

        {/* Grid de Produtos */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Imagem do Produto */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.isNew && (
                    <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground pointer-events-none">
                      NOVO
                    </Badge>
                  )}
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full h-8 w-8 hover:bg-white hover:text-red-500"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                <CardHeader className="p-4 pb-0">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="text-xs font-normal text-muted-foreground border-border">
                      {product.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs font-medium text-yellow-500">
                      <Star className="w-3 h-3 fill-yellow-500" />
                      {product.rating}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg line-clamp-1 mt-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </CardHeader>

                <CardContent className="p-4 pt-2">
                  <p className="text-2xl font-bold text-foreground">
                    {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </p>
                  <p className="text-base text-muted-foreground mt-1">
                    em até 12x de {(product.price / 12).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </p>
                </CardContent>

                <CardFooter className="p-4 pt-0">
                  <Button 
                    className="w-full gap-2 font-medium" 
                    onClick={() => {
                      addToCart(product);
                      alert(`${product.name} adicionado ao carrinho!`);
                    }}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Adicionar
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          /* Estado Vazio */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Search className="w-16 h-16 text-muted-foreground/30 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Nenhum produto encontrado</h3>
            <p className="text-muted-foreground mb-6">
              Não encontramos resultados para "{searchTerm}". Tente outro termo.
            </p>
            <Button variant="outline" onClick={() => setSearchTerm('')}>
              Limpar Busca
            </Button>
          </div>
        )}

      </main>

      {/* Modal do Carrinho */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-lg shadow-xl w-full max-w-[40vw] max-h-[90vh] flex flex-col">
            {/* Header do Modal */}
            <div className="p-4 border-b border-border flex items-center justify-between">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Carrinho ({getTotalItems()} itens)
              </h2>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsCartOpen(false)}
              >
                ×
              </Button>
            </div>
            
            {/* Conteúdo do Carrinho */}
            <div className="flex-1 overflow-y-auto p-4">
              {cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">Seu carrinho está vazio</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-3 bg-muted/80 rounded-lg">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-base truncate">{item.name}</h3>
                        <p className="text-muted-foreground text-base">
                          {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Button 
                            size="icon" 
                            variant="outline" 
                            className="w-6 h-6"
                            onClick={() => {
                              if (item.quantity > 1) {
                                updateQuantity(item.id, item.quantity - 1);
                              } else {
                                removeFromCart(item.id);
                              }
                            }}
                          >
                            -
                          </Button>
                          <span className="text-base w-8 text-center">{item.quantity}</span>
                          <Button 
                            size="icon" 
                            variant="outline" 
                            className="w-6 h-6"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-sm">
                          {(item.price * item.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </p>
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          className="w-6 h-6 mt-1 text-destructive hover:text-destructive hover:bg-destructive/10"
                          onClick={() => removeFromCart(item.id)}
                        >
                          ×
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Footer do Modal */}
            {cartItems.length > 0 && (
              <div className="p-4 border-t border-border space-y-3">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total:</span>
                  <span>{getTotalPrice().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => {
                      clearCart();
                      setIsCartOpen(false);
                    }}
                  >
                    Limpar Carrinho
                  </Button>
                  <Button 
                    className="flex-1"
                    onClick={() => {
                      alert('Compra finalizada!');
                      clearCart();
                      setIsCartOpen(false);
                    }}
                  >
                    Finalizar Compra
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Tech Store. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

const Exercicio5WithCart = () => {
  return (
    <CartProvider>
      <Exercicio5 />
    </CartProvider>
  );
};

export default Exercicio5WithCart;
// Fim Exercício 5
