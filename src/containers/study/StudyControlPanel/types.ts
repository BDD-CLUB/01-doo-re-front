export interface StudyControlPanelProps {
  isStudyLeader: boolean;
  isStudyMember: boolean;
  editModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  terminateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  leaveModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
