import { FC } from "react";
import { CatalogueFlower } from "./CataloguePage";
import CatalogueFlowerCard from "./CatalogueFlowerCard";

interface CatalogueFlowersListProps {
  flowers: CatalogueFlower[];
}

const CatalogueFlowersList: FC<CatalogueFlowersListProps> = ({ flowers }) => {
  return (
    <div className="w-full h-full mt-9 flex flex-wrap gap-4">
      {flowers.map((flower, ind) => {
        return (
          <div className="flex flex-col">
            <CatalogueFlowerCard key={ind} flower={flower} />
          </div>
        );
      })}
    </div>
  );
};

export default CatalogueFlowersList;
