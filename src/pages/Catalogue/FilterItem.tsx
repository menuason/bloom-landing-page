import { FC } from "react";
import { useTranslation } from "react-i18next";
import { CheckboxBloom } from "../../components/Checkbox";
import { Colors } from "../../components/FilterSection";

interface FilterItemProps {
  colorItems?: Colors;
  items?: string[];
  onChange: (checked: string | boolean, label: string) => void;
}

const FilterItem: FC<FilterItemProps> = ({ items, colorItems, onChange }) => {
  const { i18n } = useTranslation();

  return (
    <div className="flex flex-col gap-3">
      {
        items && (
          items.map((item, ind) => (
            <CheckboxBloom
              key={ind}
              id={ind}
              label={item}
              onChange={(checked, label) => onChange(checked, label)}
            />
          ))
        )
      }


      {
        colorItems && (
          colorItems[i18n.language].displayNames.map((item, ind) => {
            const label = colorItems[i18n.language].names[ind];
            return (
              <CheckboxBloom
                key={ind}
                id={ind}
                label={item}
                onChange={(checked) => onChange(checked, label)}
              />
            );
          }))
      }
    </div>
  );
};

export default FilterItem;
