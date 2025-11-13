import { useState } from "react";

const products = [
  { id: 1, name: "Zero Kal0ries — Classic Sweetener", price: 9.99, sizes: ["100g", "250g", "500g"], image: "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?q=80&w=1600&auto=format&fit=crop" },
  { id: 2, name: "Zero Kal0ries — Baking Blend", price: 12.99, sizes: ["250g", "500g", "1kg"], image: "https://images.unsplash.com/photo-1728241373234-4c01efc3fd83?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxaZXJvJTIwS2FsMHJpZXMlMjAlRTIlODAlOTQlMjBDbGFzc2ljfGVufDB8MHx8fDE3NjMwMjk3OTV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" },
  { id: 3, name: "Zero Kal0ries — Stevia Mix", price: 10.99, sizes: ["100g", "250g", "500g"], image: "https://images.unsplash.com/photo-1728241373234-4c01efc3fd83?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxaZXJvJTIwS2FsMHJpZXMlMjAlRTIlODAlOTQlMjBDbGFzc2ljfGVufDB8MHx8fDE3NjMwMjk3OTV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" },
];

export default function Products({ onAddToCart }) {
  const [selected, setSelected] = useState({});

  const handleChange = (id, size) => {
    setSelected((s) => ({ ...s, [id]: size }));
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Products</h2>
        <p className="mt-3 text-gray-600 text-center">Clean, premium blends crafted for daily use.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-semibold text-gray-900">{p.name}</h3>
                <div className="mt-1 text-gray-600">${p.price.toFixed(2)}</div>
                <div className="mt-4">
                  <label className="text-sm text-gray-700">Size</label>
                  <select
                    className="mt-1 w-full rounded-lg border-gray-300"
                    value={selected[p.id] || p.sizes[0]}
                    onChange={(e) => handleChange(p.id, e.target.value)}
                  >
                    {p.sizes.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={() => onAddToCart(p, selected[p.id] || p.sizes[0])}
                  className="mt-4 w-full bg-gray-900 text-white py-2.5 rounded-lg hover:bg-black transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
