import { Button, Flex } from '@chakra-ui/react';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

import { PageNavigatorProps } from './types';

const PageNavigator = ({ currentPage, setCurrentPage, componentLength, itemsPerPage }: PageNavigatorProps) => {
  const totalPages = Math.ceil(componentLength / itemsPerPage);
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage: number) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage: number) => Math.min(prevPage + 1, totalPages));
  };

  const currentTensDigit = Math.floor((currentPage - 1) / 10) * 10;
  return (
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
  );
};

export default PageNavigator;
