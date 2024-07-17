export interface IActivity {
  involvements: string;
  achievements: string;
}

export interface IActivityStore {
  activities: Partial<IActivity>;
  reset: (activityItem: IActivity) => void;
  get: () => void;
  setValues: (activityItem: IActivity) => void;
  updateInvolvements: (involvements: string) => void;
  updateAchievements: (achievements: string) => void;
}
