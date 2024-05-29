import { useState } from "react";
import { BoardCard, TextArea, Button } from "../../../common-component";
import { BoardCardProps } from "../../../models/BoardCard";

const renderBoardCard = (mockCards: Array<BoardCardProps>) => {
  return mockCards.map((item: any, index: number) => (
    <BoardCard className="basis-1/4" {...item} key={index.toString()} />
  ));
};

const renderConvertText = () => {
  const [inputValueState, setInputValue] = useState("");
  const [resultValueState, setResultValue] = useState("");

  const handleChangeInputData = (inputValue: string) => {
    setInputValue(inputValue);
  };

  const handleChangeResultData = (resultValue: string) => {
    setResultValue(resultValue);
  };

  const resetData = () => {
    setInputValue("");
    setResultValue("");
  };

  const processData = () => {
    setResultValue(inputValueState.toLocaleLowerCase().trim());
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-end gap-3">
        <Button btnName="Reset" eventClick={resetData} />
        <Button btnName="Process" eventClick={processData} />
      </div>
      <br />
      <TextAreaWithLabel
        value={inputValueState}
        labelName="Input"
        handleChangeEvent={handleChangeInputData}
      />
      <br />
      <TextAreaWithLabel
        value={resultValueState}
        labelName="Result"
        readOnly
        handleChangeEvent={handleChangeResultData}
      />
    </div>
  );
};

const TextAreaWithLabel = ({
  labelName,
  readOnly,
  value,
  handleChangeEvent,
}: any) => {
  return (
    <div className="flex flex-col">
      <p className="basis-1/4 text-left mb-1 font-bold">{labelName}</p>
      <TextArea
        className="basis-3/4"
        readOnly={readOnly}
        value={value}
        onChange={handleChangeEvent}
      ></TextArea>
    </div>
  );
};

// Main Component
const ToolList = ({ className }: any) => {
  const mockCards: Array<BoardCardProps> = [
    {
      title: "Convert Text",
      content: renderConvertText(),
    },
  ];
  return (
    <div className={`${className} px-5 py-7 flex flex-col`}>
      <h5 className="font-bold">My Tool List</h5>
      <div className="pt-3 h-fit max-w-full gap-4 flex flex-row flex-wrap">
        {renderBoardCard(mockCards)}
      </div>
    </div>
  );
};

export default ToolList;
