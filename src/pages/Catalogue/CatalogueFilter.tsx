import { FC, useState } from "react";
import arrowDown from "../../assets/icons/arrowDown/arrowDown.svg";
import FilterItem from "./FilterItem";
import { useTranslation } from "react-i18next";

interface CatalogueFilterProps {
  colors: string[];
  brands: string[];
  onChange: (
    checked: string | boolean,
    label: string,
    filterType: "color" | "brand"
  ) => void;
}

const CatalogueFilter: FC<CatalogueFilterProps> = ({
  colors,
  brands,
  onChange,
}) => {
  const { t } = useTranslation();
  const [isColorsOpen, setColorsOpen] = useState(true);
  const [isBrandsOpen, setBrandsOpen] = useState(true);

  const toggleColorsAccordion = () => {
    setColorsOpen(!isColorsOpen);
  };

  const toggleBrandsAccordion = () => {
    setBrandsOpen(!isBrandsOpen);
  };

  return (
    <div className="flex flex-col w-52">
      <div className="overflow-hidden border-t border-stone-300">
        <button
          className="w-full h-12 text-left focus:outline-none flex justify-between items-center"
          onClick={toggleColorsAccordion}
        >
          {t("cataloguePage.filterType.colour")}
          <span className={`transform ${isColorsOpen ? "rotate-180" : " "}`}>
            <img src={arrowDown} alt="Arrow Down" />
          </span>
        </button>
        <div
          className={`transition-max-height max-h-0 overflow-hidden ${
            isColorsOpen ? "max-h-full" : ""
          }`}
        >
          <FilterItem
            items={colors}
            onChange={(checked, label) => onChange(checked, label, "color")}
          />
        </div>
      </div>

      <div className="overflow-hidden border-t border-stone-300 mt-4">
        <button
          className="w-full h-12 text-left focus:outline-none flex justify-between items-center"
          onClick={toggleBrandsAccordion}
        >
          {t("cataloguePage.filterType.brand")}
          <span className={`transform ${isBrandsOpen ? "rotate-180" : " "}`}>
            <img src={arrowDown} alt="Arrow Down" />
          </span>
        </button>
        <div
          className={`transition-max-height max-h-0 overflow-hidden ${
            isBrandsOpen ? "max-h-full" : " "
          }`}
        >
          <FilterItem
            items={brands}
            onChange={(checked, label) => onChange(checked, label, "brand")}
          />
        </div>
      </div>
    </div>
  );
};

export default CatalogueFilter;
