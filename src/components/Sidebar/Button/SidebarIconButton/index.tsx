import { IconButton } from '@chakra-ui/react';

interface SidebarIconButtonProps {
  icon: React.ReactElement;
  onClick: () => void;
}

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
