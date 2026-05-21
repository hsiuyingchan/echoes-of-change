"use client";

import { motion } from "framer-motion";

interface HexagramProps {
  lines: number[]; // Array of 6 numbers: 6, 7, 8, or 9
  size?: number;
  className?: string;
}

/**
 * I-Ching Line Types:
 * 6: Old Yin (Changing) -> -- x --
 * 7: Young Yang -> ---------
 * 8: Young Yin -> ---   ---
 * 9: Old Yang (Changing) -> --- o ---
 */

export function Hexagram({ lines, size = 120, className = "" }: HexagramProps) {
  return (
    <div className={`flex flex-col-reverse gap-2 ${className}`} style={{ width: size }}>
      {lines.map((type, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
          className="h-2 w-full flex justify-center gap-2"
        >
          {type === 7 || type === 9 ? (
            // Yang Line (Solid)
            <div className={`h-full w-full bg-current rounded-full relative ${type === 9 ? 'after:content-["○"] after:absolute after:left-1/2 after:-translate-x-1/2 after:-top-4 after:text-[10px]' : ''}`} />
          ) : (
            // Yin Line (Broken)
            <>
              <div className="h-full w-[45%] bg-current rounded-full" />
              <div className="h-full w-[45%] bg-current rounded-full relative">
                {type === 6 && <span className="absolute -left-[10%] -top-4 text-[10px]">✕</span>}
              </div>
            </>
          )}
        </motion.div>
      ))}
    </div>
  );
}
