// components/TailwindAccordion.jsx
import { FC, useState } from "react";
import arrowDown from "../../assets/icons/arrowDown/arrowDown.svg";
import FilterItem from "./FilterItem";

interface CatalogueFilterProps {
  colors: string[];
  brands: string[];
}

const CatalogueFilter: FC<CatalogueFilterProps> = ({ colors, brands }) => {
  const [isColorsOpen, setColorsOpen] = useState(false);
  const [isBrandsOpen, setBrandsOpen] = useState(false);

  const toggleColorsAccordion = () => {
    setColorsOpen(!isColorsOpen);
    setBrandsOpen(false);
  };

  const toggleBrandsAccordion = () => {
    setBrandsOpen(!isBrandsOpen);
    setColorsOpen(false);
  };

  return (
    <div className="flex flex-col w-52">
      <div className="overflow-hidden border-t border-stone-300">
        <button
          className="w-full h-12 text-left py-2 px-2 focus:outline-none flex justify-between items-center"
          onClick={toggleColorsAccordion}
        >
          Color
          <span className={`transform ${isColorsOpen ? "rotate-180" : ""}`}>
            <img src={arrowDown} alt="Arrow Down" />
          </span>
        </button>
        <div
          className={`transition-max-height max-h-0 overflow-hidden ${
            isColorsOpen ? "max-h-full" : ""
          }`}
        >
          <FilterItem items={colors} />
        </div>
      </div>

      <div className="overflow-hidden border-t border-stone-300">
        <button
          className="w-full h-20 text-left py-2 px-2 focus:outline-none flex justify-between items-center"
          onClick={toggleBrandsAccordion}
        >
          Brands <img src={arrowDown} alt="Arrow Down" className="mt-0.5" />
        </button>
        <div
          className={`transition-transform transform origin-top ${
            isBrandsOpen ? "scale-y-100" : "scale-y-0"
          }`}
        >
          <FilterItem items={brands} />
        </div>
      </div>
    </div>
  );
};

export default CatalogueFilter;
