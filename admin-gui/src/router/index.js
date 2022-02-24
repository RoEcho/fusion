import Navigation from "../views/Navigation";
import Login from "../views/Login";
import Welcome from "../views/Welcome";
import Analysis from "../views/Analysis";
import Monitor from "../views/Monitor";
import Workplace from "../views/Workplace";

import ClassManage from "../views/ClassManage";

import NoMatch from "../views/NoMatch";

let routes = [
  {
    path: "/",
    element: <Navigation />,
    children: [
      { index: true, element: <Welcome /> },
      { path: "analysis", element: <Analysis /> },
      { path: "monitor", element: <Monitor /> },
      { path: "workplace", element: <Workplace /> },
      { path: "class-manage", element: <ClassManage /> },
      { path: "*", element: <NoMatch /> }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
