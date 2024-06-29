export interface DocumentData {
  id: number;
  type: string;
  name: string;
  url: string;
}

export interface DocumentModalProps {
  isOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  content: string;
  type: string;
}
