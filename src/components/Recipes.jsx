import { motion } from "framer-motion";

const recipes = [
  { t: "Perfect Tea", d: "Fragrant chai with Zero Kal0ries.", img: "https://images.unsplash.com/photo-1523906630133-f6934a1ab26f?q=80&w=1600&auto=format&fit=crop" },
  { t: "Cafe Latte", d: "Silky coffee, zero calories.", img: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1600&auto=format&fit=crop" },
  { t: "Vanilla Cupcakes", d: "Bakes like sugar, tastes like joy.", img: "https://images.unsplash.com/photo-1514517220031-8087c37716c5?q=80&w=1600&auto=format&fit=crop" },
  { t: "Kheer (Indian Dessert)", d: "Traditional taste, modern nutrition.", img: "https://images.unsplash.com/photo-1604908554034-2f2da34ec59c?q=80&w=1600&auto=format&fit=crop" },
  { t: "Berry Smoothie", d: "Athlete-favorite post-workout.", img: "https://images.unsplash.com/photo-1553530666-8e9ac052f3df?q=80&w=1600&auto=format&fit=crop" },
  { t: "Protein Dessert", d: "High-protein, low-cal indulgence.", img: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1600&auto=format&fit=crop" },
];

export default function Recipes() {
  return (
    <section id="recipes" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Recipes & Health Blog</h2>
        <p className="mt-3 text-gray-600 text-center">Cook, sip, and celebrate sweetness without guilt.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((r, i) => (
            <motion.article key={r.t} className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <div className="aspect-[4/3]">
                <img src={`${r.img}`} alt={r.t} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900">{r.t}</h3>
                <p className="mt-2 text-sm text-gray-600">{r.d}</p>
                <a href="#" className="mt-3 inline-block text-emerald-700 text-sm font-medium">Read more →</a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {["How to reduce sugar addiction", "Zero-calorie lifestyle tips", "Benefits of clean sweeteners"].map((b, i) => (
            <motion.div key={b} className="p-6 rounded-2xl border border-gray-200 bg-white" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <h4 className="font-semibold text-gray-900">{b}</h4>
              <p className="mt-2 text-sm text-gray-600">Expert-backed insights to help you build lasting healthy habits.</p>
              <a href="#" className="mt-3 inline-block text-emerald-700 text-sm font-medium">Read article →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
