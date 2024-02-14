'use client';

import './style.css';

import { GardenInfoType } from '@/types';

import Bar from './Bar';
import Floor from './Floor';

const Garden3D = ({ gardenInfos }: { gardenInfos: GardenInfoType[] }) => {
  const cubeSize = 16;

  const offsetX = 300 - 16 + cubeSize;
  const offsetY = 500;
  const offsetZ = 0;
  const gap = cubeSize * 2 + 4;
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
                transform: 'rotateY(40deg)',
              }}
            >
              {info.count === 0 ? (
                <Floor currX={currX} currZ={currZ} offsetY={offsetY} cubeSize={cubeSize} />
              ) : (
                <Bar
                  barHeight={Math.ceil(info.count / maxCount)}
                  currX={currX}
                  currZ={currZ}
                  offsetY={offsetY}
                  cubeSize={cubeSize}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Garden3D;
