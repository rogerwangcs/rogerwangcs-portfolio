import { useState } from "react";
import { viewport } from "../../constants/viewport";
import theme from "../../constants/theme";
import styled from "styled-components";

interface SCarouselCardProps {
  clickable?: boolean;
  imageFit?: string;
}

interface CarouselDotProps {
  selected?: boolean;
}

interface CarouselCardProps {
  images: string[];
  imageFit?: string;
}

const SCarouselCard = styled.div<SCarouselCardProps>`
  .carouselImage {
    width: 460px;
    height: 345px;
    margin-bottom: 15px;
    object-fit: ${(props) => (props.imageFit ? props.imageFit : "cover")};
    background-color: black;
    position: relative;
    z-index: 1;

    border-radius: 25px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);

    &:hover {
      cursor: ${(props) => (props.clickable ? "pointer" : "default")};
    }
    @media (max-width: 950px) {
      width: 540px;
      height: 360px;
    }
    @media (max-width: ${viewport.MOBILE}) {
      margin-left: 5%;
      width: 90%;
      height: auto;
      border-radius: 15px;
    }
  }
  .dotsContainer {
    display: flex;
    justify-content: center;
  }
`;

const CarouselDot = styled.div<CarouselDotProps>`
  width: 10px;
  height: 10px;
  margin: 3px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.selected ? theme.buttonblue : theme.gray0};

  &:hover {
    cursor: pointer;
    background-color: ${theme.hoverblue};
  }
`;

const CarouselCard = (props: CarouselCardProps) => {
  const images = props.images;
  const clickable = images.length > 1;
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handleClick = () => {
    setSelectedIdx((selectedIdx + 1) % images.length);
  };

  const handleDotClick = (_e: React.MouseEvent, idx: number) => {
    setSelectedIdx(idx);
  };

  const dotComponents = images.map((_image, idx) => (
    <CarouselDot
      key={idx}
      selected={idx === selectedIdx}
      onClick={(e) => handleDotClick(e, idx)}
    />
  ));

  return (
    <SCarouselCard clickable={clickable} imageFit={props.imageFit}>
      <img
        alt="carouselCard"
        className="carouselImage"
        onClick={handleClick}
        src={images[selectedIdx]}
      />
      {clickable ? <div className="dotsContainer">{dotComponents}</div> : <></>}
    </SCarouselCard>
  );
};

export default CarouselCard;
