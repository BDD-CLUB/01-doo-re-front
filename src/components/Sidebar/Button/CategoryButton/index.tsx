import { Button, Icon, Text } from '@chakra-ui/react';
import { BsCircleFill } from 'react-icons/bs';

import { CategoryButtonProps } from '../../type';

const CategoryButton = ({ path, text, isSelected, isTeam, isTeamMatch }: CategoryButtonProps) => {
  return (
    <Button
      as="a"
      justifyContent="flex-start"
      p="2"
      color={isSelected ? 'white' : (isTeamMatch && 'orange') || 'white'}
      bg={isSelected ? 'orange' : 'transparent'}
      _hover={isSelected ? { color: 'white' } : { color: 'orange' }}
      _active={{ color: 'orange' }}
      href={path}
      rounded="full"
    >
      {isTeam && <Icon as={BsCircleFill} mr="2" fontSize="6" />}
      <Text ml={isTeam ? '0px' : '24px'} fontSize={isTeam ? 'xl' : 'md'} fontWeight={isTeam ? 'bold' : 'md'}>
        {text}
      </Text>
    </Button>
  );
};

export default CategoryButton;
