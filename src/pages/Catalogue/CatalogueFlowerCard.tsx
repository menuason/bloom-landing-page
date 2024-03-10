import { FC } from "react";
import { CatalogueFlower } from "./CataloguePage";

interface CatalogueFlowerCardProps {
  flower: CatalogueFlower;
}

const CatalogueFlowerCard: FC<CatalogueFlowerCardProps> = ({ flower }) => {
  return (
    <>
      <div className=" w-[304px] h-[312px] flex flex-col items-center justify-center bg-[#F6F6F7]">
        <img
          src={flower.image}
          alt="Bloom House Flower"
          className="w-56 h-56 object-cover cursor-pointer"
        />
      </div>
      <div className="flex flex-col py-3 gap-1 text-start">
        <span className="font-medium text-base">{flower.name}</span>
        <span className="font-light text-sm">{flower.brand}</span>
      </div>
    </>
  );
};

export default CatalogueFlowerCard;
