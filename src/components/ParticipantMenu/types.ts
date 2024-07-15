import { FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Member } from '@/types';

export interface ParticipantMenuProps extends FlexProps {
  leader?: Member;
  includeMembers?: Member[];
  excludeMembers?: Member[];
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onRemove?: (member: Member) => void;
  onAdd?: (member: Member) => void;
  onMandateLeader?: (member: Member) => void;
}

export interface ParticipantItemProps {
  member: Member;
  type: 'LEADER' | 'INCLUDE' | 'EXCLUDE';
  onRemove: (member: Member) => void;
  onAdd: (member: Member) => void;
  onMandateLeader: (member: Member) => void;
}
