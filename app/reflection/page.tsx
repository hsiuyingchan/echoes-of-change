"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Hexagram } from "@/components/Hexagram";
import { getHexagramData } from "@/lib/iching";
import { 
  ArrowRightIcon, 
  SparklesIcon, 
  CheckIcon,
  BookOpenIcon 
} from "@/components/Icons";

function ReflectionContent() {
  const searchParams = useSearchParams();
  const [lines, setLines] = useState<number[]>([]);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const linesParam = searchParams.get("lines");
    if (linesParam) {
      setLines(linesParam.split(",").map(Number));
    }
  }, [searchParams]);

  const hexData = getHexagramData(lines);

  const saveToArchive = () => {
    // In a real app, this would save to a database.
    // For this demo, we'll simulate success and a local save.
    const entry = {
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      hexagram: hexData.number.toString(),
      name: hexData.name,
      prompt: hexData.meaning,
      preview: hexData.judgment,
      lines: lines
    };
    
    const existing = JSON.parse(localStorage.getItem('iching_archive') || '[]');
    localStorage.setItem('iching_archive', JSON.stringify([entry, ...existing]));
    
    setIsSaved(true);
  };

  if (lines.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-teal-900/40">
        Seeking the oracle...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-ivory dark:bg-navy selection:bg-sage/30">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sage/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto max-w-4xl px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-teal-900/40 dark:text-ivory/40 font-bold mb-4">The Oracle has Spoken</p>
          <h1 className="text-4xl md:text-6xl font-display font-medium text-teal-900 dark:text-ivory">Your Reflection Result</h1>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Hexagram Display */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/50 dark:bg-navy/20 p-12 rounded-[3rem] border border-teal-900/5 flex flex-col items-center gap-8 shadow-2xl shadow-teal-900/5"
          >
            <Hexagram lines={lines} size={180} className="text-teal-900 dark:text-ivory" />
            <div className="text-center">
              <div className="text-5xl font-display text-teal-900 dark:text-ivory mb-2">#{hexData.number}</div>
              <div className="text-xl font-display font-semibold text-teal-900 dark:text-ivory">{hexData.name}</div>
              <div className="text-sm text-sage italic font-light">{hexData.pinyin}</div>
            </div>
          </motion.div>

          {/* Interpretation */}
          <div className="space-y-10">
            <motion.section 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h2 className="text-xs uppercase tracking-widest text-teal-900/40 font-bold">The Meaning</h2>
              <p className="text-2xl font-display text-teal-900 dark:text-ivory leading-snug">
                {hexData.meaning}
              </p>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="p-8 rounded-3xl bg-teal-900/5 border border-teal-900/5 space-y-4"
            >
              <h3 className="text-xs uppercase tracking-widest text-teal-900/40 font-bold">The Judgment</h3>
              <p className="text-teal-900/70 dark:text-ivory/70 italic leading-relaxed">
                &quot;{hexData.judgment}&quot;
              </p>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-xs uppercase tracking-widest text-teal-900/40 font-bold">The Image</h3>
              <p className="text-teal-900/70 dark:text-ivory/70 leading-relaxed font-light">
                {hexData.image}
              </p>
            </motion.section>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <button 
                onClick={saveToArchive}
                disabled={isSaved}
                className={`flex-1 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 ${
                  isSaved ? "bg-sage/20 text-teal-900/40 cursor-not-allowed" : "bg-teal-900 text-ivory hover:bg-teal-800"
                }`}
              >
                {isSaved ? <CheckIcon className="w-5 h-5" /> : <SparklesIcon className="w-5 h-5" />}
                {isSaved ? "Saved to Archive" : "Save to My Archive"}
              </button>
              <a 
                href="/journal" 
                className="flex-1 px-8 py-4 rounded-full font-bold border-2 border-teal-900/10 text-teal-900 dark:text-ivory hover:border-teal-900/30 transition-all flex items-center justify-center gap-2"
              >
                <BookOpenIcon className="w-5 h-5" />
                Go to Journal
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ReflectionPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ReflectionContent />
    </Suspense>
  );
}
