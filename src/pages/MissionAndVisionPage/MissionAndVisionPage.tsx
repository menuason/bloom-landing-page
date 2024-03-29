import { PageDescriptionHeader } from "../../components/PageDescriptionHeader";
import { useTranslation } from "react-i18next";
import { MissionAndVisionUpperSection } from "./UpperSection";
import { MissionSection } from "./MissionSection";
import { VisionSection } from "./VisionSection";
import { ValuesSection } from "./ValuesSection";
import i18n from "i18next";

const MissionAndVisionPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageDescriptionHeader
        image="../../about-us-page-photos/aboutUs.png"
        title={t("missionAndVisionPage.description.title")}
        navOne={t("missionAndVisionPage.description.nav2")}
        navTwo={t("missionAndVisionPage.description.nav3")}
        navTwoLink={`/about-us/${i18n.language}`}
      />
      <MissionAndVisionUpperSection />
      <MissionSection />
      <VisionSection />
      <ValuesSection />
    </>
  );
};

export default MissionAndVisionPage;


//come here
