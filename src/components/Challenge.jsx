import { motion } from "framer-motion";

export default function Challenge() {
  const milestones = [
    { title: "Day 1-7", points: ["Swap sugar in tea/coffee", "Notice energy stability", "Track cravings"] },
    { title: "Day 8-14", points: ["Introduce baking or desserts", "Hydration + fiber focus", "Daily movement"] },
    { title: "Day 15-21", points: ["Refine portions", "Experiment with recipes", "Check-in on sleep"] },
    { title: "Day 22-30", points: ["Confident daily use", "Share your progress", "Plan long-term habits"] },
  ];

  return (
    <section id="challenge" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">30 Days, Zero Sugar — Only Zero Kal0ries</h2>
        <p className="mt-3 text-gray-600 text-center">Join the challenge and feel the difference in energy, focus, and balance.</p>

        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {milestones.map((m) => (
            <motion.div
              key={m.title}
              className="p-6 rounded-2xl border border-gray-200 bg-white"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="font-semibold text-gray-900">{m.title}</div>
              <ul className="mt-3 space-y-1 text-sm text-gray-600 list-disc pl-5">
                {m.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#products" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">Join the Challenge</a>
        </div>
      </div>
    </section>
  );
}
