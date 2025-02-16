import { Card, Flex, Text } from '@chakra-ui/react';

import StudyProgress from '@/containers/study/StudyInfoCard/StudyProgress';
import { StudyInfoCardProps } from '@/containers/study/StudyInfoCard/types';
import dateFormat from '@/utils/dateFormat';

const StudyInfoCard = ({ progress, startAt, endAt, status }: StudyInfoCardProps) => {
  if (progress < 0 || progress > 100) throw new Error('progress는 0~100 사이여야 합니다.');

  return (
    <Card p="4" bg="white" borderRadius="lg">
      <Flex columnGap="4" fontWeight="bold">
        {status === 'ENDED' ? (
          <Text color="orange"> {' 종료된 스터디 입니다. '} </Text>
        ) : (
          <>
            <Text display={{ base: 'none', '2xl': 'block' }}>스터디 진행률</Text>
            <StudyProgress progress={progress} />
          </>
        )}

        <Text display={{ base: 'none', '2xl': 'block' }} ml="auto">
          스터디 기간
        </Text>
        <Text display={{ base: 'none', md: 'block' }}>
          {dateFormat(startAt, '/')} - {endAt ? dateFormat(endAt, '/') : ''}
        </Text>
      </Flex>
    </Card>
  );
};

export default StudyInfoCard;
