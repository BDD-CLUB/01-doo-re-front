'use client';

import StudyCard from '@/components/StudyCard';
import { Link } from '@chakra-ui/next-js';

const Page = () => {
  const studyCardData = {
    title: '자료이름1',
    content: '이번 포스팅은 [스터디 목적]에 관한것입니다. 먼저 [목차]는 이렇습니다.',
    date: '2024/01/01',
    bookmark: 1208,
  };
  return (
    <>
      <StudyCard
        title={studyCardData.title}
        content={studyCardData.content}
        date={studyCardData.date}
        bookmark={studyCardData.bookmark}
      />
      <Link href="/about" color="blue.400" _hover={{ color: 'blue.500' }}>
        About
      </Link>
    </>
  );
};

export default Page;
