import { TeamDetail } from '@/types';

export interface TeamControlPanelProps {
  isTeamLeader: boolean;
  isMyTeam: boolean;
  teamInfo: TeamDetail;
}
