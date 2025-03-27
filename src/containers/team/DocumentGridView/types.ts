import { DocumentList } from '@/types';

export interface DocumentGridViewProps {
  readonly teamId: number;
  documentArray: DocumentList[];
  setReload?: React.Dispatch<React.SetStateAction<boolean>>;
}
