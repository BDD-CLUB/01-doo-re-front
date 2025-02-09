export interface DocumentData {
  id: number;
  type: string;
  name: string;
  url: string;
}

export interface DocumentModalProps {
  readonly teamId: number;
  readonly studyId?: number;
  id: number;
  isOpen: boolean;
  category: 'studies' | 'teams';
  setIsDocsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
  // setIsCreateDocsModalOpen: () => void;
  // document: DocumentDetail;
}
