export interface HydrationLog {
  date: string;
  consumedMl: number;
  goalMl: number;
  milestones: {
    q25: boolean;
    q50: boolean;
    q75: boolean;
    q100: boolean;
  };
  lastUpdate: string;
  deviceSource?: 'mobile' | 'wearos' | 'watchos';
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  timezone: string;
  goalMl: number;
}
