import { MobileNav } from "@/components/MobileNav";
import { Logo } from "@/components/Icons";

export default function ReflectionPage() {
  return (
    <main className="min-h-screen bg-[#FBFCFB] dark:bg-stone-950 font-sans selection:bg-teal-100">
      {/* NAVIGATION */}
      <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-[#FBFCFB]/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-stone-100 dark:border-stone-800">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3 cursor-pointer group">
            <a href="/" className="flex items-center gap-3">
              <Logo className="w-8 h-8 group-hover:rotate-180 transition-transform duration-1000" />
              <span className="text-lg font-medium tracking-tight font-display text-stone-800 dark:text-stone-100">
                Echoes of Change
              </span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm font-medium text-stone-500 dark:text-stone-400 hover:text-teal-600 transition-colors">
              Home
            </a>
          </div>
          <MobileNav />
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background elements (Teal/Sage aesthetic) */}
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-teal-50/50 dark:bg-teal-900/10 rounded-full blur-3xl opacity-70 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-emerald-50/30 dark:bg-emerald-900/10 rounded-full blur-3xl opacity-70 -translate-x-1/3 translate-y-1/4"></div>

        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full border border-teal-100 dark:border-teal-800 bg-white/50 dark:bg-stone-900/50 backdrop-blur-sm shadow-sm">
              <Logo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-stone-900 dark:text-stone-50 mb-6">
              Start Free Daily Reflection
            </h1>

            <p className="text-xl md:text-2xl text-stone-500 dark:text-stone-400 mb-12 leading-relaxed font-light">
              Let the I-Ching speak to your current situation and guide you through a peaceful <span className="font-medium text-teal-700 dark:text-teal-300 italic">WRITITATION™</span> session.
            </p>

            <div className="flex flex-col items-center gap-4">
              <button className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-teal-800 dark:bg-teal-600 rounded-full transition-all hover:scale-105 hover:bg-teal-900 shadow-xl shadow-teal-900/10">
                Start My Reflection
              </button>
              <p className="text-sm text-stone-400 dark:text-stone-500 font-light tracking-wide">
                Takes 8–12 minutes • Completely private • No account needed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST & FOOTER TEXT */}
      <section className="py-20 border-t border-stone-50 dark:border-stone-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-sm font-bold text-teal-800 dark:text-teal-400 uppercase tracking-widest mb-3">Privacy</h3>
              <p className="text-stone-500 dark:text-stone-400 text-sm font-light">100% Private • Local-first AI</p>
            </div>
            <div className="p-6">
              <h3 className="text-sm font-bold text-teal-800 dark:text-teal-400 uppercase tracking-widest mb-3">Tradition</h3>
              <p className="text-stone-500 dark:text-stone-400 text-sm font-light">Built with respect for the I-Ching tradition</p>
            </div>
            <div className="p-6">
              <h3 className="text-sm font-bold text-teal-800 dark:text-teal-400 uppercase tracking-widest mb-3">Impact</h3>
              <p className="text-stone-500 dark:text-stone-400 text-sm font-light">Designed for real personal growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-white dark:bg-stone-950 border-t border-stone-100 dark:border-stone-900">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-[10px] text-stone-400 font-medium uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Echoes of Change • Peace & Reflection
          </p>
        </div>
      </footer>
    </main>
  );
}
