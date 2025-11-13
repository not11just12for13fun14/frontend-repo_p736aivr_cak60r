import { Star } from "lucide-react";

const reviews = [
  { name: "Aarav, Fitness Coach", text: "Tastes exactly like sugar without the crash. Game-changer for my morning coffee!", rating: 5 },
  { name: "Nisha, Mom of 2", text: "My family loves it. Kids can't tell the difference and it keeps us on track.", rating: 5 },
  { name: "Rahul, Diabetic", text: "Finally, a daily sweetener I can trust. No spikes, no aftertaste.", rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Loved by Real People</h2>
        <p className="mt-3 text-gray-600 text-center">From fitness journeys to family kitchens.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="p-6 rounded-2xl border border-gray-200 bg-gray-50">
              <div className="flex gap-1 text-amber-500">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-gray-700">“{r.text}”</p>
              <div className="mt-4 text-sm font-medium text-gray-900">{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
