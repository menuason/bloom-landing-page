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
    <div className="flex flex-col items-center gap-1 m-[72px]">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl text-gray-950">
          {t("homePage.whyChooseUs.whyChooseUsTitle")}
        </h1>

        <h6 className="w-8/12 text-center font-light text-base text-gray-950">
          {t("homePage.whyChooseUs.whyChooseDescription")}
        </h6>
      </div>
      <div className="flex mt-9 ">
        <div className="flex flex-col m-0">
          <img src="src/assets/home-page-photos/5P4A3279.png" />
          <div className="h-40 w-640 flex items-center justify-between">
            {iconsForChooseUs.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full h-full border-r border-[#b0b4c0] flex flex-col items-center justify-center gap-3 last:border-0"
                >
                  <img src={item.icon} />
                  <p className="w-1/2 text-center">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          {infoForChooseUs.map((item, index) => {
            return (
              <div
                key={index}
                className="flex gap-2 first:border-b first:border-[#b0b4c0] p-6 h-[160px] last:bg-[#1f2023] last:text-white "
              >
                <h1 className="text-5xl text-[#529b3c]">{item.number}</h1>
                <div className="flex flex-col ml-2 gap-2">
                  <h4 className="text-xl font-light">{item.header}</h4>
                  <p className="w-11/12 font-extralight text-base">
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
