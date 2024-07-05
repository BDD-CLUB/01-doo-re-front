import { fetcher } from '@/app/api/fetcher';

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

export { getSidebarInfo, patchStudyMandate };
