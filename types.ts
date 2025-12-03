export interface StarData {
  id: string;
  x: number; // Percentage 0-100
  y: number; // Percentage 0-100
  memory: string;
  timestamp: number;
}

export interface Coordinates {
  x: number;
  y: number;
}

// Module declaration for canvas-confetti to fix TypeScript errors
declare module 'canvas-confetti';
