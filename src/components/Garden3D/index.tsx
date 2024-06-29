/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/rules-of-hooks */

'use client';

import { Box } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useState } from 'react';

import { Garden } from '@/types';

import Bar from './Bar';
import { Garden3DProps } from './types';

const Garden3D = ({ rotate = false, cubeSize, cubeGap, rotateY, garden }: Garden3DProps) => {
  const gardenInfo: Garden[] = [];

  const dayCount = 7 * 12 + dayjs().day();
  for (let i = dayCount; i >= 0; i -= 1) {
    gardenInfo.push({ date: dayjs().subtract(i, 'days').format('YYYY-MM-DD'), contributeCount: 0 });
  }
  garden.forEach((grass) => {
    const duration = dayjs().diff(dayjs(grass.date), 'days');
    if (dayCount >= duration) gardenInfo[dayCount - duration].contributeCount = grass.contributeCount;
  });

  const cubeSizeHalf = cubeSize / 2;

  const offsetDefaultY = 545;
  const [offsetY, setOffsetY] = useState<number>(offsetDefaultY);

  const gap = cubeSize + cubeGap;
  const standX = 8;
  const maxCount =
    garden.reduce((prev, value) => {
      return prev.contributeCount >= value.contributeCount ? prev : value;
    }).contributeCount / 4;

  const [yDegree, setYDegree] = useState<number>(rotateY);

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
        {gardenInfo.map((info, _) => {
          const currX = (Math.floor(_ / 7) - standX) * gap;
          const currZ = (dayjs(info.date).day() - 3) * gap;

          return (
            <Box
              key={info.date}
              pos="absolute"
              w="100%"
              h="100%"
              style={{ transformStyle: 'preserve-3d', transform: `rotateY(${yDegree}deg)` }}
            >
              <Bar
                count={info.contributeCount}
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
