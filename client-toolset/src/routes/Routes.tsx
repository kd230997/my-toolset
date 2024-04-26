import { Home } from "../screen/Home";

const listRoutes: any = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "hello-world",
        element: <p>Hello World!</p>,
      },
    ],
  },
];

export default listRoutes;
