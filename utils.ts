
export const BIRTHDAY = new Date('1997-12-07T00:00:00');

// --- BIRTHDAY PROTOCOL CONFIG ---
// Change the year here to set the next mission launch date
export const TARGET_DATE = new Date('2025-12-07T00:00:00');

export const NAME = "Racheal Kuranchie";

// --- CONFIGURATION ARRAYS ---

export const QUOTES = [
  "The courage to begin is often the hardest line of code.",
  "Your consistency is the only dependency your success requires.",
  "I don't just solve problems; I architect reliable futures.",
 
  "My journey from Political Science to AI proves that logic is transferable.",
  "Don't minimize your achievements. It's not bragging when it's fact.",
  "Trust the timing of your life.",
  "You are building a masterpiece.",
  "Keep going, you are doing great.",
  "Every star is a victory.",
  "The universe conspires in your favor.",
  "Your potential is infinite.",
  
];

export const SHOUTOUTS = [
  "GOD",
  "Mom",
  "Dad",
  
  "Isaac",
  "Jojoo",
  
];

export const AFFIRMATIONS = [
  "I am a Generative AI Leader and an architect of secure systems.",
  "My unique background is my greatest asset; I turn complexity into clarity for others.",
  "I speak the language of code and the language of impact.",
  "My backend foundation is strong, and my AI vision is clear.",
  "I invest in my potential, and my commitment is non-negotiable.",
  "I am capable of handling whatever comes next.",
  "I am worthy of great things.",
  "I am exactly where I need to be.",
  "I am surrounded by abundance.",
  "I trust the journey.",
  "I am enough, just as I am."
];

export const MESSAGES = [
  { id: 1, sender: "System", text: "Welcome to the new orbit, Pilot. Systems are optimal." },
  { id: 2, sender: "Mom", text: "Happy Birthday! So proud of the woman you are becoming." },
  { id: 3, sender: "Bestie", text: "Can't wait to celebrate! See you on the 7th! 🥂" }
];

// --- MUSEUM MODE: INITIAL STARS ---
export const INITIAL_STARS = [
  { 
    id: "init-1", 
    x: 50, 
    y: 50, 
    memory: "Officially achieved the Google Cloud Certified Generative AI Leader certification.", 
    timestamp: Date.now() 
  },
  { 
    id: "init-2", 
    x: 20, 
    y: 75, 
    memory: "Successfully navigated a career transition from Political Science to Software Development.", 
    timestamp: Date.now() 
  },
  { 
    id: "init-3", 
    x: 80, 
    y: 25, 
    memory: "Guided over 370 beginners into tech roles across 6 cohorts in the last two years.", 
    timestamp: Date.now() 
  },
  { 
    id: "init-4", 
    x: 25, 
    y: 25, 
    memory: "Optimized a critical Java system, reducing processing time from 30 minutes to just 1 minute.", 
    timestamp: Date.now() 
  },
  { 
    id: "init-5", 
    x: 75, 
    y: 70, 
    memory: "Traveled internationally for the first time to attend PyCon Africa in South Africa.", 
    timestamp: Date.now() 
  },
  { 
    id: "init-6", 
    x: 45, 
    y: 85, 
    memory: "Led a workshop on Mastering Prompt Engineering and NotebookLM, training organizational teams.", 
    timestamp: Date.now() 
  },
  { 
    id: "init-7", 
    x: 55, 
    y: 15, 
    memory: "Attended 'I Am Remarkable' at Google, overcoming the fear of sharing my professional achievements.", 
    timestamp: Date.now() 
  }
];

// --- UTILITY FUNCTIONS ---

/**
 * Calculates current level (Age).
 * @param referenceDate Optional date to calculate age against (e.g., TARGET_DATE for simulations)
 */
export const calculateLevel = (referenceDate: Date = new Date()): number => {
  let age = referenceDate.getFullYear() - BIRTHDAY.getFullYear();
  const m = referenceDate.getMonth() - BIRTHDAY.getMonth();
  if (m < 0 || (m === 0 && referenceDate.getDate() < BIRTHDAY.getDate())) {
    age--;
  }
  return age;
};

export const calculateXP = (): number => {
  const today = new Date();
  // Time difference in milliseconds
  const diffTime = Math.abs(today.getTime() - BIRTHDAY.getTime());
  // Convert to days
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  return diffDays;
};

export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};
