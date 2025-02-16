'use client';

import { Flex, Grid, IconButton, Text, Link, Card } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

import { getDocumentList } from '@/app/api/document';
import { getStudy, getStudyMembers } from '@/app/api/study';
import { useGetTeamInfoQuery } from '@/app/api/team';
import DocumentCard from '@/components/DocumentCard';
import Title from '@/components/Title';
import CreateDocumentModal from '@/containers/study/CreateDocumentModal';
import { CreateDocument } from '@/containers/study/CreateDocumentModal/type';
import CurriculumCard from '@/containers/study/CurriculumCard';
import DeleteStudyModal from '@/containers/study/Modal/DeleteStudyModal';
import LeaveStudyModal from '@/containers/study/Modal/LeaveStudyModal';
import StudyModal from '@/containers/study/Modal/StudyModal';
import TerminateStudyModal from '@/containers/study/Modal/TerminateStudyModal';
import Participant from '@/containers/study/Participant';
import StudyControlPanel from '@/containers/study/StudyControlPanel';
import StudyInfoCard from '@/containers/study/StudyInfoCard';
import StudyParticipantMenu from '@/containers/study/StudyParticipantMenu';
import { useGetFetchWithToken } from '@/hooks/useFetchWithToken';
import useGetMyTeam from '@/hooks/useGetMyTeam';
import useGetUser from '@/hooks/useGetUser';
import { DocumentList, ParticipantType, Study, StudyMember } from '@/types';

const Page = ({ params }: { params: { teamId: number; studyId: number } }) => {
  const { data: teamInfo } = useGetTeamInfoQuery(params.teamId);
  const [studyData, setStudyData] = useState<Study>();
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isTerminateModalOpen, setIsTerminateModalOpen] = useState<boolean>(false);
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState<boolean>(false);
  const [documentArray, setDocumentArray] = useState<DocumentList[]>([]);
  const [isCreateDocumentModalOpen, setIsCreateDocumentModalOpen] = useState<boolean>(false);
  const categoryData: CreateDocument = { groupId: params.studyId, groupType: 'studies' };

  const router = useRouter();
  const user = useGetUser();
  const myTeam = useGetMyTeam();
  const [isTeamLeader, setIsTeamLeader] = useState<boolean>(false);
  const [isStudyLeader, setIsStudyLeader] = useState<boolean>(false);
  if (user && !user.isLogin) router.replace(`/team/${params.teamId}`);
  if (myTeam && !myTeam.some((id) => id === +params.teamId)) router.replace(`/team/${params.teamId}`);

  const { result, refetch: refetchStudyMembers } = useGetFetchWithToken(getStudyMembers, [params?.studyId]);

  const participantData = result?.map(
    (data: StudyMember) =>
      ({
        id: data.memberId,
        name: data.name,
        status: data.memberId === studyData?.studyLeaderId ? '스터디장' : '스터디원',
        profileImg: data.imageUrl,
      }) as ParticipantType,
  );

  useEffect(() => {
    if (!user || !teamInfo) return;
    setIsTeamLeader(user.memberId === teamInfo.body.teamLeaderId);
  }, [user, teamInfo, result]);

  useEffect(() => {
    if (!user || !studyData) return;
    setIsStudyLeader(user.memberId === studyData.studyLeaderId);
  }, [user, studyData, result]);

  useEffect(() => {
    getStudy(params.studyId).then((data) => {
      setStudyData(data.body);
    });
    getDocumentList('studies', params.studyId, 0, 4).then((res) => {
      if (res.ok) {
        setDocumentArray(res.body.content);
      }
    });
  }, [params.studyId, isEditModalOpen, isCreateDocumentModalOpen]);

  useEffect(() => {
    if (!isTerminateModalOpen) {
      getStudy(params.studyId).then((data) => {
        setStudyData(data.body);
      });
    }
  }, [params.studyId, isTerminateModalOpen]);

  const handleRefetchMembers = () => {
    getStudy(params.studyId).then((data) => {
      setStudyData(data.body);
    });
    refetchStudyMembers();
  };

  return (
    <>
      <Flex direction="column" gap="0" w="100%" p="8">
        <Flex justify="space-between" w="100%">
          {studyData && (
            <>
              <Title name={studyData.name} description={studyData.description} />
              <StudyInfoCard
                status={studyData.status}
                progress={studyData.studyProgressRatio}
                startAt={new Date(studyData.startDate)}
                endAt={studyData.endDate ? new Date(studyData.endDate) : null}
              />
            </>
          )}
        </Flex>
        {studyData && studyData?.status !== 'ENDED' && user && (
          <StudyControlPanel
            isStudyLeader={user.memberId === studyData.studyLeaderId}
            isStudyMember={result?.some((data: { memberId: number }) => data.memberId === user.memberId)}
            editModalOpen={setIsEditModalOpen}
            terminateModalOpen={setIsTerminateModalOpen}
            deleteModalOpen={setIsDeleteModalOpen}
            leaveModalOpen={setIsLeaveModalOpen}
          />
        )}
        <Grid gap="4" templateColumns={{ base: '', xl: '2fr 1fr' }} w="100%" my="4">
          <Flex direction="column" rowGap={{ base: '6', '2xl': '12' }}>
            {studyData && user && user.memberId !== -1 && (
              <CurriculumCard
                cropId={studyData.cropId}
                studyProgressRatio={studyData.studyProgressRatio}
                isStudyLeader={user.memberId === studyData.studyLeaderId}
              />
            )}

            <Flex direction="column" rowGap="3" w="100%">
              <Flex align="center" justify="space-between">
                <Link
                  as={NextLink}
                  gap="3"
                  display="flex"
                  w="fit-content"
                  href={`/team/${params.teamId}/study/${params.studyId}/document`}
                >
                  <IconButton
                    fontSize="16px"
                    aria-label=""
                    icon={<MdOutlineArrowForwardIos />}
                    isRound
                    size="icon_sm"
                    variant="icon_orange"
                  />
                  <Text>전체 보기</Text>
                </Link>
                {participantData && (
                  <IconButton
                    shadow="base"
                    aria-label=""
                    icon={<BsPlus />}
                    onClick={() => setIsCreateDocumentModalOpen(true)}
                    size="icon_md"
                    variant="icon_orange_dark"
                  />
                )}
              </Flex>
              {documentArray && documentArray.length > 0 ? (
                <Grid gap="2" templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}>
                  {documentArray.map((data) => (
                    <DocumentCard
                      id={data.id}
                      key={data.id}
                      title={data.title}
                      description={data.description}
                      date={data.date}
                      uploaderName={data.uploaderName}
                      setReload={() => {}}
                      files={data.files}
                      type={data.type}
                    />
                  ))}
                </Grid>
              ) : (
                <Card alignItems="center" justifyContent="center" w="100%" p="8" borderRadius={{ base: '2xl' }}>
                  <Text textStyle="lg">학습 자료가 존재하지 않습니다.</Text>
                </Card>
              )}
            </Flex>
          </Flex>
          <Flex direction="column" rowGap={{ base: '6', '2xl': '12' }}>
            {/* <Feed /> */}
            <Flex align="right" direction="column" rowGap="3">
              {studyData && user && (isTeamLeader || isStudyLeader) && (
                <StudyParticipantMenu
                  studyId={params.studyId}
                  teamId={studyData?.teamReference.id}
                  leaderId={studyData?.studyLeaderId}
                  isTeamLeader={isTeamLeader}
                  studyMembers={result || []}
                  refetchMembers={handleRefetchMembers}
                />
              )}
              {participantData && <Participant participantInfos={participantData} />}
            </Flex>
          </Flex>
        </Grid>
      </Flex>
      <StudyModal
        studyId={params.studyId}
        studyInfo={studyData || null}
        isOpen={isEditModalOpen}
        setIsModalOpen={setIsEditModalOpen}
      />
      <TerminateStudyModal
        id={params.studyId}
        name={studyData?.name || ''}
        isOpen={isTerminateModalOpen}
        setIsOpen={setIsTerminateModalOpen}
      />
      <DeleteStudyModal
        id={params.studyId}
        teamId={params.teamId}
        name={studyData?.name || ''}
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
      />
      <LeaveStudyModal
        id={params.studyId}
        name={studyData?.name || ''}
        teamId={params.teamId}
        isOpen={isLeaveModalOpen}
        setIsOpen={setIsLeaveModalOpen}
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
