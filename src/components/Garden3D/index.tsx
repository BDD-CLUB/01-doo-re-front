'use client';

import './style.css';

import Bar from './Bar';
import { Garden3DProps } from './types';

const Garden3D = ({ rotate = false, cubeSize, cubeGap, rotateY, gardenInfos }: Garden3DProps) => {
  const cubeSizeHalf = cubeSize / 2;

  const offsetX = 300;
  const offsetY = 500;
  const offsetZ = 0;
  const gap = cubeSize + cubeGap;
  const standX = (gardenInfos[gardenInfos.length - 1].week - gardenInfos[0].week + 1) / 2 + gardenInfos[0].week;
  const maxCount =
    gardenInfos.reduce((prev, value) => {
      return prev.count >= value.count ? prev : value;
    }).count / 4;

  return (
    <div className="container" role="textbox" tabIndex={0}>
      <div className="fake_scene">
        {gardenInfos.map((info) => {
          const currZ = offsetZ + (info.date - 3) * gap;
          const currX = offsetX + (info.week - standX) * gap;

          return (
            <div
              key={info.id}
              className="scene"
              style={{
                transform: `rotateY(${rotateY}deg)`,
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
