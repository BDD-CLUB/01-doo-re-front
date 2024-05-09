import { Button, Flex, Grid } from '@chakra-ui/react';

import StudyAssetCard from '@/components/StudyAssetCard';
import studyAssetCardDataAll from '@/mocks/studyAssetCardAll';

const Page = () => {
  return (
    <Flex align="center" direction="column" gap="9" w="100%" p="8">
      <Flex justify="space-between" w="100%">
        <Grid>열사모 | 홍당무 스터디 | 학습자료 갤러리</Grid>
        <Button>자료 등록</Button>
      </Flex>
      <Grid
        gap={{ sm: '2', md: '4', xl: '8' }}
        templateColumns={{ sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', xl: 'repeat(5, 1fr)' }}
        w="100%"
      >
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

export default Page;
