import './style.css';

import { Box, Flex, Image } from '@chakra-ui/react';

import { CropLineProps } from '@/containers/main/CropLine/types';

const cropImageList = [
  '/images/crops/rice.png',
  '/images/crops/sweet_potato.png',
  '/images/crops/carrot.png',
  '/images/crops/pea.png',
  '/images/crops/tomato.png',
];

const CropLine = ({ reverse = false }: CropLineProps) => {
  const cropListCount = Math.ceil(window.innerHeight / 136 / cropImageList.length) + 1;

  const cropList = Array.from({ length: cropListCount * cropImageList.length }).map((_, index) => ({
    id: index,
    img: cropImageList[index % cropImageList.length],
  }));

  return (
    <Box pos="relative" overflow="hidden" w="24" h="100vh">
      <Flex className={`${reverse ? 'rev_' : ''}rolling_crop`} pos="absolute" direction="column">
        {cropList.map((crop) => (
          <Image key={crop.id} w="24" mb="10" alt="crop" src={crop.img} />
        ))}
      </Flex>
      <Flex className={`${reverse ? 'rev_' : ''}rolling_crop_clone`} pos="absolute" direction="column">
        {cropList.map((crop) => (
          <Image key={crop.id} w="24" mb="10" alt="crop" src={crop.img} />
        ))}
      </Flex>
    </Box>
  );
};

export default CropLine;
