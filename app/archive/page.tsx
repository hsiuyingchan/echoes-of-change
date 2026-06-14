"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookOpenIcon, ArrowLeftIcon } from "@/components/Icons";

export default function ArchivePage() {
  const [archiveData, setArchiveData] = useState<{ readings: string; journals: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArchive() {
      try {
        const res = await fetch("/api/archive");
        const data = await res.json();
        setArchiveData(data);
      } catch (error) {
        console.error("Failed to fetch archive", error);
      } finally {
        setLoading(false);
      }
    }
    fetchArchive();
  }, []);

  return (
    <main className="min-h-screen bg-ivory dark:bg-navy p-8 md:p-20 selection:bg-sage/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-teal-900 flex items-center justify-center text-ivory text-xl shadow-lg">
              ☯
            </div>
            <div>
              <h1 className="text-3xl font-display font-medium text-teal-900 dark:text-ivory">Wisdom Sanctuary</h1>
              <p className="text-sm text-teal-900/40 dark:text-ivory/40">Your archived reflections and readings</p>
            </div>
          </div>
          <a href="/" className="flex items-center gap-2 text-sm font-bold text-teal-900/40 hover:text-teal-900 transition-colors uppercase tracking-widest">
            <ArrowLeftIcon className="w-4 h-4" />
            Home
          </a>
        </header>

        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin-slow inline-block text-4xl mb-4">☯</div>
            <p className="text-teal-900/40 dark:text-ivory/40 italic">Retrieving your journey...</p>
          </div>
        ) : (
          <div className="space-y-16">
            <section className="space-y-8">
              <div className="flex items-center gap-3 border-b border-teal-900/5 pb-4">
                <BookOpenIcon className="w-6 h-6 text-sage" />
                <h2 className="text-2xl font-display font-medium text-teal-900 dark:text-ivory">I-Ching Readings</h2>
              </div>
              
              {archiveData?.readings ? (
                <div className="prose dark:prose-invert max-w-none bg-white/30 dark:bg-navy/30 rounded-3xl p-8 border border-teal-900/5 whitespace-pre-wrap font-light text-teal-900/80 dark:text-ivory/80">
                  {archiveData.readings}
                </div>
              ) : (
                <p className="text-teal-900/40 dark:text-ivory/40 italic">No readings preserved yet.</p>
              )}
            </section>

            <section className="space-y-8">
              <div className="flex items-center gap-3 border-b border-teal-900/5 pb-4">
                <div className="w-6 h-6 rounded-full bg-sage/20 flex items-center justify-center text-[10px]">✍</div>
                <h2 className="text-2xl font-display font-medium text-teal-900 dark:text-ivory">Guided Reflections</h2>
              </div>
              
              {archiveData?.journals ? (
                <div className="prose dark:prose-invert max-w-none bg-white/30 dark:bg-navy/30 rounded-3xl p-8 border border-teal-900/5 whitespace-pre-wrap font-light text-teal-900/80 dark:text-ivory/80">
                  {archiveData.journals}
                </div>
              ) : (
                <p className="text-teal-900/40 dark:text-ivory/40 italic">No journal entries preserved yet.</p>
              )}
            </section>
          </div>
        )}

        <footer className="pt-20 text-center border-t border-teal-900/5">
          <p className="text-xs text-teal-900/20 dark:text-ivory/20 uppercase tracking-[0.2em] font-bold">
            Private & Local-First Wisdom Sanctuary
          </p>
        </footer>
      </div>
    </main>
  );
}
