'use client';

import { Box, Button, Flex, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';
import { BsLink45Deg } from 'react-icons/bs';

import Garden3D from '@/components/Garden3D';
import TabButton from '@/components/TabButton';
import Title from '@/components/Title';
import AssetGridView from '@/containers/team/AssetGridView';
import AttendanceRate from '@/containers/team/AttendanceRate';
import NavigationButton from '@/containers/team/NavigationButton';
import StudyGridView from '@/containers/team/StudyGridView';
import TeamMember from '@/containers/team/teamMember';
import { gardenInfos1 } from '@/mocks/Garden3D';
import studyAssetCardData from '@/mocks/studyAssetCard';
import studyCardData from '@/mocks/studyCard';
import teamPageCategoryInfos from '@/mocks/team';

const Page = () => {
  const [category, setCategory] = useState<string>(teamPageCategoryInfos[0].name);
  const [cardIdx, setCardIdx] = useState<number>(0);

  const handlePrevClick = () => {
    if (cardIdx === 1) return;
    setCardIdx((idx) => idx - 1);
  };
  const handleNextClick = () => {
    if (category === '스터디' && cardIdx + 4 < studyCardData.length) {
      setCardIdx((idx) => idx + 1);
    } else if (category === '학습자료' && cardIdx + 4 < studyAssetCardData.length) {
      setCardIdx((idx) => idx + 1);
    }
  };
  const handlePlusClick = () => {
    if (category === '스터디') {
      // TODO: create study modal 띄우기
    } else if (category === '학습자료') {
      // TODO: create study asset modal 띄우기
    }
  };

  const handleCategoryChange = (tab: string) => {
    setCategory(tab);
    setCardIdx(0);
  };

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
        <Box pos="relative" overflow="hidden" w="100%" h={{ base: '250px', md: '300px', xl: '320px' }}>
          <Box pos="absolute" w="100%" h="100%">
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
        <TabButton currentTab={category} changeTab={handleCategoryChange} categoryInfos={teamPageCategoryInfos} />
        {category !== '작물창고' && (
          <NavigationButton
            handlePrevClick={handlePrevClick}
            handleNextClick={handleNextClick}
            handlePlusClick={handlePlusClick}
          />
        )}
        {/* TODO 전체보기, 네비게이션 이동 버튼 */}
        {/* TODO 스터디 카드 */}
        {category === '스터디' && <StudyGridView studyArray={studyCardData.slice(cardIdx, cardIdx + 4)} />}
        {category === '학습자료' && <AssetGridView assetArray={studyAssetCardData.slice(cardIdx, cardIdx + 4)} />}
      </Flex>
    </Flex>
  );
};

export default Page;
