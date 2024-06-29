'use client';

import { Flex, Grid, IconButton, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useState } from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

import StudyAssetCard from '@/components/StudyAssetCard';
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
import studyAssetCardData from '@/mocks/studyAssetCard';
import studyCardData from '@/mocks/studyCard';

const sampleStudy = studyCardData[0];

const Page = ({ params }: { params: { studyId: number } }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isTerminateModalOpen, setIsTerminateModalOpen] = useState<boolean>(false);

  return (
    <>
      <Flex direction="column" gap="0" w="100%" p="8">
        <Flex justify="space-between" w="100%">
          <Title name={sampleStudy.name} description={sampleStudy.description} />
          <StudyInfoCard
            progress={sampleStudy.percent}
            startAt={new Date(sampleStudy.startDate)}
            endAt={new Date(sampleStudy.endDate)}
          />
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
              <Link as={NextLink} gap="3" display="flex" w="fit-content" ml="auto" href="/team/1/study/1/asset">
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
                {studyAssetCardData.map((data) => (
                  <StudyAssetCard
                    id={data.id}
                    key={data.title}
                    title={data.title}
                    content={data.content}
                    date={data.date}
                    bookmark={data.bookmark}
                    img={data.img}
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
      <StudyModal studyId={params.studyId} isOpen={isEditModalOpen} setIsModalOpen={setIsEditModalOpen} />
      <TerminateStudyModal
        studyName={sampleStudy.name}
        isOpen={isTerminateModalOpen}
        setIsOpen={setIsTerminateModalOpen}
      />
      <DeleteStudyModal studyName={sampleStudy.name} isOpen={isDeleteModalOpen} setIsOpen={setIsDeleteModalOpen} />
    </>
  );
};

export default Page;
