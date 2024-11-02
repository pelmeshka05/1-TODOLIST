import Paper from "@mui/material/Paper";
import React from "react";
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../../../app/store";
import { TodolistType } from "../../../../app/App";
import Grid from "@mui/material/Grid";
import { Todolist } from "./Todolist/Todolist";
import { selectTodolist } from "../../model/todolistSelectors";


export const Todolists = () => {
  let todolists = useSelector<AppRootStateType, Array<TodolistType>>(selectTodolist)

  return (
    <>
      {todolists.map((el) => {
        return (
          <Grid key={el.id} item sx={{ mr: "75px" }}>
            <Paper elevation={3} sx={{ p: "20px", mt: "50px" }}>
              <Todolist todolist={el} />
            </Paper>
          </Grid>
        );
      })}
    </>
  );
};
