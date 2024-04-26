import { Outlet } from "react-router-dom";
import { TopBar, MainContent, MenuBar } from "../../../common-component";
import { SectionMenu } from "../../../models/Menu";
import { Cog } from "../../../common-component/icons";

export default function Home() {
  const menu: Array<SectionMenu> = [{
    title: 'Mockdata',
    listItems: [{
      icon: <Cog />,
      title: "Hello World"
    }]
  }];
  
  return (
    <>
      <div className="flex flex-col h-svh bg-small-gray bg-primary-lighter">
        <TopBar className="max-w-full h-1/6 bg-primary-dark" />
        <div className="flex-none flex flex-row h-5/6">
          <MenuBar className="min-h-full h-fit w-1/6 bg-primary-light" items={menu}/>
          <MainContent className="w-5/6 h-full" ContentComponent={Outlet} />
        </div>
      </div>
    </>
  );
}
