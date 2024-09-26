import { Button, Flex } from '@chakra-ui/react';

import { StudyControlPanelProps } from './types';

const StudyControlPanel = ({ editModalOpen, terminateModalOpen, deleteModalOpen }: StudyControlPanelProps) => {
  return (
    <Flex gap="2">
      <Button
        w="fit-content"
        px="4"
        py="1"
        color="white"
        bg="orange"
        shadow="md"
        _hover={{ bg: 'orange' }}
        aria-label=""
        onClick={() => editModalOpen(true)}
        size="xs"
      >
        수정
      </Button>
      <Button
        w="fit-content"
        px="4"
        py="1"
        color="white"
        bg="orange_dark"
        shadow="md"
        _hover={{ bg: 'orange_dark' }}
        aria-label=""
        onClick={() => terminateModalOpen(true)}
        size="xs"
      >
        종료
      </Button>
      <Button
        w="fit-content"
        px="4"
        py="1"
        color="black"
        bg="white"
        shadow="md"
        _hover={{ bg: 'white' }}
        aria-label=""
        onClick={() => deleteModalOpen(true)}
        size="xs"
      >
        삭제
      </Button>
    </Flex>
  );
};

export default StudyControlPanel;
