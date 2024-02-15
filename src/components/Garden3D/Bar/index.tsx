import './style.css';
import { colorInfo } from '@/mocks/Garden3D';

import { CubeProps } from '../types';

const exponentialFunction = (height: number) => 10 * height;

const Bar = ({ count, maxCount, currX, currZ, offsetY, cubeSize }: CubeProps) => {
  const barHeight = Math.ceil(count / maxCount);

  return (
    <>
      <div
        style={{
          height: `${exponentialFunction(barHeight)}px`,
          background: `${colorInfo[barHeight].side1}`,
          transform: `translateX(${currX}px) translateY(${
            offsetY - exponentialFunction(barHeight) + 3
          }px) translateZ(${currZ + cubeSize}px)`,
        }}
        className="cube_side front_panel"
      />
      <div
        style={{
          height: `${exponentialFunction(barHeight)}px`,
          background: `${colorInfo[barHeight].side1}`,
          transform: `translateX(${currX}px) translateY(${
            offsetY - exponentialFunction(barHeight) + 3
          }px) translateZ(${currZ}px) rotateY(180deg) translateZ(${cubeSize}px)`,
        }}
        className="cube_side back_panel"
      />
      <div
        style={{
          height: `${exponentialFunction(barHeight)}px`,
          background: `${colorInfo[barHeight].side2}`,
          transform: `translateX(${currX}px) translateY(${
            offsetY - exponentialFunction(barHeight) + 3
          }px) translateZ(${currZ}px) rotateY(90deg) translateZ(${cubeSize}px)`,
        }}
        className="cube_side right_panel"
      />
      <div
        style={{
          height: `${exponentialFunction(barHeight)}px`,
          background: `${colorInfo[barHeight].side2}`,
          transform: `translateX(${currX}px) translateY(${
            offsetY - exponentialFunction(barHeight) + 3
          }px) translateZ(${currZ}px) rotateY(270deg) translateZ(${cubeSize}px)`,
        }}
        className="cube_side left_panel"
      />
      <div
        style={{
          background: `${colorInfo[barHeight].ceil}`,
          transform: `translateX(${currX}px) translateY(${
            offsetY - exponentialFunction(barHeight) + 3
          }px) translateZ(${currZ}px) rotateX(90deg) translateZ(${cubeSize}px)`,
        }}
        className="cube_above upper_panel"
      />
    </>
  );
};

export default Bar;
