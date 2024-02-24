import { StudyCardProps } from '@/components/StudyCard/types';

const studyCardData: StudyCardProps[] = [
  {
    id: 1,
    name: '홍당무 스터디',
    description: '함께 홍당무를 심고 수확까지 합니다.',
    startDate: '2024/01/01',
    endDate: '2024/01/31',
    status: 'IN_PROGRESS',
    isDeleted: false,
    cropId: 1,
    teamId: 1,
    percent: 80,
  },
  {
    id: 2,
    name: '고구마 스터디',
    description: '함께 고구마를 심고 수확까지 합니다.',
    startDate: '2024/01/01',
    endDate: '2024/01/31',
    status: 'IN_PROGRESS',
    isDeleted: false,
    cropId: 2,
    teamId: 2,
    percent: 40,
  },
  {
    id: 3,
    name: '완두콩 스터디',
    description: '함께 완두콩을 심고 수확까지 합니다.',
    startDate: '2024/01/01',
    endDate: '2024/01/31',
    status: 'IN_PROGRESS',
    isDeleted: false,
    cropId: 3,
    teamId: 3,
    percent: 50,
  },
  {
    id: 4,
    name: '당근 스터디',
    description: '함께 당근 심고 수확까지 합니다.',
    startDate: '2024/01/01',
    endDate: '2024/01/31',
    status: 'IN_PROGRESS',
    isDeleted: false,
    cropId: 4,
    teamId: 4,
    percent: 50,
  },
];

export default studyCardData;
