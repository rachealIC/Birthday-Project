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
declare module 'canvas-confetti' {
  interface ConfettiOptions {
    particleCount?: number;
    angle?: number;
    spread?: number;
    startVelocity?: number;
    decay?: number;
    gravity?: number;
    drift?: number;
    ticks?: number;
    origin?: { x: number; y: number };
    colors?: string[];
    shapes?: string[];
    scalar?: number;
    zIndex?: number;
    disableForReducedMotion?: boolean;
  }

  function confetti(options?: ConfettiOptions): Promise<null> | null;
  export default confetti;
}