import React from "react";
import styled from "styled-components";
import theme from "../../constants/theme";
import { animationTimings } from "../../constants/animationTimings";
import FadeIn from "../common/FadeIn";
import { socials } from "../../constants/content";

export interface Social {
  name: string;
  image: string;
  link: string;
}

const StyledSocialButtons = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
`;

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  margin: 10px;
  height: 42px;

  img {
    width: 42px;
    height: 42px;
    transition: all 200ms ease-in-out;
  }
  p {
    font-size: 16px;
    font-weight: 700;
    color: white;
    margin-right: 10px;

    transition: all ease-out 200ms;
    transform: translateX(25px);
    opacity: 0;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;

  &:hover {
    ${StyledIcon} p {
      cursor: pointer;
      transform: translateX(0px);
      opacity: 1;
    }
    ${StyledIcon} img {
      transform: scale(0.9);
    }
  }
`;

const ButtonBG = styled.div`
  position: absolute;
  background-color: ${theme.hoverblue};
  width: 100%;
  height: 44px;
  border-radius: 20px/50%;

  right: 3px;

  /* backface-visibility prevents the shaking/flickering effect during transition  */
  // backface-visibility: hidden;
  transition: all ease-out 200ms;
  transform-origin: 90% 50%;
  transform: scale(0.8);
  opacity: 0;

  ${StyledIcon}:hover & {
    cursor: pointer;
    transform: scale(1);
    opacity: 1;
  }
`;

const SocialButtons: React.FC = () => {
  const FadeInWithDelay = FadeIn as any;

  return (
    <FadeInWithDelay delay={animationTimings.loadDelay + 1000}>
      <StyledSocialButtons>
        {socials.map((social: Social, idx: number) => (
          <StyledLink
            key={idx}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledIcon>
              <ButtonBG />
              <img alt={social.name} src={social.image} />
              <p>{social.name}</p>
            </StyledIcon>
          </StyledLink>
        ))}
      </StyledSocialButtons>
    </FadeInWithDelay>
  );
};

export default SocialButtons;
