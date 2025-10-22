import { create } from 'zustand';

export type UserProfile = {
  uid: string;
  email: string;
  displayName?: string;
  goalMl: number;
  timezone: string;
  reminders?: {
    enabled: boolean;
    hours: number[];
    pauseAtGoal: boolean;
  };
  subscription?: {
    status: 'trial' | 'active' | 'expired' | 'canceled';
  };
};

interface UserState {
  profile: UserProfile | null;
  setProfile: (profile: UserProfile | null) => void;
}

export const useUserStore = create<UserState>(set => ({
  profile: null,
  setProfile: profile => set({ profile })
}));
