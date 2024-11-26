import { Provider } from "react-redux"
import { ReactNode } from "react"

import { combineReducers, legacy_createStore } from 'redux'
import { appReducer, ThemeMode } from '../app/app-reducer'
import { taskReducer } from '../features/todolists/model/task-reducer'
import { todolistReducer } from '../features/todolists/model/todolist-reduser'
import { v1 } from "uuid"
import { AppRootStateType, store } from "./store"

// const rootReducer = combineReducers({
//     tasks: taskReducer,
//     todolists: todolistReducer,
//     app: appReducer
// })


// const initialGlobalState: AppRootStateType = {
   
//     tasks:{
//         todolistID1: [
//             {id: v1(), title: "HTML", isDone: true},
//             {id: v1(), title: "CSS", isDone: false},
//             {id: v1(), title: "JS", isDone: false},
//         ],
//         todolistID2: [
//             {id: v1(), title: "Milk", isDone: true},
//             {id: v1(), title: "React", isDone: false},
           
//         ]
//     }, 
//     todolists:[
//         {id:"todolistID1", title: "What to learn?", filter: "all"},
//         {id:"todolistID2", title: "What to buy?", filter: "all"}
//     ],
//     app: { themeMode: "light"}
// }


// export const storeBookStore = legacy_createStore(rootReducer, initialGlobalState)


export const ReduxStoreProviderDecorator = (storeFn: () => ReactNode) => {
    return <Provider store={store}>{storeFn()}</Provider>
} 