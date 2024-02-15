import { Box } from '@chakra-ui/react';

import TeamCard from '@/containers/main/TeamCard';
import teamRankInfos from '@/mocks/TeamRanking';

const TeamRankSlider = () => {
  return (
    <Box pos="relative" w="100vw" h="400">
      <Box className="slider-scene" pos="absolute" left="50%" transform="translate(-50%, 0%)">
        {teamRankInfos.map((info, _) => {
          const leftScale = 780 * _;
          return (
            <Box pos="absolute" left={`calc(50% + ${leftScale}px)`} transform="translate(-50%, 0%)">
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
    </Box>
  );
};

export default TeamRankSlider;
