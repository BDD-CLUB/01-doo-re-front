import { Garden } from '@/types';

export interface TeamCardProps {
  rank: number;
  name: string;
  description: string;
  garden: Garden[];
}
