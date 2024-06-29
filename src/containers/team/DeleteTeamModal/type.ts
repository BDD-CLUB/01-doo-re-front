import { Team } from '@/types';

export interface DeleteTeamModalProps extends Pick<Team, 'id' | 'name'> {
  isOpen: boolean;
  onClose: () => void;
}
