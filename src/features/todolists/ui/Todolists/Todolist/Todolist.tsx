import { useCallback, memo, useMemo } from "react";

import { useDispatch } from "react-redux";
import { addTaskAC } from "../../../model/task-reducer";
import { TodolistTitle } from "./TodolistTitle/TodolistTitle";
import { AddItemForm } from "../../../../../common/components/AddItemForm";
import { Tasks } from "./Tasks/AllTasks";
import { FilterTasksButtons } from "./FilterTasksButtons/FilterTasksButtons";
import Box from "@mui/material/Box";
import { TodolistDomainType } from "../../../model/todolist-reduser";


export type PropsToDOList = {
  todolist: TodolistDomainType;
};

export const Todolist = memo(({ todolist }: PropsToDOList) => {
  const { id, title, filter, addedDate, order } = todolist;

  const dispatch = useDispatch();

  const addTasksHandler = useCallback(
    (title: string) => {
      dispatch(addTaskAC(title, id));
    },
    [id]
  );

  return (
    <Box>
      <TodolistTitle todolist={todolist} />
      <AddItemForm addItem={addTasksHandler} />
      <Tasks todolist={todolist} />
      <FilterTasksButtons todolist={todolist} />
    </Box>
  );
});
