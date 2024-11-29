
// import { InitialStateType, taskReducer } from "../task-reducer"
// import { AddTodolist, todolistReducer } from "../todolist-reduser"




// test('ids should be equals', () => {
//     const startTasksState: InitialStateType = {}
//     const startTodolistsState: Array<TodolistDomainType> = []

//     const action = AddTodolist('new todolist')

//     const endTasksState = taskReducer(startTasksState, action)
//     const endTodolistsState = todolistReducer(startTodolistsState, action)

//     const keys = Object.keys(endTasksState)
//     const idFromTasks = keys[0]
//     const idFromTodolists = endTodolistsState[0].id

//     expect(idFromTasks).toBe(action.payload.todolistID)
//     expect(idFromTodolists).toBe(action.payload.todolistID)
// })