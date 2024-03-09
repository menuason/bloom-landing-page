import { useTranslation } from "react-i18next";
import precisionCultivation from "../../assets/icons/iconsForChoosUs/precisionCultivation.svg";
import temperature from "../../assets/icons/iconsForChoosUs/Temperature.svg";
import timeCosuming from "../../assets/icons/iconsForChoosUs/timeCosuming.svg";

interface IconsForChooseUs {
  icon: string;
  text: string;
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
      icon: timeCosuming,
      text: t("homePage.whyChooseUs.reasons.icons.seedling"),
    },
    {
      icon: precisionCultivation,
      text: t("homePage.whyChooseUs.reasons.icons.cultivation"),
    },
    {
      icon: temperature,
      text: t("homePage.whyChooseUs.reasons.icons.temperature"),
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
        lg:flex-col lg:items-center lg:gap-1 lg:px-20
        md:flex-col md:items-center md:px-8
        xs:flex-col xs:items-center xs:px-4
      "
    >
      <div
        className="flex gap-2
          lg:flex-col lg:items-center lg:justify-center
          md:flex-col md:items-center md:justify-center
          xs:flex-col  xs:items-start
        "
      >
        <h1
          className=" text-gray-950
            lg:font-normal lg:text-5xl
            md:font-medium md:text-2xl
            xs:font-medium xs:text-2xl
          "
        >
          {t("homePage.whyChooseUs.whyChooseUsTitle")}
        </h1>

        <p
          className="text-gray-950 font-normal
            lg:w-8/12 lg:text-base lg:text-center
            md:text-sm
            xs:text-sm xs:w-full
          "
        >
          {t("homePage.whyChooseUs.whyChooseDescription")}
        </p>
      </div>
      <div className="flex mt-9 lg:flex-row md:flex-col xs:flex-col">
        <div className="flex flex-col m-0">
          <img src="/src/assets/home-page-photos/5P4A3279.png" />
          <div className="h-40 w-640 flex items-center justify-between">
            {iconsForChooseUs.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full h-full border-r border-[#b0b4c0] flex flex-col items-center justify-center gap-3 last:border-0"
                >
                  <img src={item.icon} alt="Bloom House"/>
                  <p
                    className="w-1/2 text-center font-normal
                      lg:text-base
                      md:text-sm md:w-2/6
                      xs:text-sm xs:w-10/12
                    "
                  >
                    {item.text}
                  </p>
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
                className="h-fit min-h-40 flex gap-2 first:border-b first:border-[#b0b4c0] p-6 last:bg-[#1f2023] last:text-white
                  lg:first:border-t-0
                  md:first:border-t
                  xs:first:border-t
                "
              >
                <h1 className="text-5xl text-[#529b3c]">{item.number}</h1>
                <div className="flex flex-col ml-2 gap-2">
                  <h4 className="font-normal lg:text-xl md:text-xl xs:text-lg">
                    {item.header}
                  </h4>
                  <p className="w-11/12 font-normal text-base lg:text-base md:text-sm xs:text-xs">
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
