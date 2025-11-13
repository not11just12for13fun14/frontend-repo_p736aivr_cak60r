import { ArrowRight } from "lucide-react";

export default function Hero({ onShop }) {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-emerald-50 to-teal-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium mb-4">Zero calories • Zero guilt • Full sweetness</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Sweetness Without Compromise
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A zero-calorie healthy sugar alternative for a better lifestyle. Perfect for tea, coffee, baking, and daily use.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={onShop} className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-lg hover:bg-black transition">
              Shop Now <ArrowRight className="h-4 w-4" />
            </button>
            <a href="#products" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-300 text-gray-800 hover:bg-white/50">
              Explore Products
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop"
              alt="Healthy lifestyle and natural sweetener"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
