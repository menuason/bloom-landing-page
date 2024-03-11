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
    <div
      className="
        w-full h-full mt-9 flex flex-wrap gap-4
        lg:px-0
        md:px-12
        xs:px-4
    "
    >
      {currentFlowers.map((flower, index) => {
        return (
          <div
            className="flex flex-col gap-3 items-center justify-center bg-[#F6F6F7]"
            key={index}
          >
            <FlowerPreview flowers={flowers} key={flower.id} id={flower.id}>
              <CatalogueFlowerCard key={index} flower={flower} />
            </FlowerPreview>
          </div>
        );
      })}
      {pagination && (
        <div
          className="
              md:w-full md:flex md:justify-end md:mt-4
              xs:w-full xs:flex xs:justify-end xs:mt-4"
        >
          {pagination}
        </div>
      )}
    </div>
  );
};

export default CatalogueFlowersList;
