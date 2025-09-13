import { useState, useEffect, useRef, useCallback, ReactNode } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { viewport } from "../../constants/viewport";

const SCarousel = styled.div`
  overflow: hidden;
  position: relative;
  height: 350px;
  width: 100%;
  padding: 50px 0px;

  @media (max-width: ${viewport.MOBILE}) {
    height: 250px;
    padding: 20px 0px;
  }
`;

const SCarouselInner = styled.div`
  transform-origin: center;
  transform: scale(1);
  @media (max-width: ${viewport.MOBILE}) {
    transform: scale(0.65);
  }
`;

interface CarouselProps {
  components: ReactNode[];
  active: number;
  handleClick: () => void;
}

export const Carousel = ({
  components,
  active: initialActive,
  handleClick,
}: CarouselProps) => {
  const [items] = useState(components);
  const [active, setActive] = useState(initialActive);
  const [direction, setDirection] = useState("left");
  const carouselTimerRef = useRef<NodeJS.Timeout | null>(null);

  const moveLeft = useCallback(() => {
    setActive((prev: number) => (prev - 1 < 0 ? items.length - 1 : prev - 1));
    setDirection("left");
  }, [items.length]);

  const moveRight = useCallback(() => {
    setActive((prev: number) => (prev + 1) % items.length);
    setDirection("right");
  }, [items.length]);

  const restartTimer = () => {
    if (carouselTimerRef.current) {
      clearInterval(carouselTimerRef.current);
    }
    carouselTimerRef.current = setInterval(() => {
      if (document.hasFocus()) moveLeft();
    }, 5000);
  };

  useEffect(() => {
    carouselTimerRef.current = setInterval(() => {
      if (document.hasFocus()) moveLeft();
    }, 5000);

    return () => {
      if (carouselTimerRef.current) {
        clearInterval(carouselTimerRef.current);
      }
    };
  }, [moveLeft]);

  const generateItems = () => {
    const carouselItems = [];
    let level;
    for (let i = active - 1; i < active + 2; i++) {
      let index = i;
      if (i < 0) {
        index = items.length + i;
      } else if (i >= items.length) {
        index = i % items.length;
      }
      level = active - i;
      carouselItems.push(
        <CSSTransition
          classNames={direction}
          key={i}
          timeout={{ enter: 0, exit: 500 }}
        >
          <CarouselItem
            key={index}
            id={index}
            level={level}
            component={items[index]}
            handleClick={handleClick}
            moveLeft={() => {
              restartTimer();
              moveLeft();
            }}
            moveRight={() => {
              restartTimer();
              moveRight();
            }}
          />
        </CSSTransition>
      );
    }
    return carouselItems;
  };

  return (
    <SCarousel id="carousel" className="noselect">
      <SCarouselInner>
        <TransitionGroup>{generateItems()}</TransitionGroup>
      </SCarouselInner>
    </SCarousel>
  );
};

interface CarouselItemProps {
  level: number;
  component: ReactNode;
  handleClick: () => void;
  moveLeft: () => void;
  moveRight: () => void;
  id?: number;
}

const CarouselItem = ({
  level,
  component,
  handleClick,
  moveLeft,
  moveRight,
}: CarouselItemProps) => {
  const handleItemClick = () => {
    if (level > 0) moveLeft();
    else if (level < 0) moveRight();
    else handleClick();
  };

  return (
    <div className={"carousel-item level" + level} onClick={handleItemClick}>
      {component}
    </div>
  );
};
