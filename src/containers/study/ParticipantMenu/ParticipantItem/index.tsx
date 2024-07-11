import { Avatar, Flex, IconButton, Text } from '@chakra-ui/react';
import { RiAddLine, RiCloseFill, RiVipCrownLine } from 'react-icons/ri';

import { patchStudyMandate } from '@/app/api/member';
import { deleteStudyMember, postStudyMember } from '@/app/api/study';
import { ParticipantItemProps } from '@/containers/study/ParticipantMenu/type';
import { useMutateWithToken } from '@/hooks/useFetchWithToken';
import useGetUser from '@/hooks/useGetUser';
import colors from '@/theme/foundations/colors';

const ParticipantItem = ({ member, studyId, type }: ParticipantItemProps) => {
  const user = useGetUser();

  const isLeader = type === '스터디장';
  const isStudyMember = type === '스터디원';
  const isNonStudyMember = type === '팀원';

  const addMember = useMutateWithToken(postStudyMember, user);
  const deleteMember = useMutateWithToken(deleteStudyMember, user);
  const mandateLeader = useMutateWithToken(patchStudyMandate, user);

  const handleAddMember = () => {
    addMember(studyId, member.id);
  };

  const handleDeleteMember = () => {
    deleteMember(studyId, member.id);
  };

  const handleMandateLeader = () => {
    mandateLeader(studyId, member.id);
  };

  return (
    <Flex key={member.id} align="center" gap="4" role="group">
      <Avatar size="sm" />
      <Text textStyle="bold_sm" ml="2" textColor={isLeader ? colors.orange_dark : 'black'}>
        {member.name}
      </Text>
      {isStudyMember && (
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
      {isNonStudyMember && (
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
