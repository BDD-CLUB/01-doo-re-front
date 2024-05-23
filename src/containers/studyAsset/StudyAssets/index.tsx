'use client';

import { Flex, Grid } from '@chakra-ui/react';

import StudyAssetCard from '@/components/StudyAssetCard';
import studyAssetCardDataAll from '@/mocks/studyAssetCardAll';

const StudyAssets = () => {
  return (
    <Flex direction="column">
      <Grid gap={{ sm: '2', md: '4', xl: '8' }} templateColumns="repeat(4, 1fr)" w="100%">
        {studyAssetCardDataAll.map((data) => (
          <StudyAssetCard
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
  );
};

export default StudyAssets;
