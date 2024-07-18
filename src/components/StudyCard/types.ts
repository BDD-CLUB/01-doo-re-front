import { Study } from '@/types';

export interface StudyCardProps extends Omit<Study, 'studyLeaderId' | 'teamReference'> {
  rank: number;
}
