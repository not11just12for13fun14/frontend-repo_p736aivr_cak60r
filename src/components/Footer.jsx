import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="font-semibold text-white">Zero Kal0ries</div>
            <p className="mt-3 text-sm">Zero calories, zero guilt, full sweetness.</p>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">Links</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#products" className="hover:text-white">Products</a></li>
              <li><a href="#faq" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">Policies</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Refund</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">Follow</div>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook /></a>
              <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram /></a>
              <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-gray-400">© {new Date().getFullYear()} Zero Kal0ries. All rights reserved.</div>
      </div>
    </footer>
  );
}
