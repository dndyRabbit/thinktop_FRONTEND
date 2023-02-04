import { ThemeProvider } from "@mui/material/styles";
import { useRoutes } from "react-router-dom";
import mainTheme from "./themes/main.theme";
import allRoutes from "./routes";
import DataProvider from "./store";
import {Toaster} from "react-hot-toast";
import { useEffect, useState } from "react";
import _ from "lodash";

function App() {
  /**
   * Konfigurasi Authentication
   */
  const [auth, setAuth] = useState(false);
  let ignore = true;
  
  useEffect(() => {
    if (ignore) requestAuth();
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ignore = false;
    };
  }, [auth]);

  async function requestAuth() {
    const token = localStorage.getItem('token');
    setAuth(_.isUndefined(token) || _.isEmpty(token));
  }

  /**
   * Konfigurasi Routing
   */
  const routes = useRoutes(allRoutes());
  return (
    <DataProvider>
      <ThemeProvider theme={mainTheme}>
        <Toaster />
        {routes}
      </ThemeProvider>
    </DataProvider>
  );
}

export default App;
