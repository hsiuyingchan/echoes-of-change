"use client";

import { ShieldCheck, Database, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

export function PrivacyBadge() {
  return (
    <div className="flex flex-col items-center gap-4 py-8">
      <div className="flex flex-wrap justify-center gap-6">
        <motion.div 
          whileHover={{ y: -5 }}
          className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-sage/5 border border-sage/10 text-teal-900 dark:text-sage"
        >
          <ShieldCheck size={20} />
          <div className="text-left">
            <p className="text-xs font-bold uppercase tracking-widest">Local-First</p>
            <p className="text-[10px] opacity-60">Your browser is your vault</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-teal-900/5 border border-teal-900/10 text-teal-900 dark:text-ivory"
        >
          <Database size={20} />
          <div className="text-left">
            <p className="text-xs font-bold uppercase tracking-widest">No Cloud Sync</p>
            <p className="text-[10px] opacity-60">Data never leaves your device</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-gold/5 border border-gold/10 text-teal-900 dark:text-gold"
        >
          <EyeOff size={20} />
          <div className="text-left">
            <p className="text-xs font-bold uppercase tracking-widest">End-to-End Private</p>
            <p className="text-[10px] opacity-60">Not even we can see your entries</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
