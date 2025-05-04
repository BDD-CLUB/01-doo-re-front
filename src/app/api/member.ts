/* eslint-disable import/prefer-default-export */
import { useQuery } from '@tanstack/react-query';

import { fetcher } from '@/app/api/fetcher';
import useGetUser from '@/hooks/useGetUser';

const memberFetcher = fetcher();

const getSidebarInfo = (token: string, memberId: number) =>
  memberFetcher(`/members/${memberId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const patchStudyMandate = (token: string, studyId: number, newStudyLeaderId: number) =>
  memberFetcher(`/study/${studyId}/mandate/${newStudyLeaderId}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const useGetSideBarInfoQuery = () => {
  const user = useGetUser();
  return useQuery({
    queryFn: () => getSidebarInfo(user?.token || '', user?.memberId || 0),
    queryKey: ['sidebar', user?.memberId],
  });
};

const deleteUser = (token: string) =>
  memberFetcher('/members', {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const patchUserName = (token: string, name: string) =>
  memberFetcher('/members/me', {
    method: 'PATCH',
    body: JSON.stringify({ name }),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const patchUserImage = (token: string, image: FormData) =>
  memberFetcher('/members/me/image', {
    method: 'PATCH',
    body: image,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export { getSidebarInfo, useGetSideBarInfoQuery, deleteUser, patchStudyMandate, patchUserName, patchUserImage };
