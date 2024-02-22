import { Box, Grid, GridItem } from '@chakra-ui/react';
import { useState } from 'react';

import TeamCard from '@/containers/main/TeamCard';
import teamRankInfos from '@/mocks/TeamRanking';

const TeamRankSlider = () => {
  const [indexX, setIndexX] = useState<number>(0);
  const [navigationIdx, setNavigationIdx] = useState<number>(0);

  const clickNext = () => {
    if (indexX > 5 && navigationIdx < teamRankInfos.length - 13) setNavigationIdx((prev) => prev + 1);
    if (indexX < teamRankInfos.length - 1) setIndexX((prev) => prev + 1);
  };

  const clickPrev = () => {
    if (indexX < teamRankInfos.length - 7 && navigationIdx > 0) setNavigationIdx((prev) => prev - 1);
    if (indexX > 0) setIndexX((prev) => prev - 1);
  };

  const clickNav = (idx: number) => {
    setIndexX(idx);
    if (idx > 6 && idx < teamRankInfos.length - 6) setNavigationIdx(idx - 6);
  };

  return (
    <Box pos="relative" w="100%" h="400">
      <Box
        pos="absolute"
        left={`calc(50% - ${780 * indexX}px)`}
        transform="translate(-50%, 0%)"
        transition="left 1s ease-in-out 0s"
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
      <Box pos="absolute" top="95%" left="50%" overflow="hidden" w="248px" h="15px" transform="translate(-50%, 0%)">
        <Box pos="absolute" left={`calc(-${20 * navigationIdx}px)`} w="100%" h="100%">
          {teamRankInfos.map((info, _) => {
            const leftScale = 20 * _;
            return (
              <Box
                key={info.id + 100}
                pos="absolute"
                left={`calc(${leftScale}px)`}
                w="2"
                h="2"
                bg="#fff"
                opacity={indexX === _ ? 1 : 0.3}
                borderRadius="100%"
                onClick={() => {
                  clickNav(_);
                }}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default TeamRankSlider;
