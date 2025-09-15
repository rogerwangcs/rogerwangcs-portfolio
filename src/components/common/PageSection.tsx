import styled from "styled-components";
import { viewport } from "../../constants/viewport";
import { ReactNode } from "react";

interface StyledPageSectionProps {
  color?: string;
  paddingTop?: number;
  paddingBottom?: number;
}

const StyledPageSection = styled.div<StyledPageSectionProps>`
  background-color: ${(props) => props.color};
  width: 100%;
  padding-top: ${(props) => (props.paddingTop || 0) + "px"};
  padding-bottom: ${(props) => (props.paddingBottom || 0) + "px"};
`;

const StyledPageContents = styled.div`
  margin: auto;

  @media (max-width: ${viewport.MOBILE}) {
    width: 92vw;
    h2 {
      text-align: center;
      margin: auto;
    }
  }
  @media (min-width: ${viewport.MOBILE}) {
    width: 90vw;
    text-align: left;
  }
  @media (min-width: ${viewport.DESKTOP}) {
    width: ${viewport.DESKTOP_CONTENT_WIDTH + "px"};
  }
`;

export interface PageSectionProps {
  color?: string;
  paddingTop?: number;
  paddingBottom?: number;
  fullwidth?: boolean;
  children?: ReactNode;
}

export const PageSection = (props: PageSectionProps) => {
  return (
    <StyledPageSection {...props}>
      {props.fullwidth ? (
        props.children
      ) : (
        <StyledPageContents>{props.children}</StyledPageContents>
      )}
    </StyledPageSection>
  );
};
