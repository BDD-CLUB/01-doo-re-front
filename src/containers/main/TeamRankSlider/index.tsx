import { Box, Grid, GridItem } from '@chakra-ui/react';
import { useState } from 'react';

import TeamCard from '@/containers/main/TeamCard';
import teamRankInfos from '@/mocks/TeamRanking';

const TeamRankSlider = () => {
  const [indexX, setIndexX] = useState<number>(0);

  const clickNext = () => {
    if (indexX < teamRankInfos.length - 1) {
      setIndexX((prev) => prev + 1);
    }
  };

  const clickPrev = () => {
    if (indexX > 0) {
      setIndexX((prev) => prev - 1);
    }
  };

  return (
    <Box pos="relative" w="100vw" h="400">
      <Box
        className="slider-scene"
        pos="absolute"
        left={`calc(50% - ${780 * indexX}px)`}
        transform="translate(-50%, 0%)"
      >
        {teamRankInfos.map((info, _) => {
          const leftScale = 780 * _;
          return (
            <Box key={info.id} pos="absolute" left={`calc(50% + ${leftScale}px)`} transform="translate(-50%, 0%)">
              <TeamCard
                rank={info.rank}
                name={info.name}
                description={info.description}
                gardenInfos={info.gardenInfos}
              />
            </Box>
          );
        })}
      </Box>
      <Grid pos="absolute" columnGap="780" templateColumns="repeat(2, 1fr)" overflow="hidden" w="100%" h="100%">
        <GridItem onClick={clickPrev} />
        <GridItem onClick={clickNext} />
      </Grid>
    </Box>
  );
};

export default TeamRankSlider;
