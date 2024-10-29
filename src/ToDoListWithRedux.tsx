import { useRef, useState, KeyboardEvent, ChangeEvent } from "react";
import { FilterValuesType, TaskType } from "./App";

import { AddItemForm } from "./components/AddItemForm";
import { EditableSpan } from "./components/EditableSpan";
import IconButton from "@mui/material/IconButton";
import { Delete } from "@mui/icons-material";
import Button from "@mui/material/Button";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import { getListItemSX } from "./Todolist.styled";
import { TodolistType } from "./AppWithRedux";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "./module/store";
import { InitialStateType, addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC } from "./module/task-reducer";
import { ChangeTodolistFilter, ChangeTodolistTitle, RemoveTodolist } from "./module/todolist-reduser";


export type PropsToDOList = {
  todolist: TodolistType
  date?: string;
};

export const ToDolistWithRedux = ({
 todolist
}: PropsToDOList) => {
  
  const {id,title,filter}= todolist 

  let tasks = useSelector<AppRootStateType, TaskType[]>(state => state.tasks[id])

  const dispatch = useDispatch()

  const changeTaskFilterHandler = (filter: FilterValuesType) => {
    dispatch(ChangeTodolistFilter(id, filter))
  };

  const removeTodolistHandler = () => {
    dispatch(RemoveTodolist(id))
  };

  const addTasksHandler = (title: string) => {
    dispatch(addTaskAC(title, id))
  };

  const updateTodolistTitleHandler = (newTitle: string) => {
    dispatch(ChangeTodolistTitle(id, newTitle ))
  };



  if (filter === "active") {
    tasks = tasks.filter((t) => !t.isDone);
  }
  if (filter === "complited") {
    tasks = tasks.filter((t) => t.isDone);
  }

  return (
    <Box>
      
            <EditableSpan
              oldTitle={title}
              updateTitle={updateTodolistTitleHandler}
            />
            <IconButton
              size="small"
              aria-label="delete"
              onClick={removeTodolistHandler}
            >
              <Delete />
            </IconButton>
          

          <AddItemForm addItem={addTasksHandler} />
        

        {tasks?.length === 0 ? (
          <p>тасок нет</p>
        ) : (
          <List>
            {tasks?.map((task) => {
              const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) =>
                dispatch(changeTaskStatusAC(task.id, e.currentTarget.checked, id))

              const removeTaskHandler = () => dispatch(removeTaskAC(id, task.id))

              const updateTaskTitleHandler = (newTitle: string) => {
                dispatch(changeTaskTitleAC(id, task.id, newTitle))
              };

              return (
                <ListItem key={task.id} sx={getListItemSX(task.isDone)}>
                  <div>
                    <Checkbox size="small" checked={task.isDone} onChange={changeStatusHandler}/>
                    <EditableSpan
                    oldTitle={task.title}
                    updateTitle={updateTaskTitleHandler}
                  />
                  </div>
                  <IconButton aria-label="delete" onClick={removeTaskHandler}>
                    <Delete />
                  </IconButton>
                </ListItem>
              );
            })}
          </List>
        )}

        <ButtonBox>
          <Button
            color="secondary"
            variant={filter === "all" ? "outlined" : "contained"}
            onClick={() => changeTaskFilterHandler("all")}
          >
            All
          </Button>
          <Button
            color="error"
            variant={filter === "active" ? "outlined" : "contained"}
            onClick={() => changeTaskFilterHandler("active")}
          >
            Active
          </Button>
          <Button
            color="primary"
            variant={filter === "complited" ? "outlined" : "contained"}
            onClick={() => changeTaskFilterHandler("complited")}
          >
            Complited
          </Button>
        </ButtonBox>      
    </Box>
  );
};

const ButtonBox = styled.div`
display: flex;
gap: 5px;
`