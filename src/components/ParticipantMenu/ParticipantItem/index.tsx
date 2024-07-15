import { Avatar, Flex, IconButton, Text } from '@chakra-ui/react';
import { RiAddLine, RiCloseFill, RiVipCrownLine } from 'react-icons/ri';

import { ParticipantItemProps } from '@/components/ParticipantMenu/types';
import colors from '@/theme/foundations/colors';

const ParticipantItem = ({ member, type, onAdd, onMandateLeader, onRemove }: ParticipantItemProps) => {
  const handleDeleteMember = () => {
    onRemove(member);
  };

  const handleMandateLeader = () => {
    onMandateLeader(member);
  };

  const handleAddMember = () => {
    onAdd(member);
  };

  return (
    <Flex key={member.id} align="center" gap="4" role="group">
      <Avatar size="sm" />
      <Text textStyle="bold_sm" ml="2" textColor={type === 'LEADER' ? colors.orange_dark : 'black'}>
        {member.name}
      </Text>
      {type === 'INCLUDE' && (
        <Flex
          gap="2"
          ml="auto"
          _groupHover={{
            visibility: 'visible',
          }}
          visibility="hidden"
        >
          <IconButton
            color="orange_dark"
            _hover={{ bgColor: 'transparent' }}
            aria-label=""
            bgColor="transparent"
            icon={<RiCloseFill />}
            onClick={handleDeleteMember}
            size="icon_sm"
          />
          <IconButton
            color="orange_dark"
            _hover={{ bgColor: 'transparent' }}
            aria-label=""
            bgColor="transparent"
            icon={<RiVipCrownLine />}
            onClick={handleMandateLeader}
            size="icon_sm"
          />
        </Flex>
      )}
      {type === 'EXCLUDE' && (
        <Flex
          gap="2"
          ml="auto"
          _groupHover={{
            visibility: 'visible',
          }}
          visibility="hidden"
        >
          <IconButton
            color="orange_dark"
            _hover={{ bgColor: 'transparent' }}
            aria-label=""
            bgColor="transparent"
            icon={<RiAddLine />}
            onClick={handleAddMember}
            size="icon_sm"
          />
        </Flex>
      )}
    </Flex>
  );
};

export default ParticipantItem;
