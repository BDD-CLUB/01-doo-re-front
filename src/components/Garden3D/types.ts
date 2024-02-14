import { GardenInfoType } from '@/types';

interface CubeProps {
  currX: number;
  currZ: number;
  offsetY: number;
  cubeSize: number;
}

interface CubeBarProps extends CubeProps {
  barHeight: number;
}

interface Garden3DProps {
  isMove: boolean;
  gardenInfos: GardenInfoType[];
}

export type { CubeProps, CubeBarProps, Garden3DProps };
