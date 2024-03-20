'use client';

import { Box, Button, Flex, Grid, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';
import { BsLink45Deg } from 'react-icons/bs';

import Garden3D from '@/components/Garden3D';
import StudyCard from '@/components/StudyCard';
import TabButton from '@/components/TabButton';
import Title from '@/components/Title';
import AttendanceRate from '@/containers/team/AttendanceRate';
import TeamMember from '@/containers/team/teamMember';
import { gardenInfos1 } from '@/mocks/Garden3D';
import studyCardData from '@/mocks/studyCard';
import teamPageCategoryInfos from '@/mocks/team';

const Page = () => {
  const [category, setCategory] = useState<string>(teamPageCategoryInfos[0].name);

  return (
    <Flex direction="column" gap="8" w="100%" p="8">
      <Flex justify="space-between">
        <Title isTeam name="열사모" description="팀입니다" />
        {/* TODO 팀원 목록, 초대링크 버튼 */}
        <Flex align="center" gap={{ base: '2', lg: '8' }}>
          <TeamMember />
          <Button color="white" bg="orange_dark" rightIcon={<BsLink45Deg size="24px" />} rounded="full" size="sm">
            초대
          </Button>
        </Flex>
      </Flex>

      <Flex pos="relative" align="center" flex="1" gap="8">
        {/* TODO  잔디 */}
        <Box pos="relative" overflow="hidden" w="100%" h={{ base: '250px', md: '300px' }}>
          <Box pos="absolute" left="50%" transform="translate(-50%, 0%)">
            <Garden3D
              rotate
              rotateY={0}
              cubeGap={useBreakpointValue({ base: 3, xl: 4 }) || 3}
              cubeSize={useBreakpointValue({ base: 20, md: 26, xl: 30 }) || 20}
              gardenInfos={gardenInfos1}
            />
          </Box>
        </Box>

        {/* TODO  진행도 */}
        <AttendanceRate attendanceRate={75} />
      </Flex>

      <Flex direction="column" flex="1" gap="4">
        {/* TODO 스터디, 학습자료, 작물창고 버튼 */}
        <TabButton currentTab={category} changeTab={setCategory} categoryInfos={teamPageCategoryInfos} />
        {/* TODO 전체보기, 네비게이션 이동 버튼 */}
        {/* TODO 스터디 카드 */}
        <Grid gap="4" templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}>
          {studyCardData.map((study) => {
            return (
              <StudyCard
                key={study.id}
                id={study.id}
                name={study.name}
                description={study.description}
                startDate={study.startDate}
                endDate={study.endDate}
                status={study.status}
                isDeleted={study.isDeleted}
                cropId={study.cropId}
                teamId={study.teamId}
                percent={study.percent}
                rank={study.rank}
              />
            );
          })}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Page;
