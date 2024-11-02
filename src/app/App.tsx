import { CssBaseline, Paper, Switch } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { ThemeMode } from "./app-reducer";
import { getTheme } from "../common/theme/theme";
import { AppRootStateType } from "./store";
import { Header } from "../common/components/Header";
import { Main } from "./Main";
import { selectThemeMode } from "./appSelectors";
import { useAppSelector } from "../common/hooks/useAppSelector";


export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type TodolistType = {
  id: string;
  title: string;
  filter: FilterValuesType;
};



export type FilterValuesType = "all" | "active" | "complited";

function App() {
 
  
  const themeMode = useAppSelector(state => state.app.themeMode)

  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <CssBaseline />
        <Header/>
        <Main/>
    </ThemeProvider>
  );
}

export default App;