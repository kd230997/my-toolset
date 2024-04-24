import { Outlet } from "react-router-dom";
import { TopBar, MainContent, MenuBar } from "../../../common-component";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-svh bg-small-gray">
        <TopBar className="max-w-full h-1/6 bg-white border-b-2 border-slate-50" />
        <div className="flex-none flex flex-row h-5/6">
          <MenuBar className="min-h-full h-fit w-1/6 bg-white shadow-md shadow-slate-200" />
          <MainContent className="w-5/6 h-full" ContentComponent={Outlet} />
        </div>
      </div>
    </>
  );
}
