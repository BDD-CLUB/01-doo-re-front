import { Button, Flex } from '@chakra-ui/react';

import { StudyControlPanelProps } from './types';

const StudyControlPanel = ({
  isStudyLeader,
  isStudyMember,
  editModalOpen,
  terminateModalOpen,
  deleteModalOpen,
  leaveModalOpen,
}: StudyControlPanelProps) => {
  return (
    <Flex gap="2">
      {isStudyLeader && (
        <>
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
        </>
      )}
      {!isStudyLeader && isStudyMember && (
        <Button
          w="fit-content"
          px="4"
          py="1"
          color="white"
          bg="orange"
          shadow="md"
          _hover={{ bg: 'orange' }}
          aria-label=""
          onClick={() => leaveModalOpen(true)}
          size="xs"
        >
          탈퇴
        </Button>
      )}
    </Flex>
  );
};

export default StudyControlPanel;
