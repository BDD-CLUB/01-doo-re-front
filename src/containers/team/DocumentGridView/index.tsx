import { Grid } from '@chakra-ui/react';

import DocumentCard from '@/components/DocumentCard';

import { DocumentGridViewProps } from './types';

const DocumentGridView = ({ teamId, documentArray, setReload = () => {}, isMyTeam }: DocumentGridViewProps) => {
  return (
    <Grid gap="4" templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}>
      {documentArray?.map((document) => {
        return (
          <DocumentCard
            isTeam
            teamId={teamId}
            key={document.id}
            id={document.id}
            title={document.title}
            description={document.description}
            date={document.date}
            uploaderName={document.uploaderName}
            uploaderMemberId={document.uploaderMemberId}
            setReload={setReload}
            type={document.type}
            files={document.files}
            category="teams"
            accessType={document.accessType}
            isMyTeam={isMyTeam}
            // bookmark={document.bookmark}
            // img={document.img}
          />
        );
      }) || null}
    </Grid>
  );
};

export default DocumentGridView;
