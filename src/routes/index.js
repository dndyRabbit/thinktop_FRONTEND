import { Navigate } from "react-router-dom";
import OuterLayouts from "../components/layouts/OuterLayout";
import { Login } from "../pages";

const routes = () => [
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