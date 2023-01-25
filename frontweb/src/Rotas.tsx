import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Catalogo from './pages/Home/Catalogo';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Catalogo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
