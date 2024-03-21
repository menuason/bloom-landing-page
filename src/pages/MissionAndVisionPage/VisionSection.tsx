import { useTranslation } from "react-i18next";
import { PageSection } from "../../components/PageSection";

export const VisionSection = () => {
  const { t } = useTranslation();

  return (
    <PageSection
      isImageFirst
      image="../../mission-and-vision-photos/vision.png"
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
          {t("missionAndVisionPage.vision.title")}
        </p>

        <div className="flex flex-col font-normal
          lg:text-base lg:pr-5
          md:text-sm
          xs:text-base
         "
        >
          <p>{t("missionAndVisionPage.vision.texts.p1")}</p>
          <p>{t("missionAndVisionPage.vision.texts.p2")}</p>
        </div>
      </div>
    </PageSection>
  )
}
