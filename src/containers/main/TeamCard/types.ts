import { GardenInfo } from '@/types';

export interface TeamCardProps {
  rank: number;
  name: string;
  description: string;
  gardenInfos: GardenInfo[];
}
