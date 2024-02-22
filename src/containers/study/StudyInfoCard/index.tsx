import { Card, Flex, Text } from '@chakra-ui/react';

import StudyProgress from '@/containers/study/StudyInfoCard/StudyProgress';
import { StudyInfoCardProps } from '@/containers/study/StudyInfoCard/types';

const dateFormat = (date: Date) => {
  const year = String(date.getFullYear()).padStart(4, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
};

const StudyInfoCard = ({ progress, startAt, endAt }: StudyInfoCardProps) => {
  if (progress < 0 || progress > 100) throw new Error('progress는 0~100 사이여야 합니다.');

  return (
    <Card p="4" bg="white" borderRadius="lg">
      <Flex columnGap="4" fontWeight="bold">
        <Text>스터디 진행률</Text>
        <StudyProgress progress={progress} />
        <Text ml="auto">스터디 기간</Text>
        <Text>
          {dateFormat(startAt)} - {dateFormat(endAt)}
        </Text>
      </Flex>
    </Card>
  );
};

export default StudyInfoCard;
