import { BoardCard, Input } from "../../../common-component";
import { BoardCardProps } from "../../../models/BoardCard";

const ToolList = ({ className }: any) => {
  const mockCards: Array<BoardCardProps> = [
    {
      title: "Hello Duy",
      content: <BoardCard title="Test Card in Card" content={`Card here!`} />,
      dateCreated: new Date(),
      className: "",
      owner: "DuyNK12",
    },
    {
      title: "Hello Duy",
      content: <Input />,
      dateCreated: new Date(),
      className: "",
    },
    {
      title: "Hello Duy",
      content: (
        <>
          <BoardCard title="Test Card in Card" content={`Card here!`} />
          <br />
          <BoardCard title="Test Card in Card" content={`Card here!`} />
        </>
      ),
      dateCreated: new Date(),
      className: "",
      owner: "DuyNK12",
    },
    {
      title: "Hello Duy",
      content: "This is your first Card",
      dateCreated: new Date(),
      className: "",
    },
    {
      title: "Hello Duy",
      content: "This is your first Card",
      dateCreated: new Date(),
      className: "",
    },
    {
      title: "Hello Duy",
      content: "This is your first Card",
      dateCreated: new Date(),
      className: "",
    },
    {
      title: "Hello Duy",
      content: "This is your first Card",
      dateCreated: new Date(),
      className: "",
    },
    {
      title: "Hello Duy",
      content: "This is your first Card",
      dateCreated: new Date(),
      className: "",
    },
    {
      title: "Hello Duy",
      content: "This is your first Card",
      dateCreated: new Date(),
      className: "",
    },
  ];
  return (
    <div className={`${className} px-5 py-7 flex flex-col`}>
      <h5 className="font-bold">My Tool List</h5>
      <div className="pt-3 max-w-full h-fit gap-4 flex flex-row flex-wrap basis">
        {mockCards.map((item: any, index: number) => (
          <BoardCard className="basis-1/4" {...item} key={index.toString()} />
        ))}
      </div>
    </div>
  );
};

export default ToolList;
