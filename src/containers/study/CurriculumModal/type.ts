import { Curriculum } from '@/types';

export interface EditCurriculum extends Curriculum {
  isEdit: boolean;
}

export interface CurriculumModalProps {
  isOpen: boolean;
  onClose: () => void;
  originCurriculums: Curriculum[];
}
