'use client';

import { Flex, Grid, IconButton, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

import { getDocumentList } from '@/app/api/document';
import { getStudy } from '@/app/api/study';
import DocumentCard from '@/components/DocumentCard';
import Title from '@/components/Title';
import CurriculumCard from '@/containers/study/CurriculumCard';
import Feed from '@/containers/study/Feed';
import DeleteStudyModal from '@/containers/study/Modal/DeleteStudyModal';
import StudyModal from '@/containers/study/Modal/StudyModal';
import TerminateStudyModal from '@/containers/study/Modal/TerminateStudyModal';
import Participant from '@/containers/study/Participant';
import StudyControlPanel from '@/containers/study/StudyControlPanel';
import StudyInfoCard from '@/containers/study/StudyInfoCard';
import participantData from '@/mocks/participant';
import { DocumentList, Study } from '@/types';

const Page = ({ params }: { params: { teamId: number; studyId: number } }) => {
  const [studyData, setStudyData] = useState<Study>();
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isTerminateModalOpen, setIsTerminateModalOpen] = useState<boolean>(false);
  const [documentArray, setDocumentArray] = useState<DocumentList[]>([]);

  useEffect(() => {
    getStudy(params.studyId).then((data) => {
      setStudyData(data.body);
    });
    getDocumentList('studies', params.studyId, 0, 8).then((res) => {
      if (res.ok) {
        setDocumentArray(res.body.content);
      }
    });
  }, [params.studyId]);

  return (
    <>
      <Flex direction="column" gap="0" w="100%" p="8">
        <Flex justify="space-between" w="100%">
          {studyData && (
            <>
              <Title name={studyData.name} description={studyData.description} />
              <StudyInfoCard
                progress={studyData.studyProgressRatio}
                startAt={new Date(studyData.startDate)}
                endAt={new Date(studyData.endDate)}
              />
            </>
          )}
        </Flex>
        <StudyControlPanel
          editModalOpen={setIsEditModalOpen}
          terminateModalOpen={setIsTerminateModalOpen}
          deleteModalOpen={setIsDeleteModalOpen}
        />
        <Grid gap="4" templateColumns={{ base: '', xl: '2fr 1fr' }} w="100%">
          <Flex direction="column" rowGap={{ base: '6', '2xl': '12' }}>
            <CurriculumCard />
            <Flex align="right" direction="column" rowGap="3">
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
              <Grid gap="2" templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}>
                {documentArray.map((data) => (
                  <DocumentCard
                    id={data.id}
                    key={data.title}
                    title={data.title}
                    description={data.description}
                    date={data.date}
                    uploaderName={data.uploaderName}
                  />
                ))}
              </Grid>
            </Flex>
          </Flex>
          <Flex direction="column" rowGap={{ base: '6', '2xl': '12' }}>
            <Feed />
            <Participant participantInfos={participantData} />
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
        name={studyData?.name || ''}
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
      />
    </>
  );
};

export default Page;
