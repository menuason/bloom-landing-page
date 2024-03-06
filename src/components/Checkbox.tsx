import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { FC } from "react";

interface CheckboxBloomProps {
  key: number;
  label: string;
}

export const CheckboxBloom: FC<CheckboxBloomProps> = ({ key, label }) => {
  return (
    <div className="flex gap-3 items-center">
      <Checkbox.Root
        key={key}
        className="shadow-blackA4 border border-black rounded-sm h-3 w-3"
      >
        <Checkbox.Indicator className="text-violet11">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="flex items-center">{label}</label>
    </div>
  );
};
