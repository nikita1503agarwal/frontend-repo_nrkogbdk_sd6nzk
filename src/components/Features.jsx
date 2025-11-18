import { MapPin, MessageSquare, TrendingUp, Shield } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: MapPin,
      title: "Local SEO that moves the needle",
      desc: "We optimize categories, services, and keywords so you show up for high-intent local searches in Maps and Search.",
    },
    {
      icon: MessageSquare,
      title: "Reviews that build trust",
      desc: "Proven playbooks to request more 5-star reviews and respond professionally to every customer comment.",
    },
    {
      icon: TrendingUp,
      title: "Content that converts",
      desc: "Weekly posts, offers, and photos to keep your profile active and engaging—boosting clicks and calls.",
    },
    {
      icon: Shield,
      title: "Accurate info, always",
      desc: "We monitor and update hours, attributes, and Q&A so customers always see correct information.",
    },
  ];

  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-indigo-950 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Everything you need for a winning Google profile</h2>
          <p className="mt-3 text-violet-100/90">Hands-off management with transparent results.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <div className="w-10 h-10 rounded-lg bg-violet-500/20 text-violet-300 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-violet-100/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
