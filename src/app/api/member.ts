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

export { getSidebarInfo, useGetSideBarInfoQuery, patchStudyMandate };
