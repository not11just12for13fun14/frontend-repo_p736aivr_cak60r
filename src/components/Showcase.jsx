import { motion } from "framer-motion";

const items = [
  { id: 1, name: "Classic Sweetener", price: 9.99, sizes: ["100g", "250g", "500g"], image: "https://images.unsplash.com/photo-1641679103706-fc8542e2a97a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbGFzc2ljJTIwU3dlZXRlbmVyfGVufDB8MHx8fDE3NjMwMzM5OTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" },
  { id: 2, name: "Baking Blend", price: 12.99, sizes: ["250g", "500g", "1kg"], image: "https://images.unsplash.com/photo-1641679103706-fc8542e2a97a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbGFzc2ljJTIwU3dlZXRlbmVyfGVufDB8MHx8fDE3NjMwMzM5OTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" },
  { id: 3, name: "Stevia Mix", price: 10.99, sizes: ["100g", "250g", "500g"], image: "https://images.unsplash.com/photo-1641679103706-fc8542e2a97a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbGFzc2ljJTIwU3dlZXRlbmVyfGVufDB8MHx8fDE3NjMwMzM5OTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" },
];

export default function Showcase({ onAddToCart }) {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Shop Zero Kal0ries</h2>
        <p className="mt-3 text-gray-600 text-center">Clean packs, soft shadows, premium finish.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.div key={p.id} className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                <motion.img
                  src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1000&auto=format&fit=crop"
                  alt="rotating mockup"
                  className="absolute bottom-3 right-3 h-16 w-16 rounded-xl shadow-md ring-1 ring-black/5 object-cover"
                  animate={{ rotate: [0, 6, -6, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{p.name}</h3>
                  <div className="text-gray-900 font-medium">${p.price.toFixed(2)}</div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <button onClick={() => onAddToCart?.(p, p.sizes[0])} className="w-full bg-gray-900 text-white py-2.5 rounded-lg hover:bg-black transition">Add to Cart</button>
                  <button className="w-full bg-emerald-600 text-white py-2.5 rounded-lg hover:bg-emerald-700 transition">Subscribe & Save 10%</button>
                </div>
                <div className="mt-4 text-sm text-gray-600">Frequently bought together: Classic + Baking Blend</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
