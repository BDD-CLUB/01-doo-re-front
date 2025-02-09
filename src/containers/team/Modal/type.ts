import { Team } from '@/types';

export interface TeamModalProps {
  teamInfo?: Team;
  isOpen: boolean;
  onClose: () => void;
}

export interface DeleteTeamModalProps extends Pick<Team, 'id' | 'name'> {
  isOpen: boolean;
  onClose: () => void;
}

export interface LeaveTeamModalProps extends Pick<Team, 'id' | 'name'> {
  isOpen: boolean;
  onClose: () => void;
}
