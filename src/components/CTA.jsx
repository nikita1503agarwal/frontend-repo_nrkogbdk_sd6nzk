export default function CTA() {
  return (
    <section id="cta" className="relative py-20 bg-gradient-to-b from-slate-950 to-indigo-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-indigo-500 opacity-20" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_80%_20%,rgba(255,255,255,0.4),transparent)]" />
          <div className="relative rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Get a free Google Business Profile audit</h3>
                <p className="mt-2 text-violet-100/90">We’ll assess your visibility, ranking factors, and opportunities to win more local customers.</p>
              </div>
              <form className="grid sm:grid-cols-2 gap-3">
                <input className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none" placeholder="Your name" />
                <input type="email" className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none" placeholder="Work email" />
                <input className="sm:col-span-2 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none" placeholder="Business name" />
                <button type="button" className="sm:col-span-2 px-6 py-3 rounded-lg bg-white text-violet-900 font-semibold hover:shadow-lg transition">Request audit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
