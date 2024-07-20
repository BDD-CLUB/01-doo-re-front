import { Member } from '@/types';

export interface MemberModalProps {
  member: Member;
  isOpen: boolean;
  teamId: number;
  teamName: string;
  onClose: () => void;
}
