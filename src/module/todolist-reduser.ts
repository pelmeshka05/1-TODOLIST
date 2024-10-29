import { useState } from "react";
import { v1 } from "uuid";
import { FilterValuesType, TodolistType } from "../App";

export type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST',
    payload: {
        id: string
    }
}

export type AddTodolistActionType = {
    type: 'ADD-TODOLIST',
    payload: {
      todolistID: string,
      title: string,
    }
}

export type ChangeTodolistActionType = {
    type: 'CHANGE-TODOLIST',
    payload: {
      id: string,
      title: string,
    }
}

export type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER',
    payload: {
      id: string,
      filter: FilterValuesType,
    }
}

type ActionType = RemoveTodolistActionType | AddTodolistActionType | ChangeTodolistActionType | ChangeTodolistFilterActionType

let initialState: TodolistType[] = [];

export const todolistReducer = (state:TodolistType[]=initialState , action: ActionType): TodolistType[] => {
    switch(action.type){
        case 'REMOVE-TODOLIST': {
            return state.filter(el => el.id !== action.payload.id)
        }

        case "ADD-TODOLIST": {   
            const newTodolist: TodolistType = {
                id: action.payload.todolistID,
                title: action.payload.title,
                filter: "all",
              };
            return [...state, newTodolist]
        }

        case "CHANGE-TODOLIST": {
            return state.map((el) =>
                el.id === action.payload.id ? { ...el, title: action.payload.title } : el
              )
        }

        case "CHANGE-TODOLIST-FILTER": {
            return state.map((el) =>
                el.id === action.payload.id ? { ...el, filter: action.payload.filter } : el
              )
        }
        default: return state
    }
}

export const RemoveTodolist = (todolistID: string) => {
    return {
        type: "REMOVE-TODOLIST",
        payload: {
          id: todolistID,
        },
      } as const;
}

export const AddTodolist = (title: string,) => {
    return {
        type: "ADD-TODOLIST",
        payload: {
          todolistID: v1(),
          title
        },
      } as const;
}

export const ChangeTodolistTitle = (todolistID: string, newTitle: string) => {
    return {
        type: "CHANGE-TODOLIST",
        payload: {
          id: todolistID,
          title: newTitle,
        },
      } as const;
}

export const ChangeTodolistFilter = (todolistID: string, newFilter: FilterValuesType) => {
    return{
        type: "CHANGE-TODOLIST-FILTER",
        payload: {
          id: todolistID,
          filter: newFilter,
        },
      } as const;
}