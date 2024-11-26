import axios from "axios";

const settings = {
  withCredentials: true,
  headers: {
    "api-key": "d0ff6c59-ee75-4691-8995-1c1b3288b7b1",
  },
};

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  ...settings,
});

type ResponseType<D = {}> = {
  messages: string[];
  resultCode: number;
  fieldsErrors: string[];
  data: D;
};

type TodolistType = {
  id: string;
  title: string;
  addedDate: string;
  order: number;
};

export type TaskType = {
  description: string;
  title: string;
  status: number;
  priority: number;
  startDate: string;
  completed: boolean;
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
  items: TaskType[];
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
    return instance.put<ResponseType>(`todo-lists/${todolistID}/tasks/${id}`, model);
  },
  
};
