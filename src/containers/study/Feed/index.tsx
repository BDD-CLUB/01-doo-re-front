import { Flex, Card, UnorderedList, ListItem, Text } from '@chakra-ui/react';

import FeedDate from '@/mocks/feed';

import '@/style.css';

const Feed = () => {
  return (
    <Card p="6" borderRadius="2xl">
      <Flex className="scroll" direction="column" gap="6" overflowY="auto" w="100%" h="100%" maxH="40vh">
        {FeedDate.map((data) => {
          return (
            <Flex key={data.date} direction="column" gap="2">
              <Text textStyle="md">{data.date}</Text>
              <UnorderedList spacing="3">
                {data.content.map((content) => {
                  return (
                    <ListItem key={content.id} flexDir="row">
                      <Flex>
                        <Text textStyle="bold_md">{content.name} </Text>
                        <Text textStyle="md">
                          님이 {content.subject}을 {content.action}했습니다.{' '}
                        </Text>
                      </Flex>
                    </ListItem>
                  );
                })}
              </UnorderedList>
            </Flex>
          );
        })}
      </Flex>
    </Card>
  );
};

export default Feed;
