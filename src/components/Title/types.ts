import { Team } from '@/types';

export interface TitleProps extends Omit<Team, 'id'> {
  isTeam?: boolean;
}
