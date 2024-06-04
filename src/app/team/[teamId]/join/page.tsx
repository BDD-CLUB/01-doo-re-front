'use client';

import { useParams, useRouter } from 'next/navigation';

import { postJoinTeam } from '@/app/api/team';

const Page = ({ searchParams }: { searchParams: { code: string } }) => {
  const params = useParams<{ teamId: string }>();
  const teamId = parseInt(params.teamId, 10);
  const { code } = searchParams;
  const router = useRouter();

  postJoinTeam(teamId, code).then((res) => {
    if (res?.ok) {
      router.replace(`/team/${teamId}`);
    } else {
      alert('유효하지 않은 초대링크입니다.');
      router.replace('/');
    }
  });

  return <div />;
};

export default Page;
