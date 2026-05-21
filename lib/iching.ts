export interface HexagramData {
  number: number;
  name: string;
  pinyin: string;
  meaning: string;
  judgment: string;
  image: string;
}

// A subset of interpretations for the demo. 
// In a full app, this would contain all 64.
export const IChingData: Record<string, HexagramData> = {
  "111111": {
    number: 1,
    name: "The Creative",
    pinyin: "Qián",
    meaning: "Infinite energy, initiation, and divine timing.",
    judgment: "The Creative works sublime success, furthering through perseverance.",
    image: "The movement of heaven is full of power. Thus the superior person makes himself strong and untiring."
  },
  "000000": {
    number: 2,
    name: "The Receptive",
    pinyin: "Kūn",
    meaning: "Gentle devotion, yielding, and maternal nurturing.",
    judgment: "The Receptive brings about sublime success. Perseverance of a mare furthers.",
    image: "The earth's condition is receptive devotion. Thus the superior person who has breadth of character carries the outer world."
  },
  "111000": {
    number: 11,
    name: "Peace",
    pinyin: "Tài",
    meaning: "Harmony between heaven and earth. Success and flourishing.",
    judgment: "Peace. The small departs, the great approaches. Good fortune. Success.",
    image: "Heaven and earth unite: the image of Peace. Thus the ruler divides and completes the course of heaven and earth."
  },
  "000111": {
    number: 12,
    name: "Standstill",
    pinyin: "Pǐ",
    meaning: "Obstruction, lack of communication, and stagnation.",
    judgment: "Standstill. Evil people do not further the perseverance of the superior person.",
    image: "Heaven and earth do not unite: the image of Standstill. Thus the superior person falls back upon his inner worth."
  },
  "000100": {
    number: 36,
    name: "Darkening of the Light",
    pinyin: "Míng Yí",
    meaning: "Internalizing wisdom during difficult times. Preservation.",
    judgment: "Darkening of the Light. In adversity it furthers one to be persevering.",
    image: "The light has sunk into the earth: the image of Darkening of the Light. Thus the superior person lives with the great multitude; he veils his light, yet still shines."
  },
  // Default fallback for unmapped hexagrams in this demo
  "default": {
    number: 0,
    name: "The Flow of Change",
    pinyin: "Yì",
    meaning: "A unique transition point in your journey.",
    judgment: "Success is found in the center of the movement. Observe the subtle shifts.",
    image: "Water flows over rock. The path reveals itself to the patient observer."
  }
};

/**
 * Converts a lines array (6,7,8,9) to a binary string (0 for Yin, 1 for Yang)
 */
export function getHexagramCode(lines: number[]): string {
  return lines.map(l => (l === 7 || l === 9 ? "1" : "0")).join("");
}

export function getHexagramData(lines: number[]): HexagramData {
  const code = getHexagramCode(lines);
  return IChingData[code] || IChingData["default"];
}
