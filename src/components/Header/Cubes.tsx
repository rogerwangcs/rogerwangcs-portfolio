import React, { useState, useEffect, useRef } from "react";

import styled, { css, keyframes } from "styled-components";
import { viewport } from "../../constants/viewport";
import theme from "../../constants/theme";

interface CubeData {
  key: number;
  x?: number;
  y?: number;
}

interface CubeProps extends CubeData {
  duration?: number;
}

const cubeAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  25% {
    opacity: 1;
    transform: scale(1) translateY(50px);
    transform-origin: 50% 50%;
  }
  75% {
    opacity: 1;
    transform: scale(1) translateY(250px);
    transform-origin: 50% 300px;
  }

  100% {
    opacity: 0;
    transform: scale(0.5) translateY(300px);
    transform-origin: 50% 300px;
  }
`;

const cubeAnimationRule = css`
  ${cubeAnimation} 10s;
`;

const StyledCube = styled.div`
  z-index: -101;
  position: absolute;

  width: 75px;
  height: 75px;
  background-color: ${theme.blue};

  opacity: 0;
  transform: scale(0);

  -webkit-backface-visibility: hidden;
  transform-origin: center;
  animation: ${cubeAnimationRule};
  animation-timing-function: linear;
  animation-delay: 0ms;
  animation-fill-mode: forwards;

  @media (max-width: ${viewport.MOBILE}) {
    width: 65px;
    height: 65px;
  }
`;

const Cube: React.FC<CubeProps> = ({ x, y, ...props }) => {
  const [display, setDisplay] = useState<string>("block");

  useEffect(() => {
    const timeout = window.setTimeout(() => setDisplay("none"), 10000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledCube
      style={{
        position: "absolute",
        top: y + "vh",
        left: x + "vw",
        display: display,
      }}
      {...props}
    />
  );
};

const Cubes: React.FC = () => {
  const [cubes, setCubes] = useState<CubeData[]>([{ key: 0 }]);
  const delayRef = useRef<boolean>(true);

  useEffect(() => {
    // Set delay to false after 15 seconds
    const delayTimeout = setTimeout(() => {
      delayRef.current = false;
    }, 15000);

    // Create new cubes every 500ms
    const interval = setInterval(() => {
      setCubes((prevCubes) => {
        let newCubes: CubeData[];
        if (delayRef.current) {
          newCubes = prevCubes.slice();
        } else {
          newCubes = prevCubes.slice(1);
        }

        const newCube: CubeData = {
          key: newCubes[newCubes.length - 1].key + 1,
          x: Math.floor(Math.random() * 90),
          y: Math.floor(Math.random() * 70),
        };

        newCubes.push(newCube);
        return newCubes;
      });
    }, 500);

    return () => {
      clearTimeout(delayTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {cubes.map((cube) => (
        <Cube key={cube.key} x={cube.x} y={cube.y} />
      ))}
    </>
  );
};

export default Cubes;
