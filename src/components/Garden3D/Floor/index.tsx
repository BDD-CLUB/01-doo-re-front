import './style.css';
import { CubeProps } from '../types';

const Floor = ({ currX, offsetY, currZ, cubeSize }: CubeProps) => {
  return (
    <>
      <div
        style={{
          transform: `translateX(${currX}px) translateY(${offsetY}px) translateZ(${currZ + cubeSize}px)`,
        }}
        className="cube_side front_panel"
      />
      <div
        style={{
          transform: `translateX(${currX}px) translateY(${offsetY}px) translateZ(${currZ}px) rotateY(180deg) translateZ(${cubeSize}px)`,
        }}
        className="cube_side back_panel"
      />
      <div
        style={{
          transform: `translateX(${currX}px) translateY(${offsetY}px) translateZ(${currZ}px) rotateY(90deg) translateZ(${cubeSize}px)`,
        }}
        className="cube_side right_panel"
      />
      <div
        style={{
          transform: `translateX(${currX}px) translateY(${offsetY}px) translateZ(${currZ}px) rotateY(270deg) translateZ(${cubeSize}px)`,
        }}
        className="cube_side left_panel"
      />
      <div
        style={{
          transform: `translateX(${currX}px) translateY(${offsetY}px) translateZ(${currZ}px) rotateX(90deg) translateZ(${cubeSize}px)`,
        }}
        className="cube_above upper_panel"
      />
    </>
  );
};

export default Floor;
