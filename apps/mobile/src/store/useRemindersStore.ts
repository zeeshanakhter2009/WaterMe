import { create } from 'zustand';

interface ReminderState {
  enabled: boolean;
  hours: number[];
  pauseAtGoal: boolean;
  setEnabled: (enabled: boolean) => void;
  setHours: (hours: number[]) => void;
  setPauseAtGoal: (pause: boolean) => void;
}

export const useRemindersStore = create<ReminderState>(set => ({
  enabled: true,
  hours: [8, 10, 12, 14, 16, 18],
  pauseAtGoal: true,
  setEnabled: enabled => set({ enabled }),
  setHours: hours => set({ hours }),
  setPauseAtGoal: pauseAtGoal => set({ pauseAtGoal })
}));
