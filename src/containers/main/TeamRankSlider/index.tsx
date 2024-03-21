'use client';

import { Box, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';

import 'swiper/css';

import teamRankInfos from '@/mocks/TeamRanking';

import TeamCard from '../TeamCard';

const TeamRankSlider = () => {
  const [swiperIndex, setSwiperIndex] = useState<number>(0);
  const [swiper, setSwiper] = useState<SwiperClass>();

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
          {teamRankInfos.map((data) => (
            <SwiperSlide key={data.id} style={{ width: 'fit-content' }}>
              <Box
                as="a"
                display="block"
                overflow="hidden"
                w={{ base: '450px', lg: '600px', '2xl': '720px' }}
                h={{ base: '300px', lg: '360px', '2xl': '430px' }}
                bg="rgba(255, 255, 255, 0.1)"
                borderRadius="30"
                href={swiper?.activeIndex === data.idx ? data.url : undefined}
              >
                <TeamCard
                  rank={data.rank}
                  name={data.name}
                  description={data.description}
                  gardenInfos={data.gardenInfos}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Flex justify="center" w="100%" h="10" mt="8">
        {teamRankInfos.map((data) => (
          <Box
            key={data.id}
            w="3"
            h="3"
            mx="4"
            bg={data.idx === swiperIndex ? 'white' : 'transparent'}
            border="2px solid white"
            borderRadius="100%"
            onClick={() => swiper?.slideTo(data.idx)}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default TeamRankSlider;
