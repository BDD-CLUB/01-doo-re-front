import { DocumentAccessType } from '@/types';

export interface DocumentData {
  id: number;
  type: string;
  name: string;
  url: string;
}

export interface DocumentModalProps {
  readonly teamId: number;
  readonly studyId?: number;
  isTeam?: boolean;
  id: number;
  isOpen: boolean;
  category: 'studies' | 'teams' | 'myPage';
  accessType: DocumentAccessType;
  setIsDocsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
  // setIsCreateDocsModalOpen: () => void;
  // document: DocumentDetail;
}
