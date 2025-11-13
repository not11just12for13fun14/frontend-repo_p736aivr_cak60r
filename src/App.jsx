import { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Why from "./components/Why";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Lifestyle from "./components/Lifestyle";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  const productsRef = useRef(null);
  const [cart, setCart] = useState([]);

  const handleShopNow = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAddToCart = (product, size) => {
    setCart((c) => [...c, { ...product, size }]);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar cartCount={cart.length} />
      <main>
        <Hero onShop={handleShopNow} />
        <About />
        <Features />
        <Why />
        <div ref={productsRef}>
          <Products onAddToCart={handleAddToCart} />
        </div>
        <Testimonials />
        <Lifestyle />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
