import React from "react";
import { useDispatch } from "react-redux";
import { refreshToken } from "./core/redux/actions/auth.action";
import MainRoutes from "./core/routes/main.routes";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(refreshToken());
  }, []);

  return <MainRoutes />;
}

export default App;
