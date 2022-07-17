import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/Home";
import { colorScheme } from "./constants/theme-constants";
import Nav from "./components/NavBar/Nav";

declare module "@mui/material/styles" {
  interface Palette {
    appBar: Palette["primary"];
  }

  interface PaletteOptions {
    appBar: PaletteOptions["primary"];
  }
}

declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides {
    appBar: true;
  }
}

const { LIGHT_MODE, DARK_MODE } = colorScheme;

function App() {
  const systemTheme = useMediaQuery("(prefers-color-scheme: dark)");

  const prefersDarkMode = () => {
    if (systemTheme && localStorage.theme !== LIGHT_MODE) {
      return DARK_MODE;
    } else if (localStorage.theme === DARK_MODE) {
      return DARK_MODE;
    } else {
      return LIGHT_MODE;
    }
  };
  const [colorMode, setColorMode] = React.useState(prefersDarkMode());

  const changeColorMode = () => {
    setColorMode(prefersDarkMode());
  };

  const theme = React.useMemo(
    () => createTheme({
        palette: {
          mode: colorMode === DARK_MODE ? "dark" : "light", 
          appBar: {
            main: "#fff",
            contrastText: "rgba(0, 0, 0, 0.87)",
          },
        },
      }),
    [colorMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav changeColorMode={changeColorMode} />
      <Home />
    </ThemeProvider>
  );
}

export default App;
