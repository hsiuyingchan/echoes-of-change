"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRightIcon, 
  SparklesIcon, 
  BookOpenIcon, 
  CheckIcon,
  ChevronRightIcon
} from "@/components/Icons";
import { getHexagramData, HexagramData } from "@/lib/iching";
import { Hexagram } from "@/components/Hexagram";

export default function JournalPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [question, setQuestion] = useState("");
  const [lines, setLines] = useState<number[]>([]);
  const [isTossing, setIsTossing] = useState(false);
  const [currentToss, setCurrentToss] = useState<number[]>([]);
  const [transformation, setTransformation] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [hexagram, setHexagram] = useState<HexagramData | null>(null);

  const microPractices = [
    "Place one hand on your heart and take three slow, deep breaths.",
    "Notice three things you are grateful for in this very moment.",
    "Drink a glass of water slowly, focusing on its coolness and clarity.",
    "Stretch your arms toward the sky and then let them fall gently to your sides.",
    "Briefly close your eyes and listen to the furthest sound you can hear.",
  ];

  const [microPractice] = useState(() => microPractices[Math.floor(Math.random() * microPractices.length)]);

  const steps = [
    { title: "Center & Question", prompt: "Description: Breathe deeply and simply describe your current situation or question." },
    { title: "Consult Echo", prompt: "Description: Cast the coins to hear Echo's guidance on your situation." },
    { title: "Write the Transformation", prompt: "Description: How will you carry this harmony into your next action?" }
  ];

  const tossCoins = () => {
    if (lines.length >= 6 || isTossing) return;
    setIsTossing(true);
    setTimeout(() => {
      const coins = [Math.random() > 0.5 ? 3 : 2, Math.random() > 0.5 ? 3 : 2, Math.random() > 0.5 ? 3 : 2];
      const sum = coins.reduce((a, b) => a + b, 0);
      setCurrentToss(coins);
      const newLines = [...lines, sum];
      setLines(newLines);
      setIsTossing(false);
      if (newLines.length === 6) {
        setHexagram(getHexagramData(newLines));
      }
    }, 600);
  };

  const handleNext = () => {
    if (activeStep === 0 && !question) {
      alert("Please describe your situation first.");
      return;
    }
    if (activeStep === 1 && lines.length < 6) {
      alert("Please complete the coin toss first.");
      return;
    }
    setActiveStep(activeStep + 1);
  };

  const handleComplete = async () => {
    if (!transformation) {
      alert("Please share your transformation reflection.");
      return;
    }
    setIsSaving(true);
    try {
      const res = await fetch("/api/save-reading", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, hexagram, transformation, microPractice }),
      });
      if (res.ok) {
        setIsCompleted(true);
      } else {
        alert("Failed to archive your journey.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while saving.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <main className="min-h-screen bg-ivory dark:bg-navy selection:bg-sage/30 relative">
      <div className="fixed inset-0 -z-10 overflow-hidden opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(0deg, var(--color-teal-900) 0px, var(--color-teal-900) 1px, transparent 1px, transparent 40px)' }}></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(90deg, var(--color-teal-900) 0px, var(--color-teal-900) 1px, transparent 1px, transparent 40px)' }}></div>
      </div>

      <header className="pt-20 pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <nav className="flex items-center gap-2 text-sm text-teal-900/40 dark:text-ivory/40 mb-4">
                <a href="/" className="hover:text-teal-900 dark:hover:text-ivory transition-colors">Echoes of Change</a>
                <span>•</span>
                <span className="text-teal-900/60 dark:text-ivory/60">Private Wisdom Sanctuary</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-display font-medium text-teal-900 dark:text-ivory mb-2">1, 2, 3 Journey</h1>
              <p className="text-teal-900/60 dark:text-ivory/60 font-light italic">Your Guided WRITITATION™ Path</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-4xl px-6 pb-20">
        {!isCompleted ? (
          <div className="space-y-12">
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

            <section className="bg-white dark:bg-navy/40 rounded-[2.5rem] p-8 md:p-12 border border-teal-900/5 dark:border-ivory/5 shadow-2xl shadow-teal-900/5 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/5 rounded-full blur-[80px] glow-effect"></div>
              <AnimatePresence mode="wait">
                <motion.div key={activeStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="relative space-y-8">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center text-teal-900 dark:text-sage text-sm">☯</span>
                    <h2 className="text-2xl font-display font-medium text-teal-900 dark:text-ivory">{steps[activeStep].title}</h2>
                  </div>

                  {activeStep === 0 && (
                    <div className="space-y-6">
                      <p className="text-xl text-teal-900/80 dark:text-ivory/80 leading-relaxed font-light italic">&quot;{steps[activeStep].prompt}&quot;</p>
                      <textarea value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Focus your intention... Echo is listening." className="w-full h-48 bg-transparent border-2 border-teal-900/5 dark:border-ivory/5 rounded-3xl p-8 focus:border-sage/30 focus:outline-none transition-all resize-none text-lg font-light" />
                      <div className="flex justify-end"><button onClick={handleNext} className="px-10 py-4 bg-teal-900 text-ivory rounded-full font-bold hover:bg-teal-800 transition-all flex items-center gap-2">Step 2 <ArrowRightIcon className="w-4 h-4" /></button></div>
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div className="flex flex-col items-center gap-8">
                      <div className="flex flex-col md:flex-row items-center gap-12 w-full">
                        <div className="flex-1 flex flex-col items-center gap-6">
                          <div className="relative w-32 h-32 flex items-center justify-center">
                            {isTossing ? <div className="flex gap-2 animate-bounce">
                              {[1, 2, 3].map(i => <div key={i} className="w-4 h-4 rounded-full bg-gold shadow-lg" />)}
                            </div> : <div className="flex gap-2">
                              {currentToss.length > 0 ? currentToss.map((s, i) => <div key={i} className="text-xs font-bold text-gold">{s === 3 ? "H" : "T"}</div>) : <div className="text-ivory/20 italic text-xs">Ready</div>}
                            </div>}
                            <div className="absolute inset-0 border border-dashed border-teal-900/10 rounded-full animate-spin-slow" />
                          </div>
                          <button onClick={tossCoins} disabled={lines.length >= 6 || isTossing} className="px-8 py-3 bg-teal-900 text-ivory rounded-full font-bold disabled:opacity-50">{lines.length >= 6 ? "Cast Complete" : `Cast Line ${lines.length + 1}`}</button>
                        </div>
                        <div className="flex-1 flex flex-col items-center gap-4">
                          <Hexagram lines={lines} size={120} className="text-teal-900 dark:text-ivory" />
                          {hexagram && <div className="text-center"><p className="text-lg font-display font-medium text-teal-900 dark:text-ivory">{hexagram.name}</p><p className="text-xs text-sage">{hexagram.meaning}</p></div>}
                        </div>
                      </div>
                      <div className="flex justify-between w-full pt-8">
                        <button onClick={() => setActiveStep(0)} className="text-sm font-bold text-teal-900/40 hover:text-teal-900">Back</button>
                        <button onClick={handleNext} disabled={lines.length < 6} className="px-10 py-4 bg-teal-900 text-ivory rounded-full font-bold hover:bg-teal-800 flex items-center gap-2 disabled:opacity-0">Step 3 <ArrowRightIcon className="w-4 h-4" /></button>
                      </div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="space-y-6">
                      <p className="text-xl text-teal-900/80 dark:text-ivory/80 leading-relaxed font-light italic">&quot;{steps[activeStep].prompt}&quot;</p>
                      <textarea value={transformation} onChange={(e) => setTransformation(e.target.value)} placeholder="How has your perspective shifted?" className="w-full h-48 bg-transparent border-2 border-teal-900/5 dark:border-ivory/5 rounded-3xl p-8 focus:border-sage/30 focus:outline-none transition-all resize-none text-lg font-light" />
                      <div className="flex justify-between items-center">
                        <button onClick={() => setActiveStep(1)} className="text-sm font-bold text-teal-900/40 hover:text-teal-900">Back</button>
                        <button onClick={handleComplete} disabled={isSaving} className="px-10 py-4 bg-teal-900 text-ivory rounded-full font-bold hover:bg-teal-800 transition-all flex items-center gap-2">{isSaving ? "Nurturing..." : "Complete Journey"}<CheckIcon className="w-4 h-4" /></button>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </section>
          </div>
        ) : (
          <motion.section initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white dark:bg-navy/40 rounded-[2.5rem] p-12 border border-teal-900/5 dark:border-ivory/5 shadow-2xl text-center space-y-10">
            <div className="w-20 h-20 rounded-full bg-sage/20 flex items-center justify-center text-teal-900 mx-auto text-3xl">☯</div>
            <h2 className="text-4xl font-display font-medium text-teal-900 dark:text-ivory">Journey Nurtured</h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-3xl mx-auto py-4">
              <div className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-ivory/50 dark:bg-navy/30 border border-teal-900/5">
                <Hexagram lines={lines} size={100} className="text-teal-900 dark:text-ivory" />
                {hexagram && (
                  <div className="text-center">
                    <p className="text-lg font-display font-medium text-teal-900 dark:text-ivory">Hexagram {hexagram.number}: {hexagram.name}</p>
                    <p className="text-xs text-teal-900/60 dark:text-ivory/60 italic">{hexagram.meaning}</p>
                  </div>
                )}
              </div>

              <div className="p-8 rounded-3xl bg-sage/10 border border-sage/20 text-teal-900 dark:text-ivory italic shadow-inner text-left">
                <p className="font-bold uppercase tracking-widest text-[10px] mb-4 opacity-60">Echo&apos;s Micro-Practice for You</p>
                <p className="text-lg leading-relaxed">{microPractice}</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-teal-900/60 font-light max-w-xl mx-auto">
                Your 1, 2, 3 path has been preserved in your Private Wisdom Sanctuary. Return to your center with this new harmony.
              </p>
              <div className="pt-4">
                <a href="/" className="inline-block px-12 py-5 bg-teal-900 text-ivory rounded-full font-semibold hover:bg-teal-800 shadow-xl shadow-teal-900/20">
                  Return Home
                </a>
              </div>
            </div>
          </motion.section>
        )}
      </div>
    </main>
  );
}
