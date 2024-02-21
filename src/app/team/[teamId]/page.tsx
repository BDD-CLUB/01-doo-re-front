import { Box, Flex, SimpleGrid } from '@chakra-ui/react';

import StudyCard from '@/components/StudyCard';
import studyCardData from '@/mocks/study';

const Page = () => {
  return (
    <Flex direction="column" gap="8" w="100%" p="8">
      <Flex justify="space-between" bg="gray.100">
        {/* TODO 이름 + 소개글 컴포넌트 */}
        <Box w="96" h="16" bg="gray.200" />
        {/* TODO 팀원 목록, 초대링크 버튼 */}
        <Box w="52" h="16" bg="gray.200" />
      </Flex>

      <Flex align="center" flex="1" gap="8" bg="gray.100">
        {/* TODO  잔디 */}
        <Flex flex="1" h="300px" bg="gray.200" />
        {/* TODO  진행도 */}
        <Box w="200px" h="200px" bg="gray.200" rounded="full" />
      </Flex>

      <Flex direction="column" flex="1" gap="4" bg="gray.100">
        {/* TODO 스터디, 학습자료, 작물창고 버튼 */}
        <Box w="96" h="10" bg="gray.200" />
        {/* TODO 전체보기, 네비게이션 이동 버튼 */}
        <Box h="10" bg="gray.200" />
        {/* TODO 스터디 카드 */}
        <SimpleGrid justifyContent="center" gap="4" px="24" minChildWidth="64">
          {studyCardData.map((study) => {
            return (
              <StudyCard
                key={study.name}
                name={study.name}
                description={study.description}
                startDate={study.startDate}
                endDate={study.endDate}
                cropId={study.cropId}
                percent={study.percent}
                rank={study.rank}
              />
            );
          })}
          {/* <GridItem w="100%" h="64" bg="gray.200" />
          <GridItem w="100%" h="64" bg="gray.200" />
          <GridItem w="100%" h="64" bg="gray.200" />
          <GridItem w="100%" h="64" bg="gray.200" /> */}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Page;
