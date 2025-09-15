import { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../constants/theme";

interface CentererProps {
  centered?: boolean;
}

const Centerer = styled.div<CentererProps>`
  display: ${(props) => (props.centered ? "table" : "block")};
  margin: 0 auto;

  margin-bottom: ${(props) => (props.centered ? "50px" : "0px")};
`;
const DividerWrapper = styled.div`
  display: inline-block;
`;

interface StyledDividerProps {
  big?: boolean;
}

const StyledDivider = styled.div<StyledDividerProps>`
  background-color: ${theme.colors.lightblue};
  height: ${(props) => (props.big ? "5px" : "4px")};
  width: 100%;
  border-radius: 2px/50%;

  margin: 15px 0px 15px;
`;

export interface DividerProps {
  centered?: boolean;
  big?: boolean;
  children?: ReactNode;
}

export const Divider = (props: DividerProps) => {
  return (
    <Centerer centered={props.centered}>
      <DividerWrapper>
        {props.children}
        <StyledDivider big={props.big} />
      </DividerWrapper>
    </Centerer>
  );
};
