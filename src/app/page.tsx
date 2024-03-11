'use client';

import { Text, Flex } from '@chakra-ui/react';
import { useRef } from 'react';

import CropLine from '@/containers/main/CropLine';
import GoogleLoginButton from '@/containers/main/GoogleLoginButton';
import MainSection from '@/containers/main/MainSection';
import { MainSectionElement } from '@/containers/main/MainSection/types';
import ScrollDownButton from '@/containers/main/ScrollDownButton';
import TeamRankBG from '@/containers/main/TeamRankBG';
import TeamRankDescription from '@/containers/main/TeamRankDescription';
import TeamRankSlider from '@/containers/main/TeamRankSlider';

const Page = () => {
  const mainSectionRef = useRef<MainSectionElement>(null);

  return (
    <MainSection ref={mainSectionRef}>
      <Flex key="title_with_login" pos="relative" justify="center" h="100vh" bgColor="green_dark">
        <Flex
          key="title_with_login"
          justify={{ base: 'center', lg: 'space-between' }}
          w="100%"
          h="100%"
          mx={{ base: '0', lg: '5%', '2xl': '8%' }}
        >
          <Flex
            justify={{ base: 'baseline', lg: 'center' }}
            direction="column"
            w={{ base: '480px', lg: '680px', '2xl': '960px' }}
            h="100%"
            pt={{ base: '100px', lg: '0' }}
            textColor="white"
          >
            <Text textStyle="title_xl">DOORE</Text>
            <Text textStyle="title_md" mb="2" whiteSpace="nowrap">
              community for developer
            </Text>
            <Text textStyle="title_sm" mb="4">
              Investigators have raided the home of the teenage suspect behind the physical attack on ruling party
              lawmaker Bae Hyun-jin as police are trying to determine the exact motive of the...
            </Text>
            <GoogleLoginButton />
          </Flex>
          <Flex columnGap={{ base: '6', lg: '8', '2xl': '10' }} display={{ base: 'none', lg: 'flex' }} h="100%">
            <CropLine />
            <CropLine reverse />
          </Flex>
        </Flex>
        <ScrollDownButton onClick={() => mainSectionRef.current?.scrollNext()} />
      </Flex>

      <Flex
        key="main"
        pos="relative"
        align="center"
        direction="column"
        overflow="hidden"
        w="100%"
        h="100vh"
        whiteSpace="nowrap"
      >
        <TeamRankBG />
        <TeamRankDescription />
        <TeamRankSlider />
      </Flex>
    </MainSection>
  );
};

export default Page;
