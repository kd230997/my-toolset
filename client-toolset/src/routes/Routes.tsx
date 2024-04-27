import { RouteObject } from "react-router-dom";
import ROUTES_URL from "../configs/routeConfigs";
import { Home, ToolList } from "../screen";

const listRoutes: Array<RouteObject> = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: ROUTES_URL.HELLO_WORLD,
        element: <p>Hello World!</p>,
      },
      {
        path: ROUTES_URL.WORKSPACE,
        element: <p>Workspace</p>,
      },
      {
        path: ROUTES_URL.TOOL_LIST,
        element: <ToolList />,
      },
      {
        path: ROUTES_URL.DISCORD_ADMIN,
        element: <p>Discord Admin</p>,
      },
    ],
  },
];

export default listRoutes;
