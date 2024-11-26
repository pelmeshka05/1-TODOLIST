import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { action } from "@storybook/addon-actions";
import { useEffect, useState } from "react";
import { todolistsAPI } from "./todolistApi";

const meta = {
  title: "Components/API",

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},

  args: {},
};

export default meta;

export const GetTodolist = () => {
  const [state, setState] = useState<any>(null);

  useEffect(() => {
    todolistsAPI.getTodolist().then((res) => {
      setState(res.data);
    });
  }, []);

  return <div>{JSON.stringify(state)}</div>;
};
export const CreateTodolist = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    todolistsAPI.postTodolist("fasdffdsfdsfdsa").then((res) => {
      setState(res.data);
    });
  }, []);

  return <div>{JSON.stringify(state)}</div>;
};
export const DeleteTodolist = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    const todolistID = "4aca44e5-b9e7-40f4-ae09-a7b8cbcb989a";
    todolistsAPI.deleteTodolist(todolistID).then((res) => {
      setState(res.data);
    });
  }, []);

  return <div>{JSON.stringify(state)}</div>;
};
export const UpdateTodolist = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    const todolistID = "2f250b2f-962c-4c0a-8d7b-a4f1012d91eb";
    todolistsAPI.putTodolist(todolistID, "GGGGGG").then((res) => {
      setState(res.data);
    });
  }, []);

  return <div>{JSON.stringify(state)}</div>;
};

//-------------TASKS-----------------------
export const GetTasks = () => {
  const [state, setState] = useState<any>(null);

  useEffect(() => {
    const todolistID = "2f250b2f-962c-4c0a-8d7b-a4f1012d91eb"
    todolistsAPI.getTasks(todolistID).then((res) => {
      setState(res.data);
    });
  }, []);

  return <div>{JSON.stringify(state)}</div>;
};

export const CreateTask = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    const todolistID = "2f250b2f-962c-4c0a-8d7b-a4f1012d91eb"
    todolistsAPI.postTask(todolistID, "111").then((res) => {
      setState(res.data);
    });
  }, []);

  return <div>{JSON.stringify(state)}</div>;
};

export const DeleteTask = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    const todolistID = "2f250b2f-962c-4c0a-8d7b-a4f1012d91eb"
    const taskID = "733a1823-7ffc-477c-81d7-c0a4fca3e52d"
    todolistsAPI.deleteTask(todolistID, taskID).then((res) => {
      setState(res.data);
    });
  }, []);

  return <div>{JSON.stringify(state)}</div>;
};

export const UpdateTask = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    const todolistID = "2f250b2f-962c-4c0a-8d7b-a4f1012d91eb";
    const taskID = "ac933880-ce7c-49e4-91d6-fd2f40a08611"
    const description = ""
    const startDate = ""
    const deadline = ""
    const status = 0
    const priority = 1
    const title = "Hello"



    todolistsAPI.putTask(todolistID, taskID, {title, priority, deadline, description, startDate, status}).then((res) => {
      setState(res.data);
    });
  }, []);

  return <div>{JSON.stringify(state)}</div>;
};