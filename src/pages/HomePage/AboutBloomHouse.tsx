import { useTranslation } from "react-i18next";
import arrowRight from "../../assets/icons/arrowRight/arrowRight.svg";

export const AboutBloomHouse = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row gap-16 px-20">
      <div className="flex flex-col justify-center gap-6">
        <h1 className=" font-normal text-5xl text-gray-950">
          {t("homePage.aboutBloomHouse.aboutBloomHouseTitle")}
        </h1>
        <div>
          <p className="font-light text-base text-gray-950">
            {t("homePage.aboutBloomHouse.aboutBloomHouseDescriptionBulletOne")}
          </p>
          <p className="font-light text-base text-gray-950">
            {t("homePage.aboutBloomHouse.aboutBloomHouseDescriptionBulletTwo")}
          </p>
          <p className="font-light text-base text-gray-950">
            {t(
              "homePage.aboutBloomHouse.aboutBloomHouseDescriptionBulletThree"
            )}
          </p>
          <p className="font-light text-base text-gray-950">
            {t("homePage.aboutBloomHouse.aboutBloomHouseDescriptionBulletFour")}
          </p>
        </div>
        <button className="h-14 w-fit mt-8 px-6 rounded-none bg-black text-white flex items-center justify-center gap-3">
          {t("homePage.aboutBloomHouse.aboutBloomHouseButton")}
          <img src={arrowRight} />
        </button>
      </div>
      <img src="src/assets/home-page-photos/5P4A3419.png" />
    </div>
  );
};
