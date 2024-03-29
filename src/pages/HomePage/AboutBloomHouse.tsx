import { useTranslation } from "react-i18next";
import { Button } from "../../components/Button";
import { ArrowIcon } from "../../assets/arrow/arrowIcon";

export const AboutBloomHouse = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div
        className="flex
          lg:flex-row lg:gap-[72px] lg:px-20 lg:mt-[124px] lg:mb-[124px]
          md:flex-col md:gap-6 md:px-8 md:mt-12 md:mb-6
          xs:flex-col xs:gap-6 xs:px-4 xs:mt-6 xs:mb-6
        "
      >
        <div
          className="flex flex-col justify-center
          lg:gap-6 lg:text-start lg:w-1/2
          md:gap-4 md:text-center
          xs:gap-4 xs:text-start
         "
        >
          <p
            className="text-bloomTitle items-center w-full
            lg:text-4xl lg:leading-9
            md:text-[26px] md:font-semibold
            xs:text-2xl xs:font-semibold
           "
          >
            {t("homePage.aboutBloomHouse.aboutBloomHouseTitle")}
          </p>
          <div className="flex flex-col gap-8">
            <div
              className="font-normal text-bloomBody
              lg:text-base lg:text-start
              md:text-base md:text-center
              xs:text-base xs:text-start xs:leading-6
              "
            >
              <div className="lg:flex md:hidden xs:hidden">
                {t("homePage.aboutBloomHouse.aboutBloomHouseDescription")}
              </div>

              <p className="lg:hidden md:block xs:block">
                {t("homePage.aboutBloomHouse.aboutBloomHouseDescriptionOne")}
              </p>
            </div>
            <Button
              link={`/about-us/${i18n.language}`}
              endIcon={<ArrowIcon color="black" width={24} height={24} />}
              type="outlined"
              className="lg:flex lg:mx-0 md:mx-auto md:h-[46px]md:hidden xs:hidden"
            >
              {t("homePage.aboutBloomHouse.aboutBloomHouseButton")}
            </Button>
          </div>
        </div>

        <div className="lg:w-1/2">
          <img alt="Bloom House" src={"../../home-page-photos/home.png"} />
        </div>

        <div
          className="flex flex-col
          lg:hidden md:flex
          md:gap-6 md:text-center
          xs:flex xs:gap-4 xs:text-start"
        >
          <p
            className="text-sm text-bloomBody
             lg:hidden
             md:block md:text-center
             xs:block xs:text-start xs:leading-6 xs:text-base
            "
          >
            {t("homePage.aboutBloomHouse.aboutBloomHouseDescriptionTwo")}
          </p>
          <Button
            link={`/about-us/${i18n.language}`}
            endIcon={<ArrowIcon color="black" width={24} height={24} />}
            type="outlined"
            className="lg:mx-auto lg:hidden md:mx-auto md:flex md:self-center xs:flex xs:self-start"
          >
            {t("homePage.aboutBloomHouse.aboutBloomHouseButton")}
          </Button>
        </div>
      </div>
    </>
  );
};
