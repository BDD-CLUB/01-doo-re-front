import { Team } from '@/types';

export interface TeamModalProps {
  teamInfo?: Team;
  isOpen: boolean;
  onClose: () => void;
}
