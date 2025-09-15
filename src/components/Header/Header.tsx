import { useEffect, useState } from "react";
import styled from "styled-components";
import { NavBar } from "../Navigation/NavBar";
import { HeaderBg } from "./Background";
import { SocialButtons } from "./SocialButtons";
import { HeaderText } from "./Text";

interface HeaderContentProps {
  height: number;
}

const HeaderContent = styled.div<HeaderContentProps>`
  > * {
    position: absolute;
    top: ${(props) => props.height / 2 + "px"};
    left: 50vw;
    transform: translate(-50%, -50%);
  }
`;

export const Header = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <HeaderBg />
      <SocialButtons />
      <HeaderContent height={windowHeight}>
        <HeaderText />
        <NavBar />
      </HeaderContent>
    </>
  );
};
