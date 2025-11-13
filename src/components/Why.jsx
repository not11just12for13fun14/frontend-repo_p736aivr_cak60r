export default function Why() {
  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Why Choose Zero Kal0ries?</h2>
        <p className="mt-3 text-gray-600 text-center">Scientifically-backed benefits that fit your lifestyle.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900">Comparison vs. Regular Sugar</h3>
            <div className="mt-4 grid grid-cols-2 text-sm">
              <div className="text-gray-500">Calories</div>
              <div className="font-medium">0 vs ~16 per tsp</div>
              <div className="text-gray-500">Glycemic Impact</div>
              <div className="font-medium">Minimal vs High</div>
              <div className="text-gray-500">Additives</div>
              <div className="font-medium">None vs Often present</div>
              <div className="text-gray-500">Usage</div>
              <div className="font-medium">Tea, coffee, baking vs Mostly beverages</div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-100">
            <h3 className="font-semibold text-emerald-900">Lifestyle & Health Benefits</h3>
            <ul className="mt-3 space-y-2 text-emerald-800 list-disc pl-5">
              <li>Supports weight management</li>
              <li>Helps reduce daily sugar intake</li>
              <li>Suitable for diabetics and low-carb diets</li>
              <li>No bitter aftertaste</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
