export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">About Zero Kal0ries</h2>
            <p className="mt-4 text-gray-600">
              We started Zero Kal0ries with a simple belief: sweetness should uplift your life, not weigh it down. Our mission is to promote healthier choices by offering a clean, zero-calorie sugar alternative without compromising taste.
            </p>
            <p className="mt-4 text-gray-600">
              Meticulously developed with nutritionists, our formula delivers the natural sweetness you love — free from artificial chemicals and hidden additives. Trusted by fitness enthusiasts, home bakers, and families alike.
            </p>
          </div>
          <div className="space-y-4">
            <div className="p-5 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900">What makes us different?</h3>
              <ul className="mt-3 space-y-2 text-gray-600 list-disc pl-5">
                <li>Zero calories with full-bodied sweetness</li>
                <li>Natural taste profile — no bitter aftertaste</li>
                <li>Diabetic-safe and keto-friendly</li>
                <li>Perfect for hot drinks, baking, and everyday meals</li>
              </ul>
            </div>
            <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-100">
              <h3 className="font-semibold text-emerald-900">Our Mission</h3>
              <p className="mt-2 text-emerald-800">Empowering healthier lifestyles with clean, guilt-free sweetness that fits every routine.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
