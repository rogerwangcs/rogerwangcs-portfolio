import styled from "styled-components";
import { socials } from "../../constants/content";
import { theme } from "../../constants/theme";
import { viewport } from "../../constants/viewport";

const StyledFooter = styled.div`
  user-select: none;

  z-index: 100;
  position: relative;

  background-color: ${theme.colors.darkblue};

  padding-top: 30px;

  height: 150px;
  width: 100vw;

  > p {
    font-size: 16px;
    color: ${theme.colors.gray2};
    text-align: center;
  }
`;

const StyledSocialButtons = styled.div`
  text-align: center;
`;

const StyledIcon = styled.a`
  display: inline-block;

  transition: all 200ms ease-in-out;
  background-color: ${theme.colors.blue};

  margin: 15px;
  padding: 10px;
  border-radius: 25%;

  img {
    transition: transform 200ms ease-in-out;
    vertical-align: middle;
    width: 40px;
    height: 40px;
  }
  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.buttonblue};
    img {
      transform: scale(1.2);
    }
  }

  @media (max-width: ${viewport.MOBILE}) {
    padding: 8px;
    img {
      width: 30px;
      height: 30px;
    }
  }
`;
const SocialButtons = () => {
  return (
    <StyledSocialButtons>
      {socials.map((social, idx) => (
        <StyledIcon key={idx} href={social.link} target="_blank">
          <img alt={social.name} draggable="false" src={social.image} />
        </StyledIcon>
      ))}
    </StyledSocialButtons>
  );
};

export const Footer = () => {
  const date = new Date();
  return (
    <StyledFooter>
      <SocialButtons />
      <p>© Roger Wang {date.getFullYear()}</p>
    </StyledFooter>
  );
};
