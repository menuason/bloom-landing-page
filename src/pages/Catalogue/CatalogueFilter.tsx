import { FC, useState } from "react";
import FilterItem from "./FilterItem";
import { useTranslation } from "react-i18next";
import { Separator } from "@radix-ui/react-separator";
import { Colors } from "../../components/FilterSection";
import { ArrowDownIcon } from "../../../public/icons/arrowDown/arrowDownIcon";

interface CatalogueFilterProps {
  colors: Colors;
  brands: string[];
  onChange: (
    checked: string | boolean,
    label: string,
    filterType: "color" | "brand",
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
    <div className="flex flex-col lg:w-52 md:w-full xs:w-full gap-4">
      <Separator orientation="horizontal" className="h-[1px] bg-stone-300 mr-[-16px]" />

      <div>
        <button
          className="w-full h-12 text-left focus:outline-none flex justify-between items-center"
          onClick={toggleColorsAccordion}
        >
          {t("cataloguePage.filterType.colour")}
          <span className={`transform ${isColorsOpen ? "rotate-180" : " "}`}>
            <ArrowDownIcon />
          </span>
        </button>
        <div
          className={`transition-max-height max-h-0 overflow-hidden ${
            isColorsOpen ? "max-h-full" : ""
          }`}
        >
          <FilterItem
            colorItems={colors}
            onChange={(checked, label) => onChange(checked, label, "color")}
          />
        </div>
      </div>

      <Separator orientation="horizontal" className="h-[1px] bg-stone-300 mr-[-16px]" />

      <div>
        <button
          className="w-full h-12 text-left focus:outline-none flex justify-between items-center"
          onClick={toggleBrandsAccordion}
        >
          {t("cataloguePage.filterType.brand")}
          <span className={`transform ${isBrandsOpen ? "rotate-180" : " "}`}>
           <ArrowDownIcon />
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
