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
          p-4
          w-full
          aspect-w-1 aspect-h-1
          md:aspect-w-1 md:aspect-h-1
          xs:aspect-w-1 xs:aspect-h-1
          bg-[#F6F6F7]
          flex items-center justify-center
        "
      >
        <img
          src={flower.image}
          alt="Bloom House Flower"
          className="object-cover cursor-pointer max-h-full max-w-full w-full h-full"
        />
      </div>
      <div className="flex flex-col py-3 gap-0.5 bg-white w-full items-start">
        <span className="lg:font-medium text-base text-start lg:text-lg md:text-base md:font-semibold xs: xs:font-semibold text-bloomTitle">
          {flower.name}
        </span>
        <span className="font-normal text-sm text-start lg:text-sm md:text-sm xs:text-sm text-bloomBody">
          {flower.brand}
        </span>
      </div>
    </>
  );
};

export default CatalogueFlowerCard;
