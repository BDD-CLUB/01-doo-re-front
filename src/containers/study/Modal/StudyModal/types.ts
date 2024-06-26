import { Study } from '@/types';

export interface StudyModalProps {
  teamId?: number;
  studyId?: number;
  studyInfo: Study;
  isOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}
