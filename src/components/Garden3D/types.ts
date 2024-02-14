import { GardenInfoType } from '@/types';

export interface CubeProps {
  currX: number;
  currZ: number;
  offsetY: number;
  cubeSize: number;
}

export interface CubeBarProps extends CubeProps {
  barHeight: number;
}

export interface Garden3DProps {
  gardenInfos: GardenInfoType[];
}
