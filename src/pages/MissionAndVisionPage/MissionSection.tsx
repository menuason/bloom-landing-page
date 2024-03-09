import { useTranslation } from "react-i18next";
import { PageSection } from "../../components/PageSection";

export const MissionSection = () => {
  const { t } = useTranslation();

  return (
    <PageSection
      isMissionPageSmallSize
      isImageFirst={false}
      image="src/assets/mission-and-vision-photos/mission.png"
    >
      <div className="flex flex-col text-gray-950 justify-center
        lg:gap-6
        md:gap-3
        xs:gap-3
       "
      >
        <p className="text-4xl text-gray-950 font-medium
           lg:text-3xl lg:text-start
           md:text-2xl md:text-center
           xs:text-2xl xs:text-start
         "
        >
          {t("missionAndVisionPage.mission.title")}
        </p>

        <div className="flex flex-col font-normal
          lg:text-base
          md:text-sm
          xs:text-sm
         "
        >
          <p>
            {t("missionAndVisionPage.mission.text")}
          </p>
        </div>
      </div>
    </PageSection>
  )
}
