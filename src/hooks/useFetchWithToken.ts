/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';

import { FetchResult } from '@/app/api/fetcher';
import useGetUser from '@/hooks/useGetUser';

export function useGetFetchWithToken(fetch: (token: string, ...props: any[]) => any, props: any[], originUser?: any) {
  const user = originUser !== undefined ? originUser : useGetUser();
  const [result, setResult] = useState<any>();
  const propsStr = Object.entries(props).toString();

  useEffect(() => {
    if (user?.isLogin) {
      fetch(user?.token, props).then((res: any) => {
        if (res?.ok) {
          setResult(res.body);
        } else {
          setResult(null);
        }
      });
    }
  }, [user, fetch, propsStr]);

  return result;
}

export function useMutateWithToken(fetch: (token: string, ...props: any[]) => Promise<FetchResult>) {
  const user = useGetUser();

  return (...props: any[]) => fetch(user?.token || '', ...props);
}
