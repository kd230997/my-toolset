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
      <div className="flex flex-col min-h-screen bg-primary-100 font-sans">
        <TopBar className="bg-primary-200 shadow-sm shadow-primary-200 border-b border-primary-400/30" />
        <div className="flex flex-row grow">
          <MenuBar
            className="bg-primary-100 border-primary-400/[.3]"
            items={menu}
          />
          <MainContent className="w-5/6 min-h-full" ContentComponent={Outlet} />
        </div>
      </div>
    </>
  );
}
