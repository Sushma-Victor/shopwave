import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="app-wrapper">
        <NavBar onCartOpen={() => setCartOpen(true)} />
        <main>
          <Hero />
          <ProductGrid />
        </main>
        <Footer />
        <Cart show={cartOpen} onHide={() => setCartOpen(false)} />
      </div>
    </CartProvider>
  );
}