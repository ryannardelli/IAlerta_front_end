import { AboutProject } from "../../components/AboutProject";
import { ContainerContent } from "../../components/ContainerContent";
import MainTemplate from "../../templates/MainTemplate";

export function About() {
  return(
    <MainTemplate>
      <ContainerContent className="py-8">
        <AboutProject />
      </ContainerContent>
    </MainTemplate>
  );
}
