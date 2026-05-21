"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hexagram } from "./Hexagram";
import { SparklesIcon } from "./Icons";

export function CoinToss() {
  const [lines, setLines] = useState<number[]>([]);
  const [isTossing, setIsTossing] = useState(false);
  const [currentToss, setCurrentToss] = useState<number[]>([]);

  const tossCoins = () => {
    if (lines.length >= 6 || isTossing) return;

    setIsTossing(true);
    
    // Simulate coin toss after animation
    setTimeout(() => {
      // 3 coins: Heads = 3, Tails = 2
      // Sum: 6 (3T), 7 (2T 1H), 8 (1T 2H), 9 (3H)
      const coins = [
        Math.random() > 0.5 ? 3 : 2,
        Math.random() > 0.5 ? 3 : 2,
        Math.random() > 0.5 ? 3 : 2,
      ];
      const sum = coins.reduce((a, b) => a + b, 0);
      
      setCurrentToss(coins);
      setLines([...lines, sum]);
      setIsTossing(false);
    }, 600);
  };

  const reset = () => {
    setLines([]);
    setCurrentToss([]);
  };

  return (
    <div className="flex flex-col items-center gap-12 p-8 bg-white/50 dark:bg-navy/20 rounded-[3rem] border border-teal-900/5 dark:border-ivory/5 shadow-inner">
      <div className="flex flex-col md:flex-row items-center gap-16">
        {/* The Casting Area */}
        <div className="flex flex-col items-center gap-8">
          <div className="relative w-48 h-48 flex items-center justify-center">
            <AnimatePresence>
              {isTossing ? (
                <div className="absolute inset-0 flex items-center justify-center gap-4">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        y: [0, -40, 0],
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="w-8 h-8 rounded-full bg-gold shadow-lg border border-gold/50 flex items-center justify-center text-[10px] font-bold text-teal-900"
                    >
                      ☯
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center gap-4">
                  {currentToss.length > 0 ? (
                    currentToss.map((side, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-[10px] font-bold text-teal-900 dark:text-gold">
                        {side === 3 ? "H" : "T"}
                      </div>
                    ))
                  ) : (
                    <div className="text-teal-900/20 dark:text-ivory/20 italic text-sm">Ready to cast</div>
                  )}
                </div>
              )}
            </AnimatePresence>
            
            {/* Background circle */}
            <div className="absolute inset-0 border-2 border-dashed border-teal-900/10 dark:border-ivory/10 rounded-full animate-spin-slow"></div>
          </div>

          <button
            onClick={tossCoins}
            disabled={lines.length >= 6 || isTossing}
            className={`px-8 py-3 rounded-full font-bold transition-all shadow-lg ${
              lines.length >= 6 
                ? "bg-sage/20 text-teal-900/40 cursor-not-allowed" 
                : "bg-teal-900 text-ivory hover:bg-teal-800 shadow-teal-900/20"
            }`}
          >
            {lines.length >= 6 ? "Reading Complete" : isTossing ? "Casting..." : `Cast Line ${lines.length + 1}`}
          </button>
          
          {lines.length > 0 && (
            <button onClick={reset} className="text-xs text-teal-900/40 hover:text-teal-900 transition-colors uppercase tracking-widest font-bold">
              Start Over
            </button>
          )}
        </div>

        {/* The Emerging Hexagram */}
        <div className="flex flex-col items-center gap-6">
          <div className="text-xs uppercase tracking-widest text-teal-900/40 dark:text-ivory/40 font-bold">Emerging Hexagram</div>
          <div className="min-h-[120px] flex items-center justify-center">
            {lines.length > 0 ? (
              <Hexagram lines={lines} size={160} className="text-teal-900 dark:text-ivory" />
            ) : (
              <div className="w-40 h-[120px] border border-dashed border-teal-900/10 dark:border-ivory/10 rounded-xl flex items-center justify-center text-teal-900/10 text-4xl">
                ䷊
              </div>
            )}
          </div>
          <div className="text-center h-4">
            {lines.length === 6 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="text-sm font-medium text-sage flex items-center gap-2">
                  <SparklesIcon className="w-4 h-4" />
                  The oracle is ready
                </div>
                <a 
                  href={`/reflection?lines=${lines.join(",")}`}
                  className="px-8 py-3 bg-sage text-teal-900 rounded-full font-bold hover:bg-sage/80 transition-all shadow-lg shadow-sage/20 animate-bounce"
                >
                  Consult the Oracle
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
