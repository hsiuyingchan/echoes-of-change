"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRightIcon, 
  SparklesIcon, 
  BookOpenIcon, 
  CalendarIcon,
  CheckIcon,
  ChevronRightIcon
} from "@/components/Icons";

export default function JournalPage() {
  const [entries, setEntries] = useState<any[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const archive = JSON.parse(localStorage.getItem('iching_archive') || '[]');
    setEntries(archive);
  }, []);

  const steps = [
    { title: "Center Yourself", prompt: "Take three deep breaths. Clear your mind of the external world." },
    { title: "Review Your Wisdom", prompt: "What pattern is the universe asking me to see right now?" },
    { title: "Write the Transformation", prompt: "How will you carry this harmony into your next action?" }
  ];

  return (
    <main className="min-h-screen bg-ivory dark:bg-navy selection:bg-sage/30 relative">
      {/* Background patterns */}
      <div className="fixed inset-0 -z-10 overflow-hidden opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(0deg, var(--color-teal-900) 0px, var(--color-teal-900) 1px, transparent 1px, transparent 40px)' }}></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(90deg, var(--color-teal-900) 0px, var(--color-teal-900) 1px, transparent 1px, transparent 40px)' }}></div>
      </div>

      {/* Header */}
      <header className="pt-20 pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <nav className="flex items-center gap-2 text-sm text-teal-900/40 dark:text-ivory/40 mb-4">
                <a href="/" className="hover:text-teal-900 dark:hover:text-ivory transition-colors">Echoes of Change</a>
                <span>•</span>
                <span className="text-teal-900/60 dark:text-ivory/60">Guided Journal</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-display font-medium text-teal-900 dark:text-ivory mb-2">Open Reflection Journal</h1>
              <p className="text-teal-900/60 dark:text-ivory/60 font-light italic">Your WRITITATION™ Archive • Private Wisdom Sanctuary</p>
            </div>
            <a href="/#reflection" className="bg-teal-900 text-ivory px-8 py-4 rounded-full font-semibold hover:bg-teal-800 transition-all shadow-xl shadow-teal-900/20 flex items-center gap-2 group">
              <SparklesIcon className="w-5 h-5" />
              New WRITITATION™ Inquiry
            </a>
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-6xl px-6 pb-20">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          
          <div className="space-y-12">
            {/* Guided Flow Step Indicator */}
            <div className="flex justify-between items-center mb-8 bg-teal-900/5 p-4 rounded-3xl border border-teal-900/5">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${activeStep === i ? "bg-teal-900 text-ivory" : "bg-teal-900/10 text-teal-900/40"}`}>
                    {i + 1}
                  </div>
                  <span className={`text-[10px] uppercase tracking-widest font-bold hidden md:block ${activeStep === i ? "text-teal-900" : "text-teal-900/20"}`}>
                    {step.title}
                  </span>
                  {i < steps.length - 1 && <ChevronRightIcon className="w-4 h-4 text-teal-900/10" />}
                </div>
              ))}
            </div>

            {/* WRITITATION Inquiry Box - Guided */}
            <section className="bg-white dark:bg-navy/40 rounded-[2.5rem] p-8 md:p-12 border border-teal-900/5 dark:border-ivory/5 shadow-2xl shadow-teal-900/5 relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/5 rounded-full blur-[80px] glow-effect"></div>
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="relative"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                    <h2 className="text-2xl font-display font-medium text-teal-900 dark:text-ivory flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center text-teal-900 dark:text-sage text-sm">䷊</span>
                      {steps[activeStep].title}
                    </h2>
                    <div className="flex items-center gap-3 p-1 rounded-full bg-ivory dark:bg-navy border border-teal-900/5">
                      {["5", "10", "15"].map((time) => (
                        <button key={time} className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${time === "10" ? "bg-teal-900 text-ivory" : "text-teal-900/40 hover:text-teal-900"}`}>
                          {time}m
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="space-y-4">
                      <p className="text-xs uppercase tracking-widest text-teal-900/30 dark:text-ivory/30 font-bold">Guided Prompt</p>
                      <p className="text-2xl md:text-3xl font-display text-teal-900/80 dark:text-ivory/80 leading-snug">
                        &quot;{steps[activeStep].prompt}&quot;
                      </p>
                    </div>

                    <div className="relative">
                      <textarea 
                        placeholder={activeStep === 0 ? "Focus on your breath..." : "Share your transformation here..."}
                        className="w-full h-64 bg-transparent border-2 border-teal-900/5 dark:border-ivory/5 rounded-3xl p-8 focus:border-sage/30 dark:focus:border-sage/30 focus:outline-none transition-all resize-none text-lg font-light leading-relaxed placeholder:text-teal-900/20"
                      ></textarea>
                    </div>

                    <div className="flex justify-between items-center">
                      <button 
                        onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                        disabled={activeStep === 0}
                        className="text-sm font-bold text-teal-900/40 hover:text-teal-900 transition-colors disabled:opacity-0"
                      >
                        Back
                      </button>
                      <button 
                        onClick={() => activeStep < steps.length - 1 ? setActiveStep(activeStep + 1) : alert("Reflection Complete")}
                        className="px-10 py-4 bg-teal-900 text-ivory rounded-full font-bold hover:bg-teal-800 transition-all flex items-center gap-2"
                      >
                        {activeStep < steps.length - 1 ? "Next Step" : "Complete Reflection"}
                        <ArrowRightIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </section>

            {/* Past Reflections Grid */}
            <section>
              <h2 className="text-2xl font-display font-medium text-teal-900 dark:text-ivory mb-8">Archive of Change</h2>
              {entries.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {entries.map((item, i) => (
                    <div key={i} className="bg-white dark:bg-navy/40 rounded-3xl p-8 border border-teal-900/5 dark:border-ivory/5 hover:border-sage/20 transition-all group">
                      <div className="flex justify-between items-start mb-6">
                        <div className="text-xs text-teal-900/30 dark:text-ivory/30 font-bold uppercase tracking-widest">{item.date}</div>
                        <div className="text-xl text-teal-900 dark:text-ivory opacity-40">䷊</div>
                      </div>
                      <h3 className="text-lg font-display font-semibold text-teal-900 dark:text-ivory mb-2">Hexagram {item.hexagram}: {item.name}</h3>
                      <p className="text-sm font-medium text-sage mb-4">{item.prompt}</p>
                      <p className="text-sm text-teal-900/60 dark:text-ivory/60 font-light line-clamp-2 leading-relaxed mb-6 italic">
                        &quot;{item.preview}&quot;
                      </p>
                      <button className="text-xs font-bold text-teal-900/40 hover:text-teal-900 transition-colors flex items-center gap-2">
                        Read Archive <ArrowRightIcon className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-teal-900/5 rounded-3xl border border-dashed border-teal-900/10">
                  <BookOpenIcon className="w-12 h-12 mx-auto text-teal-900/20 mb-4" />
                  <p className="text-teal-900/40">Your archive is empty. Begin a reflection to start your journey.</p>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-10">
            {/* Pattern Insights */}
            <section className="bg-white dark:bg-navy/40 rounded-3xl p-8 border border-teal-900/5 dark:border-ivory/5">
              <h2 className="text-lg font-display font-semibold text-teal-900 dark:text-ivory mb-6 flex items-center gap-2">
                <SparklesIcon className="w-4 h-4 text-gold" />
                Pattern Insights
              </h2>
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-widest text-teal-900/40 dark:text-ivory/40 font-bold">Recurring Patterns</p>
                <div className="space-y-4">
                  {entries.length > 0 ? (
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-ivory dark:bg-navy border border-teal-900/5">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">䷊</span>
                        <span className="text-sm font-medium">Hexagram {entries[0].hexagram}</span>
                      </div>
                      <span className="text-xs font-bold bg-teal-900/5 px-2 py-1 rounded text-teal-900">1x</span>
                    </div>
                  ) : (
                    <p className="text-xs text-teal-900/20 italic">No patterns detected yet.</p>
                  )}
                </div>
              </div>
            </section>

            {/* Wisdom Quote */}
            <section className="p-8 rounded-3xl bg-teal-900 text-ivory/80 italic font-light text-sm leading-relaxed relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10 text-4xl">☯</div>
               &quot;The superior person persists in their path, knowing that every change is a doorway to a deeper harmony.&quot;
            </section>
            
            {/* Trust Element */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-teal-900/30 dark:text-ivory/30 font-bold">
                <CheckIcon className="w-3 h-3" /> Secure Local Storage
              </div>
              <p className="text-[10px] text-teal-900/20 dark:text-ivory/20 leading-relaxed px-4">
                Echoes of Change uses your browser&apos;s local database. We never see your entries.
              </p>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
