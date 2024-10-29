import React, { useReducer, useRef, useState } from "react";
import { v1 } from "uuid";
import { ToDolist } from "./ToDoList";
import { AddItemForm } from "./components/AddItemForm";
import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { CssBaseline, Paper, Switch } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MenuButton } from "./components/MenuButton";
import { AddTodolist, ChangeTodolistFilter, ChangeTodolistTitle, RemoveTodolist, todolistReducer } from "./module/todolist-reduser";
import { InitialStateType, addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, taskReducer } from "./module/task-reducer";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "./module/store";
import { ToDolistWithRedux } from "./ToDoListWithRedux";


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

type ThemeMode = "light" | "dark"

export type FilterValuesType = "all" | "active" | "complited";

function AppWithRedux() {
 let [themeMode, setThemeMode] = useState<ThemeMode>("light")

  const theme = createTheme({
    palette: {
      mode: themeMode === 'light' ? 'light' : 'dark',
      primary:{
        main: "#cd9560"
      }
    }
  })

  //BLL:

  let todolistID1 = v1();
  let todolistID2 = v1();

  let todolists = useSelector<AppRootStateType, Array<TodolistType>>(state => state.todolists)
  // let tasks = useSelector<AppRootStateType, InitialStateType>(state => state.tasks)

 const dispatch = useDispatch()

  const removeTask = (todolistID: string, id: string) => {
     dispatch(removeTaskAC(todolistID, id))
  };

  const changeTodoListFilter = (
    todolistID: string,
    newFilter: FilterValuesType
  ) => {
    dispatch(ChangeTodolistFilter(todolistID, newFilter))
  };

  const changeTaskStatus = (
    todolistID: string,
    id: string,
    newTaskStatus: boolean
  ) => {
     dispatch(changeTaskStatusAC(id, newTaskStatus, todolistID))
  };

  const addTasks = (todolistID: string, title: string) => {
 dispatch(addTaskAC(title, todolistID))
  };

  const removeTodolist = (todolistID: string) => {
    dispatch(RemoveTodolist(todolistID))

  };

  const addTodolist = (title: string) => {
    dispatch(AddTodolist(title))

  };

  const updateTaskTitle = (
    todolistID: string,
    taskID: string,
    newTitle: string
  ) => {
    dispatch(changeTaskTitleAC(taskID,newTitle, todolistID))
  };

  const updateTodolistTitle = (todolistID: string, newTitle: string) => {
    dispatch(ChangeTodolistTitle(todolistID, newTitle))

  };

  const changeModeHandler = () => {
    setThemeMode(themeMode == 'light' ? 'dark' : 'light')
  }

  //UI:

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <Wrapperdiv>
      <AppBar position="fixed">
        <Toolbar sx={{justifyContent:"space-between"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <div>
            <MenuButton background={theme.palette.primary.dark}>Login</MenuButton>
            <MenuButton>Logout</MenuButton>
            <MenuButton>Faq</MenuButton>
            <Switch onChange={changeModeHandler}/>
          </div>
        </Toolbar>
      </AppBar>

      <Container fixed>
        <Grid container sx={{ mt: "100px" }}>
          <AddItemForm addItem={addTodolist} />
        </Grid>

        <Grid container >
          {todolists.map((el) => {
           

            return (
              <Grid key={el.id}item sx={{ mr: "75px" }}>
                <Paper elevation={3} sx={{ p: "20px", mt: "50px" }}>
                  <ToDolistWithRedux
                    todolist={el}
                  />
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Wrapperdiv>
    </ThemeProvider>
  );
}

export default AppWithRedux;

const Wrapperdiv = styled.div``;
