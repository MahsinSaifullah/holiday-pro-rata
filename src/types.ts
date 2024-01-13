import { Dayjs } from 'dayjs';

export interface FormData {
  leavePerAnnum?: number;
  dateFrom?: Dayjs | null;
  dataTo?: Dayjs | null;
  workCapacity?: number;
}

export type ICalculateOption = 'hours' | 'days';
