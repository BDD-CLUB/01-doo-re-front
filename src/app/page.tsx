'use client';

import { Box, Grid, Text, Flex } from '@chakra-ui/react';
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
        <Grid key="title_with_login" gap="80" templateColumns="2fr 1fr" h="100%">
          <Flex justify="center" direction="column" w="2xl" h="100%" textColor="white" fontWeight="bold">
            <Text fontSize="100px">DOORE</Text>
            <Text mb="2" fontSize="40px">
              community for developer
            </Text>
            <Text mb="14" fontSize="20px" fontWeight="semibold">
              Investigators have raided the home of the teenage suspect behind the physical attack on ruling party
              lawmaker Bae Hyun-jin as police are trying to determine the exact motive of the...
            </Text>
            <GoogleLoginButton />
          </Flex>
          <Flex columnGap="10" h="100%">
            <CropLine />
            <CropLine reverse />
          </Flex>
        </Grid>
        <ScrollDownButton onClick={() => mainSectionRef.current?.scrollNext()} />
      </Flex>
      <Box key="main" pos="relative" w="100vw" h="100vh">
        <TeamRankBG />
        <TeamRankDescription />
        <TeamRankSlider />
      </Box>
    </MainSection>
  );
};

export default Page;
