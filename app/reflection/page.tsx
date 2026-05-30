"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { getHexagramData, HexagramData } from "@/lib/iching";
import { Hexagram } from "@/components/Hexagram";
import { motion } from "framer-motion";
import { ArrowRightIcon, SparklesIcon } from "@/components/Icons";

function ReflectionContent() {
  const searchParams = useSearchParams();
  const [hexagram, setHexagram] = useState<HexagramData | null>(null);
  const [lines, setLines] = useState<number[]>([]);
  const [question, setQuestion] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const linesParam = searchParams.get("lines");
    if (linesParam) {
      const parsedLines = linesParam.split(",").map(Number);
      setLines(parsedLines);
      setHexagram(getHexagramData(parsedLines));
    }
  }, [searchParams]);

  const handleSave = async () => {
    if (!hexagram || !question) {
      alert("Please describe your situation or question first.");
      return;
    }

    setIsSaving(true);
    try {
      const res = await fetch("/api/save-reading", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, hexagram }),
      });

      if (res.ok) {
        setSaved(true);
      } else {
        alert("Failed to save reading.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while saving.");
    } finally {
      setIsSaving(false);
    }
  };

  const microPractices = [
    "Place one hand on your heart and take three slow, deep breaths.",
    "Notice three things you are grateful for in this very moment.",
    "Drink a glass of water slowly, focusing on its coolness and clarity.",
    "Stretch your arms toward the sky and then let them fall gently to your sides.",
    "Briefly close your eyes and listen to the furthest sound you can hear.",
  ];

  const [microPractice] = useState(() => microPractices[Math.floor(Math.random() * microPractices.length)]);

  if (!hexagram) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory dark:bg-navy">
        <p className="text-teal-900 dark:text-ivory">Echo is reflecting on the patterns...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-ivory dark:bg-navy p-8 md:p-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block p-4 rounded-full bg-teal-900 text-ivory text-2xl mb-4"
          >
            ☯
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-display font-medium text-teal-900 dark:text-ivory">
            Hexagram {hexagram.number}: {hexagram.name}
          </h1>
          <p className="text-xl text-sage font-medium">{hexagram.pinyin}</p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="p-8 bg-white/50 dark:bg-navy/20 rounded-3xl border border-teal-900/5 dark:border-ivory/5 shadow-xl">
              <Hexagram lines={lines} size={200} className="text-teal-900 dark:text-ivory mx-auto" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-widest text-teal-900/40 dark:text-ivory/40 font-bold">Echo&apos;s Reflection</h2>
              <p className="text-xl text-teal-900/80 dark:text-ivory/80 font-light italic leading-relaxed">
                &quot;{hexagram.meaning}&quot;
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-sage/10 border border-sage/20 text-teal-900 dark:text-ivory italic text-sm">
              <p className="font-bold uppercase tracking-widest text-[10px] mb-2 opacity-60">A Micro-Practice for You</p>
              {microPractice}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-widest text-teal-900/40 dark:text-ivory/40 font-bold">The Way of the Journey</h2>
              <p className="text-teal-900/70 dark:text-ivory/70 leading-relaxed">
                {hexagram.judgment}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-widest text-teal-900/40 dark:text-ivory/40 font-bold">The Natural Image</h2>
              <p className="text-teal-900/70 dark:text-ivory/70 leading-relaxed">
                {hexagram.image}
              </p>
            </div>

            <div className="pt-8 space-y-6">
              <div className="space-y-4">
                <label className="text-sm font-medium text-teal-900/60 dark:text-ivory/60">
                  Simply describe your current situation or question
                </label>
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Focus your intention... Echo is listening."
                  className="w-full h-32 bg-white/30 dark:bg-navy/30 border-2 border-teal-900/5 dark:border-ivory/5 rounded-2xl p-4 focus:border-sage/30 focus:outline-none transition-all resize-none"
                />
              </div>

              <button
                onClick={handleSave}
                disabled={isSaving || saved}
                className={`w-full py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 shadow-lg ${
                  saved
                    ? "bg-sage text-teal-900 cursor-default"
                    : "bg-teal-900 text-ivory hover:bg-teal-800 shadow-teal-900/20"
                }`}
              >
                {saved ? (
                  <>
                    <SparklesIcon className="w-5 h-5" />
                    Reading Nurtured in Archive
                  </>
                ) : isSaving ? (
                  "Nurturing..."
                ) : (
                  <>
                    Nurture Reading in Archive
                    <ArrowRightIcon className="w-5 h-5" />
                  </>
                )}
              </button>
              
              <a href="/" className="block text-center text-sm text-teal-900/40 hover:text-teal-900 transition-colors uppercase tracking-widest font-bold">
                Return to Your Center
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default function ReflectionPage() {
  return (
    <Suspense fallback={<div>Loading reflection...</div>}>
      <ReflectionContent />
    </Suspense>
  );
}
