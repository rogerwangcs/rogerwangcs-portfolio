import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { animationTimings } from "../../constants/animationTimings";
import { theme } from "../../constants/theme";
import { viewport } from "../../constants/viewport";
import { FadeIn } from "../common/FadeIn";

interface SNavBarProps {
  isSticky: boolean;
}

const NavContainer = styled.div`
  text-align: center;
  @media (max-width: ${viewport.MOBILE}) {
    margin-top: 150px;
  }
  @media (min-width: ${viewport.MOBILE}) {
    margin-top: 175px;
  }
  @media (min-width: ${viewport.DESKTOP}) {
    margin-top: 250px;
  }
`;

const SNavBar = styled.div<SNavBarProps>`
  white-space: nowrap;
`;

const NavButton = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  > h3 {
    user-select: none;
    line-height: 44px;
    color: white;
    font-weight: 300;
  }
  @media (max-width: ${viewport.MOBILE}) {
    padding: 0 15px;
  }
  @media (min-width: ${viewport.MOBILE}) {
    padding: 0 28px;
  }
`;

const NavButtonBG = styled.div`
  z-index: -1;
  position: absolute;
  background-color: ${theme.colors.hoverblue};
  width: 100%;
  height: 44px;
  border-radius: 20px/50%;

  /* backface-visibility prevents the shaking/flickering effect during transition  */
  backface-visibility: hidden;
  transition: all ease-out 200ms;
  transform: scale(0.8);
  opacity: 0;

  top: 0px;
  left: 0px;

  ${NavButton}:hover & {
    cursor: pointer;
    transform: scale(1);
    opacity: 1;
  }
`;

export const NavBar = () => {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (url: string): void => {
    navigate(url);
    if (window.scrollY < window.innerHeight) {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = (): void => {
    if (navRef.current) {
      const navPos = navRef.current.getBoundingClientRect().top;
      if (navPos < 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const FadeInWithDelay = FadeIn as any;

  return (
    <FadeInWithDelay delay={animationTimings.loadDelay + 750}>
      <NavContainer>
        <div ref={navRef}>
          <SNavBar isSticky={isSticky}>
            <NavButton onClick={() => handleNavigate("/")}>
              <h3>About</h3>
              <NavButtonBG className="navButtonBG" />
            </NavButton>
            <NavButton onClick={() => handleNavigate("/projects")}>
              <h3>Projects</h3>
              <NavButtonBG className="navButtonBG" />
            </NavButton>
          </SNavBar>
        </div>
      </NavContainer>
    </FadeInWithDelay>
  );
};
