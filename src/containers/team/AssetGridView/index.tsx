import { Grid } from '@chakra-ui/react';

import StudyAssetCard from '@/components/StudyAssetCard';

import { AssetGridViewProps } from './types';

const AssetGridView = ({ assetArray }: AssetGridViewProps) => {
  return (
    <Grid gap="4" templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}>
      {assetArray.map((asset) => {
        return (
          <StudyAssetCard
            key={`${asset.title}-${asset.id}`}
            id={asset.id}
            title={asset.title}
            content={asset.content}
            date={asset.date}
            bookmark={asset.bookmark}
            img={asset.img}
          />
        );
      })}
    </Grid>
  );
};

export default AssetGridView;
