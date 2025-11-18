export default function Plans() {
  const plans = [
    {
      name: "Starter",
      price: "$199/mo",
      features: [
        "Profile setup & optimization",
        "2 posts per month",
        "Review request templates",
        "Monthly insights report",
      ],
      popular: false,
    },
    {
      name: "Growth",
      price: "$399/mo",
      features: [
        "Ongoing optimization",
        "Weekly posts & photos",
        "Review monitoring & responses",
        "Competitor tracking",
        "Bi-weekly insights report",
      ],
      popular: true,
    },
    {
      name: "Scale",
      price: "$699/mo",
      features: [
        "Multi-location management",
        "Custom content calendar",
        "Advanced review campaigns",
        "Citations & local links",
        "Weekly insights report",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-slate-950 to-indigo-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-violet-100/90">Choose the plan that matches your growth goals.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative p-6 rounded-2xl border ${
              plan.popular ? "bg-white/10 border-violet-400/30" : "bg-white/5 border-white/10"
            }`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-400 text-violet-950 text-xs font-semibold px-3 py-1 rounded-full">Most Popular</div>
              )}
              <div className="text-white font-semibold text-lg">{plan.name}</div>
              <div className="mt-2 text-3xl font-bold text-white">{plan.price}</div>
              <ul className="mt-6 space-y-2 text-sm text-violet-100/90">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-violet-300" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-6 inline-flex w-full justify-center px-4 py-2 rounded-lg font-medium transition ${
                plan.popular ? "bg-white text-violet-900 hover:shadow-lg" : "border border-white/30 text-white/90 hover:bg-white/10"
              }`}>
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
