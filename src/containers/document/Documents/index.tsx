'use client';

import { Flex, Grid, useBreakpointValue, Card, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { getDocumentList } from '@/app/api/document';
import DocumentCard from '@/components/DocumentCard';
import PageNavigator from '@/components/PageNavigator';
import { DocumentList } from '@/types';

import { DocumentPageProps } from './types';

const Documents = ({ teamId, groupId, category, refetchTrigger = false }: DocumentPageProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [documentArray, setDocumentArray] = useState<DocumentList[]>([]);
  const [documentLength, setDocumentLength] = useState<number>(4);
  const [reload, setReload] = useState<boolean>(false);

  const itemsPerPage = useBreakpointValue({ base: 4, md: 8, xl: 10 })!;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const currentData = documentArray.slice(startIndex, endIndex);

  useEffect(() => {
    getDocumentList(category, groupId, 0, documentLength).then((res) => {
      if (res.ok) {
        setDocumentArray(res.body.content);
        setDocumentLength(res.body.totalElements);
      }
    });
  }, [documentLength, category, groupId, reload, refetchTrigger]);

  return (
    <Flex direction="column" w="100%" h="100%">
      {documentArray && documentArray.length > 0 ? (
        <>
          <Grid gap={{ sm: '2', md: '4', xl: '8' }} templateColumns={`repeat(${itemsPerPage / 2}, 1fr)`} w="100%">
            {currentData.map((data) => (
              <DocumentCard
                isTeam={category === 'teams'}
                teamId={teamId}
                id={data.id}
                key={data.id}
                title={data.title}
                description={data.description}
                date={data.date}
                uploaderName={data.uploaderName}
                setReload={setReload}
                files={data.files}
                type={data.type}
                category={category}
              />
            ))}
          </Grid>
          <PageNavigator
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            componentLength={documentLength}
            itemsPerPage={itemsPerPage}
          />
        </>
      ) : (
        <Card alignItems="center" justifyContent="center" w="100%" h="50%" borderRadius={{ base: '2xl' }}>
          <Text textStyle="lg">학습 자료가 존재하지 않습니다.</Text>
        </Card>
      )}
    </Flex>
  );
};

export default Documents;
