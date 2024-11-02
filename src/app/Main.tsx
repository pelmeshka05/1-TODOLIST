import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodolist } from "../features/todolists/model/todolist-reduser";
import { AddItemForm } from "../common/components/AddItemForm";
import { Todolists } from "../features/todolists/ui/Todolists/AllTodolists";
import { useAppDispatch } from "../common/hooks/useAppDispatch";


export const Main = () => {
  
  const dispatch = useAppDispatch();

  const addTodolist = useCallback(
    (title: string) => {
      dispatch(AddTodolist(title));
    },
    [dispatch]
  );

  return (
    <Container fixed>
      <Grid container sx={{ mt: "100px" }}>
        <AddItemForm addItem={addTodolist} />
      </Grid>
      <Grid container>
        <Todolists/>
      </Grid>
    </Container>
  );
};
