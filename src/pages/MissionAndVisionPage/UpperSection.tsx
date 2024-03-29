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
        lg:gap-6 lg:w-1/2
        md:gap-3
        xs:gap-3
       "
      >
        <p className="text-bloomTitle font-medium
         lg:text-4xl lg:text-start lg:leading-[3rem]
         md:text-[26px] md:text-center md:font-semibold
         xs:text-2xl xs:text-start xs:font-semibold
         "
        >
          {t("missionAndVisionPage.product.title")}
        </p>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col font-normal text-bloomBody
              lg:text-base lg:gap-6
              md:text-base
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
