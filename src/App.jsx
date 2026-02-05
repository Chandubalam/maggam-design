import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import { Toaster } from 'sonner';

import ScrollToTop from './components/ScrollToTop';
import FloatingIcons from './components/FloatingIcons';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <FloatingIcons />
      <CartProvider>
        <div className="relative z-10 flex flex-col font-sans w-full min-h-screen overflow-x-hidden">
          <Toaster position="bottom-center" richColors />

          <Navbar onCartClick={() => setIsCartOpen(true)} />

          <CartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
          />

          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
