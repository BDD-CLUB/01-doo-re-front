import { Member } from '@/types';

export interface MemberModalProps {
  member: Member;
  isOpen: boolean;
  onClose: () => void;
}
