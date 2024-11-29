import { CssBaseline, Paper, Switch } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { getTheme } from "../common/theme/theme";
import { Header } from "../common/components/Header";
import { Main } from "./Main";
import { useAppSelector } from "../common/hooks/useAppSelector";





export const App = () =>  {
 
  
  const themeMode = useAppSelector(state => state.app.themeMode)

  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <CssBaseline />
        <Header/>
        <Main/>
    </ThemeProvider>
  );
}

