import { StudyMember } from '@/types';

export interface StudyParticipantMenuProps {
  studyId: number;
  teamId: number;
  leaderId: number;
  isTeamLeader: boolean;
  studyMembers: StudyMember[];
  refetchMembers?: () => void;
}
