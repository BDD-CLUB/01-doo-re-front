import { Grid } from '@chakra-ui/react';

import DocumentCard from '@/components/DocumentCard';

import { DocumentGridViewProps } from './types';

const DocumentGridView = ({ teamId, documentArray, setReload = () => {} }: DocumentGridViewProps) => {
  return (
    <Grid gap="4" templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}>
      {documentArray?.map((document) => {
        return (
          <DocumentCard
            teamId={teamId}
            key={document.id}
            id={document.id}
            title={document.title}
            description={document.description}
            date={document.date}
            uploaderName={document.uploaderName}
            setReload={setReload}
            type={document.type}
            files={document.files}
            // bookmark={document.bookmark}
            // img={document.img}
          />
        );
      }) || null}
    </Grid>
  );
};

export default DocumentGridView;
