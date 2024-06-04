'use client';

import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';

import { postGoogleLogin } from '@/app/api/login';
import { userAtom } from '@/atom';

const Page = ({ searchParams }: { searchParams: { code: string } }) => {
  const { code } = searchParams;
  const router = useRouter();

  const setUser = useSetAtom(userAtom);

  postGoogleLogin(code).then((res) => {
    if (res?.ok) {
      setUser({
        memberId: res.body?.memberId,
        token: res.body?.token,
        isLogin: true,
      });
    } else {
      alert(res.body.message);
    }
    router.replace('/');
  });

  return <div />;
};

export default Page;
