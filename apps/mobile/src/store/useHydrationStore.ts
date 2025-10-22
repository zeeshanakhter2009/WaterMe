import { create } from 'zustand';

export type HydrationHistoryEntry = {
  date: string;
  consumedMl: number;
  goalMl: number;
  completed: boolean;
};

export type HydrationBadge = {
  code: string;
  unlockedAt: string;
};

type Milestones = {
  q25: boolean;
  q50: boolean;
  q75: boolean;
  q100: boolean;
};

interface HydrationState {
  today: {
    consumedMl: number;
    goalMl: number;
  } | null;
  history: HydrationHistoryEntry[];
  milestones: Milestones;
  badges: HydrationBadge[];
  addDrink: (amount: number) => void;
  reset: () => void;
}

const defaultMilestones: Milestones = { q25: false, q50: false, q75: false, q100: false };

export const useHydrationStore = create<HydrationState>(set => ({
  today: { consumedMl: 0, goalMl: 2000 },
  history: [],
  milestones: defaultMilestones,
  badges: [],
  addDrink: amount =>
    set(state => {
      const consumedMl = (state.today?.consumedMl ?? 0) + amount;
      const goalMl = state.today?.goalMl ?? 2000;
      const ratio = goalMl === 0 ? 0 : consumedMl / goalMl;
      return {
        today: { consumedMl, goalMl },
        milestones: {
          q25: ratio >= 0.25,
          q50: ratio >= 0.5,
          q75: ratio >= 0.75,
          q100: ratio >= 1
        }
      };
    }),
  reset: () =>
    set({
      today: { consumedMl: 0, goalMl: 2000 },
      milestones: defaultMilestones
    })
}));
