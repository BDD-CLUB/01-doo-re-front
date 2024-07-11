import { Member } from '@/types';

export interface ParticipantMenuProps {
  teamId: number;
  studyId: number;
  leaderId: number;
}

export interface ParticipantItemProps {
  studyId: number;
  member: Member;
  type: '스터디장' | '스터디원' | '팀원';
}
