'use client';

import { Flex, Grid, IconButton, Text, Link, Card } from '@chakra-ui/react';
import { useAtomValue } from 'jotai';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

import { getDocumentList } from '@/app/api/document';
import { getStudy, getStudyMembers } from '@/app/api/study';
import { myTeamAtom } from '@/atom';
import DocumentCard from '@/components/DocumentCard';
import Title from '@/components/Title';
import CurriculumCard from '@/containers/study/CurriculumCard';
import DeleteStudyModal from '@/containers/study/Modal/DeleteStudyModal';
import StudyModal from '@/containers/study/Modal/StudyModal';
import TerminateStudyModal from '@/containers/study/Modal/TerminateStudyModal';
import Participant from '@/containers/study/Participant';
import StudyControlPanel from '@/containers/study/StudyControlPanel';
import StudyInfoCard from '@/containers/study/StudyInfoCard';
import StudyParticipantMenu from '@/containers/study/StudyParticipantMenu';
import { useGetFetchWithToken } from '@/hooks/useFetchWithToken';
import useGetUser from '@/hooks/useGetUser';
import { DocumentList, ParticipantType, Study, StudyMember } from '@/types';

const Page = ({ params }: { params: { teamId: number; studyId: number } }) => {
  const [studyData, setStudyData] = useState<Study>();
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isTerminateModalOpen, setIsTerminateModalOpen] = useState<boolean>(false);
  const [documentArray, setDocumentArray] = useState<DocumentList[]>([]);

  const router = useRouter();
  const user = useGetUser();
  const myTeam = useAtomValue(myTeamAtom);
  if (user && !user.isLogin) router.replace(`/team/${params.teamId}`);
  if (user && !myTeam.some((id) => id === +params.teamId)) router.replace(`/team/${params.teamId}`);

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
    getStudy(params.studyId).then((data) => {
      setStudyData(data.body);
    });
    getDocumentList('studies', params.studyId, 0, 4).then((res) => {
      if (res.ok) {
        setDocumentArray(res.body.content);
      }
    });
  }, [params.studyId, isEditModalOpen]);

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
                endAt={new Date(studyData.endDate)}
              />
            </>
          )}
        </Flex>
        {studyData && studyData?.status !== 'ENDED' && user && user.memberId === studyData?.studyLeaderId && (
          <StudyControlPanel
            editModalOpen={setIsEditModalOpen}
            terminateModalOpen={setIsTerminateModalOpen}
            deleteModalOpen={setIsDeleteModalOpen}
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

            <Flex align="right" direction="column" rowGap="3" w="100%">
              <Link
                as={NextLink}
                gap="3"
                display="flex"
                w="fit-content"
                ml="auto"
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
              {documentArray && documentArray.length > 0 ? (
                <Grid gap="2" templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}>
                  {documentArray.map((data) => (
                    <DocumentCard
                      id={data.id}
                      key={data.title}
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
              {studyData && user && user.memberId === studyData.studyLeaderId && (
                <StudyParticipantMenu
                  studyId={params.studyId}
                  teamId={studyData?.teamReference.id}
                  leaderId={studyData?.studyLeaderId}
                  studyMembers={result || []}
                  refetchMembers={handleRefetchMembers}
                />
              )}
              <Participant participantInfos={participantData || []} />
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
    </>
  );
};

export default Page;
