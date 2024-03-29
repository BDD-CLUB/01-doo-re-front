import { TeamRankInfoType } from '@/types';

import { gardenInfos1, gardenInfos2, gardenInfos3, userInfos } from './Garden3D';

const teamRankInfos: TeamRankInfoType[] = [
  {
    id: 1,
    idx: 0,
    rank: 1,
    name: '부산회',
    description:
      '안녕하십니까, 부산 시민 여러분. 오늘도 평안한 날을 지내시고 계신지요. 이 화창한 날 한번 바깥 구경도 해보고, 음냐링... 그냥 긴 문자열 만들어야하는데... 어떻게 하면 길게 적을 수 있을까.. 고민이된다.. 이정도면 긴 문자열로 처리가 되겠지? 약간만 더 적어보자!! 하하 잠자고 싶어ㅠㅠ',
    url: '/team/1',
    gardenInfos: userInfos,
  },
  {
    id: 2,
    idx: 1,
    rank: 2,
    name: '열사모',
    description: '안녕하세요. 열정을 사랑하는 사람들의 모입에 오신 것을 환영합니다 :)',
    url: '/team/1',
    gardenInfos: gardenInfos1,
  },
  {
    id: 3,
    idx: 2,
    rank: 3,
    name: '청명회',
    description: '화산의 검이 재현하려는 것은 매화가 아니다. 바로 ‘피어남’ 이다.',
    url: '/team/1',
    gardenInfos: gardenInfos2,
  },
  { id: 4, idx: 3, rank: 4, name: 'AJR', description: '', url: '/team/1', gardenInfos: gardenInfos3 },
  {
    id: 5,
    idx: 4,
    rank: 5,
    name: '캐럿',
    description: '대한민국의 13인조 보이그룹 세븐틴의 공식 팬클럽',
    url: '/team/1',
    gardenInfos: userInfos,
  },
  {
    id: 6,
    idx: 5,
    rank: 6,
    name: '어린 왕자',
    description:
      '어린 왕자는 프랑스 공군 비행사이자 작가인 앙투안 드 생텍쥐페리(Antoine de Saint-Exupéry)가 1943년 발표한 소설이다. 또한 동시에 생텍쥐페리의 유작이기도 하다.',
    url: '/team/1',
    gardenInfos: gardenInfos1,
  },
  {
    id: 7,
    idx: 6,
    rank: 7,
    name: '멜로디',
    description: '음의 높낮이의 변화가 리듬과 연결되어 흐르는 것.',
    url: '/team/1',
    gardenInfos: gardenInfos2,
  },
  {
    id: 8,
    idx: 7,
    rank: 8,
    name: '네버랜드',
    description: '피터팬 속 상상의 공간 네버랜드에 사는 사람들은 변하지 않고 영원히 아이로 살 수 있는데',
    url: '/team/1',
    gardenInfos: gardenInfos3,
  },
  {
    id: 9,
    idx: 8,
    rank: 9,
    name: 'BLINK',
    description: '시작과 끝을 함께하자',
    url: '/team/1',
    gardenInfos: userInfos,
  },
  { id: 10, idx: 9, rank: 10, name: 'John K', description: '', url: '/team/1', gardenInfos: gardenInfos1 },
];

export default teamRankInfos;
