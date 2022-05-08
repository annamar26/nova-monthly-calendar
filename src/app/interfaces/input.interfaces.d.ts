import { Activity } from './data-interfaces';
export interface Card {
  day?: number;
  activities?: Activity[] | undefined;
  date?: Date;
}
