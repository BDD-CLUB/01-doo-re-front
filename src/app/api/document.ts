import { fetcher } from '@/app/api/fetcher';
import { DocumentType } from '@/types';

const documentFetcher = fetcher();

const postDocument = (token: string, groupType: string, groupId: number, request: FormData) =>
  documentFetcher(`/${groupType}/${groupId}/documents`, {
    method: 'POST',
    body: request,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const getDocumentList = (groupType: string, groupId: number, page: number = 0, size: number = 4) => {
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
