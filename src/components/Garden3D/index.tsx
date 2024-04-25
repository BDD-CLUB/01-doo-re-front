'use client';

import { Box } from '@chakra-ui/react';
import { useState } from 'react';

import Bar from './Bar';
import { Garden3DProps } from './types';

const Garden3D = ({ rotate = false, cubeSize, cubeGap, rotateY, gardenInfos }: Garden3DProps) => {
  const cubeSizeHalf = cubeSize / 2;

  const offsetDefaultY = 545;
  const [offsetY, setOffsetY] = useState<number>(offsetDefaultY);

  const gap = cubeSize + cubeGap;
  const standX = (gardenInfos[gardenInfos.length - 1].week - gardenInfos[0].week + 1) / 2 + gardenInfos[0].week;
  const maxCount =
    gardenInfos.reduce((prev, value) => {
      return prev.count >= value.count ? prev : value;
    }).count / 4;

  /* setting for drag event */
  const [yDegree, setYDegree] = useState<number>(rotateY);

  /* cube mouse drag event */
  const mouseDown = (clickEvent: React.MouseEvent<Element, MouseEvent>) => {
    const mouseMoveHandler = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.screenX - clickEvent.screenX;

      const calcY = Math.abs((yDegree + deltaX) % 180);

      if (calcY < 90) setOffsetY(offsetDefaultY - calcY / 2);
      else setOffsetY(offsetDefaultY + (calcY - 180) / 2);
      setYDegree(yDegree + deltaX);
    };

    const mouseUpHandler = () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler, { once: true });
  };

  return (
    <Box pos="relative" zIndex="20" overflow="hidden" w="100%" h="100%" onMouseDown={rotate ? mouseDown : undefined}>
      <Box
        pos="absolute"
        top="-380px"
        w="100%"
        h="100%"
        style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
      >
        {gardenInfos.map((info) => {
          const currX = (info.week - standX) * gap;
          const currZ = (info.date - 3) * gap;

          return (
            <Box
              key={info.id}
              pos="absolute"
              w="100%"
              h="100%"
              style={{ transformStyle: 'preserve-3d', transform: `rotateY(${yDegree}deg)` }}
            >
              <Bar
                count={info.count}
                maxCount={maxCount}
                currX={currX}
                currZ={currZ}
                offsetY={offsetY}
                cubeSizeHalf={cubeSizeHalf}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Garden3D;
