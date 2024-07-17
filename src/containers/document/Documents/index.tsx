'use client';

import { Flex, Grid, useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { getDocumentList } from '@/app/api/document';
import DocumentCard from '@/components/DocumentCard';
import PageNavigator from '@/components/PageNavigator';
import { DocumentList } from '@/types';

import { DocumentPageProps } from './types';

const Documents = ({ groupId, category }: DocumentPageProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [documentArray, setDocumentArray] = useState<DocumentList[]>([]);
  const [documentLength, setDocumentLength] = useState<number>(4);

  const itemsPerPage = useBreakpointValue({ base: 4, md: 8, xl: 10 })!;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const currentData = documentArray.slice(startIndex, endIndex);

  useEffect(() => {
    // getDocumentList('teams', teamId, 0, 8).then((res) => {
    //   if (res.ok) {
    //     setDocumentArray(res.body);
    //     setDocumentLength(() => res.body.length);
    //   }
    // });
    // if (documentLength < 8) {
    getDocumentList(category, groupId, 0, 12).then((res) => {
      if (res.ok) {
        setDocumentArray(res.body);
        setDocumentLength((cur) => cur + res.body.length);
      }
    });
    // }
  }, [groupId, category]);

  return (
    <Flex direction="column">
      <Grid gap={{ sm: '2', md: '4', xl: '8' }} templateColumns={`repeat(${itemsPerPage / 2}, 1fr)`} w="100%">
        {currentData.map((data) => (
          <DocumentCard
            id={data.id}
            key={data.id}
            title={data.title}
            description={data.description}
            date={data.date}
            uploaderName={data.uploaderName}
            // bookmark={data.bookmark}
            // img={data.img}
          />
        ))}
      </Grid>
      <PageNavigator
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        componentLength={documentLength}
        itemsPerPage={itemsPerPage}
      />
    </Flex>
  );
};

export default Documents;
