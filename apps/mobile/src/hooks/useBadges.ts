import { useMemo } from 'react';
import { useHydrationStore } from '@/store/useHydrationStore';

export type Badge = {
  code: string;
  title: string;
  description: string;
  unlockedAt?: string;
};

const CATALOG: Badge[] = [
  { code: 'WATER_GOAL_DAY', title: 'Goal Getter', description: 'Reach your hydration goal for the day.' },
  { code: 'WATER_7D_STREAK', title: '7 Day Streak', description: 'Stay hydrated for seven days straight.' },
  { code: 'WATER_2L_CLUB', title: '2L Club', description: 'Drink at least two litres in one day.' }
];

export function useBadges() {
  const { badges } = useHydrationStore();

  return useMemo(() => {
    const unlockedCodes = new Set(badges.map(badge => badge.code));
    return {
      unlocked: CATALOG.filter(badge => unlockedCodes.has(badge.code)).map(badge => ({
        ...badge,
        unlockedAt: badges.find(b => b.code === badge.code)?.unlockedAt
      })),
      locked: CATALOG.filter(badge => !unlockedCodes.has(badge.code))
    };
  }, [badges]);
}
