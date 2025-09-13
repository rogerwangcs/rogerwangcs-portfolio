import React from "react";
import styled from "styled-components";
import Background from "./Background.js";
import NavBar from "../Navigation/NavBar.jsx";
import SocialButtons from "./SocialButtons.jsx";
import { HeaderText } from "./Text.jsx";

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

const Header: React.FC = () => {
  return (
    <>
      <Background />
      <SocialButtons />
      <HeaderContent height={window.innerHeight}>
        <HeaderText />
        <NavBar />
      </HeaderContent>
    </>
  );
};

export default Header;
