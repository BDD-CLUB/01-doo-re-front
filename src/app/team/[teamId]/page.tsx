/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { Box, Button, Flex, useBreakpointValue } from '@chakra-ui/react';
import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { BsLink45Deg } from 'react-icons/bs';

import { getDocumentList } from '@/app/api/document';
import { getGarden } from '@/app/api/garden';
import { getStudies } from '@/app/api/study';
import { postInviteTeam, useGetTeamInfoQuery } from '@/app/api/team';
import { myTeamAtom } from '@/atom';
import Garden3D from '@/components/Garden3D';
import TabButton from '@/components/TabButton';
import Title from '@/components/Title';
import { CARD_PER_PAGE, TEAM_CATEGORY_INFOS } from '@/constants/team';
import CreateDocumentModal from '@/containers/study/CreateDocumentModal';
import { CreateDocument } from '@/containers/study/CreateDocumentModal/type';
import StudyModal from '@/containers/study/Modal/StudyModal';
import AttendanceRate from '@/containers/team/AttendanceRate';
import DocumentGridView from '@/containers/team/DocumentGridView';
import NavigationButton from '@/containers/team/NavigationButton';
import StudyGridView from '@/containers/team/StudyGridView';
import SuggestionCreate from '@/containers/team/SuggestionCreate';
import TeamControlPanel from '@/containers/team/TeamControlPanel';
import TeamMember from '@/containers/team/teamMember';
import { useMutateWithToken } from '@/hooks/useFetchWithToken';
import useGetUser from '@/hooks/useGetUser';
import { DocumentList, Garden, StudyRank } from '@/types';

const Page = ({ params }: { params: { teamId: number } }) => {
  const { data: teamInfo } = useGetTeamInfoQuery(params.teamId);
  const [garden, setGarden] = useState<Garden[]>([]);
  const [category, setCategory] = useState<string>(TEAM_CATEGORY_INFOS[0].name);
  const [cardIdx, setCardIdx] = useState<number>(0);
  const [studyArray, setStudyArray] = useState<StudyRank[]>([]);
  const [documentArray, setDocumentArray] = useState<DocumentList[]>([]);
  const [documentLength, setDocumentLength] = useState<number>(0);
  const [isCreateStudyModalOpen, setIsCreateStudyModalOpen] = useState<boolean>(false);
  const [isCreateDocumentModalOpen, setIsCreateDocumentModalOpen] = useState<boolean>(false);

  const inviteTeam = useMutateWithToken(postInviteTeam);
  const categoryData: CreateDocument = { groupId: params.teamId, groupType: 'teams' };

  const getCardData = (start: number) => {
    if (category === '스터디') {
      const page = Math.floor(start / CARD_PER_PAGE);
      const size = CARD_PER_PAGE;

      getStudies(params.teamId, page, size).then((res) => {
        if (res.ok) {
          setStudyArray(res.body.content);
        }
      });
    } else if (category === '학습자료') {
      const page = Math.floor(start / CARD_PER_PAGE);
      const size = CARD_PER_PAGE;

      getDocumentList('teams', params.teamId, page, size).then((res) => {
        if (res.ok) {
          setDocumentArray(res.body.content);
          setDocumentLength(res.body.totalElements);
        }
      });
    }
  };

  useEffect(() => {
    getGarden(params.teamId).then((res) => {
      setGarden(res.body);
    });
    TEAM_CATEGORY_INFOS[0].page = `/team/${params.teamId}/study-gallery`;
    TEAM_CATEGORY_INFOS[1].page = `/team/${params.teamId}/document`;
  }, []);

  useEffect(() => {
    getCardData(0);
  }, [category]);

  useEffect(() => {
    if (isCreateDocumentModalOpen === false) {
      getCardData(cardIdx);
    }
  }, [isCreateDocumentModalOpen]);

  useEffect(() => {
    if (isCreateStudyModalOpen === false) {
      getCardData(cardIdx);
    }
  }, [isCreateStudyModalOpen]);

  const handlePrevClick = () => {
    if (cardIdx - CARD_PER_PAGE < 0) return;

    getCardData(cardIdx - CARD_PER_PAGE);
    setCardIdx((idx) => idx - CARD_PER_PAGE);
  };

  const handleNextClick = () => {
    if (category === '스터디') {
      const nextPage = Math.floor((cardIdx + CARD_PER_PAGE) / CARD_PER_PAGE);
      const size = CARD_PER_PAGE;

      getStudies(params.teamId, nextPage, size).then((res) => {
        if (res.ok) {
          if (res.body.content.length > 0) {
            setStudyArray(res.body.content);
            setCardIdx((idx) => idx + CARD_PER_PAGE);
          }
        }
      });
    } else if (category === '학습자료') {
      if (cardIdx + CARD_PER_PAGE >= documentLength) return;

      const nextPage = Math.floor((cardIdx + CARD_PER_PAGE) / CARD_PER_PAGE);
      const size = CARD_PER_PAGE;

      getDocumentList('teams', params.teamId, nextPage, size).then((res) => {
        if (res.ok) {
          setDocumentArray(res.body.content);
          setDocumentLength(res.body.totalElements);
          setCardIdx((idx) => idx + CARD_PER_PAGE);
        }
      });
    }
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

  const myTeam = useAtomValue(myTeamAtom);
  const user = useGetUser();
  const [isTeamLeader, setIsTeamLeader] = useState<boolean>(false);
  const [isMyTeam, setIsMyTeam] = useState<boolean>(false);

  useEffect(() => {
    if (!user || !teamInfo) return;
    setIsTeamLeader(user.memberId === teamInfo.body.teamLeaderId);
  }, [user, teamInfo]);

  useEffect(() => {
    if (myTeam !== undefined) {
      const res = myTeam.filter((teamId) => teamId === Number(params.teamId));
      setIsMyTeam(res.length === 1);
    }
  }, [myTeam, params.teamId]);

  return (
    <>
      <Flex direction="column" gap="8" w="100%" p="8">
        <Flex justify="space-between">
          <Title
            isTeam
            imageUrl={teamInfo?.body.imageUrl}
            name={teamInfo?.body.name}
            description={teamInfo?.body.description}
          />
          {isMyTeam && (
            <Flex align="center" gap={{ base: '2', lg: '8' }}>
              <TeamMember teamId={params.teamId} teamName={teamInfo?.body.name} />
              {isTeamLeader && (
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
              )}
            </Flex>
          )}
        </Flex>
        {isTeamLeader && <TeamControlPanel teamInfo={teamInfo?.body} />}

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
          <AttendanceRate attendanceRate={teamInfo?.body.attendanceRatio} />
        </Flex>

        <Flex direction="column" flex="1" gap="4">
          <TabButton currentTab={category} changeTab={handleCategoryChange} categoryInfos={TEAM_CATEGORY_INFOS} />
          {category !== '작물창고' && (
            <NavigationButton
              handlePrevClick={handlePrevClick}
              handleNextClick={handleNextClick}
              handlePlusClick={handlePlusClick}
              isMyTeam={isMyTeam}
            />
          )}
          {category === '스터디' && studyArray.length === 0 && <SuggestionCreate category="스터디" />}
          {category === '스터디' && studyArray.length !== 0 && (
            <StudyGridView
              studyArray={studyArray.map((study, index) => ({
                ...study.studyReferenceResponse,
                rank: cardIdx + index + 1,
              }))}
              teamId={params.teamId}
            />
          )}
          {category === '학습자료' && documentArray.length === 0 && <SuggestionCreate category="학습자료" />}
          {category === '학습자료' && <DocumentGridView documentArray={documentArray} />}
        </Flex>
      </Flex>
      <StudyModal
        teamId={params.teamId}
        isOpen={isCreateStudyModalOpen}
        setIsModalOpen={setIsCreateStudyModalOpen}
        studyInfo={null}
      />
      <CreateDocumentModal
        isOpen={isCreateDocumentModalOpen}
        onClose={() => setIsCreateDocumentModalOpen(false)}
        categoryData={categoryData}
        category="create"
      />
    </>
  );
};

export default Page;
