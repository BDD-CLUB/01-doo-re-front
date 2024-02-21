import { StudyCardProps } from '@/components/StudyCard/types';

const studyCardData: StudyCardProps[] = [
  {
    name: '홍당무 스터디',
    description: '함께 홍당무를 심고 수확까지 합니다.',
    startDate: '2024/01/01',
    endDate: '2024/01/31',
    cropId: 1,
    percent: 80,
    rank: 1,
  },
  {
    name: '고구마 스터디',
    description: '함께 고구마를 심고 수확까지 합니다.',
    startDate: '2024/01/01',
    endDate: '2024/01/31',
    cropId: 2,
    percent: 40,
    rank: 2,
  },
  {
    name: '완두콩 스터디',
    description: '함께 완두콩을 심고 수확까지 합니다.',
    startDate: '2024/01/01',
    endDate: '2024/01/31',
    cropId: 3,
    percent: 50,
    rank: 3,
  },
  {
    name: '당근 스터디',
    description: '함께 당근 심고 수확까지 합니다.',
    startDate: '2024/01/01',
    endDate: '2024/01/31',
    cropId: 4,
    percent: 50,
    rank: 4,
  },
];

export default studyCardData;
