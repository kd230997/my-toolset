import { Navigate, RouteObject } from "react-router-dom";
import ROUTES_URL from "../configs/routeConfigs";
import { Home, ToolList } from "../screen";

const listRoutes: Array<RouteObject> = [
  { path: "*", element: <Navigate to={ROUTES_URL.HOME} replace={true} /> },
  {
    path: ROUTES_URL.HOME,
    element: <Home />,
    children: [
      {
        index: true,
        element: (
          <Navigate to={`${ROUTES_URL.TOOL_LIST}`} replace={true} />
        ),
      },
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
        Component: ToolList,
      },
      {
        path: ROUTES_URL.DISCORD_ADMIN,
        element: <p>Discord Admin</p>,
      },
    ],
  },
];

export default listRoutes;
