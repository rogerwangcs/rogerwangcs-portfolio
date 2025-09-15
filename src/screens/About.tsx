import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { ProjectsSection } from "../components/About/ProjectsSection";
import { ResumeSection } from "../components/About/ResumeSection";
import { SkillsSection } from "../components/About/SkillsSection";
import { SummarySection } from "../components/About/SummarySection";
import { Divider } from "../components/common/Divider";
import { PageSection } from "../components/common/PageSection";
import { theme } from "../constants/theme";

const StyledPage = styled.div`
  text-align: center;
`;

const StyledTransition = styled.div`
  /* .fade-enter {
    opacity: 0;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: all 350ms ease-in;
  } */
  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0;
    transition: all 350ms ease-in;
  }
`;

export const About = () => {
  return (
    <StyledTransition>
      <CSSTransition classNames="fade" timeout={1000}>
        {() => (
          <StyledPage>
            <PageSection
              color={theme.colors.gray2}
              paddingBottom={50}
              paddingTop={50}
            >
              <SummarySection />
            </PageSection>
            <PageSection
              color={theme.colors.creme}
              paddingBottom={50}
              paddingTop={50}
            >
              <Divider centered big>
                <h2>Tech Stack</h2>
              </Divider>
              <SkillsSection />
            </PageSection>
            <PageSection
              fullwidth
              color={theme.colors.gray2}
              paddingBottom={50}
              paddingTop={50}
            >
              <Divider centered big>
                <h2>Projects</h2>
              </Divider>
              <ProjectsSection />
            </PageSection>
            <PageSection
              fullwidth
              color={theme.colors.creme}
              paddingBottom={0}
              paddingTop={0}
            >
              <ResumeSection />
            </PageSection>
          </StyledPage>
        )}
      </CSSTransition>
    </StyledTransition>
  );
};
