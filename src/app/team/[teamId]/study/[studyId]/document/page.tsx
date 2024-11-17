'use client';

import { Button, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

import Documents from '@/containers/document/Documents';
import CreateDocumentModal from '@/containers/study/CreateDocumentModal';
import { CreateDocument } from '@/containers/study/CreateDocumentModal/type';

const Page = ({ params }: { params: { teamId: number; studyId: number } }) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const categoryData: CreateDocument = { groupId: params.studyId, groupType: 'studies' };
  return (
    <Flex align="center" direction="column" gap="9" w="100%" p="8">
      <Flex justify="space-between" w="100%">
        <Flex direction="row" gap="2">
          <Text textStyle="bold_2xl">학습자료 갤러리</Text>
        </Flex>
        <Button color="white" bg="orange_dark" onClick={() => setOpenCreateModal(true)} rounded="full">
          자료 등록
        </Button>
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
