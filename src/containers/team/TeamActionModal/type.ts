import { Team } from '@/types';

export interface TeamActionModalProps extends Pick<Team, 'id' | 'name'> {
  isOpen: boolean;
  onClose: () => void;
  actionType: 'delete' | 'leave';
}
