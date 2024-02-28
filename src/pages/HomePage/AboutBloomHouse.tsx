import { useTranslation } from "react-i18next";
import arrowRight from "../../assets/icons/arrowRight/arrowRight.svg";

export const AboutBloomHouse = () => {
  const { t } = useTranslation();

  return (
    <div
      className="flex
        lg:flex-row lg:gap-16 lg:px-20
        md:flex-col md:px-8 md:gap-2
        xs:flex-col xs:px-6 xs:gap-2
      "
    >
      <div
        className="flex justify-center gap-6
          lg:items-start
          md:flex-col md:items-center
          xs:flex-col xs:items-start
        "
      >
        <h1
          className="text-gray-950
            lg:font-normal lg:text-5xl
            md:font-medium md:text-2xl
            xs:font-medium xs:text-2xl
          "
        >
          {t("homePage.aboutBloomHouse.aboutBloomHouseTitle")}
        </h1>
        <div>
          <p
            className="font-light text-gray-950
              lg:text-base
              md:text-sm
              xs:text-sm
            "
          >
            {t("homePage.aboutBloomHouse.aboutBloomHouseDescriptionBulletOne")}
          </p>
          <p
            className="font-light text-gray-950
              lg:text-base
              md:text-sm
              xs:text-sm
            "
          >
            {t("homePage.aboutBloomHouse.aboutBloomHouseDescriptionBulletTwo")}
          </p>
          <p
            className="font-light text-gray-950
              lg:text-base
              md:text-sm
              xs:text-sm
            "
          >
            {t(
              "homePage.aboutBloomHouse.aboutBloomHouseDescriptionBulletThree"
            )}
          </p>
          <p
            className="font-light text-gray-950
              lg:text-base
              md:text-sm
              xs:text-sm
            "
          >
            {t("homePage.aboutBloomHouse.aboutBloomHouseDescriptionBulletFour")}
          </p>
        </div>
        <button
          className="w-fit bg-black px-4 text-white rounded-none flex items-center justify-center gap-3
            lg:h-14 lg:mt-8 lg:text-base
            md:h-9  md:mb-10 md:mt-8 md:text-sm
            xs:h-9 xs:mb-8 mt-6 xs:text-sm
          "
        >
          {t("homePage.aboutBloomHouse.aboutBloomHouseButton")}
          <img src={arrowRight} />
        </button>
      </div>
      <img src="src/assets/home-page-photos/5P4A3419.png" />
    </div>
  );
};
