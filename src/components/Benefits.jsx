import { FlaskConical, HeartPulse, Coffee, CheckCircle2, FlameKindling, Atom } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  { icon: CheckCircle2, title: "Zero Calories", desc: "Enjoy sweetness with absolutely no guilt." },
  { icon: HeartPulse, title: "Diabetic Friendly", desc: "Stable glycemic response for everyday use." },
  { icon: FlameKindling, title: "Keto-Friendly", desc: "Perfect for low-carb and fat-adapted lifestyles." },
  { icon: Atom, title: "Tastes Like Sugar", desc: "Clean sweetness without a bitter aftertaste." },
  { icon: FlaskConical, title: "No Chemicals", desc: "No artificial additives or fillers." },
  { icon: Coffee, title: "Heat Stable", desc: "Ideal for tea, coffee, baking, and desserts." },
];

export default function Benefits() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Benefits, Backed by Science</h2>
        <p className="mt-3 text-gray-600 text-center">Everything you expect from a premium zero-calorie sweetener.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="p-6 bg-gray-50 rounded-2xl border border-gray-200"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <Icon className="h-6 w-6 text-emerald-600" />
              <h3 className="mt-3 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
