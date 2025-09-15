import styled from "styled-components";
import { theme } from "../../constants/theme";

export interface ButtonProps {
  type?: "outline" | "filled";
  height?: string;
  width?: string;
}

export const Button = styled.div<ButtonProps>`
  transition: all 300ms ease-in-out;

  background-color: ${(props) =>
    props.type === "outline" ? "white" : theme.colors.lightblue};

  height: ${(props) => props.height};
  width: ${(props) => props.width};

  border: ${(props) =>
    props.type === "outline"
      ? `solid 2px ${  theme.colors.lightblue}`
      : `solid 2px ${  theme.colors.lightblue}`};

  p {
    font-family: "Raleway", sans-serif;
    font-size: 18px;
    font-weight: 300;

    color: ${(props) =>
      props.type === "outline" ? theme.colors.lightblue : "white"};

    text-align: center;
    margin-top: 7px;
    padding-top: 0;
  }

  &:hover {
    cursor: pointer;
    border: ${(props) =>
      props.type === "outline"
        ? `solid 2px ${  theme.colors.hoverblue}`
        : `solid 2px ${  theme.colors.hoverblue}`};
    background-color: ${(props) =>
      props.type === "outline"
        ? theme.colors.lightblue
        : theme.colors.hoverblue};
  }
`;
