import { Activity } from './data-interfaces';
export interface Card {
  day?: number;
  activities?: Activity[] | undefined;
}

export interface DataSnackbar {
  message: string;
  type: 'default' | 'custom';
  backgroundColor?: string;
  success: boolean;
}