import { ArrowRight, CheckCircle2, Star, Store } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900 via-violet-800 to-indigo-900" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(60%_40%_at_50%_0%,#a78bfa,transparent)]" />
      </div>

      {/* nav */}
      <div className="max-w-7xl mx-auto px-6 pt-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white font-semibold">
          <div className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur flex items-center justify-center">
            <Store className="w-5 h-5" />
          </div>
          PurpleCrib
        </div>
        <div className="hidden md:flex items-center gap-6 text-violet-100/90">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
          <a href="#cta" className="px-4 py-2 rounded-lg bg-white text-violet-900 font-medium hover:shadow-lg transition">Get Started</a>
        </div>
      </div>

      {/* hero content */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 text-violet-100 px-3 py-1 text-xs mb-4">
              <Star className="w-3.5 h-3.5 text-yellow-300" />
              Google Business Profile Growth
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Get found first on Google with a high‑performing profile
            </h1>
            <p className="mt-4 text-lg text-violet-100/90">
              We optimize and manage your Google Business Profile so you rank higher in Maps, earn more reviews, and turn local searches into customers.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-violet-900 font-semibold hover:shadow-xl hover:-translate-y-0.5 transition">
                Start my profile audit
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/30 text-white/90 hover:bg-white/10 transition">
                See how it works
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-violet-100/90">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-300" /> Profile setup & optimization</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-300" /> Review growth & responses</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-300" /> Weekly posts & updates</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-300" /> Insights & reporting</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-white/20 via-fuchsia-300/20 to-cyan-300/20 blur-2xl" />
            <div className="relative rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl shadow-2xl">
              <div className="rounded-xl overflow-hidden border border-white/10">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop" alt="Google Business Profile management" className="w-full h-64 object-cover" />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-white">3x</div>
                  <div className="text-xs text-violet-100/80">More calls</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-white">+78%</div>
                  <div className="text-xs text-violet-100/80">Profile views</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-white">4.9★</div>
                  <div className="text-xs text-violet-100/80">Avg. rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
