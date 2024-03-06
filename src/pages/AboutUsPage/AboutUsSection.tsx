import { ArrowRightIcon } from "../../assets/icons/arrowRight/arrowRight";
import { useTranslation } from "react-i18next";
import { PageDescriptionHeader } from "../../components/PageDescriptionHeader";
import { PageSection } from "../../components/PageSection";

export const AboutUsSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageDescriptionHeader
        image="src/assets/about-us-page-photos/aboutUs.png"
        title={t("aboutUsPage.about.title")}
        navOne={t("aboutUsPage.about.nav2")}
      />
      <PageSection
        isImageFirst
        imageClassName="w-full"
        image="src/assets/about-us-page-photos/mainPic1.png"
      >
        <div className="flex flex-col text-gray-950 justify-center
          lg:gap-8
          md:gap-3
          xs:gap-3
         "
        >
          <p className="text-4xl text-gray-950 font-medium
             lg:text-3xl lg:self-start
             md:text-2xl md:self-center
             xs:text-2xl xs:self-start
           "
          >
            {t("aboutUsPage.mainContent.title")}
          </p>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col font-normal
              lg:text-base lg:gap-6
              md:text-sm
              xs:text-sm
             "
            >
              <p>
                {t("aboutUsPage.mainContent.text.p1")}
              </p>
              <p>
                {t("aboutUsPage.mainContent.text.p2")}
              </p>
              <p>
                {t("aboutUsPage.mainContent.text.p3")}
              </p>
              <p>
                {t("aboutUsPage.mainContent.text.p4")}
              </p>
              <p>
                {t("aboutUsPage.mainContent.text.p5")}
              </p>
            </div>
            <button
              className="w-fit bg-black px-4 text-white flex items-center justify-center gap-4
                lg:py-3 lg:text-base lg:self-start
                md:py-1.5 md:text-sm md:self-center
                xs:py-1.5 xs:text-sm xs:self-start
              "
            >
              {t("homePage.aboutBloomHouse.aboutBloomHouseButton")}
              <ArrowRightIcon color="white" width={12} height={12} />
            </button>
          </div>
        </div>
      </PageSection>
    </>
  );
};
