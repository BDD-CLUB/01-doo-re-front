'use client';

import { Flex, Grid, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';

import PageNavigator from '@/components/PageNavigator';
import StudyAssetCard from '@/components/StudyAssetCard';
import studyAssetCardDataAll from '@/mocks/studyAssetCardAll';

const StudyAssets = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = useBreakpointValue({ base: 4, md: 8, xl: 10 })!;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const currentData = studyAssetCardDataAll.slice(startIndex, endIndex);
  return (
    <Flex direction="column">
      <Grid gap={{ sm: '2', md: '4', xl: '8' }} templateColumns={`repeat(${itemsPerPage / 2}, 1fr)`} w="100%">
        {currentData.map((data) => (
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
      <PageNavigator
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        studyAssetCardDataAll={studyAssetCardDataAll}
        itemsPerPage={itemsPerPage}
      />
    </Flex>
  );
};

export default StudyAssets;
