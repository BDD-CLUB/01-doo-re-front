import { GardenInfoType } from '@/types';

export interface CubeProps {
  currX: number;
  currZ: number;
  offsetY: number;
  cubeSize: number;
  count: number;
  maxCount: number;
}

export interface Garden3DProps {
  gardenInfos: GardenInfoType[];
}
