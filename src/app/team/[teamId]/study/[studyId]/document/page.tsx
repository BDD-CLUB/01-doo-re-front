'use client';

import { Button, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import { getMyStudies } from '@/app/api/study';
import Documents from '@/containers/document/Documents';
import CreateDocumentModal from '@/containers/study/CreateDocumentModal';
import { CreateDocument } from '@/containers/study/CreateDocumentModal/type';
// import useGetMyTeam from '@/hooks/useGetMyTeam';
import useGetUser from '@/hooks/useGetUser';
import { Study } from '@/types';

const Page = ({ params }: { params: { teamId: number; studyId: number } }) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [myStudies, setMyStudies] = useState<number[]>([]);
  const categoryData: CreateDocument = { groupId: params.studyId, groupType: 'studies' };

  const user = useGetUser();
  const router = useRouter();

  // const myTeam = useGetMyTeam();
  if (user && !user.isLogin) router.replace(`/team/${params.teamId}`);
  // if (myTeam && !myTeam.some((id) => id === +params.teamId)) router.replace(`/team/${params.teamId}`);

  const auth = useMemo(() => {
    if (!user || !user.isLogin) return false;
    return myStudies.some((studyId) => studyId === +params.studyId);
  }, [user, myStudies, params.studyId]);

  useEffect(() => {
    if (!user || !user.isLogin) return;
    getMyStudies(user.token, user.memberId)
      .then((res) => {
        if (res.ok && res.body) {
          setMyStudies(res.body.map((study: Study) => study.id));
        }
      })
      .catch(() => router.replace(`/team/${params.teamId}`));
  }, [user, setMyStudies, router, params.teamId]);

  return (
    <Flex align="center" direction="column" gap="9" w="100%" p="8">
      <Flex justify="space-between" w="100%">
        <Flex direction="row" gap="2">
          <Text textStyle="bold_2xl">학습자료 갤러리</Text>
        </Flex>
        {auth && (
          <Button color="white" bg="orange_dark" onClick={() => setOpenCreateModal(true)} rounded="full">
            자료 등록
          </Button>
        )}
      </Flex>
      <Documents groupId={params.studyId} category="studies" refetchTrigger={openCreateModal} />
      <CreateDocumentModal
        isOpen={openCreateModal}
        onClose={() => setOpenCreateModal(false)}
        categoryData={categoryData}
        category="create"
      />
    </Flex>
  );
};

export default Page;
