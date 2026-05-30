"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MobileNav } from "@/components/MobileNav";
import {
  CheckIcon,
  ArrowRightIcon,
  SparklesIcon,
  BookOpenIcon,
  UsersIcon,
  BoltIcon,
} from "@/components/Icons";
import { CoinToss } from "@/components/CoinToss";
import { AmbientAudio } from "@/components/AmbientAudio";
import { PrivacyBadge } from "@/components/PrivacyBadge";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <>
      <AmbientAudio />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-teal-900 focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>
      
      <main id="main-content" className="min-h-screen bg-ivory dark:bg-navy selection:bg-sage/30 relative">
        {/* Navigation */}
        <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-ivory/80 dark:bg-navy/80 backdrop-blur-md border-b border-teal-900/5 dark:border-ivory/5">
          <div className="container mx-auto px-6 flex items-center justify-between h-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-teal-900 flex items-center justify-center text-ivory font-display text-lg shadow-inner">
                ☯
              </div>
              <span className="text-xl font-display font-semibold tracking-wide text-teal-900 dark:text-ivory">
                Echoes of Change
              </span>
            </motion.div>

            <div className="hidden md:flex items-center gap-10">
              <a href="#how-it-works" className="text-sm font-medium text-teal-900/70 dark:text-ivory/70 hover:text-teal-900 dark:hover:text-ivory transition-colors">
                How It Works
              </a>
              <a href="#reflection" className="text-sm font-medium text-teal-900/70 dark:text-ivory/70 hover:text-teal-900 dark:hover:text-ivory transition-colors">
                Daily Reflection
              </a>
              <a href="#benefits" className="text-sm font-medium text-teal-900/70 dark:text-ivory/70 hover:text-teal-900 dark:hover:text-ivory transition-colors">
                Benefits
              </a>
              <motion.a 
                href="#reflection" 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-teal-900 text-ivory px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-800 transition-all shadow-lg shadow-teal-900/10"
              >
                Begin Reflection
              </motion.a>
            </div>
            <MobileNav />
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          {/* Background Energy Lines & Glows */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div style={{ y: y1 }} className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sage/10 rounded-full blur-[100px] glow-effect"></motion.div>
            <motion.div style={{ y: y2 }} className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-teal-900/5 rounded-full blur-[120px] glow-effect"></motion.div>
            
            <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="energy-line top-[30%] -rotate-6"
            ></motion.div>
            <motion.div 
              animate={{ x: ["100%", "-100%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="energy-line top-[60%] rotate-3"
            ></motion.div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] dark:opacity-[0.05] pointer-events-none">
              <svg width="600" height="600" viewBox="0 0 100 100" className="animate-spin-slow">
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M50 2A48 48 0 0 1 50 98A24 24 0 0 1 50 50A24 24 0 0 0 50 2" fill="currentColor" />
                <circle cx="50" cy="26" r="6" fill="white" />
                <circle cx="50" cy="74" r="6" fill="black" />
              </svg>
            </div>
          </div>

          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full bg-sage/10 border border-sage/20 text-teal-900 dark:text-sage text-sm font-medium"
              >
                <span className="text-lg">䷊</span>
                <span>Hexagram 11: Harmony & Prosperity</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-teal-900 dark:text-ivory mb-8 leading-[1.1]"
              >
                Find Harmony in <br className="hidden md:block" /> Every Change
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-teal-900/60 dark:text-ivory/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
              >
                Your private I-Ching companion and daily <span className="text-teal-900 dark:text-ivory font-medium">WRITITATION™</span> guide. Navigate life&apos;s transitions with ancient wisdom and modern clarity.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <a href="#reflection" className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-ivory bg-teal-900 rounded-full transition-all hover:bg-teal-800 shadow-2xl shadow-teal-900/20">
                  Start Free Daily Reflection
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cast the Coins Section */}
        <section className="section-padding bg-ivory dark:bg-navy">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-display font-medium text-teal-900 dark:text-ivory mb-6">Consult Echo</h2>
              <p className="text-teal-900/60 dark:text-ivory/60 max-w-xl mx-auto font-light">
                Cast three virtual coins six times. Let Echo guide you through the emerging patterns of your current journey.
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <CoinToss />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="section-padding bg-ivory/50 dark:bg-navy/50 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-display font-medium text-teal-900 dark:text-ivory mb-6">A Journey of Self-Care</h2>
              <div className="w-20 h-px bg-gold mx-auto opacity-50"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-16 max-w-5xl mx-auto">
              {[
                { icon: UsersIcon, title: "1. Share Your Context", color: "sage", text: "Simply describe your current situation. Echo listens with warmth and total privacy." },
                { icon: BookOpenIcon, title: "2. Gentle Guidance", color: "teal-900", text: "Echo translates the ancient I-Ching wisdom into a compassionate reflection of your inner state." },
                { icon: SparklesIcon, title: "3. Nurture Your Path", color: "gold", text: "Integrate the insights through gentle micro-practices and WRITITATION™ inquiries." }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="text-center group"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-sage/5 flex items-center justify-center text-sage mb-8 mx-auto group-hover:bg-sage/10 transition-colors border border-sage/10`}>
                    <step.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4 text-teal-900 dark:text-ivory">{step.title}</h3>
                  <p className="text-teal-900/60 dark:text-ivory/60 leading-relaxed font-light">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Reflection Section */}
        <section id="reflection" className="section-padding">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-white dark:bg-navy/40 rounded-[3rem] p-8 md:p-16 border border-teal-900/5 dark:border-ivory/5 shadow-2xl shadow-teal-900/5 relative overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/10 rounded-full blur-[80px]"></div>
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-full bg-teal-900 flex items-center justify-center text-ivory text-xl">☯</div>
                  <div>
                    <h2 className="text-2xl md:text-4xl font-display font-medium text-teal-900 dark:text-ivory">Start Free Daily Reflection</h2>
                    <p className="text-teal-900/40 dark:text-ivory/40 text-sm">A sacred space for your evolving self</p>
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="p-8 rounded-2xl bg-ivory/50 dark:bg-navy/20 border border-teal-900/5 dark:border-ivory/5 italic text-teal-900/70 dark:text-ivory/70 leading-relaxed text-lg text-center md:text-left">
                    &quot;The superior person stays focused on the internal center, regardless of the chaos of the external world. Change is the only constant; harmony is the only response.&quot;
                  </div>

                  <div className="space-y-6">
                    <p className="text-teal-900 dark:text-ivory font-medium">Today&apos;s WRITITATION™ Inquiry:</p>
                    <div className="text-3xl md:text-4xl font-display text-teal-900/80 dark:text-ivory/80 leading-snug">
                      Simply describe your current situation or question
                    </div>
                  </div>

                  <div className="pt-6">
                    <a href="/journal" className="inline-block w-full md:w-auto px-12 py-5 bg-teal-900 text-ivory rounded-full font-semibold hover:bg-teal-800 transition-all shadow-xl shadow-teal-900/20 text-center">
                      Open Reflection Journal
                    </a>
                    <PrivacyBadge />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="section-padding bg-teal-900 text-ivory relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="energy-line top-1/4 -rotate-12 bg-ivory"
            ></motion.div>
            <motion.div 
              animate={{ x: ["100%", "-100%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="energy-line bottom-1/3 rotate-6 bg-gold"
            ></motion.div>
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-20 items-center">
                <div>
                  <h2 className="text-4xl md:text-6xl font-display font-medium mb-10 leading-[1.1]">Why Echoes <br />of Change?</h2>
                  <div className="space-y-8">
                    {[
                      { title: "Ancestral Wisdom, Reimagined", text: "We use high-fidelity translations and deep algorithms to preserve the nuance of the I-Ching while making it relevant for 2026." },
                      { title: "WRITITATION™ Methodology", text: "Combining the meditative state of writing with targeted philosophical inquiry to unlock deep subconscious insights." },
                      { title: "Absolute Privacy", text: "Local-first architecture ensures your most private thoughts never leave your device. You are the sole curator of your wisdom." }
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-6"
                      >
                        <div className="w-12 h-12 rounded-full border border-ivory/20 flex items-center justify-center flex-shrink-0 text-gold">
                          <CheckIcon />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-ivory/60 leading-relaxed font-light">{item.text}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="aspect-square rounded-full border border-ivory/10 flex items-center justify-center p-12"
                  >
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-sage/20 to-teal-800 flex items-center justify-center relative overflow-hidden shadow-inner">
                      <div className="text-8xl md:text-[12rem] animate-pulse">☯</div>
                      {/* Abstract Floating Hexagrams */}
                      <div className="absolute top-10 right-10 text-2xl opacity-40">䷀</div>
                      <div className="absolute bottom-10 left-10 text-2xl opacity-40">䷁</div>
                      <div className="absolute top-1/2 left-4 text-2xl opacity-40">䷊</div>
                      <div className="absolute top-1/2 right-4 text-2xl opacity-40">䷋</div>
                    </div>
                  </motion.div>
                  <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-[100px]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 bg-ivory dark:bg-navy border-t border-teal-900/5 dark:border-ivory/5">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-900 flex items-center justify-center text-ivory text-sm">
                  ☯
                </div>
                <span className="text-lg font-display font-semibold text-teal-900 dark:text-ivory">
                  Echoes of Change
                </span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-10">
                <div className="flex items-center gap-2 text-sm text-teal-900/40 dark:text-ivory/40">
                  <span className="w-1 h-1 rounded-full bg-sage"></span>
                  Guided by Echo
                </div>
                <div className="flex items-center gap-2 text-sm text-teal-900/40 dark:text-ivory/40">
                  <span className="w-1 h-1 rounded-full bg-sage"></span>
                  Private & Local-first
                </div>
                <div className="flex items-center gap-2 text-sm text-teal-900/40 dark:text-ivory/40">
                  <span className="w-1 h-1 rounded-full bg-sage"></span>
                  Self-Care Journey
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-teal-900/5 dark:border-ivory/5">
              <div className="text-sm text-teal-900/40 dark:text-ivory/40">
                © {new Date().getFullYear()} Echoes of Change. Crafted for the soul.
              </div>
              <div className="flex items-center gap-8">
                <a href="#" className="text-xs font-medium text-teal-900/30 dark:text-ivory/30 hover:text-teal-900 dark:hover:text-ivory transition-colors">
                  Privacy Philosophy
                </a>
                <a href="#" className="text-xs font-medium text-teal-900/30 dark:text-ivory/30 hover:text-teal-900 dark:hover:text-ivory transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
