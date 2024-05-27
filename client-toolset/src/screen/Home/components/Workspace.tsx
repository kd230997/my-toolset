import { BoardCard } from "../../../common-component";
import { BoardCardProps } from "../../../models/BoardCard";

const renderBoardCard = (mockCards: Array<BoardCardProps>) => {
  return mockCards.map((item: any, index: number) => (
    <BoardCard className="basis-1/4" {...item} key={index.toString()} />
  ));
};

const mockBoardCard: Array<BoardCardProps> = [
  {
    // title: "To do",
    content: "Some content of board cards.",
    dateCreated: new Date(),
  },
];

const Workspace = ({ className }: any) => {
  return (
    <div className={`${className} px-5 py-7 flex flex-col`}>
      <h5 className="font-bold">My Workspace</h5>
      <div className="pt-3 max-w-full h-fit gap-16 flex flex-row flex-wrap basis">
        {renderBoardCard(mockBoardCard)}
      </div>
    </div>
  );
};

export default Workspace;
