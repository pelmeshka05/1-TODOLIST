import { combineReducers, legacy_createStore } from 'redux'
import { appReducer } from '../app/app-reducer'
import { taskReducer } from '../features/todolists/model/task-reducer'
import { todolistReducer } from '../features/todolists/model/todolist-reduser'

const rootReducer = combineReducers({
    tasks: taskReducer,
    todolists: todolistReducer,
    app: appReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store
