'use client';

import { useSetAtom } from 'jotai';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { postJoinTeam } from '@/app/api/team';
import { loginBackPathAtom } from '@/atom';
import GOOGLE_LOGIN_URL from '@/constants/googleLoginUrl';
import { useMutateWithToken } from '@/hooks/useFetchWithToken';
import useGetUser from '@/hooks/useGetUser';

const Page = ({ searchParams }: { searchParams: { code: string } }) => {
  const params = useParams<{ teamId: string }>();
  const teamId = parseInt(params.teamId, 10);
  const { code } = searchParams;
  const router = useRouter();
  const user = useGetUser();
  const setLoginBackPath = useSetAtom(loginBackPathAtom);
  const joinTeam = useMutateWithToken(postJoinTeam);

  useEffect(() => {
    if (user) {
      if (user.isLogin) {
        joinTeam(teamId, code).then((res) => {
          if (res?.ok) {
            router.replace(`/team/${teamId}`);
          } else {
            alert('유효하지 않은 초대링크입니다.');
            router.replace('/');
          }
        });
      } else {
        setLoginBackPath(`/team/${teamId}/join?code=${code}`);
        window.location.href = GOOGLE_LOGIN_URL;
      }
    }
  }, [user, teamId, code, router, setLoginBackPath, joinTeam]);

  return <div />;
};

export default Page;
