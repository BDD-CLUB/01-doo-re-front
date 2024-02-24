export interface StudyCardProps {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'IN_PROGRESS' | 'COMPLETED' | 'NOT_STARTED';
  isDeleted: boolean;
  cropId: number;
  teamId: number;
  percent: number;
}
