import { fetcher } from '@/app/api/fetcher';
import { Document, DocumentType } from '@/types';

const documentFetcher = fetcher();

const postDocument = (groupType: number, groupId: number, document: Document, files: FormData) => {
  documentFetcher(`/${groupType}/${groupId}/documents`, {
    method: 'POST',
    body: { document, files },
  });
};

const getDocumentList = (groupType: number, groupId: number, page: number = 0, size: number = 4) => {
  documentFetcher(`/${groupType}/${groupId}/documents?page=${page}&size=${size}`, {
    method: 'GET',
  });
};

const getDocument = (documentId: number) => {
  documentFetcher(`/${documentId}`, {
    method: 'GET',
  });
};

const putDocument = (documentId: number, title: string, description: string, accessType: DocumentType) => {
  documentFetcher(`/${documentId}`, {
    method: 'PUT',
    body: {
      title,
      description,
      accessType,
    },
  });
};

const deleteDocument = (documentId: number) => {
  documentFetcher(`/${documentId}`, {
    method: 'DELETE',
  });
};

export { postDocument, getDocumentList, getDocument, putDocument, deleteDocument };
