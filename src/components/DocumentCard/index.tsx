'use client';

import { Card, CardBody, CardFooter, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';
// import { BiBookmark } from 'react-icons/bi';

import DocumentModal from '@/containers/study/DocumentModal';
import { DocumentList } from '@/types';

// import { DocumentCardProps } from './types';

const DocumentCard = ({ title, description, date, img }: DocumentList) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Card
      w="100%"
      p="2"
      shadow="md"
      _hover={{ bg: 'gray.100', transition: '0.5s ease-in-out' }}
      onClick={() => setIsModalOpen(true)}
      rounded="xl"
    >
      <DocumentModal
        isOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title={title}
        description={description}
        type="file"
      />
      <Image objectFit="cover" alt="study card" rounded="sm" src={img} />
      <CardBody px="2">
        <Text textStyle="bold_md">{title}</Text>
        <Text textStyle="sm">{description}</Text>
      </CardBody>
      <CardFooter alignItems="center" justify="space-between" px="2" py="0">
        <Text textStyle="sm" color="gray.200">
          {date}
        </Text>
        {/* Todo : 북마크 - 배포 후 추가 필요 */}
        {/* <Flex align="center">
          <IconButton
            color="black"
            bg="transparent"
            _hover={{ bg: 'transparent' }}
            aria-label="bookmark"
            icon={<BiBookmark />}
            size="icon_sm"
          />
          <Text textStyle="sm">{bookmark}</Text>
        </Flex> */}
      </CardFooter>
    </Card>
  );
};

export default DocumentCard;
