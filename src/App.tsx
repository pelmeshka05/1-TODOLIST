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
import { addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, taskReducer } from "./module/task-reducer";


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




function App() {
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

  let [todolists, dispatchTodolist] = useReducer(todolistReducer, ([
    { id: todolistID1, title: "What to learn", filter: "all" },
    { id: todolistID2, title: "What to buy", filter: "all" },
  ]));

  let [tasks, dispatchTask] = useReducer(taskReducer ,({
    [todolistID1]: [
      { id: v1(), title: "HTML&CSS", isDone: true },
      { id: v1(), title: "JS", isDone: true },
      { id: v1(), title: "ReactJS", isDone: false },
    ],
    [todolistID2]: [
      { id: v1(), title: "Rest API", isDone: true },
      { id: v1(), title: "GraphQL", isDone: false },
    ],
  }));

 

  const removeTask = (todolistID: string, id: string) => {
     dispatchTask(removeTaskAC(todolistID, id))
  };

  const changeTodoListFilter = (
    todolistID: string,
    newFilter: FilterValuesType
  ) => {
    dispatchTodolist(ChangeTodolistFilter(todolistID, newFilter))
  };

  const changeTaskStatus = (
    todolistID: string,
    id: string,
    newTaskStatus: boolean
  ) => {
     dispatchTask(changeTaskStatusAC(id, newTaskStatus, todolistID))
  };

  const addTasks = (todolistID: string, title: string) => {
 dispatchTask(addTaskAC(title, todolistID))
  };

  const removeTodolist = (todolistID: string) => {
    const action = RemoveTodolist(todolistID)
    dispatchTodolist(action)
    dispatchTask(action)
  };

  const addTodolist = (title: string) => {
    const action = AddTodolist(title)
    dispatchTask(action)
    dispatchTodolist(action)
  };

  const updateTaskTitle = (
    todolistID: string,
    taskID: string,
    newTitle: string
  ) => {
    dispatchTask(changeTaskTitleAC(taskID,newTitle, todolistID))
  };

  const updateTodolistTitle = (todolistID: string, newTitle: string) => {
    dispatchTodolist(ChangeTodolistTitle(todolistID, newTitle))

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
            let filteredTasks = tasks[el.id];
            if (el.filter === "active") {
              filteredTasks = tasks[el.id].filter((t) => !t.isDone);
            }
            if (el.filter === "complited") {
              filteredTasks = tasks[el.id].filter((t) => t.isDone);
            }

            return (
              <Grid key={el.id}item sx={{ mr: "75px" }}>
                <Paper elevation={3} sx={{ p: "20px", mt: "50px" }}>
                  <ToDolist
                    key={el.id}
                    todolistID={el.id}
                    title={el.title}
                    tasks={filteredTasks}
                    filter={el.filter}
                    date="05.03.2024"
                    addTasks={addTasks}
                    removeTask={removeTask}
                    removeTodolist={removeTodolist}
                    changeTodoListFilter={changeTodoListFilter}
                    changeTaskStatus={changeTaskStatus}
                    updateTaskTitle={updateTaskTitle}
                    updateTodolistTitle={updateTodolistTitle}
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

export default App;

const Wrapperdiv = styled.div``;
