import { FC } from "react";
import { CatalogueFlower } from "./CataloguePage";
import CatalogueFlowerCard from "./CatalogueFlowerCard";
import FlowerPreview from "../../components/CataloqueFlowerPreview";

interface CatalogueFlowersListProps {
  flowers: CatalogueFlower[];
  currentPage: number;
  itemsPerPage: number;
  pagination?: React.ReactNode;
}

const CatalogueFlowersList: FC<CatalogueFlowersListProps> = ({
  flowers,
  currentPage,
  itemsPerPage,
  pagination,
}) => {
  const indexOfLastFlower = currentPage * itemsPerPage;
  const indexOfFirstFlower = indexOfLastFlower - itemsPerPage;
  const currentFlowers = flowers.slice(indexOfFirstFlower, indexOfLastFlower);

  return (
    <>
      <div className="w-full mt-9 px-4 grid grid-cols-2 gap-5 md:grid-cols-3">
        {currentFlowers.map((flower, index) => {
          return (
            <FlowerPreview flowers={flowers} key={flower.id} id={flower.id}>
              <CatalogueFlowerCard key={index} flower={flower} />
            </FlowerPreview>
          );
        })}
      </div>

      {pagination && (
        <div
          className="
          md:w-full md:flex md:justify-center md:mt-6
          xs:w-full xs:flex xs:justify-center xs:mt-6"
        >
          {pagination}
        </div>
      )}
    </>
  );
};

export default CatalogueFlowersList;
