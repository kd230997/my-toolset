import { Outlet } from "react-router-dom";
import { TopBar, MainContent, MenuBar } from "../../../common-component";
import { SectionMenu } from "../../../models/Menu";
import { Cog } from "../../../common-component/icons";
import ROUTES_URL from "../../../configs/routeConfigs";

export default function Home() {
  const menu: Array<SectionMenu> = [
    {
      title: "Mockdata",
      listItems: [
        {
          iconComponent: <Cog />,
          title: "Hello World",
          linkable: true,
          linkURL: ROUTES_URL.HELLO_WORLD,
        },
        {
          iconComponent: <Cog />,
          title: "Workspace",
          linkable: true,
          linkURL: ROUTES_URL.WORKSPACE,
        },
        {
          iconComponent: <Cog />,
          title: "Tool List",
          linkable: true,
          linkURL: ROUTES_URL.TOOL_LIST,
        },
        {
          iconComponent: <Cog />,
          title: "Discord Admin",
          linkable: true,
          linkURL: ROUTES_URL.DISCORD_ADMIN,
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col h-svh bg-small-gray bg-primary-content font-sans">
        <TopBar className="max-w-full h-1/6 bg-primary-light" />
        <div className="flex-none flex flex-row h-5/6">
          <MenuBar
            className="min-h-full h-fit w-1/6 bg-primary-lighter"
            items={menu}
          />
          <MainContent className="w-5/6 h-full" ContentComponent={Outlet} />
        </div>
      </div>
    </>
  );
}
