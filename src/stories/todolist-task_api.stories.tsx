import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { action } from "@storybook/addon-actions";
import { useEffect, useState } from "react";
import { todolistsAPI } from "./todolist-task_api";


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
  const [title, setTitle] = useState<string>("");

  const onClickHandler = () => {
    todolistsAPI.postTodolist(title).then((res) => {
      setState(res.data);
    });
  };

  return (
    <div>
      <div>
        <input
          type="type"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <button onClick={onClickHandler}>CREATE</button>
      </div>
      {JSON.stringify(state)}
    </div>
  );
};

export const DeleteTodolist = () => {
  const [state, setState] = useState<any>(null);
  const [todolistID, setTodolistID] = useState<string>("");

  const onClickHandler = () => {
    todolistsAPI
      .deleteTodolist(todolistID)
      .then((res) => {
        setState(res.data);
      })
      .catch((error) => {
        console.error("Error deleting todolist:", error);
        setState({ error: error.message });
      });
  };

  return (
    <div>
      <div>
        <input
          type="type"
          value={todolistID}
          onChange={(e) => setTodolistID(e.currentTarget.value)}
        />
        <button onClick={onClickHandler}>DELETE</button>
      </div>
      {JSON.stringify(state)}
    </div>
  );
};

export const UpdateTodolist = () => {
  const [state, setState] = useState<any>(null);
  const [todolistID, setTodolistID] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const onClickHandler = () => {
    todolistsAPI
      .putTodolist(todolistID, title)
      .then((res) => {
        setState(res.data);
      })
      .catch((error) => {
        console.error("Error updating todolist:", error);
        setState({ error: error.message });
      });
  };

  return (
    <div>
      {JSON.stringify(state)}

      <div>
        Todolist ID:
        <input
          type="type"
          value={todolistID}
          onChange={(e) => setTodolistID(e.currentTarget.value)}
        />
        Title:
        <input
          type="type"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <button onClick={onClickHandler}>UPDATE</button>
      </div>
    </div>
  );
};

//-------------TASKS-----------------------
export const GetTasks = () => {
  const [state, setState] = useState<any>(null);
  const [todolistID, setTodolistID] = useState<string>("");

  const onClickHandler = () => {
    todolistsAPI
      .getTasks(todolistID)
      .then((res) => {
        setState(res.data);
      })
      .catch((error) => {
        console.error("Error getting tasks:", error);
        setState({ error: error.message });
      });
  };

  return (
    <div>
      {JSON.stringify(state)}
      <div>
        Todolist ID:
        <input
          type="type"
          value={todolistID}
          onChange={(e) => setTodolistID(e.currentTarget.value)}
        />
        <button onClick={onClickHandler}>GET</button>
      </div>
    </div>
  );
};

export const CreateTask = () => {
  const [state, setState] = useState<any>(null);
  const [todolistID, setTodolistID] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const onClickHandler = () => {
    todolistsAPI
      .postTask(todolistID, title)
      .then((res) => {
        setState(res.data);
      })
      .catch((error) => {
        console.error("Error creating task:", error);
        setState({ error: error.message });
      });
  };

  return (
    <div>
      {JSON.stringify(state)}
      <div>
        Todolist ID:
        <input
          type="type"
          value={todolistID}
          onChange={(e) => setTodolistID(e.currentTarget.value)}
        />
        Title:
        <input
          type="type"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <button onClick={onClickHandler}>Create Task</button>
      </div>
    </div>
  );
};

export const DeleteTask = () => {
  const [state, setState] = useState<any>(null);
  const [todolistID, setTodolistID] = useState<string>("");
  const [taskID, setTaskID] = useState<string>("");

  const onClickHandler = () => {
    todolistsAPI.deleteTask(todolistID, taskID).then((res) => {
      setState(res.data);
    });
  };

  return (
    <div>
      {JSON.stringify(state)}
      <div>
        Todolist ID:
        <input
          type="type"
          value={todolistID}
          onChange={(e) => setTodolistID(e.currentTarget.value)}
        />
        Task ID:
        <input
          type="type"
          value={taskID}
          onChange={(e) => setTaskID(e.currentTarget.value)}
        />
        <button onClick={onClickHandler}>Delete</button>
      </div>
    </div>
  );
};

export const UpdateTask = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    const todolistID = "2f250b2f-962c-4c0a-8d7b-a4f1012d91eb";
    const taskID = "ac933880-ce7c-49e4-91d6-fd2f40a08611";
    const description = "";
    const startDate = "";
    const deadline = "";
    const status = 0;
    const priority = 1;
    const title = "Hello";

    todolistsAPI
      .putTask(todolistID, taskID, {
        title,
        priority,
        deadline,
        description,
        startDate,
        status,
      })
      .then((res) => {
        setState(res.data);
      });
  }, []);

  return <div>{JSON.stringify(state)}</div>;
};
