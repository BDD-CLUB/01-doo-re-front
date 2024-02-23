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
    <Flex direction="column" w="100%" px="60" py="8">
      <Grid templateColumns="1fr 1fr" w="100%">
        <Title name={sampleStudy.name} description={sampleStudy.description} />
        <StudyInfoCard
          progress={sampleStudy.percent}
          startAt={new Date(sampleStudy.startDate)}
          endAt={new Date(sampleStudy.endDate)}
        />
      </Grid>
      <Grid columnGap="32" templateColumns="2fr 1fr" w="100%" mt="10">
        <Flex justify="end" direction="column" rowGap="12">
          <Flex align="center" w="100%" h="100%">
            <CurriculumCard />
          </Flex>
          <Flex justify="space-between" w="100%">
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
        <Flex justify="end" direction="column" rowGap="12">
          <Feed />
          <Participant participantInfos={participantData} />
        </Flex>
      </Grid>
    </Flex>
  );
};

export default Page;
