export interface StudyInfoCardProps {
  progress: number;
  startAt: Date;
  endAt: Date | null;
  status: string;
}

export interface StudyProgressProps {
  progress: number;
}
