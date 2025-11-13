import { motion } from "framer-motion";

export default function Why() {
  const rows = [
    { k: "Taste Level", z: "Sugar-like, clean", s: "Very sweet", st: "Variable, sometimes bitter" },
    { k: "Calories", z: "0", s: "~16 per tsp", st: "0" },
    { k: "Chemicals", z: "No artificial additives", s: "Often refined & additives", st: "Varies by brand" },
    { k: "Aftertaste", z: "No bitter aftertaste", s: "—", st: "May be bitter" },
    { k: "Diabetic Friendly", z: "Yes", s: "No", st: "Varies" },
    { k: "Keto-Friendly", z: "Yes", s: "No", st: "Yes" },
    { k: "Baking", z: "Excellent", s: "Caramelizes", st: "Varies" },
    { k: "Daily Use", z: "Yes", s: "Mind portion", st: "Yes" },
  ];

  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Why Choose Zero Kal0ries?</h2>
        <p className="mt-3 text-gray-600 text-center">Zero Kal0ries vs Sugar vs Stevia</p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200">
          <div className="grid grid-cols-4 bg-gray-50 text-sm font-semibold text-gray-700">
            <div className="p-3">Metric</div>
            <div className="p-3">Zero Kal0ries</div>
            <div className="p-3">Sugar</div>
            <div className="p-3">Stevia</div>
          </div>
          {rows.map((r, i) => (
            <motion.div
              key={r.k}
              className="grid grid-cols-4 border-t border-gray-100 text-sm"
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <div className="p-3 bg-white font-medium text-gray-700">{r.k}</div>
              <div className="p-3">{r.z}</div>
              <div className="p-3">{r.s}</div>
              <div className="p-3">{r.st}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {["https://images.unsplash.com/photo-1523906630133-f6934a1ab26f","https://images.unsplash.com/photo-1514996547495-97e46b0eeaad","https://images.unsplash.com/photo-1544025162-d76694265947","https://images.unsplash.com/photo-1518310383802-640c2de311b2"].map((src, i) => (
            <motion.div key={src} className="overflow-hidden rounded-2xl" initial={{ scale: 0.98, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <img src={`${src}?q=80&w=1200&auto=format&fit=crop`} alt="lifestyle" className="w-full h-40 object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
