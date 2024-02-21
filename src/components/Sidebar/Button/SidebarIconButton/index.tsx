import { IconButton } from '@chakra-ui/react';

import { SidebarIconButtonProps } from '../../type';

const SidebarIconButton = ({ icon, onClick }: SidebarIconButtonProps) => {
  return (
    <IconButton
      color="white"
      bg="green_dark"
      _hover={{ bg: 'green_dark' }}
      aria-label=""
      icon={icon}
      onClick={onClick}
      size="icon_md"
    />
  );
};

export default SidebarIconButton;
