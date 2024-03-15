import { ArrowRightIcon } from "../../assets/icons/arrowRight/arrowRight";
import { useTranslation } from "react-i18next";
import { PageDescriptionHeader } from "../../components/PageDescriptionHeader";
import { PageSection } from "../../components/PageSection";
import { Button } from "../../components/Button";

export const AboutUsSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <PageDescriptionHeader
        image="https://firebasestorage.googleapis.com/v0/b/bloom-landing-page.appspot.com/o/aboutUs.png?alt=media&token=055faf2c-841f-4cd9-b81e-f75c9f3dda5c"
        title={t("aboutUsPage.about.title")}
        navOne={t("aboutUsPage.about.nav2")}
      />
      <PageSection
        isImageFirst
        imageClassName="w-full"
        image="/src/assets/about-us-page-photos/mainPic1.png"
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

            <Button
              link={`/mission-and-vision/${i18n.language}`}
              type="outlined"
              endIcon={<ArrowRightIcon color="black" width={12} height={12} />}
            >
              {t("aboutUsPage.mainContent.button")}
            </Button>
          </div>
        </div>
      </PageSection>
    </>
  );
};
