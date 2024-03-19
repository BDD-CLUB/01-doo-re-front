import { Flex, Grid } from '@chakra-ui/react';

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
    <Grid alignItems="center" gap="9" w="100%" p="8">
      <Flex justify="space-between" w="100%">
        <Title name={sampleStudy.name} description={sampleStudy.description} />
        <StudyInfoCard
          progress={sampleStudy.percent}
          startAt={new Date(sampleStudy.startDate)}
          endAt={new Date(sampleStudy.endDate)}
        />
      </Flex>
      <Grid gap="4" templateColumns={{ base: '', xl: '2fr 1fr' }} w="100%">
        <Flex direction="column" rowGap={{ base: '6', '2xl': '12' }}>
          <CurriculumCard />
          <Grid gap="2" templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}>
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
          </Grid>
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
