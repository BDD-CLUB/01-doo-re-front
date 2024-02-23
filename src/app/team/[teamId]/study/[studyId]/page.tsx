import { Box, Flex, Grid } from '@chakra-ui/react';

import CurriculumCard from '@/components/CurriculumCard';
import StudyAssetCard from '@/components/StudyAssetCard';
import Title from '@/components/Title';
import Participant from '@/containers/study/Participant';
import participantData from '@/mocks/participant';
import studyAssetCardData from '@/mocks/studyAssetCard';

const Page = () => {
  return (
    <Flex gap="8" w="100%" p="8">
      <Flex direction="column" gap="8" w="66%">
        <Title name="홍당무 스터디" description="ㅁㄴㅇㅁㄴㅇㅁㄴ" />
        <CurriculumCard />
        {/* TODO 학습자료 */}
        <Flex direction="column" gap="2">
          <Box w="100%" h="10" bg="gray.200" />
          {/* TODO 학습자료 카드 */}
          <Grid gap="4" templateColumns="repeat(4, 1fr)">
            {studyAssetCardData.map((data) => {
              return (
                <StudyAssetCard
                  key={data.title}
                  title={data.title}
                  content={data.content}
                  date={data.date}
                  bookmark={data.bookmark}
                  img={data.img}
                />
              );
            })}
          </Grid>
        </Flex>
      </Flex>
      <Flex direction="column" gap="8" w="33%" bg="gray.100">
        {/* TODO 피드 */}
        <Flex flex="1" bg="gray.200" />
        <Participant participantInfos={participantData} />
      </Flex>
    </Flex>
  );
};

export default Page;
