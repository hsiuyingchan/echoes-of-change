import { MobileNav } from "@/components/MobileNav";
import {
  SparklesIcon,
  BookOpenIcon,
  TrendingUpIcon,
  Logo,
} from "@/components/Icons";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-teal-800 focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <main id="main-content" className="min-h-screen bg-[#FBFCFB] dark:bg-stone-950 font-sans selection:bg-teal-100">
        {/* NAVIGATION */}
        <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-[#FBFCFB]/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-stone-100 dark:border-stone-800">
          <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
            <div className="flex items-center gap-3 cursor-pointer group">
              <Logo className="w-8 h-8 group-hover:rotate-180 transition-transform duration-1000" />
              <span className="text-lg font-medium tracking-tight font-display text-stone-800 dark:text-stone-100">
                Echoes of Change
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-stone-500 dark:text-stone-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                Features
              </a>
              <a href="/resume" className="text-sm font-medium text-stone-500 dark:text-stone-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                The Creator
              </a>
              <a href="/reflection" className="bg-teal-800 dark:bg-teal-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-teal-900 transition-colors">
                Start Reflection
              </a>
            </div>
            <MobileNav />
          </div>
        </nav>

        {/* HERO SECTION - RE-DESIGNED FOR SERENE AESTHETIC */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
          {/* Flowing Energy Lines (SVG) */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg className="absolute top-0 left-0 w-full h-full opacity-20 dark:opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
              <path d="M0,500 C200,400 300,600 500,500 C700,400 800,600 1000,500" fill="none" stroke="url(#gradient-teal)" strokeWidth="2" className="animate-[pulse_8s_infinite]" />
              <path d="M0,550 C250,450 350,650 550,550 C750,450 850,650 1000,550" fill="none" stroke="url(#gradient-sage)" strokeWidth="1" className="animate-[pulse_10s_infinite]" />
              <defs>
                <linearGradient id="gradient-teal" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2D6A6A" stopOpacity="0" />
                  <stop offset="50%" stopColor="#2D6A6A" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#2D6A6A" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="gradient-sage" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9CAF88" stopOpacity="0" />
                  <stop offset="50%" stopColor="#9CAF88" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#9CAF88" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Background Glows */}
          <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-teal-50/50 dark:bg-teal-900/10 rounded-full blur-[120px] opacity-70 translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-emerald-50/40 dark:bg-emerald-900/10 rounded-full blur-[100px] opacity-60 -translate-x-1/4 translate-y-1/4"></div>

          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Soft Glowing Yin-Yang Logo */}
              <div className="mb-12 inline-block relative">
                <div className="absolute inset-0 bg-teal-400 blur-2xl opacity-20 rounded-full animate-pulse"></div>
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border border-teal-100 dark:border-teal-800 bg-white/50 dark:bg-stone-900/50 backdrop-blur-sm flex items-center justify-center shadow-sm">
                  <Logo className="w-16 h-16 md:w-20 md:h-20" />
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight text-stone-900 dark:text-stone-50 mb-8 leading-[1.05]">
                Find Harmony in <br className="hidden md:block" />
                Every Change
              </h1>

              <p className="text-xl md:text-2xl text-stone-500/90 dark:text-stone-400 mb-14 max-w-2xl mx-auto leading-relaxed font-light">
                Your personal I-Ching companion and <span className="font-medium text-teal-700 dark:text-teal-300 italic">WRITITATION™</span> guide — daily wisdom that helps you understand life’s patterns and become your better self.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="/reflection" 
                  className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-teal-800 dark:bg-teal-600 rounded-full transition-all hover:scale-105 hover:bg-teal-900 shadow-xl shadow-teal-900/10 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-800 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative">Start Free Daily Reflection</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES / BENEFITS */}
        <section id="features" className="py-24 bg-white dark:bg-stone-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
              {/* Benefit 1 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-3xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-700 dark:text-teal-400 mb-8 border border-teal-100 dark:border-teal-800 group-hover:rotate-6 transition-transform">
                  <SparklesIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-50 mb-4">AI-Powered I-Ching</h3>
                <p className="text-stone-500 dark:text-stone-400 leading-relaxed font-light">
                  Cast authentic hexagrams with personalized guidance that resonates with your specific situation.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-3xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-700 dark:text-emerald-400 mb-8 border border-emerald-100 dark:border-emerald-800 group-hover:-rotate-6 transition-transform">
                  <BookOpenIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-50 mb-4">WRITITATION™ Flow</h3>
                <p className="text-stone-500 dark:text-stone-400 leading-relaxed font-light">
                  Experience guided writing and meditation in a single, seamless flow designed to deepen your insights.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-3xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-700 dark:text-teal-400 mb-8 border border-teal-100 dark:border-teal-800 group-hover:scale-110 transition-transform">
                  <TrendingUpIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-50 mb-4">Growth Tracking</h3>
                <p className="text-stone-500 dark:text-stone-400 leading-relaxed font-light">
                  Track your evolving patterns over time and visualize the journey of your personal transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section id="reflection" className="py-32 bg-teal-50/30 dark:bg-stone-900">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="inline-block mb-6 px-4 py-1 rounded-full bg-teal-100/50 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 text-xs font-bold tracking-widest uppercase">
                Begin Your Journey
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-50 mb-8 font-display">
                Ready to understand <br /> your patterns?
              </h2>
              <p className="text-lg text-stone-500 dark:text-stone-400 mb-12 font-light max-w-lg mx-auto">
                Join a community of seekers using Echoes of Change to navigate life with clarity, purpose, and inner peace.
              </p>
              <a href="/reflection" className="inline-flex items-center justify-center px-12 py-5 text-xl font-semibold text-white bg-teal-800 dark:bg-teal-600 rounded-full transition-all hover:scale-105 hover:bg-teal-900 shadow-2xl shadow-teal-900/20">
                Get Started for Free
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-16 bg-white dark:bg-stone-950 border-t border-stone-100 dark:border-stone-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-3">
                <Logo className="w-6 h-6 opacity-60" />
                <span className="text-sm font-semibold text-stone-900 dark:text-stone-100 tracking-tight">Echoes of Change</span>
              </div>
              <div className="flex gap-10">
                <a href="#" className="text-[10px] text-stone-400 hover:text-teal-600 transition-colors uppercase tracking-[0.2em] font-bold">Privacy</a>
                <a href="#" className="text-[10px] text-stone-400 hover:text-teal-600 transition-colors uppercase tracking-[0.2em] font-bold">Terms</a>
                <a href="/resume" className="text-[10px] text-stone-400 hover:text-teal-600 transition-colors uppercase tracking-[0.2em] font-bold">Creator</a>
              </div>
              <div className="text-[10px] text-stone-400 font-medium uppercase tracking-widest">
                © {new Date().getFullYear()} Echoes of Change
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
