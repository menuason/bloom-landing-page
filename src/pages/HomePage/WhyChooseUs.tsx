import { useTranslation } from "react-i18next";
import precisionCultivation from "../../../public/icons/iconsForChoosUs/precisionCultivation.svg";
import temperature from "../../../public/icons/iconsForChoosUs/Temperature.svg";
import timeConsuming from "../../../public/icons/iconsForChoosUs/timeConsuming.svg";

interface IconsForChooseUs {
  icon: string;
  textOne: string;
  textTwo: string;
}

interface InfoForChooseUs {
  number: number;
  header: string;
  description: string;
}

export const WhyChooseUs = () => {
  const { t } = useTranslation();

  const iconsForChooseUs: IconsForChooseUs[] = [
    {
      icon: timeConsuming,
      textOne: t("homePage.whyChooseUs.reasons.icons.seedling1"),
      textTwo: t("homePage.whyChooseUs.reasons.icons.seedling2"),
    },
    {
      icon: precisionCultivation,
      textOne: t("homePage.whyChooseUs.reasons.icons.cultivation1"),
      textTwo: t("homePage.whyChooseUs.reasons.icons.cultivation2"),
    },
    {
      icon: temperature,
      textOne: t("homePage.whyChooseUs.reasons.icons.temperature1"),
      textTwo: t("homePage.whyChooseUs.reasons.icons.temperature2"),
    },
  ];

  const infoForChooseUs: InfoForChooseUs[] = [
    {
      number: 1,
      header: t("homePage.whyChooseUs.reasons.numbers.oneTitle"),
      description: t("homePage.whyChooseUs.reasons.numbers.oneDescription"),
    },
    {
      number: 2,
      header: t("homePage.whyChooseUs.reasons.numbers.twoTitle"),
      description: t("homePage.whyChooseUs.reasons.numbers.twoDescription"),
    },
    {
      number: 3,
      header: t("homePage.whyChooseUs.reasons.numbers.threeTitle"),
      description: t("homePage.whyChooseUs.reasons.numbers.threeDescription"),
    },
  ];

  return (
    <div
      className="flex
      lg:flex-col lg:gap-1 lg:px-20
      md:flex-col md:px-8
      xs:flex-col xs:px-4 xs:gap-6
      "
    >
      <div
        className="flex flex-col text-gray-950
        lg:gap-6 lg:self-center
        md:gap-6 md:text-center
        xs:gap-3 xs:text-start
         "
      >
        <p
          className="text-bloomTitle items-center font-medium w-full
           lg:text-3xl
           md:text-2xl
           xs:text-2xl
          "
        >
          {t("homePage.whyChooseUs.whyChooseUsTitle")}
        </p>
        <div
          className="font-normal text-bloomBody
          lg:text-base
          md:text-sm
          xs:text-base
          "
        >
          <p>{t("homePage.whyChooseUs.whyChooseDescription")}</p>
        </div>
      </div>
      <div className="flex lg:mt-9 lg:flex-row md:flex-col xs:flex-col">
        <div className="flex flex-col m-0">
          <img
            src="../../home-page-photos/5P4A3279.png"
            alt="Bloom House"
          />
          <div className="h-40 w-640 flex items-center justify-between">
            {iconsForChooseUs.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full h-full border-r border-[#b0b4c0] flex flex-col items-center justify-center gap-3 last:border-0"
                >
                  <img src={item.icon} alt="Bloom House" />
                  <span>
                    <p
                      className="text-center font-normal
                      lg:text-base
                      md:text-sm
                      xs:text-base
                    "
                    >
                      {item.textOne}
                    </p>
                    <p
                      className="text-center font-normal
                      lg:text-base
                      md:text-sm
                      xs:text-base
                    "
                    >
                      {item.textTwo}
                    </p>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col lg:w-1/2">
          {infoForChooseUs.map((item, index) => {
            return (
              <div
                key={index}
                className="h-fit min-h-40 flex gap-2 text-bloomBody first:border-b first:border-[#b0b4c0] p-6 last:bg-[#232427] last:text-white
                  lg:first:border-t-0
                  md:first:border-t
                  xs:first:border-t
                "
              >
                <h1 className="text-5xl text-[#529b3c]">{item.number}</h1>
                <div className="flex flex-col ml-2 gap-2">
                  <h4 className="font-medium lg:text-xl md:text-xl xs:text-lg">
                    {item.header}
                  </h4>
                  <p className={`w-11/12 font-normal text-base lg:text-base md:text-sm xs:text-xs xs:leading-6
                    ${index === infoForChooseUs.length - 1 ? "text-[#e2e2e2]" : ""}`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
