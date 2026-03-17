import { create } from "zustand";

interface TimerState {
  isRunning: boolean;
  secondsRemaining: number;
  phase: "focus" | "short_break" | "long_break";
  linkedTaskId?: string;
  start: (taskId?: string) => void;
  tick: () => void;
  pause: () => void;
  reset: () => void;
}

const FOCUS_SECONDS = 25 * 60;

export const useTimerStore = create<TimerState>((set) => ({
  isRunning: false,
  secondsRemaining: FOCUS_SECONDS,
  phase: "focus",
  start: (linkedTaskId) => set({ isRunning: true, linkedTaskId }),
  tick: () => set((state) => ({ secondsRemaining: Math.max(0, state.secondsRemaining - 1) })),
  pause: () => set({ isRunning: false }),
  reset: () => set({ isRunning: false, secondsRemaining: FOCUS_SECONDS, linkedTaskId: undefined })
}));
