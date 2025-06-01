'use client';

import { Button, Flex, Text } from '@chakra-ui/react';
import { useAtomValue } from 'jotai';
import { useMemo, useState } from 'react';

import { myTeamAtom } from '@/atom';
import Documents from '@/containers/document/Documents';
import CreateDocumentModal from '@/containers/study/CreateDocumentModal';
import { CreateDocument } from '@/containers/study/CreateDocumentModal/type';
import useGetUser from '@/hooks/useGetUser';

const Page = ({ params }: { params: { teamId: number } }) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const categoryData: CreateDocument = { groupId: params.teamId, groupType: 'teams' };

  const user = useGetUser();
  const myTeam = useAtomValue(myTeamAtom);

  const auth = useMemo(() => {
    if (!user || !user.isLogin) return false;
    return myTeam.some((teamId) => teamId === +params.teamId);
  }, [user, myTeam, params.teamId]);

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
      <Documents
        teamId={params.teamId}
        groupId={params.teamId}
        category="teams"
        refetchTrigger={openCreateModal}
        isMyTeam={auth}
      />
      <CreateDocumentModal
        isTeam
        isOpen={openCreateModal}
        onClose={() => setOpenCreateModal(false)}
        categoryData={categoryData}
        // groupId={params.teamId}
        // groupType="teams"
        category="create"
      />
    </Flex>
  );
};

export default Page;
