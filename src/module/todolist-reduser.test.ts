import { v1 } from "uuid";
import { FilterValuesType, TodolistType } from "../App";
import {
  AddTodolist,
  ChangeTodolistFilter,
  ChangeTodolistTitle,
  RemoveTodolist,
  todolistReducer,
} from "./todolist-reduser";

let todolistID1: string;
let todolistID2: string;

let startState: TodolistType[] 


beforeEach(() => {
   todolistID1 = v1();
   todolistID2 = v1();

   startState = [
    { id: todolistID1, title: "What to learn", filter: "all" },
    { id: todolistID2, title: "What to buy", filter: "all" },
  ];
})

test("correct todolist should be removed", () => {
  const endState = todolistReducer(startState, RemoveTodolist(todolistID1));

  expect(endState.length).toBe(1);
  expect(endState[0].id).toBe(todolistID2);
});

test("correct todolist should be added", () => {
  
  let title = "New Todolist";

 

  const endState = todolistReducer(startState, AddTodolist(title));

  expect(endState.length).toBe(3);
  expect(endState[2].title).toBe("New Todolist");
});

test("correct todolist should be chang its name", () => {

  let newTitle = "New Todolist";

  const endState = todolistReducer(
    startState,
    ChangeTodolistTitle(todolistID2, newTitle)
  );

  expect(endState[0].title).toBe("What to learn");
  expect(endState[1].title).toBe("New Todolist");
});

test("correct filter of todolist should be changed", () => {

  let newFilter: FilterValuesType = "complited";

  const action = {
    type: "CHANGE-TODOLIST-FILTER",
    payload: {
      id: todolistID2,
      filter: "complited",
    },
  };

  const endState = todolistReducer(
    startState,
    ChangeTodolistFilter(todolistID2, newFilter)
  );

  expect(endState[0].filter).toBe("all");
  expect(endState[1].filter).toBe("complited");
});
