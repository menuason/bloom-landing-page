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
      img: "../../home-page-photos/5P4A32631-1.png",
      hoverImg: "../../home-page-photos/5P4A32631-2.png",
      name: t("homePage.flowers.mondello.name"),
      author: t("homePage.flowers.mondello.author"),
    },
    {
      img: "../../home-page-photos/5P4A3265-1.png",
      hoverImg: "../../home-page-photos/5P4A3265-2.png",
      name: t("homePage.flowers.snowKing.name"),
      author: t("homePage.flowers.snowKing.author"),
    },
    {
      img: "../../home-page-photos/5P4A3260-1.png",
      hoverImg: "../../home-page-photos/5P4A3260-2.png",
      name: t("homePage.flowers.mariatta.name"),
      author: t("homePage.flowers.mariatta.author"),
    },
    {
      img: "../../home-page-photos/5P4A3269-1.png",
      hoverImg: "../../home-page-photos/5P4A3269-2.png",
      name: t("homePage.flowers.briliance.name"),
      author: t("homePage.flowers.briliance.author"),
    },
  ];

  return (
    <div className="flex flex-col items-center lg:mt-12 lg:gap-1 lg:px-20 md:px-8 md:my-6 xs:pl-4 xs:gap-4 xs:mt-6">
      <div className="flex flex-col justify-center lg:items-center lg:gap-4 md:items-center md:gap-1 xs:gap-2">
        <p
          className="text-bloomTitle font-medium capitalize
             lg:text-4xl lg:text-center
             md:text-2xl md:text-start md:font-semibold
             xs:text-2xl xs:text-start xs:font-semibold
          "
        >
          {t("homePage.assortment.assortmentSectionTitle")}
        </p>

        <p
          className="text-bloomBody lg:w-3/5 font-normal
            lg:text-base lg:text-center
            md:text-sm md:text-center
            xs:text-base xs:items-start  xs:leading-6
          "
        >
          {t("homePage.assortment.assortmentSectionDescription")}
        </p>
      </div>
      <div
        className="flex items-center gap-4 w-full
            lg:h-96 lg:overflow-visible lg:mt-9
            md:h-64 md:overflow-visible
            xs:h-64 xs:overflow-x-auto xs:whitespace-nowrap
          "
      >
        {flowersArr.map((item, index) => {
          return (
            <div
              key={index}
              className="
                relative h-full flex-1
                lg:flex-1
                md:flex-1
                xs:min-w-44 xs:flex-1
              "
            >
              <img
                alt="Bloom House"
                src={item.img}
                className="w-full h-full object-cover transition-opacity opacity-100 hover:opacity-0 absolute inset-0"
              />
              <img
                src={item.hoverImg}
                alt={`Image ${item.name}`}
                className="w-full h-full object-cover"
              />
              <div
                className="
                  w-full bg-[#23242759] text-white flex items-start justify-center flex-col px-4 absolute bottom-0 left-0 opacity-1
                  lg:h-1/5
                  md:h-1/4
                  xs:h-1/4
                "
              >
                <h4 className="font-medium lg:text-2xl md:text-base xs:text-sm">
                  {item.name}
                </h4>
                <p className="text-sm text-[#E2E2E2]">{item.author}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
