import { Study } from '@/types';

export interface TerminateStudyModalProps extends Pick<Study, 'id' | 'name'> {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DeleteStudyModalProps extends Pick<Study, 'id' | 'name'> {
  isOpen: boolean;
  teamId: number;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface LeaveStudyModalProps extends Pick<Study, 'id' | 'name'> {
  isOpen: boolean;
  teamId: number;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
