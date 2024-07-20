export interface DocumentData {
  id: number;
  type: string;
  name: string;
  url: string;
}

export interface DocumentModalProps {
  id: number;
  isOpen: boolean;
  setIsDocsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // setIsCreateDocsModalOpen: () => void;
  // document: DocumentDetail;
}
