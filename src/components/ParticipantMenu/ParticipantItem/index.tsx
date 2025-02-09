import { Avatar, Flex, IconButton, Text, keyframes } from '@chakra-ui/react';
import { RiAddLine, RiCloseFill, RiVipCrownLine } from 'react-icons/ri';

import { ParticipantItemProps } from '@/components/ParticipantMenu/types';
import colors from '@/theme/foundations/colors';

const ParticipantItem = ({
  member,
  type,
  isLeader,
  isTeamLeader,
  category,
  onAdd,
  onMandateLeader,
  onRemove,
}: ParticipantItemProps) => {
  const handleDeleteMember = () => {
    onRemove(member);
  };

  const handleMandateLeader = () => {
    onMandateLeader(member);
  };

  const handleAddMember = () => {
    onAdd(member);
  };

  const textFlow = keyframes`
    from { transform: translate(0%, 0) }
    to { transform: translate(calc(-100% + ${type === 'LEADER' || !isLeader ? '116px' : '68px'}), 0); }
  `;
  const textFlowAnimation = `${textFlow} 4s linear infinite`;

  return (
    <Flex key={member.id} align="center" role="group">
      <Avatar size="sm" src={member.imageUrl} />
      <Flex flexGrow="1" overflow="hidden" ml="4">
        <Text
          textStyle="bold_sm"
          overflow="hidden"
          textColor={type === 'LEADER' ? colors.orange_dark : 'black'}
          _groupHover={{
            animation: textFlowAnimation,
            w: '500px',
            overflow: 'visible',
            textOverflow: 'unset',
          }}
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        >
          {member.name}
        </Text>
      </Flex>
      {isTeamLeader && !isLeader && type === 'LEADER' && (
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
        </Flex>
      )}
      {isLeader && type === 'INCLUDE' && (
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
          {(category !== 'studies' || !isTeamLeader || isLeader) && (
            <IconButton
              color="orange_dark"
              _hover={{ bgColor: 'transparent' }}
              aria-label=""
              bgColor="transparent"
              icon={<RiVipCrownLine />}
              onClick={handleMandateLeader}
              size="icon_sm"
            />
          )}
        </Flex>
      )}
      {isLeader && type === 'EXCLUDE' && (
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
