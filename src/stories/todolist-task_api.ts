import axios from "axios";

import { TaskDomainType } from "../features/todolists/model/task-reducer";

const apiKey = process.env.REACT_APP_API_KEY
const authorizationToken = process.env.REACT_APP_AUTORIZATION


const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
  headers: { 
    "API-KEY": process.env.REACT_APP_API_KEY,
    Authorization: `Bearer ${process.env.REACT_APP_AUTORIZATION}`
  },
});

type ResponseType<D = {}> = {
  messages: string[];
  resultCode: number;
  fieldsErrors: string[];
  data: D;
};

export type TodolistType = {
  id: string;
  title: string;
  addedDate: string;
  order: number;
};

export enum TaskStatuses  {
    New = 0,
    inProgress = 1,
    Completed = 2,
    Draft = 3
}

export enum TaskPriorities  {
    Low = 0,
    Middle = 1,
    Hi = 2,
    Urgently = 3,
    Later = 4
}

export type TaskType = {
  description: string;
  title: string;
  status: string;
  priority: TaskPriorities;
  startDate: string;
  deadline: string;
  id: string;
  todoListId: string;
  order: number;
  addedDate: string;
};

export type UpdateTaskModelType = {
    title: string
    description:string
    status:number
    priority: number
    startDate: string
    deadline: string
}

type GetTasksRespons = {
  items: TaskDomainType[];
  totalCount: number;
  error: string | null;
};

export const todolistsAPI = {
  getTodolist() {
    return instance.get<TodolistType[]>("todo-lists");
  },

  postTodolist(title: string) {
    return instance.post<ResponseType<{ item: TodolistType }>>("todo-lists", {
      title: title,
    });
  },

  deleteTodolist(id: string) {
    return instance.delete<ResponseType>(`todo-lists/${id}`);
  },

  putTodolist(id: string, title: string) {
    return instance.put<ResponseType>(`todo-lists/${id}`, { title: title });
  },

  // ---------------- TASKS ---------------------------------------

  getTasks(todolistID: string) {
    return instance.get<GetTasksRespons>(`todo-lists/${todolistID}/tasks`);
  },

  postTask(todolistID: string, title: string) {
    return instance.post(`todo-lists/${todolistID}/tasks`, { title: title });
  },

  deleteTask(todolistID: string, id: string) {
    return instance.delete<ResponseType>(`todo-lists/${todolistID}/tasks/${id}`);
  },

  // не работает
  putTask(todolistID: string, id: string, model: UpdateTaskModelType) {
    return instance.put<ResponseType>(`todo-lists/${todolistID}/tasks/${id}`, model.title);
  },
  
};
