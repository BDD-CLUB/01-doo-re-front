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

const getDocumentList = (category: string, teamId: number, page: number, size: number) =>
  documentFetcher(`/${category}/${teamId}/documents?page=${page}&size=${size}`);
// headers: {
//   Authorization: `Bearer ${token}`,
// },
// });

const getDocument = (token: string, documentId: number) =>
  documentFetcher(`/${documentId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

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
