import { Button, Icon, Text } from '@chakra-ui/react';
import { BsCircleFill } from 'react-icons/bs';

import { CategoryButtonProps } from '../../type';

const CategoryButton = ({ path, text, isSelected, isTeam = false, isTeamMatch = false }: CategoryButtonProps) => {
  return (
    <Button
      as="a"
      justifyContent="flex-start"
      h="fit-content"
      p="2"
      color={isSelected ? 'white' : (isTeamMatch && 'orange') || 'white'}
      bg={isSelected ? 'orange' : 'transparent'}
      _hover={isSelected ? { color: 'white' } : { color: 'orange' }}
      _active={{ color: 'orange' }}
      href={path}
      rounded="full"
    >
      {isTeam && <Icon as={BsCircleFill} mr="2" fontSize="6" />}
      <Text textStyle={isTeam ? 'bold_xl' : 'md'} ml={isTeam ? '0px' : '24px'}>
        {text}
      </Text>
    </Button>
  );
};

export default CategoryButton;
