import { ParticipantType } from '@/types';

export interface ParticipantMenuProps {
  teamId: number;
  studyId: number;
}

export interface ParticipantItemProps {
  studyId: number;
  member: ParticipantType;
}
