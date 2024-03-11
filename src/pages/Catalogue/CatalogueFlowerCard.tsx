import { FC } from "react";
import { CatalogueFlower } from "./CataloguePage";

interface CatalogueFlowerCardProps {
  flower: CatalogueFlower;
}

const CatalogueFlowerCard: FC<CatalogueFlowerCardProps> = ({ flower }) => {
  return (
    <>
      <div
        className="
          w-[304px] h-[312px]
          lg:w-[304px] lg:h-[312px]
          md:w-[304px] md:h-[312px]
          xs:w-24 xs:h-24
          flex flex-col items-center justify-center bg-[#F6F6F7]
       "
      >
        <img
          src={flower.image}
          alt="Bloom House Flower"
          className="
            w-56 h-56
            lg:w-56 lg:h-56
            md:w-56 md:h-56
            xs:w-32 xs:h-32
            object-cover cursor-pointer"
        />
      </div>
      <div className="flex flex-col py-3 gap-1 text-start bg-white">
        <span className="font-medium text-base lg:text-base md:text-base xs:text-xs">{flower.name}</span>
        <span className="font-light text-sm lg:text-sm md:text-sm xs:text-xs">{flower.brand}</span>
      </div>
    </>
  );
};

export default CatalogueFlowerCard;
