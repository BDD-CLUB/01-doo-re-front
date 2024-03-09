'use client';

import { useSetAtom } from 'jotai';
import { redirect } from 'next/navigation';

import { postGoogleLoginFetch } from '@/app/api/login';
import { userAtom } from '@/atom';

const Page = ({ searchParams }: { searchParams: { code: string } }) => {
  const { code } = searchParams;

  const setUser = useSetAtom(userAtom);

  const login = postGoogleLoginFetch();

  login(code).then((res) => {
    if (res?.ok) {
      setUser({
        memberId: res.body?.memberId,
        token: res.body?.token,
        isLogin: true,
      });
      redirect('/');
    }
    return res;
  });

  return (
    <div>
      <h1>Google Code {code}</h1>
    </div>
  );
};

export default Page;
