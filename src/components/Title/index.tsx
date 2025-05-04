import { Text, Flex, Avatar, Box, keyframes } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

import S3_URL from '@/constants/s3Url';

import { TitleProps } from './types';

const Title = ({ isTeam, name, description, imageUrl }: TitleProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [textWidth, setTextWidth] = useState(0);
  const textRef = useRef<HTMLParagraphElement>(null);

  const textFlow = keyframes`
    from { transform: translateX(0); }
    to { transform: translateX(calc(-${textWidth}px + 100%)); }
  `;
  const textFlowAnimation = `${textFlow} 4s linear forwards`;

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.maxWidth = 'none';
      setTextWidth(textRef.current.scrollWidth);
      textRef.current.style.maxWidth = '';
    }
  }, [name]);

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
      <Box
        ref={textRef}
        textStyle="bold_3xl"
        overflow="hidden"
        maxW={isTeam ? { base: '56', lg: '64', xl: '96' } : { base: '56', md: '64', lg: '72', xl: '96' }}
        whiteSpace="nowrap"
        cursor="default"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Text
          display="block"
          overflow={isHovered ? 'visible' : 'hidden'}
          animation={isHovered ? textFlowAnimation : 'none'}
          whiteSpace="nowrap"
          textOverflow={isHovered ? 'unset' : 'ellipsis'}
        >
          {name}
        </Text>
      </Box>

      {description && (
        <>
          <Box pos="relative" display={{ base: 'none', lg: 'block' }} w="10" h="12" px="2">
            <Box
              pos="absolute"
              zIndex="1"
              top="50%"
              w="5"
              h="5"
              bg="white"
              transform="translate(0%, -50%) rotate(45deg)"
            />
            <Flex
              pos="absolute"
              left="4"
              align="center"
              w={isTeam ? { base: '72', '2xl': '96' } : { base: '56', xl: '72', '2xl': '96' }}
              h="100%"
              px="3"
              bg="white"
              borderRadius="base"
              shadow="md"
              _hover={{
                h: 'auto',
              }}
              role="group"
            >
              <Text
                zIndex="2"
                w="100%"
                h="6"
                _groupHover={{
                  h: '100%',
                  py: 3,
                  overflow: 'visible',
                  WebkitLineClamp: 'unset',
                }}
                whiteSpace="pre-wrap"
                noOfLines={1}
              >
                {description}
              </Text>
            </Flex>
          </Box>
          <Box
            pos="absolute"
            zIndex="2"
            top="100%"
            left={isTeam ? '10' : '0'}
            alignContent="center"
            display={{ base: isHovered ? 'block' : 'none', lg: 'none' }}
            w={{ base: '72', '2xl': '96' }}
            p="2"
            bg="white"
            borderRadius="base"
            shadow="md"
          >
            <Text>{description}</Text>
          </Box>
        </>
      )}
    </Flex>
  );
};

export default Title;
