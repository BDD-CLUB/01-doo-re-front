'use client';

import { Flex, Grid, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';

import DocumentCard from '@/components/DocumentCard';
import PageNavigator from '@/components/PageNavigator';
import documentCardDataAll from '@/mocks/documentCardAll';

const Documents = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = useBreakpointValue({ base: 4, md: 8, xl: 10 })!;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const currentData = documentCardDataAll.slice(startIndex, endIndex);
  return (
    <Flex direction="column">
      <Grid gap={{ sm: '2', md: '4', xl: '8' }} templateColumns={`repeat(${itemsPerPage / 2}, 1fr)`} w="100%">
        {currentData.map((data) => (
          <DocumentCard
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
      <PageNavigator
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        componentLength={documentCardDataAll.length}
        itemsPerPage={itemsPerPage}
      />
    </Flex>
  );
};

export default Documents;
