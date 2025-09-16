import styled from "styled-components";
import Logo from "../../assets/bg-logo-foreground.png";
import { animationTimings } from "../../constants/animationTimings";
import { theme } from "../../constants/theme";
import { viewport } from "../../constants/viewport";
import { FadeIn } from "../common/FadeIn";
import { Cubes } from "./Cubes";

interface StyledHeaderBgProps {
  mobile: boolean;
  height: number;
}

interface LogoWrapperProps {
  height: number;
  mobile: boolean;
  delay: number;
}

const StyledHeaderBg = styled.div<StyledHeaderBgProps>`
  overflow-x: hidden;
  z-index: -100;
  position: relative;
  background-color: ${theme.colors.darkblue};
  top: 0;
  left: 0;

  width: 100vw;
  height: ${(props) => (props.mobile ? `${props.height  }px` : "100vh")};
`;

const LogoWrapper = styled(FadeIn)<LogoWrapperProps>`
  position: absolute;

  top: ${(props) => (props.mobile ? `${props.height / 2  }px` : "50vh")};
  left: 50vw;

  -webkit-backface-visibility: hidden; /* add to fix webkit bug jitter */
  transform: translate(-50%, -50%);

  > img {
    user-select: none;
  }

  @media (max-width: ${viewport.MOBILE}) {
    > img {
      width: 100vw;
    }
  }
  @media (min-width: ${viewport.MOBILE}) {
    > img {
      width: 600px;
    }
  }
  @media (min-width: ${viewport.DESKTOP}) {
    > img {
      width: 800px;
    }
  }
`;

const isMobileDevice = (): boolean => {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
};

export const HeaderBg = () => {
  const mobile = isMobileDevice();
  const height = window.innerHeight;

  return (
    <StyledHeaderBg mobile={mobile} height={height}>
      <Cubes />
      <LogoWrapper
        height={height}
        mobile={mobile}
        delay={animationTimings.loadDelay + 0}
      >
        <img draggable="false" src={Logo} alt="Logo" />
      </LogoWrapper>
    </StyledHeaderBg>
  );
};
