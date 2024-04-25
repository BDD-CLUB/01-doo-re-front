import { Box } from '@chakra-ui/react';

import { colorInfo } from '@/mocks/Garden3D';

import { CubeProps } from '../types';

const exponentialFunction = (height: number) => 10 * height;

const Bar = ({ count, maxCount, currX, currZ, offsetY, cubeSizeHalf }: CubeProps) => {
  const barX = count === 0 ? 0 : Math.ceil(count / maxCount);
  const barHeight = barX === 0 ? 3 : exponentialFunction(barX);

  return (
    <>
      <Box
        pos="absolute"
        zIndex="13"
        left="50%"
        style={{
          width: `${cubeSizeHalf * 2}px`,
          height: `${barHeight}px`,
          background: `${colorInfo[barX].side1}`,
          transform: `translateX(${currX}px) translateY(${offsetY - barHeight}px) translateZ(${currZ + cubeSizeHalf}px)`,
        }}
      />
      <Box
        pos="absolute"
        zIndex="13"
        left="50%"
        style={{
          width: `${cubeSizeHalf * 2}px`,
          height: `${barHeight}px`,
          background: `${colorInfo[barX].side1}`,
          transform: `translateX(${currX}px) translateY(${offsetY - barHeight}px) translateZ(${currZ}px) rotateY(180deg) translateZ(${cubeSizeHalf}px)`,
        }}
      />
      <Box
        pos="absolute"
        zIndex="13"
        left="50%"
        style={{
          width: `${cubeSizeHalf * 2}px`,
          height: `${barHeight}px`,
          background: `${colorInfo[barX].side2}`,
          transform: `translateX(${currX}px) translateY(${offsetY - barHeight}px) translateZ(${currZ}px) rotateY(90deg) translateZ(${cubeSizeHalf}px)`,
        }}
      />
      <Box
        pos="absolute"
        zIndex="13"
        left="50%"
        style={{
          width: `${cubeSizeHalf * 2}px`,
          height: `${barHeight}px`,
          background: `${colorInfo[barX].side2}`,
          transform: `translateX(${currX}px) translateY(${offsetY - barHeight}px) translateZ(${currZ}px) rotateY(270deg) translateZ(${cubeSizeHalf}px)`,
        }}
      />
      <Box
        pos="absolute"
        zIndex="15"
        left="50%"
        style={{
          width: `${cubeSizeHalf * 2}px`,
          height: `${cubeSizeHalf * 2}px`,
          background: `${colorInfo[barX].ceil}`,
          transform: `translateX(${currX}px) translateY(${offsetY - barHeight}px) translateZ(${currZ}px) rotateX(90deg) translateZ(${cubeSizeHalf}px)`,
        }}
      />
    </>
  );
};

export default Bar;
