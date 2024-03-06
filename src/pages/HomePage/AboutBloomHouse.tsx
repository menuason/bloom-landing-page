import { useTranslation } from "react-i18next";
import { PageSection } from "../../components/PageSection";
import { ArrowRightIcon } from "../../assets/icons/arrowRight/arrowRight";

export const AboutBloomHouse = () => {
  const { t } = useTranslation();

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
          <div className="font-light
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
      </PageSection>
    </>
  );
};
