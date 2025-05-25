import { fetcher } from '@/app/api/fetcher';
import { UpdateDocument } from '@/containers/study/CreateDocumentModal/type';

const documentFetcher = fetcher();

const postDocument = (token: string, groupType: string, groupId: number, request: FormData) =>
  documentFetcher(`/documents/${groupType}/${groupId}`, {
    method: 'POST',
    body: request,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const getDocumentList = (groupType: string, groupId: number, page: number, size: number) =>
  documentFetcher(`/documents/${groupType}/${groupId}?page=${page}&size=${size}`);

const getDocument = (token: string, documentId: number) =>
  documentFetcher(`/documents/${documentId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const getMyDocumentList = (token: string) =>
  documentFetcher('/documents/members/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const putDocument = (
  token: string,
  documentId: number,
  request: Pick<UpdateDocument, 'title' | 'description' | 'accessType'>,
) =>
  documentFetcher(`/documents/${documentId}`, {
    method: 'PUT',
    body: request,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const deleteDocument = (token: string, documentId: number) =>
  documentFetcher(`/documents/${documentId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export { postDocument, getDocumentList, getDocument, getMyDocumentList, putDocument, deleteDocument };
