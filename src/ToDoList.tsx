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


export type PropsToDOList = {
  todolistID: string;
  title: string;
  filter: FilterValuesType;
  tasks: TaskType[];
  date?: string;
  removeTask: (todolistID: string, id: string) => void;
  removeTodolist: (todolistID: string) => void;
  changeTaskStatus: (
    todolistID: string,
    id: string,
    newTaskStatus: boolean
  ) => void;
  addTasks: (todolistID: string, title: string) => void;
  changeTodoListFilter: (todolistId: string, filter: FilterValuesType) => void;
  updateTaskTitle: (
    todolistID: string,
    taskID: string,
    newTitle: string
  ) => void;
  updateTodolistTitle: (todolistID: string, newTitle: string) => void;
};

export const ToDolist = ({
  todolistID,
  title,
  tasks,
  filter,
  date,
  addTasks,
  removeTask,
  removeTodolist,
  changeTaskStatus,
  changeTodoListFilter,
  updateTaskTitle,
  updateTodolistTitle,
}: PropsToDOList) => {
  //todo: сделать после занятия
  // let filteredTasks = tasks;
  // if (el.filter === "active") {
  //   filteredTasks = tasks.filter((t) => !t.isDone);
  // }
  // if (el.filter === "complited") {
  //   filteredTasks = tasks.filter((t) => t.isDone);
  // }

  const changeTaskFilterHandler = (filter: FilterValuesType) => {
    changeTodoListFilter(todolistID, filter);
  };

  const removeTodolistHandler = () => {
    removeTodolist(todolistID);
  };

  const addTasksHandler = (title: string) => {
    addTasks(todolistID, title);
  };

  const updateTodolistTitleHandler = (newTitle: string) => {
    updateTodolistTitle(todolistID, newTitle);
  };



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
                changeTaskStatus(todolistID, task.id, e.currentTarget.checked);

              const removeTaskHandler = () => removeTask(todolistID, task.id);

              const updateTaskTitleHandler = (newTitle: string) => {
                updateTaskTitle(todolistID, task.id, newTitle);
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