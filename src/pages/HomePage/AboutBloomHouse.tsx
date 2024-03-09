import { useTranslation } from "react-i18next";
import { PageSection } from "../../components/PageSection";
import { ArrowRightIcon } from "../../assets/icons/arrowRight/arrowRight";
import { Button } from "../../components/Button";

export const AboutBloomHouse = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <PageSection
        isImageFirst={false}
        image="src/assets/home-page-photos/5P4A3419.png"
      >
        <div className="flex flex-col text-gray-950 justify-center
          lg:gap-6
          md:gap-6
          xs:gap-3
         "
        >
          <p className="text-gray-950 items-center font-medium
             lg:text-3xl lg:self-start lg:text-start
             md:w-[350px] md:text-2xl md:text-center md:self-center
             xs:text-2xl xs:text-start
            "
          >
            {t("homePage.aboutBloomHouse.aboutBloomHouseTitle")}
          </p>
          <div className="font-normal
              lg:text-base
              md:text-sm
              xs:text-sm
            "
          >
            <p>
              {t("homePage.aboutBloomHouse.aboutBloomHouseDescriptionBulletOne")}
            </p>
            <p>
              {t("homePage.aboutBloomHouse.aboutBloomHouseDescriptionBulletTwo")}
            </p>
            <p>
              {t("homePage.aboutBloomHouse.aboutBloomHouseDescriptionBulletThree")}
            </p>
            <p>
              {t("homePage.aboutBloomHouse.aboutBloomHouseDescriptionBulletFour")}
            </p>
          </div>

          <Button
            link={`/about-us/${i18n.language}`}
            endIcon={<ArrowRightIcon color="black" width={12} height={12} />}
            type="outlined"
          >
            {t("homePage.aboutBloomHouse.aboutBloomHouseButton")}
          </Button>
        </div>
      </PageSection>
    </>
  );
};
