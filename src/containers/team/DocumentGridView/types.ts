import { DocumentList } from '@/types';

export interface DocumentGridViewProps {
  documentArray: DocumentList[];
  setReload?: React.Dispatch<React.SetStateAction<boolean>>;
}
