import { Grid } from '@chakra-ui/react';

import DocumentCard from '@/components/DocumentCard';

import { AssetGridViewProps } from './types';

const AssetGridView = ({ assetArray }: AssetGridViewProps) => {
  return (
    <Grid gap="4" templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}>
      {assetArray.map((document) => {
        return (
          <DocumentCard
            key={`${document.title}-${document.id}`}
            id={document.id}
            title={document.title}
            content={document.content}
            date={document.date}
            bookmark={document.bookmark}
            img={document.img}
          />
        );
      })}
    </Grid>
  );
};

export default AssetGridView;
