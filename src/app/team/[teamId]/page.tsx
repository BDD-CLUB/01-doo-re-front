import { Box, Flex, Grid, GridItem, Button } from '@chakra-ui/react';
import { BsLink45Deg } from 'react-icons/bs';

import TeamMember from '@/containers/team/teamMember';

const Page = () => {
  // const toast = useToast();
  // console.log(useToast());
  return (
    <Flex direction="column" gap="8" w="100%" p="8">
      <Flex justify="space-between" bg="gray.100">
        {/* TODO 이름 + 소개글 컴포넌트 */}
        <Box w="96" h="16" bg="gray.200" />
        {/* TODO 팀원 목록, 초대링크 버튼 */}

        <Flex align="center" justify="space-between" gap="8" w="fit-content" h="16">
          <TeamMember />
          <Button
            color="white"
            bg="orange_dark"
            // onClick={() =>
            //   toast({
            //     title: 'Account created.',
            //     description: "We've created your account for you.",
            //     status: 'success',
            //     duration: 9000,
            //     isClosable: true,
            //   })
            // }
            rounded="full"
            size="sm"
          >
            초대
            <BsLink45Deg size="24px" />
          </Button>
        </Flex>
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
        <Grid gap="4" templateColumns="repeat(4, 1fr)" mx="36" bg="gray.100">
          <GridItem w="100%" h="64" bg="gray.200" />
          <GridItem w="100%" h="64" bg="gray.200" />
          <GridItem w="100%" h="64" bg="gray.200" />
          <GridItem w="100%" h="64" bg="gray.200" />
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Page;
