import { Flex, Card, UnorderedList, ListItem, Text } from '@chakra-ui/react';

import FeedDate from '@/mocks/feed';

const Feed = () => {
  return (
    <Card direction="row" w="100%" p="6" borderRadius="2xl">
      <Flex direction="column" gap="6" overflowY="auto" w="100%">
        {FeedDate.map((data) => {
          return (
            <Flex key={data.date} direction="column" gap="2">
              {data.date}
              <UnorderedList spacing="3">
                {data.content.map((content) => {
                  return (
                    <ListItem key={content.id} flexDir="row">
                      <Flex>
                        <Text fontWeight="bold">{content.name} </Text>
                        님이 {content.subject}을 {content.action}했습니다.
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
