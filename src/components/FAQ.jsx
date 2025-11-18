export default function FAQ() {
  const faqs = [
    {
      q: "How quickly will I see results?",
      a: "Most businesses see improved visibility and engagement within 30-60 days, depending on competition and current profile health.",
    },
    {
      q: "Do you need access to my Google Business Profile?",
      a: "Yes, we'll request manager access so we can optimize content, respond to reviews, and post updates on your behalf.",
    },
    {
      q: "Can you help me recover a suspended profile?",
      a: "Absolutely. We guide you through verification, reinstatement, and best practices to prevent future issues.",
    },
    {
      q: "What businesses do you work with?",
      a: "Service-area businesses, local storefronts, healthcare, home services, hospitality, and more.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-indigo-950 to-slate-950">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Questions & Answers</h2>
        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 overflow-hidden">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group bg-white/5">
              <summary className="cursor-pointer list-none p-5 text-white font-medium flex items-center justify-between">
                {q}
                <span className="ml-4 text-violet-300 group-open:rotate-45 transition">+</span>
              </summary>
              <div className="px-5 pb-5 text-violet-100/90 text-sm">{a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
