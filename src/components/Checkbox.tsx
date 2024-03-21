import { FC } from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import * as Checkbox from "@radix-ui/react-checkbox";

interface CheckboxBloomProps {
  id: number;
  label: string;
  onChange: (checked: Checkbox.CheckedState, label: string) => void;
}

export const CheckboxBloom: FC<CheckboxBloomProps> = ({
  id,
  label,
  onChange,
}) => {
  return (
    <div className="flex gap-3 items-center py-1.5">
      <Checkbox.Root
        key={id}
        className="flex items-center justify-center border-2 border-bloomBlack rounded-sm h-4 w-4"
        onCheckedChange={(checked) => onChange(checked, label)}
      >
        <Checkbox.Indicator>
          <CheckIcon style={{ strokeWidth: 1, stroke: "black" }} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="flex items-center">{label}</label>
    </div>
  );
};
