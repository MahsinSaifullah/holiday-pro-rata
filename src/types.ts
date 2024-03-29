import { Dayjs } from 'dayjs';

export interface FormData {
  leavePerAnnum?: number;
  dateFrom?: Dayjs | null;
  dateTo?: Dayjs | null;
  workCapacity?: number;
  workingHourPerDay?: number;
}

export type ICalculateOption = 'hours' | 'days';
