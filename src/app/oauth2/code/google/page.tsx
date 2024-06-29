'use client';

import { useAtomValue, useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { postGoogleLogin } from '@/app/api/login';
import { loginBackPathAtom, userAtom } from '@/atom';

const Page = ({ searchParams }: { searchParams: { code: string } }) => {
  const { code } = searchParams;
  const router = useRouter();

  const setUser = useSetAtom(userAtom);
  const loginBackPath = useAtomValue(loginBackPathAtom);

  useEffect(() => {
    if (code) {
      postGoogleLogin(code).then((res) => {
        if (res?.ok) {
          setUser({
            memberId: res.body?.memberId,
            token: res.body?.token,
            isLogin: true,
          });
          router.replace(loginBackPath);
        } else {
          alert(res?.body?.message || '알 수 없는 오류가 발생했습니다.');
          router.replace('/');
        }
      });
    }
  }, [code, router, setUser, loginBackPath]);

  return <div />;
};

export default Page;
