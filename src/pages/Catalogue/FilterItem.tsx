import { FC } from "react";
import { CheckboxBloom } from "../../components/Checkbox";

interface FilterItemProps {
  items: string[];
}

const FilterItem:FC<FilterItemProps> = ({ items }) => {
  return (
    <div className="p-2 flex flex-col">
      {items.map((item, ind) => (
        <CheckboxBloom key={ind} label={item} />
      ))}
    </div>
  );
};

export default FilterItem;
