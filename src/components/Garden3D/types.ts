import { GardenInfoType } from '@/types';

export interface CubeProps {
  currX: number;
  currZ: number;
  offsetY: number;
  cubeSizeHalf: number;
  count: number;
  maxCount: number;
}

export interface Garden3DProps {
  cubeSize: number;
  gardenInfos: GardenInfoType[];
}
