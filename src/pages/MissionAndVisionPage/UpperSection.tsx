import { PageSection } from "../../components/PageSection";
import { useTranslation } from "react-i18next";

export const MissionAndVisionUpperSection = () => {
  const { t } = useTranslation();

  return (
    <PageSection
      isImageFirst
      image="../../mission-and-vision-photos/productMain.png"
    >
      <div className="flex flex-col text-gray-950 justify-center
        lg:gap-6
        md:gap-3
        xs:gap-3
       "
      >
        <p className="text-4xl text-bloomTitle font-medium
         lg:text-3xl lg:text-start
         md:text-2xl md:text-center
         xs:text-2xl xs:text-start
         "
        >
          {t("missionAndVisionPage.product.title")}
        </p>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col font-normal text-bloomBody
              lg:text-base lg:gap-6
              md:text-sm
              xs:text-base xs:leading-6
             "
          >
            <p>
              <b>{t("missionAndVisionPage.product.text.boldP1")}</b>
              {t("missionAndVisionPage.product.text.p1")}
            </p>
            <p>
              <b>{t("missionAndVisionPage.product.text.boldP2")}</b>
              {t("missionAndVisionPage.product.text.p2")}
            </p>
            <p>
              <b>{t("missionAndVisionPage.product.text.boldP3")}</b>
              {t("missionAndVisionPage.product.text.p3")}
            </p>
            <p>
              <b>{t("missionAndVisionPage.product.text.boldP4")}</b>
              {t("missionAndVisionPage.product.text.p4")}
            </p>
          </div>
        </div>
      </div>
    </PageSection>
  )
}
