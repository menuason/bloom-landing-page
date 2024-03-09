import { useTranslation } from "react-i18next";

interface FlowersArr {
  img: string;
  hoverImg: string;
  name: string;
  author: string;
}

export const Assortment = () => {
  const { t } = useTranslation();

  const flowersArr: FlowersArr[] = [
    {
      img: "src/assets/flowers/5P4A32631-1.png",
      hoverImg: "src/assets/flowers/5P4A32631-2.png",
      name: t("homePage.flowers.mondello.name"),
      author: t("homePage.flowers.mondello.author"),
    },
    {
      img: "src/assets/flowers/5P4A3265-1.png",
      hoverImg: "src/assets/flowers/5P4A3265-2.png",
      name: t("homePage.flowers.snowKing.name"),
      author: t("homePage.flowers.snowKing.author"),
    },
    {
      img: "src/assets/flowers/5P4A3260-1.png",
      hoverImg: "src/assets/flowers/5P4A3260-2.png",
      name: t("homePage.flowers.mariatta.name"),
      author: t("homePage.flowers.mariatta.author"),
    },
    {
      img: "src/assets/flowers/5P4A3269-1.png",
      hoverImg: "src/assets/flowers/5P4A3269-2.png",
      name: t("homePage.flowers.briliance.name"),
      author: t("homePage.flowers.briliance.author"),
    },
  ];

  return (
    <div className="flex flex-col items-center lg:gap-1 lg:px-20 md:px-8 md:my-6 xs:pl-4 xs:gap-4">
      <div className="flex flex-col justify-center items-center lg:gap-2 md:gap-1 xs:gap-2">
        <h1
          className="text-gray-950
            lg:font-normal lg:text-5xl
            md:font-medium md:text-2xl
            xs:font-medium xs:text-2xl
          "
        >
          {t("homePage.assortment.assortmentSectionTitle")}
        </h1>

        <p
          className="text-gray-950 lg:w-10/12 font-normal
            lg:text-base lg:text-center
            md:text-sm  md:text-center
            xs:text-sm xs:items-start
          "
        >
          {t("homePage.assortment.assortmentSectionDescription")}
        </p>
      </div>
      <div
        className="flex flex-row gap-4 mt-9
            lg:h-96 lg:overflow-hidden
            md:h-52 md:overflow-hidden
            xs:h-52 xs:overflow-x-auto xs:whitespace-nowrap
          "
      >
        {flowersArr.map((item, index) => {
          return (
            <div
              key={index}
              className="lg:w-1/4 lg:xs:shrink-1 relative h-full md:w-1/4 md:felx-1 xs:w-1/2 xs:shrink-0"
            >
              <img
                alt="Bloom House"
                src={item.img}
                className="w-full h-full object-cover transition-opacity opacity-100 hover:opacity-0 absolute inset-0 cursor-pointer"
              />
              <img
                src={item.hoverImg}
                alt={`Image ${item.name}`}
                className="w-full h-full object-cover cursor-pointer"
              />
              <div className="w-full lg:h-1/5 bg-[#23242759] text-white flex items-start justify-center flex-col px-4 absolute bottom-0 left-0 opacity-1 md:h-1/4 xs:h-1/4">
                <h4 className="font-medium lg:text-2xl md:text-base xs:text-base">
                  {item.name}
                </h4>
                <p className="font-extralight text-xs">{item.author}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
