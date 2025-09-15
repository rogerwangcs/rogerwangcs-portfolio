import { useState } from "react";
import styled from "styled-components";
import ResumeGraphic from "../../assets/ResumeGraphic.png";
import { theme } from "../../constants/theme";
import { viewport } from "../../constants/viewport";
import { RoundButton } from "../common/RoundButton";

const ResumeButton = styled.div`
  display: inline-block;
  margin-top: 50px;
  position: relative;
  z-index: 1;
`;

const StyledResumeSection = styled.div`
  overflow: hidden;
  position: relative;
  text-align: center;

  @media (max-width: ${viewport.MOBILE}) {
    height: 350px;
  }
  @media (min-width: ${viewport.MOBILE}) {
    height: 400px;
  }
`;

interface StyledResumeGraphicProps {
  hover?: boolean;
}

const StyledResumeGraphic = styled.img<StyledResumeGraphicProps>`
  position: absolute;
  z-index: 1;

  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;

  border-radius: 25px 25px 0px 0px;
  box-shadow:
    0 5px 15px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.15);

  @media (max-width: ${viewport.MOBILE}) {
    width: 90vw;
    box-shadow: 2px 2px 10px -6px;
  }
  @media (min-width: ${viewport.MOBILE}) {
    width: 80vw;
  }
  @media (min-width: 800px) {
    width: 60vw;
  }
  @media (min-width: 1000px) {
    width: 600px;
  }

  transition: transform 300ms ease-in-out;
  transform-origin: bottom;
  transform: ${(props) =>
    props.hover ? "translateY(0px)" : "translateY(25px)"};
`;

interface BlueBGProps {
  hover?: boolean;
}

const BlueBG = styled.div<BlueBGProps>`
  position: absolute;
  z-index: 0;

  width: 175px;
  height: 75px;
  border-radius: 25px;

  background-color: ${theme.colors.hoverblue};
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;

  transition: all 300ms ease-in-out;
  transform: ${(props) => (props.hover ? "scale(15)" : "scale(1)")};
`;

export const ResumeSection = () => {
  const [hover, setHover] = useState(false);

  return (
    <StyledResumeSection>
      <a
        href="/roger_wang_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ResumeButton
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <RoundButton text="See Resume" link="/roger_wang_resume.pdf" />
        </ResumeButton>
      </a>
      <BlueBG hover={hover} />
      <StyledResumeGraphic
        hover={hover}
        draggable="false"
        src={ResumeGraphic}
      />
    </StyledResumeSection>
  );
};
