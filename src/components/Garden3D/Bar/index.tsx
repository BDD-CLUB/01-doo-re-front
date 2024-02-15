import './style.css';
import { colorInfo } from '@/mocks/Garden3D';

import { CubeProps } from '../types';

const exponentialFunction = (height: number) => 10 * height;

const Bar = ({ count, maxCount, currX, currZ, offsetY, cubeSize }: CubeProps) => {
  const barX = count === 0 ? 0 : Math.ceil(count / maxCount);
  const barHeight = barX === 0 ? 3 : exponentialFunction(barX);

  return (
    <>
      <div
        style={{
          width: `${cubeSize * 2}px`,
          height: `${barHeight}px`,
          background: `${colorInfo[barX].side1}`,
          transform: `translateX(${currX}px) translateY(${offsetY - barHeight}px) translateZ(${currZ + cubeSize}px)`,
        }}
        className="cube_side front_panel"
      />
      <div
        style={{
          width: `${cubeSize * 2}px`,
          height: `${barHeight}px`,
          background: `${colorInfo[barX].side1}`,
          transform: `translateX(${currX}px) translateY(${
            offsetY - barHeight
          }px) translateZ(${currZ}px) rotateY(180deg) translateZ(${cubeSize}px)`,
        }}
        className="cube_side back_panel"
      />
      <div
        style={{
          width: `${cubeSize * 2}px`,
          height: `${barHeight}px`,
          background: `${colorInfo[barX].side2}`,
          transform: `translateX(${currX}px) translateY(${
            offsetY - barHeight
          }px) translateZ(${currZ}px) rotateY(90deg) translateZ(${cubeSize}px)`,
        }}
        className="cube_side right_panel"
      />
      <div
        style={{
          width: `${cubeSize * 2}px`,
          height: `${barHeight}px`,
          background: `${colorInfo[barX].side2}`,
          transform: `translateX(${currX}px) translateY(${
            offsetY - barHeight
          }px) translateZ(${currZ}px) rotateY(270deg) translateZ(${cubeSize}px)`,
        }}
        className="cube_side left_panel"
      />
      <div
        style={{
          width: `${cubeSize * 2}px`,
          height: `${cubeSize * 2}px`,
          background: `${colorInfo[barX].ceil}`,
          transform: `translateX(${currX}px) translateY(${
            offsetY - barHeight
          }px) translateZ(${currZ}px) rotateX(90deg) translateZ(${cubeSize}px)`,
        }}
        className="cube_above upper_panel"
      />
    </>
  );
};

export default Bar;
