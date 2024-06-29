'use client';

import { Box, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';

import 'swiper/css';

import { getTeams } from '@/app/api/team';
import { TeamRank } from '@/types';

import TeamCard from '../TeamCard';

const TeamRankSlider = () => {
  const [teamRank, setTeamRank] = useState<TeamRank[]>([]);
  const [swiperIndex, setSwiperIndex] = useState<number>(0);
  const [swiper, setSwiper] = useState<SwiperClass>();
  const router = useRouter();

  const slideOnClick = (idx: number, teamId: number) => {
    if (swiper?.activeIndex === idx) {
      router.push(`/team/${teamId}`);
    } else {
      swiper?.slideTo(idx);
    }
  };

  useEffect(() => {
    getTeams().then((res) => {
      const teams = res.body.slice(0, 10).map((team: TeamRank, idx: number) => {
        return { ...team, rank: idx + 1 };
      });
      setTeamRank(teams);
    });
  }, []);

  return (
    <Flex align="center" direction="column" w="100%">
      <Box w="100%">
        <Swiper
          centeredSlides
          slidesPerView="auto"
          spaceBetween={100}
          onSwiper={(e) => setSwiper(e)}
          onSlideChange={(e) => setSwiperIndex(e.activeIndex)}
        >
          {teamRank.map((team, _) => (
            <SwiperSlide key={team.teamReferenceResponse.id} style={{ width: 'fit-content' }}>
              <Box
                overflow="hidden"
                w={{ base: '450px', lg: '600px', '2xl': '720px' }}
                h={{ base: '300px', lg: '360px', '2xl': '430px' }}
                bg="rgba(255, 255, 255, 0.1)"
                borderRadius="30"
                onClick={() => slideOnClick(_, team.teamReferenceResponse.id)}
              >
                <TeamCard
                  rank={team.rank}
                  teamReferenceResponse={team.teamReferenceResponse}
                  teamGardenResponse={team.teamGardenResponse}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Flex justify="center" w="100%" h="10" mt="8">
        {teamRank.map((team, idx) => (
          <Box
            key={team.teamReferenceResponse.id}
            w="3"
            h="3"
            mx="4"
            bg={idx === swiperIndex ? 'white' : 'transparent'}
            border="2px solid white"
            borderRadius="100%"
            onClick={() => swiper?.slideTo(_)}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default TeamRankSlider;
