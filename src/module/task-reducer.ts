import { v1 } from "uuid";
import { TaskType } from "../App";
import { AddTodolistActionType, RemoveTodolistActionType } from "./todolist-reduser";


export type InitialStateType = {
  [key: string]: TaskType[];
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
      const newObject: TaskType = {
        id: v1(),
        title: action.payload.title,
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