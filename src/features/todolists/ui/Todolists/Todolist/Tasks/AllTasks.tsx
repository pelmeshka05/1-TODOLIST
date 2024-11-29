import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PropsToDOList } from "../Todolist";
import { AppRootStateType } from "../../../../../../app/store";
import List from "@mui/material/List";
import { Task } from "./Task/Task";
import { TaskDomainType } from "../../../../model/task-reducer";


export const Tasks = ({ todolist }: PropsToDOList) => {

  const { id, title, filter } = todolist;

  let tasks = useSelector<AppRootStateType, TaskDomainType[]>(
    (state) => state.tasks[id]
  );

  tasks = useMemo(() => {
    if (filter === "active") {
      tasks = tasks.filter((t) => !t.isDone);
    }
    if (filter === "complited") {
      tasks = tasks.filter((t) => t.isDone);
    }
    return tasks;
  }, [tasks, filter]);

  return (
    <>
      {tasks?.length === 0 ? (
        <p>тасок нет</p>
      ) : (
        <List>
          {tasks?.map((task) => {
            return <Task key={task.id} task={task} todolistID={id} />;
          })}
        </List>
      )}
    </>
  );
};
