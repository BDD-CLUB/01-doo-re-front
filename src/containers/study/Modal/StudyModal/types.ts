import { Study } from '@/types';

export interface StudyModalProps {
  teamId?: number;
  studyId?: number;
  studyInfo: Study | null;
  isOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}
