import { Card, Flex, Text } from '@chakra-ui/react';

import StudyProgress from '@/containers/study/StudyInfoCard/StudyProgress';
import { StudyInfoCardProps } from '@/containers/study/StudyInfoCard/types';
import dateFormat from '@/utils/dateFormat';

const StudyInfoCard = ({ progress, startAt, endAt }: StudyInfoCardProps) => {
  if (progress < 0 || progress > 100) throw new Error('progress는 0~100 사이여야 합니다.');

  return (
    <Card p="4" bg="white" borderRadius="lg">
      <Flex columnGap="4" fontWeight="bold">
        <Text>스터디 진행률</Text>
        <StudyProgress progress={progress} />
        <Text ml="auto">스터디 기간</Text>
        <Text>
          {dateFormat(startAt, '/')} - {dateFormat(endAt, '/')}
        </Text>
      </Flex>
    </Card>
  );
};

export default StudyInfoCard;
