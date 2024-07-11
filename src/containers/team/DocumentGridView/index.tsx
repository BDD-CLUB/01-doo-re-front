import { Grid } from '@chakra-ui/react';

import DocumentCard from '@/components/DocumentCard';

import { DocumentGridViewProps } from './types';

const DocumentGridView = ({ documentArray }: DocumentGridViewProps) => {
  return (
    <Grid gap="4" templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}>
      {documentArray.map((document) => {
        return (
          <DocumentCard
            key={`${document.title}-${document.id}`}
            id={document.id}
            title={document.title}
            description={document.description}
            date={document.date}
            uploaderName={document.uploaderName}
            // bookmark={document.bookmark}
            img={document.img}
          />
        );
      })}
    </Grid>
  );
};

export default DocumentGridView;
