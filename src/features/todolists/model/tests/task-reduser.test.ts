
// import { InitialStateType, addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC,taskReducer } from '../task-reducer';
// import { AddTodolist, RemoveTodolist } from '../todolist-reduser';

// let startState: InitialStateType

// beforeEach(() => {
//      startState = {
//         'todolistId1': [
//             {id: '1', title: 'CSS', isDone: false},
//             {id: '2', title: 'JS', isDone: true},
//             {id: '3', title: 'React', isDone: false}
//         ],
//         'todolistId2': [
//             {id: '1', title: 'bread', isDone: false},
//             {id: '2', title: 'milk', isDone: true},
//             {id: '3', title: 'tea', isDone: false}
//         ]
//     }
// })



// test('correct task should be deleted from correct array', () => {
//     const action = removeTaskAC('todolistId2', '2')

//     const endState = taskReducer(startState, action)

//     expect(endState).toEqual({
//         'todolistId1': [
//             {id: '1', title: 'CSS', isDone: false},
//             {id: '2', title: 'JS', isDone: true},
//             {id: '3', title: 'React', isDone: false}
//         ],
//         'todolistId2': [
//             {id: '1', title: 'bread', isDone: false},
//             {id: '3', title: 'tea', isDone: false}
//         ]
//     })
// });

// test('correct task should be added to correct array', () => {

//     const action = addTaskAC('juce', 'todolistId2')

//     const endState = taskReducer(startState, action)

//     expect(endState['todolistId1'].length).toBe(3)
//     expect(endState['todolistId2'].length).toBe(4)
//     expect(endState['todolistId2'][0].id).toBeDefined()
//     expect(endState['todolistId2'][0].title).toBe('juce')
//     expect(endState['todolistId2'][0].isDone).toBe(false)
// });

// test('status of specified task should be changed', () => {
//     const action = changeTaskStatusAC('2', false, 'todolistId2')

//     const endState = taskReducer(startState, action)

//     expect(endState['todolistId2'][1].isDone).toBe(false)
//     expect(endState['todolistId1'][1].isDone).toBe(true)
//     // expect().toBe()
// })

// test('title of specified task should be changed', () => {


//     const action = changeTaskTitleAC('2', "juice", 'todolistId2')

//     const endState = taskReducer(startState, action)

//     expect(endState['todolistId2'][1].title).toBe("juice")
//     expect(endState['todolistId1'][1].title).toBe("JS")
// })

// test('new array should be added when new todolist is added', () => {
//     const action = AddTodolist('new todolist')

//     const endState = taskReducer(startState, action)


//     const keys = Object.keys(endState)
//     const newKey = keys.find(k => k != 'todolistId1' && k != 'todolistId2')
//     if (!newKey) {
//         throw Error('new key should be added')
//     }

//     expect(keys.length).toBe(3)
//     expect(endState[newKey]).toEqual([])
// })

// test('property with todolistId should be deleted', () => {
   

//     const action = RemoveTodolist('todolistId2')

//     const endState = taskReducer(startState, action)


//     const keys = Object.keys(endState)

//     expect(keys.length).toBe(1)
//     expect(endState['todolistId2']).not.toBeDefined()
// })