'use client';

import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { postGoogleLogin } from '@/app/api/login';
import { userAtom } from '@/atom';

const Page = ({ searchParams }: { searchParams: { code: string } }) => {
  const { code } = searchParams;
  const router = useRouter();

  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    if (code) {
      postGoogleLogin(code).then((res) => {
        if (res?.ok) {
          setUser({
            memberId: res.body?.memberId,
            token: res.body?.token,
            isLogin: true,
          });
        } else {
          alert(res?.body?.message || '알 수 없는 오류가 발생했습니다.');
        }
        router.replace('/');
      });
    }
  }, [code, router, setUser]);

  return <div />;
};

export default Page;
