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
  "010101": {
    number: 64,
    name: "Before Completion",
    pinyin: "Wèi Jì",
    meaning: "The transition from disorder to order. Potential.",
    judgment: "Before Completion. Success. But if the little fox, after nearly completing the crossing, gets his tail in the water, there is nothing that would further.",
    image: "Fire over water: the image of the condition before transition. Thus the superior person is careful in the differentiation of things, so that each finds its place."
  },
  "101010": {
    number: 63,
    name: "After Completion",
    pinyin: "Jì Jì",
    meaning: "Perfect balance achieved. The need for vigilance to maintain it.",
    judgment: "After Completion. Success in small matters. Perseverance furthers. At the beginning good fortune, at the end disorder.",
    image: "Water over fire: the image of the condition after transition. Thus the superior person takes thought of misfortune and arms himself against it in advance."
  },
  "000001": {
    number: 24,
    name: "Return",
    pinyin: "Fù",
    meaning: "The turning point. Light returns after darkness. Fresh beginnings.",
    judgment: "Return. Success. Going out and coming in without error. Friends come without blame. To and fro goes the way. On the seventh day comes return. It furthers one to have somewhere to go.",
    image: "Thunder within the earth: the image of the Turning Point. Thus the kings of antiquity closed the passes at the time of solstice. Merchants and strangers did not go about, and the ruler did not travel through the provinces."
  },
  "100000": {
    number: 23,
    number_alt: 23,
    name: "Splitting Apart",
    pinyin: "Bō",
    meaning: "Decline and disintegration. A time to wait and rest.",
    judgment: "Splitting Apart. It does not further one to go anywhere.",
    image: "The mountain rests on the earth: the image of Splitting Apart. Thus those above can ensure their position only by giving generously to those below."
  },
  "000010": {
    number: 8,
    name: "Holding Together",
    pinyin: "Bǐ",
    meaning: "Unity, union, and mutual support. Finding your tribe.",
    judgment: "Holding Together brings good fortune. Inquire of the oracle once again whether you possess sublimity, constancy, and perseverance; if so, there is no blame. Those who are uncertain attach themselves gradually. Whoever comes too late meets with misfortune.",
    image: "On the earth is water: the image of Holding Together. Thus the kings of antiquity made a gift of the different states and maintained friendly relations with the feudal lords."
  },
  "010000": {
    number: 7,
    name: "The Army",
    pinyin: "Shī",
    meaning: "Leadership, discipline, and organized effort toward a goal.",
    judgment: "The Army. The army needs perseverance and a strong man. Good fortune without blame.",
    image: "In the middle of the earth is water: the image of the Army. Thus the superior person increases his abundance by containing the people."
  },
  "101011": {
    number: 38,
    name: "Opposition",
    pinyin: "Kuí",
    meaning: "Differences that lead to creative tension. Finding common ground.",
    judgment: "Opposition. In small matters, good fortune.",
    image: "Above, fire; below, the lake: the image of Opposition. Thus amid all fellowship the superior person retains his individuality."
  },
  "110101": {
    number: 37,
    name: "The Family",
    pinyin: "Jiā Rén",
    meaning: "Inner structure, relationships, and the foundation of the home.",
    judgment: "The Family. The perseverance of the woman furthers.",
    image: "Wind comes forth from fire: the image of the Family. Thus the superior person has substance in his words and duration in his way of life."
  },
  "010110": {
    number: 39,
    name: "Obstruction",
    pinyin: "Jiǎn",
    meaning: "A temporary halt. A time to turn inward and seek guidance.",
    judgment: "Obstruction. The southwest furthers. The northeast does not further. It furthers one to see the great man. Perseverance brings good fortune.",
    image: "Water on the mountain: the image of Obstruction. Thus the superior person turns his attention to himself and molds his character."
  },
  "011010": {
    number: 40,
    name: "Deliverance",
    pinyin: "Xiè",
    meaning: "Release of tension. Movement and progress after a period of struggle.",
    judgment: "Deliverance. The southwest furthers. If there is no longer anything where one has to go, return brings good fortune. If there is still something where one has to go, hastening brings good fortune.",
    image: "Thunder and rain set in: the image of Deliverance. Thus the superior person pardons mistakes and forgives misdeeds."
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
