import { FC } from "react";
import { CatalogueFlower } from "./CataloguePage";
import CatalogueFlowerCard from "./CatalogueFlowerCard";
import FlowerPreview from "../../components/CataloqueFlowerPreview";

interface CatalogueFlowersListProps {
  flowers: CatalogueFlower[];
}

const CatalogueFlowersList: FC<CatalogueFlowersListProps> = ({ flowers }) => {
  return (
    <div className="w-full h-full mt-9 flex flex-wrap gap-4">
      {flowers.map((flower, index) => {
        return (
          <div className="flex flex-col" key={index}>
            <FlowerPreview
              flowers={flowers}
              key={flower.id}
              id={flower.id}
            >
              <CatalogueFlowerCard key={index} flower={flower} />
            </FlowerPreview>
          </div>
        );
      })}
    </div>
  );
};

export default CatalogueFlowersList;
