import { Avatar, AvatarGroup, useBreakpointValue } from '@chakra-ui/react';

import teamMemberList from '@/mocks/teamMember';

const TeamMember = () => {
  return (
    <AvatarGroup max={useBreakpointValue({ base: 3, lg: 4 })} size="md">
      {teamMemberList.map((member) => {
        return <Avatar key={member.googleId} name={member.name} src={member.imageUrl} />;
      })}
    </AvatarGroup>
  );
};
export default TeamMember;
