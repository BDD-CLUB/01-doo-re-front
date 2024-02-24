import { Box, Flex, Grid } from '@chakra-ui/react';

import CurriculumCard from '@/components/CurriculumCard';
import StudyAssetCard from '@/components/StudyAssetCard';
import Title from '@/components/Title';
import Feed from '@/containers/study/Feed';
import Participant from '@/containers/study/Participant';
import StudyInfoCard from '@/containers/study/StudyInfoCard';
import participantData from '@/mocks/participant';
import studyAssetCardData from '@/mocks/studyAssetCard';
import studyCardData from '@/mocks/studyCard';

const sampleStudy = studyCardData[0];

const Page = () => {
  return (
    <Grid alignItems="center" rowGap="6" templateRows="1fr 10fr" w="100%" px={{ base: '5', '2xl': '20' }} py="3">
      <Flex justify="space-between" alignSelf="self-end" w="100%">
        <Title name={sampleStudy.name} description={sampleStudy.description} />
        <StudyInfoCard
          progress={sampleStudy.percent}
          startAt={new Date(sampleStudy.startDate)}
          endAt={new Date(sampleStudy.endDate)}
        />
      </Flex>
      <Grid columnGap={{ base: '6', '2xl': '12' }} templateColumns="2fr 1fr" w="100%">
        <Flex justify="end" direction="column" rowGap={{ base: '6', '2xl': '12' }}>
          <Flex direction="column">
            <Box w="100%" h="10" />
            <CurriculumCard />
          </Flex>
          <Flex justify="space-between" columnGap="1" w="100%">
            {studyAssetCardData.map((data) => (
              <StudyAssetCard
                key={data.title}
                title={data.title}
                content={data.content}
                date={data.date}
                bookmark={data.bookmark}
                img={data.img}
              />
            ))}
          </Flex>
        </Flex>
        <Flex direction="column" rowGap={{ base: '6', '2xl': '12' }}>
          <Feed />
          <Participant participantInfos={participantData} />
        </Flex>
      </Grid>
    </Grid>
  );
};

export default Page;
