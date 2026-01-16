import { ContainerContent } from "../../components/ContainerContent";
import { FaqSection } from "../../components/FaqSection";
import MainTemplate from "../../templates/MainTemplate";

export function Howwork() {
  return(
    <MainTemplate>
      <ContainerContent className="p-8">
        <FaqSection />
      </ContainerContent>
    </MainTemplate>
  );
}
