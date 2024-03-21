import { useTranslation } from "react-i18next";
import { PageDescriptionHeader } from "../../components/PageDescriptionHeader";
import { PageSection } from "../../components/PageSection";
import { Button } from "../../components/Button";
import { ArrowIcon } from "../../assets/arrow/arrowIcon";

export const AboutUsSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <PageDescriptionHeader
        image="../../about-us-page-photos/aboutUs.png"
        title={t("aboutUsPage.about.title")}
        navOne={t("aboutUsPage.about.nav2")}
      />
      <PageSection
        isImageFirst
        imageClassName="w-full"
        image="../../about-us-page-photos/mainPic1.png"
      >
        <div
          className="flex flex-col text-gray-950 justify-center
          lg:gap-8
          md:gap-3
          xs:gap-3
         "
        >
          <p
            className="text-4xl text-gray-950 font-medium
             lg:text-3xl lg:self-start
             md:text-2xl md:self-center
             xs:text-2xl xs:self-start
           "
          >
            {t("aboutUsPage.mainContent.title")}
          </p>
          <div className="flex flex-col gap-8">
            <div
              className="flex flex-col font-normal
              lg:text-base lg:gap-6
              md:text-sm
              xs:text-base
             "
            >
              <p>{t("aboutUsPage.mainContent.text.p1")}</p>
              <p>{t("aboutUsPage.mainContent.text.p2")}</p>
              <p>{t("aboutUsPage.mainContent.text.p3")}</p>
              <p>{t("aboutUsPage.mainContent.text.p4")}</p>
              <p>{t("aboutUsPage.mainContent.text.p5")}</p>
            </div>

            <Button
              link={`/mission-and-vision/${i18n.language}`}
              type="outlined"
              endIcon={<ArrowIcon color="black" width={24} height={24} />}
            >
              {t("aboutUsPage.mainContent.button")}
            </Button>
          </div>
        </div>
      </PageSection>
    </>
  );
};
