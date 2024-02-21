import { Avatar, AvatarGroup } from '@chakra-ui/react';

const TeamMember = () => {
  return (
    <AvatarGroup max={2} size="md">
      <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
      <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
      <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
      <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
      <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
    </AvatarGroup>
  );
};
export default TeamMember;
