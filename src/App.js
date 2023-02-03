import { ThemeProvider } from "@mui/material/styles";
import mainTheme from "./themes/main.theme";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <div>
        APP
      </div>
    </ThemeProvider>
  );
}

export default App;
