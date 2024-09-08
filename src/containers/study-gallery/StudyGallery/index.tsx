/* eslint-disable react-hooks/exhaustive-deps */
import { Flex, Grid, useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { getStudies } from '@/app/api/study';
import PageNavigator from '@/components/PageNavigator';
import StudyCard from '@/components/StudyCard';
import SuggestionCreate from '@/containers/team/SuggestionCreate';
import { StudyRank } from '@/types';

const StudyGallery = ({ teamId }: { teamId: number }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [studyArray, setStudyArray] = useState<StudyRank[]>([]);
  const [cardIdx, setCardIdx] = useState<number>(0);

  const [studyLength, setStudyLength] = useState<number>(0);

  const itemsPerPage = useBreakpointValue({ base: 4, md: 8, xl: 10 })!;

  useEffect(() => {
    getStudies(teamId, currentPage - 1, itemsPerPage).then((res) => {
      if (res.ok) {
        setStudyArray(res.body.content);
        setStudyLength(res.body.totalElements);
      }
    });
    setCardIdx((currentPage - 1) * itemsPerPage);
  }, [currentPage, itemsPerPage]);

  if (studyArray.length === 0) {
    return <SuggestionCreate category="스터디" />;
  }

  return (
    <Flex direction="column">
      <Grid gap={{ sm: '2', md: '4', xl: '8' }} templateColumns={`repeat(${itemsPerPage / 2}, 1fr)`} w="100%">
        {studyArray
          .map((study, index) => ({
            ...study.studyReferenceResponse,
            rank: cardIdx + index + 1,
          }))
          .map((study) => (
            <StudyCard
              key={study.id}
              teamId={teamId}
              id={study.id}
              name={study.name}
              description={study.description}
              startDate={study.startDate}
              endDate={study.endDate}
              status={study.status}
              cropId={study.cropId}
              studyProgressRatio={study.studyProgressRatio}
              rank={study.rank}
            />
          ))}
      </Grid>
      <PageNavigator
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        componentLength={studyLength}
        itemsPerPage={itemsPerPage}
      />
    </Flex>
  );
};

export default StudyGallery;
