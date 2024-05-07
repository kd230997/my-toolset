import { BoardCard } from "../../../common-component";

const Workspace = ({ className }: any) => {
  const mockCards: Array<any> = [
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
      <h5 className="font-bold">My Workspace</h5>
      <div className="pt-3 max-w-full h-fit gap-16 flex flex-row flex-wrap basis">
        {mockCards.map((item: any, index: number) => (
          <BoardCard {...item} key={index.toString()} />
        ))}
      </div>
    </div>
  );
};

export default Workspace;
