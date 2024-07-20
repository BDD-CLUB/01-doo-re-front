import { fetcher } from '@/app/api/fetcher';
import { UpdateDocument } from '@/containers/study/CreateDocumentModal/type';

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

const getDocument = (token: string, documentId: number) =>
  documentFetcher(`/${documentId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const putDocument = (
  token: string,
  documentId: number,
  request: Pick<UpdateDocument, 'title' | 'description' | 'accessType'>,
) =>
  documentFetcher(`/${documentId}`, {
    method: 'PUT',
    body: request,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const deleteDocument = (token: string, documentId: number) =>
  documentFetcher(`/${documentId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export { postDocument, getDocumentList, getDocument, putDocument, deleteDocument };
