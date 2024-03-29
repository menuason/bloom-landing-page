import { useTranslation } from "react-i18next";
import { PageSection } from "../../components/PageSection";

export const MissionSection = () => {
  const { t } = useTranslation();

  return (
    <PageSection
      isPageSmallSize
      isImageFirst={false}
      image="../../mission-and-vision-photos/mission.png"
    >
      <div className="flex flex-col text-gray-950 justify-center
        lg:gap-6 lg:w-1/2
        md:gap-3
        xs:gap-3
       "
      >
        <p className="text-4xl text-bloomTitle font-medium
           lg:text-4xl lg:text-start
           md:text-[26px] md:text-center md:font-semibold
           xs:text-2xl xs:text-start xs:font-semibold
         "
        >
          {t("missionAndVisionPage.mission.title")}
        </p>

        <div className="flex flex-col font-normal text-bloomBody
          lg:text-base
          md:text-base
          xs:text-base xs:leading-6
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
