export interface CurriculumCardProps {
  cropId: number;
  studyProgressRatio: number;
  isStudyLeader: boolean;
  isStudyMember: boolean;
  setReload?: React.Dispatch<React.SetStateAction<boolean>>;
}
