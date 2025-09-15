import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { theme } from "../../constants/theme";
import { viewport } from "../../constants/viewport";

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
  background-color: ${theme.colors.blue};

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

export interface CubeData {
  id: number;
  x: number;
  y: number;
}

export interface CubeProps {
  x: number;
  y: number;
}

export const Cube = ({ x, y }: CubeProps) => {
  const [display, setDisplay] = useState<string>("block");

  useEffect(() => {
    const timeout = window.setTimeout(() => setDisplay("none"), 10000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledCube
      style={{
        position: "absolute",
        top: `${y  }vh`,
        left: `${x  }vw`,
        display,
      }}
    />
  );
};
