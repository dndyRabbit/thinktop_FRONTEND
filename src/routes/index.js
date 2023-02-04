import { Navigate } from "react-router-dom";
import OuterLayouts from "../components/layouts/OuterLayout";
import DashboardLayouts from "../components/layouts";
import { Login } from "../pages";

const routes = () => [
  {
    path: "app",
    element: <DashboardLayouts />,
    children: [
      {path: 'dashboard', element: <>DASHBOARD APP</>},
    ]
  },
  {
    path: "/",
    element: <OuterLayouts />,
    children: [
      {path: 'login', element: <Login />},
      {path: '/', element: <Navigate to="/app/dashboard" />},
      {path: '*', element: <Navigate to="/404" />},
    ],
  },
  {
    path: "",
    element: <>NOT FOUNDS</>
  }
];

export default routes;