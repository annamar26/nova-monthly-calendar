import { Activity } from './data-interfaces';

export interface Day {
  weeklyDay?: string;
  numberDay?: number;
}

export interface Card {
  day: Day;
  activities: Activity[];
}
