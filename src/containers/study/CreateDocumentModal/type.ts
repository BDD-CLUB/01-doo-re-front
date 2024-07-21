import { DocumentDetail, DocumentType } from '@/types';

export interface CreateDocument {
  groupId: number;
  groupType: 'teams' | 'studies';
}

export interface UpdateDocument {
  title: string;
  description: string;
  accessType: string;
}

export interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  categoryData: CreateDocument | DocumentDetail | undefined;
  category: 'create' | 'update';
}

interface Document {
  key: string;
  name: string;
  content: string | File;
}

export type DocumentList = {
  [key in DocumentType]: Array<Document>;
};
