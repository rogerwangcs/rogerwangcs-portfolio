import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Card from "../common/Card";
import RoundButton from "../common/RoundButton";
import { Carousel } from "./ProjectCarousel";
import "./Carousel.scss";

import { projects } from "../../constants/content";

const StyledProjectsSection = styled.div`
  text-align: center;
`;

const ProjectsSection = () => {
  const navigate = useNavigate();

  const projectCards = projects.map((project, idx) => (
    <Card
      key={idx}
      name={project.shortname !== undefined ? project.shortname : project.name}
      image={project.images[0]}
    />
  ));

  return (
    <StyledProjectsSection>
      <Carousel
        components={[...projectCards, ...projectCards]}
        handleClick={() => {
          navigate("/projects");
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
        }}
        active={projectCards.length - 1} // start halfway through to avoid buggy transitions at start
      />
      <RoundButton text="See All Projects" link="/projects" scroll />
    </StyledProjectsSection>
  );
};

export default ProjectsSection;
