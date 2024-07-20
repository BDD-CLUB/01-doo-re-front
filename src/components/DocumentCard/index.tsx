'use client';

import { Card, CardBody, CardFooter, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { getDocument } from '@/app/api/document';
import DocumentModal from '@/containers/study/DocumentModal';
import { useGetFetchWithToken } from '@/hooks/useFetchWithToken';
import { DocumentList } from '@/types';

const DocumentCard = ({ id, title, description, date }: DocumentList) => {
  const [docsModalOpen, setIsDocsModalOpen] = useState<boolean>(false);
  // const [createDocsModalOpen, setIsCreateDocsModalOpen] = useState<boolean>(false);
  const document = useGetFetchWithToken(getDocument, [id]);
  // console.log('id : ', id, 'title : ', title, 'description : ', description, 'date : ', date);
  // console.log('document : ', createDocsModalOpen);

  return (
    <Card
      w="100%"
      p="2"
      shadow="md"
      _hover={{ bg: 'gray.100', transition: '0.5s ease-in-out' }}
      onClick={() => setIsDocsModalOpen(true)}
      rounded="xl"
    >
      <DocumentModal
        id={id}
        isOpen={docsModalOpen}
        setIsDocsModalOpen={setIsDocsModalOpen}
        // setIsCreateDocsModalOpen={() => setIsCreateDocsModalOpen(true)}
        // setIsCreateDocsModalOpen={setIsCreateDocsModalOpen}
        document={document}
      />

      <Image objectFit="cover" alt="study card" rounded="sm" src="https://url.kr/MVKGTf" />
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
