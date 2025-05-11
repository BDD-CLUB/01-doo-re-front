import { Flex, Avatar, Text, Grid, Link, Card } from '@chakra-ui/react';

import colors from '@/theme/foundations/colors';
import getAvatarSrc from '@/utils/avatarUtils';

import { ParticipantProps } from './types';

const Participant = ({ participantInfos }: ParticipantProps) => {
  const leader = participantInfos.find((data) => data.status === '스터디장')!;
  const otherParticipants = participantInfos.filter((data) => data.status !== '스터디장');
  otherParticipants.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  if (!leader) {
    return <div />;
  }

  // Feed 없을때 임시로 maxH="45vh"로 설정 원래는 maxH="30vh"
  return (
    <Card className="scroll" overflowY="auto" w="100%" h="100%" maxH="45vh" borderRadius="2xl" shadow="lg">
      {participantInfos.length > 0 ? (
        <Grid templateColumns="repeat(3, 1fr)" px="5" pt="5" pb="2">
          {[
            { data: leader, color: colors.orange_dark },
            ...otherParticipants.map((data) => ({ data, color: 'inherit' })),
          ].map(({ data, color }) => (
            <Flex key={data.id} justify="center" mb="3">
              <Avatar size="sm" src={getAvatarSrc(data.profileImg)} />
              <Link href={data.myPageUrl}>
                <Text textStyle="bold_sm" ml="2" color={color}>
                  {data.name}
                </Text>
              </Link>
            </Flex>
          ))}
        </Grid>
      ) : (
        <Flex align="center" justify="center" my="10">
          <Text textStyle="bold_sm">참여자가 없습니다.</Text>
        </Flex>
      )}
    </Card>
  );
};

export default Participant;
