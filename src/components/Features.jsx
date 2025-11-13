import { CheckCircle2, FlaskConical, HeartPulse, Coffee } from "lucide-react";

const items = [
  { icon: CheckCircle2, title: "Zero calories", desc: "Enjoy sweetness without the extra calories." },
  { icon: HeartPulse, title: "Diabetic-safe & keto-friendly", desc: "Designed for stable energy and mindful nutrition." },
  { icon: FlaskConical, title: "No artificial chemicals", desc: "Clean label, no harmful additives or fillers." },
  { icon: Coffee, title: "Versatile for daily use", desc: "Perfect for tea, coffee, baking, and more." },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Product Features</h2>
        <p className="mt-3 text-gray-600 text-center">Everything you want in a healthy sugar alternative.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <Icon className="h-6 w-6 text-emerald-600" />
              <h3 className="mt-3 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
