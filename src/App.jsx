import Hero from "./components/Hero";
import Features from "./components/Features";
import Plans from "./components/Plans";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Features />
      <Plans />
      <FAQ />
      <CTA />

      {/* footer */}
      <footer className="border-t border-white/10 bg-gradient-to-b from-indigo-950 to-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-violet-100/70">© {new Date().getFullYear()} PurpleCrib. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-violet-100/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
            <a href="#cta" className="hover:text-white transition">Get Started</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
