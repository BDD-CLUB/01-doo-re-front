import { Flex, Avatar, Text, Grid, Link, Card } from '@chakra-ui/react';

import colors from '@/theme/foundations/colors';

import { ParticipantProps } from './types';
import '@/style.css';

const Participant = ({ participantInfos }: ParticipantProps) => {
  const leader = participantInfos.find((data) => data.status === '스터디장')!;
  const otherParticipants = participantInfos.filter((data) => data.status !== '스터디장');
  otherParticipants.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  return (
    <Card className="scroll" overflowY="auto" w="100%" h="100%" bg="white" borderRadius="2xl" shadow="lg">
      <Grid templateColumns="repeat(3, 1fr)" pt="5" pb="2">
        {[
          { data: leader, color: colors.orange_dark },
          ...otherParticipants.map((data) => ({ data, color: 'inherit' })),
        ].map(({ data, color }) => (
          <Flex key={data.id} mr="5" mb="3" ml="5">
            <Avatar size="sm" src={data.profileImg} />
            <Link href={data.myPageUrl}>
              <Text ml="2" color={color} fontSize={{ base: 'sm', '2xl': 'md' }} fontWeight="bold">
                {data.name}
              </Text>
            </Link>
          </Flex>
        ))}
      </Grid>
    </Card>
  );
};

export default Participant;
