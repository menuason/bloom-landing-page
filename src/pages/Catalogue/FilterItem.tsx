import { FC } from "react";
import { CheckboxBloom } from "../../components/Checkbox";

interface FilterItemProps {
  items: string[];
  onChange: (checked: string | boolean, label: string) => void;
}

const FilterItem: FC<FilterItemProps> = ({ items, onChange }) => {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, ind) => (
        <CheckboxBloom
          key={ind}
          id={ind}
          label={item}
          onChange={(checked, label) => onChange(checked, label)}
        />
      ))}
    </div>
  );
};

export default FilterItem;
