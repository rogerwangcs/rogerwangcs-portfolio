import styled from "styled-components";
import Divider from "../common/Divider";
import RoundButton from "../common/RoundButton";
import CarouselCard from "../common/CarouselCard";

interface StyledCardProps {
  idx: number;
}

const StyledCard = styled.div<StyledCardProps>`
  display: flex;
  flex-direction: ${(props) => (props.idx % 2 === 1 ? "row-reverse" : "row")};
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  position: relative;
  width: 100%;
  margin-bottom: 100px;

  h6 {
    font-size: 18px;
  }

  p {
    font-size: 16px;
  }

  .cardContent {
    /* text-align: ${(props) => (props.idx % 2 === 0 ? "right" : "")}; */
    white-space: wrap;
    order: 2;
    max-width: 400px;
    margin-right: 25px;
    p + div {
      margin-right: 15px;
    }
    /* .descriptionContainer {
      text-align: justify;
    } */

    @media (max-width: 950px) {
      padding-top: 30px;
      padding-left: 10px;
      max-width: 100%;
    }
  }

  .RoundButton {
    margin-right: 15px;
    margin-bottom: 15px;
  }
`;

interface ProjectLink {
  name: string;
  link: string;
}

interface ProjectCardProps {
  idx: number;
  name: string;
  subtitle: string;
  description: string;
  images: string[];
  imageFit?: string;
  links?: ProjectLink[];
}

export const ProjectCard = (props: ProjectCardProps) => {
  const linkComponents = props.links ? (
    props.links.map((link, idx) => (
      <a key={idx} href={link.link} target="_blank" rel="noopener noreferrer">
        <RoundButton small text={link.name} link={link.link} />
      </a>
    ))
  ) : (
    <></>
  );

  return (
    <StyledCard idx={props.idx}>
      <div className="cardContent">
        <Divider>
          <h4>{props.name}</h4>
        </Divider>
        <h6>{props.subtitle}</h6>
        <div className="descriptionContainer">
          <p>{props.description}</p>
        </div>
        {linkComponents}
      </div>
      <CarouselCard images={props.images} imageFit={props.imageFit} />
    </StyledCard>
  );
};
