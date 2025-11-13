import { ArrowRight, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero({ onShop }) {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-emerald-50 to-emerald-100/40" />

      {/* subtle floating shapes */}
      <motion.div
        aria-hidden
        className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium mb-4">
            <Sparkles className="h-3.5 w-3.5" /> 100% Zero Calories • Keto Friendly • Diabetic Safe • Great Taste
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            Reinventing Sweetness.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A clean, zero-calorie healthy sugar alternative for a better, lighter, healthier life.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={onShop} className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-lg hover:bg-black transition">
              Shop Now <ArrowRight className="h-4 w-4" />
            </button>
            <a href="#features" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-300 text-gray-800 hover:bg-white/50">
              Discover Benefits
            </a>
            <a href="#challenge" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">
              Start 30-Day Healthy Sweet Challenge <Play className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <motion.img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop"
              alt="Healthy lifestyle and natural sweetener"
              className="w-full h-full object-cover"
              initial={{ scale: 1.02 }}
              animate={{ scale: [1.02, 1.05, 1.02] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          {/* floating product mockup */}
          <motion.div
            className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur border border-black/5 shadow-xl rounded-xl p-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-sm font-semibold text-gray-900">Zero Kal0ries</div>
            <div className="text-xs text-gray-600">Sweetness Without Guilt</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
