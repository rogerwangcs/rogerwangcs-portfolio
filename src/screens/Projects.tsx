import { Divider } from "../components/common/Divider";
import { PageSection } from "../components/common/PageSection";
import { ProjectCard } from "../components/Projects/ProjectCard";
import { projects } from "../constants/content";
import { theme } from "../constants/theme";

export const Projects = () => {
  return (
    <PageSection color={theme.colors.gray2} paddingBottom={50} paddingTop={50}>
      <Divider centered big>
        <h2>Projects</h2>
      </Divider>
      {projects.map((project, projectIdx) => (
        <ProjectCard key={projectIdx} idx={projectIdx} {...project} />
      ))}
    </PageSection>
  );
};
