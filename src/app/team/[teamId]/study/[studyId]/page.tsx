import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';

const Page = () => {
  return (
    <Flex gap="8" w="100%" p="8">
      <Flex direction="column" gap="8" w="66%" bg="gray.100">
        {/* TODO 이름 + 소개글 컴포넌트 */}
        <Box w="96" h="16" bg="gray.200" />
        {/* TODO 커리큘럼 */}
        <Flex flex="1" p="2" bg="gray.200" />
        {/* TODO 학습자료 */}
        <Flex direction="column" gap="2">
          {/* TODO 전체보기 버튼 */}
          <Box w="100%" h="10" bg="gray.200" />
          {/* TODO 학습자료 카드 */}
          <Grid gap="4" templateColumns="repeat(4, 1fr)" bg="gray.100">
            <GridItem w="100%" h="80" bg="gray.200" />
            <GridItem w="100%" h="80" bg="gray.200" />
            <GridItem w="100%" h="80" bg="gray.200" />
            <GridItem w="100%" h="80" bg="gray.200" />
          </Grid>
        </Flex>
      </Flex>
      <Flex direction="column" gap="8" w="33%" bg="gray.100">
        {/* TODO 피드 */}
        <Flex flex="1" bg="gray.200" />
        {/* TODO 참여인원 */}
        <Flex h="300px" bg="gray.200" />
      </Flex>
    </Flex>
  );
};

export default Page;
