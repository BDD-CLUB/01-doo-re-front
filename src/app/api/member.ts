/* eslint-disable import/prefer-default-export */
import { fetcher } from '@/app/api/fetcher';

const memberFetcher = fetcher();

const getSidebarInfo = (token: string, memberId: number) =>
  memberFetcher(`/members/${memberId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export { getSidebarInfo };
