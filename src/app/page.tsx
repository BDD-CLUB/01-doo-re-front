'use client';

import { Link } from '@chakra-ui/next-js';
import { Box } from '@chakra-ui/react';
import StudyCard from '@/components/StudyCard';
import { studyCardData } from '@/mocks/study';

const Page = () => {
  return (
    <Box m="20">
      <StudyCard
        name={studyCardData.name}
        description={studyCardData.description}
        startDate={studyCardData.startDate}
        endDate={studyCardData.endDate}
        cropId={studyCardData.cropId}
        percent={studyCardData.percent}
      />
    </Box>
  );
};

export default Page;
