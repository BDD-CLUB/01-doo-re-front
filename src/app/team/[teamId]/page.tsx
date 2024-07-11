/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { Box, Button, Flex, useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BsLink45Deg } from 'react-icons/bs';

import { getDocumentList } from '@/app/api/document';
import { getGarden } from '@/app/api/garden';
import { getTeamInfo, postInviteTeam } from '@/app/api/team';
import Garden3D from '@/components/Garden3D';
import { StudyCardProps } from '@/components/StudyCard/types';
import TabButton from '@/components/TabButton';
import Title from '@/components/Title';
import { CARD_PER_PAGE, TEAM_CATEGORY_INFOS } from '@/constants/team';
import CreateDocumentModal from '@/containers/study/CreateDocumentModal';
import StudyModal from '@/containers/study/Modal/StudyModal';
import AttendanceRate from '@/containers/team/AttendanceRate';
import DocumentGridView from '@/containers/team/DocumentGridView';
import NavigationButton from '@/containers/team/NavigationButton';
import StudyGridView from '@/containers/team/StudyGridView';
import TeamControlPanel from '@/containers/team/TeamControlPanel';
import TeamMember from '@/containers/team/teamMember';
import { useGetFetchWithToken, useMutateWithToken } from '@/hooks/useFetchWithToken';
import studyCardData from '@/mocks/studyCard';
import { DocumentList, Garden } from '@/types';

const Page = ({ params }: { params: { teamId: number } }) => {
  const teamInfo = useGetFetchWithToken(getTeamInfo, [params.teamId]);
  const [garden, setGarden] = useState<Garden[]>([]);

  const [category, setCategory] = useState<string>(TEAM_CATEGORY_INFOS[0].name);
  const [cardIdx, setCardIdx] = useState<number>(0);
  const [studyArray, setStudyArray] = useState<StudyCardProps[]>([]);
  const [studyLength, setStudyLength] = useState<number>(0);
  const [documentArray, setDocumentArray] = useState<DocumentList[]>([]);
  const [documentLength, setDocumentLength] = useState<number>(0);

  const [isCreateStudyModalOpen, setIsCreateStudyModalOpen] = useState<boolean>(false);
  const [isCreateDocumentModalOoen, setIsCreateDocumentModalOpen] = useState<boolean>(false);

  const documentCardData: DocumentList[] = useGetFetchWithToken(getDocumentList, [
    `teams/${params.teamId}/documents?page=0&size=4 `,
  ]);
  const inviteTeam = useMutateWithToken(postInviteTeam);

  const getCardData = (start: number) => {
    if (category === '스터디') {
      // TODO: 스터디 목록 조회하기.
      setStudyArray(studyCardData.slice(start, start + CARD_PER_PAGE));
    } else if (category === '학습자료') {
      // TODO: 학습자료 목록 조회하기.
      setDocumentArray(documentCardData?.slice(start, start + CARD_PER_PAGE) || []);
    }
  };

  useEffect(() => {
    // TODO: 아래의 handleNextClick의 조건문을 기능시키기 위해,
    //       팀 상세 정보 조회 api에서 팀의 스터디와 학습자료 갯수를 받아와야할 것 같습니다.
    setStudyLength(studyCardData.length);
    setDocumentLength(documentCardData?.length || 0);

    getGarden(params.teamId).then((res) => {
      setGarden(res.body);
    });
  }, []);

  useEffect(() => {
    getCardData(cardIdx);
  }, [cardIdx]);

  useEffect(() => {
    getCardData(0);
  }, [category]);

  const handlePrevClick = () => {
    if (cardIdx - CARD_PER_PAGE < 0) return;

    setCardIdx((idx) => idx - CARD_PER_PAGE);
  };

  const handleNextClick = () => {
    if (category === '스터디' && cardIdx + CARD_PER_PAGE >= studyLength) return;
    if (category === '학습자료' && cardIdx + CARD_PER_PAGE >= documentLength) return;

    setCardIdx((idx) => idx + CARD_PER_PAGE);
  };

  const handlePlusClick = () => {
    if (category === '스터디') {
      setIsCreateStudyModalOpen(true);
    } else if (category === '학습자료') {
      setIsCreateDocumentModalOpen(true);
    }
  };

  const handleCategoryChange = (tab: string) => {
    setCategory(tab);
    setCardIdx(0);
  };

  const handleInviteClick = () => {
    inviteTeam(params.teamId).then((res) => {
      if (res.ok) {
        navigator.clipboard.writeText(
          `${process.env.NEXT_PUBLIC_DEPLOY_URL}/team/${params.teamId}/join?code=${res.body.code}`,
        );
        alert('초대 링크가 복사되었습니다.');
      } else {
        alert('초대 링크 생성에 실패했습니다.');
      }
    });
  };

  return (
    <>
      <Flex direction="column" gap="8" w="100%" p="8">
        <Flex justify="space-between">
          <Title isTeam imageUrl={teamInfo?.imageUrl} name={teamInfo?.name} description={teamInfo?.description} />
          {/* TODO 팀원 목록, 초대링크 버튼 */}
          <Flex align="center" gap={{ base: '2', lg: '8' }}>
            <TeamMember teamId={params.teamId} />
            <Button
              color="white"
              bg="orange_dark"
              onClick={handleInviteClick}
              rightIcon={<BsLink45Deg size="24px" />}
              rounded="full"
              size="sm"
            >
              초대
            </Button>
          </Flex>
        </Flex>
        <TeamControlPanel teamInfo={teamInfo} />

        <Flex pos="relative" align="center" flex="1" gap="8">
          <Box pos="relative" overflow="hidden" w="100%" h={{ base: '250px', md: '300px', xl: '320px' }}>
            <Box pos="absolute" w="100%" h="100%">
              <Garden3D
                rotate
                rotateY={0}
                cubeGap={useBreakpointValue({ base: 3, xl: 4 }) || 3}
                cubeSize={useBreakpointValue({ base: 20, md: 26, xl: 30 }) || 20}
                garden={garden}
              />
            </Box>
          </Box>

          {/* TODO  진행도 */}
          <AttendanceRate attendanceRate={teamInfo?.attendanceRatio} />
        </Flex>

        <Flex direction="column" flex="1" gap="4">
          {/* TODO 스터디, 학습자료, 작물창고 버튼 */}
          <TabButton currentTab={category} changeTab={handleCategoryChange} categoryInfos={TEAM_CATEGORY_INFOS} />
          {category !== '작물창고' && (
            <NavigationButton
              handlePrevClick={handlePrevClick}
              handleNextClick={handleNextClick}
              handlePlusClick={handlePlusClick}
            />
          )}
          {/* TODO 전체보기, 네비게이션 이동 버튼 */}
          {/* TODO 스터디 카드 */}
          {category === '스터디' && <StudyGridView studyArray={studyArray} />}
          {category === '학습자료' && <DocumentGridView documentArray={documentArray} />}
        </Flex>
      </Flex>
      <StudyModal teamId={params.teamId} isOpen={isCreateStudyModalOpen} setIsModalOpen={setIsCreateStudyModalOpen} />
      <CreateDocumentModal
        isOpen={isCreateDocumentModalOoen}
        onClose={() => setIsCreateDocumentModalOpen(false)}
        teamId={params.teamId}
      />
    </>
  );
};

export default Page;
