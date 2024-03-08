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
    <div className="flex gap-3 items-center">
      <Checkbox.Root
        key={id}
        className="flex items-center justify-center border-2 border-black rounded-sm h-4 w-4"
        onCheckedChange={(checked) => onChange(checked, label)}
      >
        <Checkbox.Indicator className="text-violet11">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="flex items-center">{label}</label>
    </div>
  );
};
