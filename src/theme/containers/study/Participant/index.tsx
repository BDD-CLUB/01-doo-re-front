import { Flex, Box, Avatar, Text, Grid, Link } from '@chakra-ui/react';

import colors from '@/theme/foundations/colors';

import { ParticipantProps } from './types';
import './style.css';

const Participant = ({ participantInfos }: ParticipantProps) => {
  const leader = participantInfos.find((data) => data.status === '스터디장')!;
  const otherParticipants = participantInfos.filter((data) => data.status !== '스터디장');
  otherParticipants.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  return (
    <Flex justify="center" overflowY="auto" w="30vw" h="30vh" bg="white" borderRadius="2xl" shadow="lg">
      <Box>
        <Grid templateColumns="repeat(3, 1fr)" pt="5" pb="2">
          {[
            { data: leader, color: colors.orange_dark },
            ...otherParticipants.map((data) => ({ data, color: 'inherit' })),
          ].map(({ data, color }) => (
            <Flex key={data.id} align="center" mr="5" mb="3" ml="5">
              <Avatar shadow="md" size="xs" src={data.profileImg} />
              <Link href={data.myPageUrl}>
                <Text ml="2" color={color} fontSize="sm" fontWeight="bold">
                  {data.name}
                </Text>
              </Link>
            </Flex>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};

export default Participant;
