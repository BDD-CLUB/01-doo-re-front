import { Avatar, AvatarGroup } from '@chakra-ui/react';

import teamMemberList from '@/mocks/teamMember';

const TeamMember = () => {
  return (
    <AvatarGroup max={4} size="md">
      {teamMemberList.map((member) => {
        return <Avatar key={member.gooleId} name={member.name} src={member.imageUrl} />;
      })}
    </AvatarGroup>
  );
};
export default TeamMember;
