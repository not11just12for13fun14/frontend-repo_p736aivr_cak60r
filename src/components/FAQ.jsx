export default function FAQ() {
  const faqs = [
    {
      q: "Is it safe for daily use?",
      a: "Yes. Zero Kal0ries is designed for everyday use with a clean label and no harmful additives.",
    },
    {
      q: "Does it taste like real sugar?",
      a: "Absolutely. It offers a natural sweetness without a bitter aftertaste.",
    },
    {
      q: "Can diabetics use Zero Kal0ries?",
      a: "Yes. It's diabetic-safe with minimal glycemic impact.",
    },
    {
      q: "How is it different from stevia?",
      a: "Our blend is crafted for a smoother, sugar-like taste and better versatility in hot drinks and baking.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">FAQ</h2>
        <div className="mt-10 divide-y divide-gray-200 rounded-2xl border border-gray-200">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-900">
                {f.q}
                <span className="ml-4 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
