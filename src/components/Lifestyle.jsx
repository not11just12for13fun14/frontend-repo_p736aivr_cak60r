export default function Lifestyle() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Lifestyle Inspiration</h2>
        <p className="mt-3 text-gray-600 text-center">Healthy cooking, weight goals, and everyday balance.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Healthy Cooking",
              img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop",
              desc: "Create delicious meals with smart sugar swaps.",
            },
            {
              title: "Weight Journey",
              img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1600&auto=format&fit=crop",
              desc: "Cut calories without losing flavor.",
            },
            {
              title: "Daily Swap",
              img: "https://images.unsplash.com/photo-1553530738-0df6f2a4c798?q=80&w=1600&auto=format&fit=crop",
              desc: "A simple replacement for sugar in any routine.",
            },
          ].map((c) => (
            <div key={c.title} className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <div className="aspect-[4/3]">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900">{c.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
