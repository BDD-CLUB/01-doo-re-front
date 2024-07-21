'use client';

import { Card, CardBody, CardFooter, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';

import S3_URL from '@/constants/s3Url';
import DocumentModal from '@/containers/study/DocumentModal';
import { DocumentList } from '@/types';

const DocumentCard = ({ id, title, description, date, setReload, files, type }: DocumentList) => {
  const [docsModalOpen, setIsDocsModalOpen] = useState<boolean>(false);

  const firstImg = () => {
    if (files.length === 0) return '/png/noImg.png';
    if (type === 'IMAGE') {
      return S3_URL(files[0].url);
    }
    if (type === 'URL') {
      return files[0]?.url;
    }
    if (type === 'DOCUMENT') {
      if (files.length === 1) {
        return '/png/file.png';
      }
      if (files.length > 1) {
        return 'png/folder.png';
      }
    }
    return '';
  };

  return (
    <Card
      w="100%"
      p="2"
      shadow="md"
      _hover={{ bg: 'gray.100', transition: '0.5s ease-in-out' }}
      onClick={() => setIsDocsModalOpen(true)}
      rounded="xl"
    >
      <DocumentModal id={id} isOpen={docsModalOpen} setIsDocsModalOpen={setIsDocsModalOpen} setReload={setReload} />

      <Image h="60" objectFit="cover" alt="study card" rounded="sm" src={firstImg()} />
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
