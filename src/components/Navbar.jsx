import { ShoppingCart, Leaf, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar({ cartCount = 0 }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900">
            <Leaf className="h-5 w-5 text-emerald-600" />
            <span>Zero Kal0ries</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#about" className="hover:text-gray-900 transition">About</a>
            <a href="#features" className="hover:text-gray-900 transition">Features</a>
            <a href="#why" className="hover:text-gray-900 transition">Why Us</a>
            <a href="#products" className="hover:text-gray-900 transition">Products</a>
            <a href="#faq" className="hover:text-gray-900 transition">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#products" className="relative inline-flex items-center">
              <ShoppingCart className="h-6 w-6 text-gray-800" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 text-xs bg-emerald-600 text-white rounded-full h-5 w-5 grid place-content-center">
                  {cartCount}
                </span>
              )}
            </a>
            <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3 text-sm text-gray-700">
              <a onClick={() => setOpen(false)} href="#about">About</a>
              <a onClick={() => setOpen(false)} href="#features">Features</a>
              <a onClick={() => setOpen(false)} href="#why">Why Us</a>
              <a onClick={() => setOpen(false)} href="#products">Products</a>
              <a onClick={() => setOpen(false)} href="#faq">FAQ</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
