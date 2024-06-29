export interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export type DocumentType = 'img' | 'file' | 'url';

interface Document {
  name: string;
  content: string | File;
}

export type DocumentList = {
  [key in DocumentType]: Array<Document>;
};
