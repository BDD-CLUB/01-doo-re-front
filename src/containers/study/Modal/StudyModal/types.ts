export interface StudyModalProps {
  teamId?: number;
  studyId?: number;
  isOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}
