// Importar estilos CSS
import './App.css'

// Importar as páginas
import Home from './pages/Home'
import Exercicio1 from './pages/Exercicio1'
import Exercicio2 from './pages/Exercicio2'
import Exercicio3 from './pages/Exercicio3'
import Exercicio4 from './pages/Exercicio4'
import Exercicio5 from './pages/Exercicio5'
import Exercicio6 from './pages/Exercicio6'
import Exercicio7 from './pages/Exercicio7'
import Exercicio8 from './pages/Exercicio8'
import Exercicio9 from './pages/Exercicio9'
import Exercicio10 from './pages/Exercicio10'
import WelcomePage from './pages/WelcomePage'

// Importar o react router dom para rotear páginas da nossa apicação
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Componente Principal da Aplicação
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página Raiz - Home com cards */}
        <Route path="/" element={<Home />} />
        
        {/* Rotas para as páginas dos exercícios */}
        <Route path="/exercicio1" element={<Exercicio1 />} />
        <Route path="/exercicio2" element={<Exercicio2 />} />
        <Route path="/exercicio3" element={<Exercicio3 />} />
        <Route path="/exercicio4" element={<Exercicio4 />} />
        <Route path="/exercicio5" element={<Exercicio5 />} />
        <Route path="/exercicio6" element={<Exercicio6 />} />
        <Route path="/exercicio7" element={<Exercicio7 />} />
        <Route path="/exercicio8" element={<Exercicio8 />} />
        <Route path="/exercicio9" element={<Exercicio9 />} />
        <Route path="/exercicio10" element={<Exercicio10 />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
