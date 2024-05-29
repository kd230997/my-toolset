import { ChangeEvent, ComponentType, useState } from "react";
import { Cog } from "../icons";

export interface TextAreaProps {
  value?: string;
  placeHolder?: string;
  className?: string;
  iconColor?: string;
  rows?: number;
  cols?: number;
  onChange?: (value: any) => void;
  IconComponent?: ComponentType<any>;
  isShowIcon?: boolean;
  readOnly?: boolean;
}

export default function TextArea({
  value = "",
  className,
  placeHolder,
  iconColor = "text-primary-400",
  onChange = (value) => {
    return value;
  },
  IconComponent = Cog,
  isShowIcon = false,
  rows = 4,
  cols = 50,
  readOnly = false,
}: TextAreaProps) {
  const [inputValueState, setInputValue] = useState(value);

  return (
    <div className={`relative ${className}`}>
      {isShowIcon ? (
        <IconComponent
          className={`cursor-pointer absolute top-0.5 w-8 h-9 px-2 ${iconColor}`}
        />
      ) : (
        <></>
      )}
      <textarea
        className={`${
          isShowIcon ? "pl-9" : ""
        } w-full rounded-md shadow-md p-2`}
        value={inputValueState}
        placeholder={placeHolder}
        rows={rows}
        cols={cols}
        readOnly={readOnly}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          setInputValue(event.target.value);
          onChange(event.target.value);
        }}
      />
    </div>
  );
}
