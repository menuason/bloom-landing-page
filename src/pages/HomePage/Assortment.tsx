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
    <div className="flex flex-col items-center gap-1 m-[72px]">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className=" font-normal text-5xl text-gray-950">
          {t("homePage.assortment.assortmentSectionTitle")}
        </h1>

        <h6 className="w-8/12 text-center font-light text-base text-gray-950">
          {t("homePage.assortment.assortmentSectionDescription")}
        </h6>
      </div>
      <div className="flex flex-row gap-4 mt-9 ">
        {flowersArr.map((item, index) => {
          return (
            <div key={index} className="relative w-full h-full">
              <img
                src={item.img}
                className="w-full h-full object-cover transition-opacity opacity-100 hover:opacity-0 absolute inset-0 cursor-pointer"
              />
              <img
                src={item.hoverImg}
                alt={`Image ${item.name}`}
                className="w-full h-full object-cover cursor-pointer"
              />
              <div className="absolute bottom-0 left-0 px-4 bg-[#23242759] text-white flex items-start justify-center flex-col h-1/5 opacity-1 w-full">
                <h4 className="text-lg font-medium">{item.name}</h4>
                <p className="font-extralight text-xs">{item.author}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
