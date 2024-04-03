export interface StudyAssetData {
  id: number;
  type: string;
  name: string;
  url: string;
}

export interface StudyAssetModalProps {
  isOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  content: string;
  type: string;
}
