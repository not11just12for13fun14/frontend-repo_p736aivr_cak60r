import { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Why from "./components/Why";
import Showcase from "./components/Showcase";
import Testimonials from "./components/Testimonials";
import Lifestyle from "./components/Lifestyle";
import Challenge from "./components/Challenge";
import Recipes from "./components/Recipes";
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
        <Benefits />
        <Why />
        <div ref={productsRef}>
          <Showcase onAddToCart={handleAddToCart} />
        </div>
        <Testimonials />
        <Lifestyle />
        <Challenge />
        <Recipes />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
