'use client';

import { Button, Flex, Grid, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

import StudyAssetCard from '@/components/StudyAssetCard';
import studyAssetCardDataAll from '@/mocks/studyAssetCardAll';

const StudyAssets = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = useBreakpointValue({ base: 4, md: 8, xl: 10 })!;

  const totalPages = Math.ceil(studyAssetCardDataAll.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const currentData = studyAssetCardDataAll.slice(startIndex, endIndex);

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const currentTensDigit = Math.floor((currentPage - 1) / 10) * 10;
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
      <Flex align="center" justify="center" mt="4">
        <Button
          mr="2"
          bgColor="transparent"
          disabled={currentPage === 1}
          leftIcon={<BiChevronLeft />}
          onClick={goToPreviousPage}
          rounded="xl"
        />
        {Array.from({ length: Math.min(totalPages - currentTensDigit, 10) }, (_, index) => {
          const pageNumber = currentTensDigit + index + 1;
          return (
            <Button
              key={pageNumber}
              mr="2"
              shadow={currentPage === pageNumber ? 'md' : 'none'}
              bgColor={currentPage === pageNumber ? 'white' : 'transparent'}
              onClick={() => goToPage(pageNumber)}
              rounded="xl"
            >
              {pageNumber}
            </Button>
          );
        })}
        <Button
          mr="2"
          bgColor="transparent"
          disabled={currentPage === totalPages}
          onClick={goToNextPage}
          rightIcon={<BiChevronRight />}
          rounded="xl"
        />
      </Flex>
    </Flex>
  );
};

export default StudyAssets;
