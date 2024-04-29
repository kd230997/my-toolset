import { ChangeEvent, ComponentType, useState } from "react";
import { Cog } from "../icons";

export interface InputProps {
  value?: string;
  placeHolder?: string;
  className?: string;
  iconColor?: string;
  onChange?: (value: any) => void;
  IconComponent?: ComponentType<any>;
}

export default function Input({
  value,
  className,
  placeHolder,
  iconColor = "text-primary-400",
  onChange = (value) => {
    return;
  },
  IconComponent = Cog,
}: InputProps) {
  const [inputValueState, setInputValue] = useState(value);

  return (
    <div className="relative">
      <IconComponent
        className={`cursor-pointer absolute top-0.5 w-8 h-9 px-2 ${iconColor}`}
      />
      <input
        className={`${className} w-full rounded-md pl-9`}
        type="text"
        value={inputValueState}
        placeholder={placeHolder}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setInputValue(event.target.value);
          onChange(event.target.value);
        }}
      />
    </div>
  );
}
