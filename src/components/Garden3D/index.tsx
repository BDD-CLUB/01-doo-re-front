'use client';

import { useState } from 'react';

import './style.css';

import Bar from './Bar';
import { Garden3DProps } from './types';

const Garden3D = ({ rotate = false, cubeSize, cubeGap, rotateY, gardenInfos }: Garden3DProps) => {
  const cubeSizeHalf = cubeSize / 2;

  const offsetX = 300;
  const offsetDefaultY = 545;
  const [offsetY, setOffsetY] = useState<number>(offsetDefaultY);
  const offsetZ = 0;
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
    <div className="container" onMouseDown={rotate ? mouseDown : undefined} role="textbox" tabIndex={0}>
      <div className="fake_scene">
        {gardenInfos.map((info) => {
          const currZ = offsetZ + (info.date - 3) * gap;
          const currX = offsetX + (info.week - standX) * gap;

          return (
            <div
              key={info.id}
              className="scene"
              style={{
                transform: `rotateY(${yDegree}deg)`,
              }}
            >
              <Bar
                count={info.count}
                maxCount={maxCount}
                currX={currX}
                currZ={currZ}
                offsetY={offsetY}
                cubeSizeHalf={cubeSizeHalf}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Garden3D;
