import { Text, Flex, Avatar, Box } from '@chakra-ui/react';
import { useState } from 'react';

import S3_URL from '@/constants/s3Url';

import { TitleProps } from './types';

const Title = ({ isTeam, name, description, imageUrl }: TitleProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Flex pos="relative" align="center" gap="3">
      {isTeam && (
        <Avatar
          borderWidth="3px"
          borderColor="gray.100"
          shadow="none"
          size="md"
          src={imageUrl ? S3_URL(imageUrl) : '/images/doore_logo.png'}
        />
      )}
      <Text textStyle="bold_3xl" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {name}
      </Text>

      <Box pos="relative" display={{ base: 'none', lg: 'block' }} w="10" h="12" px="2">
        <Box pos="absolute" zIndex="1" top="50%" w="5" h="5" bg="white" transform="translate(0%, -50%) rotate(45deg)" />
        <Flex
          pos="absolute"
          left="4"
          align="center"
          w={{ base: '72', '2xl': '96' }}
          h="100%"
          px="3"
          bg="white"
          borderRadius="base"
          shadow="md"
        >
          <Text zIndex="2" w="100%" h="6">
            {description}
          </Text>
        </Flex>
      </Box>

      <Box
        pos="absolute"
        zIndex="2"
        top="100%"
        left={isTeam ? '10' : '0'}
        display={{ base: isHovered ? 'block' : 'none', lg: 'none' }}
        w={{ base: '72', '2xl': '96' }}
        h="100%"
        p="2"
        bg="white"
        borderRadius="base"
        shadow="md"
      >
        <Text>{description}</Text>
      </Box>
    </Flex>
  );
};

export default Title;
