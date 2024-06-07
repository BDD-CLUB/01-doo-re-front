import { Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';

import { TeamControlPanelProps } from './types';
import DeleteTeamModal from '../DeleteTeamModal';
import TeamModal from '../TeamModal';

const TeamControlPanel = ({ teamInfo }: TeamControlPanelProps) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  return (
    <Flex gap="2" mb="8">
      <Button
        w="fit-content"
        px="4"
        py="1"
        color="white"
        bg="orange"
        shadow="md"
        _hover={{ bg: 'orange' }}
        aria-label=""
        onClick={() => setIsEditModalOpen(true)}
        size="xs"
      >
        수정
      </Button>
      <Button
        w="fit-content"
        px="4"
        py="1"
        color="black"
        bg="white"
        shadow="md"
        _hover={{ bg: 'white' }}
        aria-label="delete-team-button"
        onClick={() => setIsDeleteModalOpen(true)}
        size="xs"
      >
        삭제
      </Button>
      {isEditModalOpen && (
        <TeamModal teamInfo={teamInfo} isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} />
      )}
      {isDeleteModalOpen && (
        <DeleteTeamModal
          id={teamInfo?.id}
          name={teamInfo?.name}
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
        />
      )}
    </Flex>
  );
};

export default TeamControlPanel;
