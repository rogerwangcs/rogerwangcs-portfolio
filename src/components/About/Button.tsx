import styled from "styled-components";
import theme from "../../constants/theme";

interface StyledButtonProps {
  type?: "outline" | "filled";
  height?: string;
  width?: string;
}

const StyledButton = styled.div<StyledButtonProps>`
  transition: all 300ms ease-in-out;

  background-color: ${(props) =>
    props.type === "outline" ? "white" : theme.lightblue};

  height: ${(props) => props.height};
  width: ${(props) => props.width};

  border: ${(props) =>
    props.type === "outline"
      ? "solid 2px " + theme.lightblue
      : "solid 2px " + theme.lightblue};

  p {
    font-family: "Raleway", sans-serif;
    font-size: 18px;
    font-weight: 300;

    color: ${(props) => (props.type === "outline" ? theme.lightblue : "white")};

    text-align: center;
    margin-top: 7px;
    padding-top: 0;
  }

  &:hover {
    cursor: pointer;
    border: ${(props) =>
      props.type === "outline"
        ? "solid 2px " + theme.hoverblue
        : "solid 2px " + theme.hoverblue};
    background-color: ${(props) =>
      props.type === "outline" ? theme.lightblue : theme.hoverblue};
  }
`;

export default StyledButton;
