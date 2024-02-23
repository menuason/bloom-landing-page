import precisionCultivation from "../../assets/icons/iconsForChoosUs/precisionCultivation.svg";
import temperature from "../../assets/icons/iconsForChoosUs/Temperature.svg";
import timeCosuming from "../../assets/icons/iconsForChoosUs/timeCosuming.svg";

const iconsForChooseUs = [
  { icon: timeCosuming, text: "Best Seedlings" },
  { icon: temperature, text: "Precision Cultivation" },
  { icon: precisionCultivation, text: "Temperature Control" },
];

const infoForChooseUs = [
  {
    number: 1,
    header: "Best Seedlings",
    description:
      "Our commitment to using the best Dutch seedlings ensures the quality, luster, and longevity of our gerberas.",
  },
  {
    number: 2,
    header: "Precision Cultivation",
    description:
      "Every stage of gerbera cultivation is meticulously managed to ensure optimal growth and excellent flowering.",
  },
  {
    number: 3,
    header: "Temperature Control",
    description:
      "The perfect temperature for gerberas is ensured through our advanced control systems, ensuring they thrive in a comfortable and conducive environment.",
  },
];

export const WhyChooseUs = () => {
  return (
    <div className="flex flex-col items-center gap-1 m-[72px]">
      <h1 className="text-4xl text-gray-950">Why Choose Us?</h1>

      <h6 className="w-8/12 text-center font-light text-base text-gray-950">
        Our greenhouses are meticulously crafted to provide the optimal
        environment for year-round gerbera cultivation, ensuring a constant
        bloom of vibrant colors and exquisite blossoms.
      </h6>
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
