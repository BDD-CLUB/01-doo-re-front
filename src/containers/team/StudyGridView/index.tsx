import { Grid } from '@chakra-ui/react';

import StudyCard from '@/components/StudyCard';

import { StudyGridViewProps } from './types';

const StudyGridView = ({ studyArray }: StudyGridViewProps) => {
  return (
    <Grid gap="4" templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}>
      {studyArray.map((study) => {
        return (
          <StudyCard
            key={study.id}
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
        );
      })}
    </Grid>
  );
};

export default StudyGridView;
