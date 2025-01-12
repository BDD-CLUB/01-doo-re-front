import { Team } from '@/types';

export interface TeamModalProps {
  teamInfo?: Team;
  isOpen: boolean;
  onClose: () => void;
}

export interface TeamActionModalProps extends Pick<Team, 'id' | 'name'> {
  isOpen: boolean;
  onClose: () => void;
  actionType: 'delete' | 'leave';
}
