import { v1 } from "uuid";

import { AddTodolistActionType, RemoveTodolistActionType } from "./todolist-reduser";

import { log } from "console";
import { TaskPriorities, TaskType } from "../../../stories/todolist-task_api";


export type TaskDomainType =  TaskType & {
  isDone: boolean;
};

export type InitialStateType = {
  [key: string]: TaskDomainType[];
};

export type RemoveTaskActionType = ReturnType<typeof removeTaskAC>
export type AddTaskActionType = ReturnType<typeof addTaskAC>
export type ChangeTaskStatusActionType = ReturnType<typeof changeTaskStatusAC>
export type ChangeTaskTitleActionType = ReturnType<typeof changeTaskTitleAC>


type ActionType = RemoveTaskActionType | AddTaskActionType | ChangeTaskStatusActionType | ChangeTaskTitleActionType | AddTodolistActionType | RemoveTodolistActionType

let initialState: InitialStateType = {};

export const taskReducer = (
  state: InitialStateType = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case "REMOVE-TASK": {
      return {
        ...state, [action.payload.todolistID]: state[action.payload.todolistID].filter(el => el.id !== action.payload.id)
      }
    }
    case "ADD-TASK": {
      const newObject: TaskDomainType = {
        id: v1(),
        todoListId: action.payload.todolistID,
        title: action.payload.title,
        status: "",
        priority: TaskPriorities.Low,
        startDate: "",
        deadline: "",
        order: 0,
        addedDate: "",
        description: "",
        isDone: false
      }
      return{
      ...state, [action.payload.todolistID]: [newObject, ...state[action.payload.todolistID]]
      }
    }
    case "CHANGE-TASK-STATUS": {
      return {
        ...state, [action.payload.todolistID]: state[action.payload.todolistID].map(el => el.id === action.payload.id ? {...el, isDone: action.payload.isDone} : el)
      }
    }
    case "CHANGE-TASK-TITLE": {
      return{
        ...state, [action.payload.todolistID]: state[action.payload.todolistID].map(el => el.id === action.payload.id ? {...el ,title: action.payload.title} : el)
      }
    }
    case "ADD-TODOLIST": {
      return {
        ...state, [action.payload.todolistID]:[]
      }
    }
    case "REMOVE-TODOLIST":{
      let stateCopy = {...state}
      delete stateCopy[action.payload.id]
      return stateCopy
    }
    default:
      return state;
  }
};

export const removeTaskAC = (todolistID: string, id: string) => {
  return {
    type: "REMOVE-TASK",
    payload: {
      todolistID,
      id,
    },
  } as const
};

export const addTaskAC = (title: string, todolistID: string) => {
  return {
    type: "ADD-TASK",
    payload:{
      title,
      todolistID
    }
  } as const 
};

export const changeTaskStatusAC = (id: string ,isDone:boolean ,todolistID: string,) => {
  return {
    type: "CHANGE-TASK-STATUS",
    payload: {
      id,
      isDone,
      todolistID,
    },
  } as const
};

export const changeTaskTitleAC = (id: string ,title:string ,todolistID: string,) => {
  return {
    type: "CHANGE-TASK-TITLE",
    payload: {
      id,
      title,
      todolistID,
    },
  } as const
};