import { DocumentType } from '@/types';

export interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  teamId: number;
}

interface Document {
  key: string;
  name: string;
  content: string | File;
}

export type DocumentList = {
  [key in DocumentType]: Array<Document>;
};
