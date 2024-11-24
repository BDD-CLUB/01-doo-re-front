import { StudyMember } from '@/types';

export interface StudyParticipantMenuProps {
  studyId: number;
  teamId: number;
  leaderId: number;
  studyMembers: StudyMember[];
  refetchMembers?: () => void;
}
