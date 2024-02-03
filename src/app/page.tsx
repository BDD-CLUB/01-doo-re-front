'use client';

import StudyCard from '@/components/StudyCard';
import { Link } from '@chakra-ui/next-js';
import { Box } from '@chakra-ui/react';

const Page = () => {
  return (
    <Box px="20" py="20">
      <StudyCard />
      {/* <Link href="/about" color="blue.400" _hover={{ color: 'blue.500' }}>
        about
      </Link> */}
    </Box>
  );
};

export default Page;
