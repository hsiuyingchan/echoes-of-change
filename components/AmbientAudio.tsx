"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function AmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play blocked", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <button
        onClick={toggle}
        className="w-12 h-12 rounded-full bg-ivory/80 dark:bg-navy/80 backdrop-blur-md border border-teal-900/10 dark:border-ivory/10 flex items-center justify-center text-teal-900 dark:text-ivory shadow-lg hover:scale-110 transition-transform"
        aria-label={isPlaying ? "Mute ambient sound" : "Unmute ambient sound"}
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
      <audio
        ref={audioRef}
        loop
        src="https://freqies.com/download/1111-hz-sine-wave.mp3" // 1111Hz Healing Frequency
      />
      {isPlaying && (
        <div className="absolute top-1/2 left-full ml-4 -translate-y-1/2 bg-ivory/90 dark:bg-navy/90 backdrop-blur-md px-3 py-1 rounded-full border border-teal-900/5 dark:border-ivory/5 text-[10px] uppercase tracking-widest font-bold whitespace-nowrap">
          Ambient: 1111Hz Healing Frequency
        </div>
      )}
    </div>
  );
}
