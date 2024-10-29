import { useState, KeyboardEvent, ChangeEvent } from "react";
// import { Button } from "./Button";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from '@mui/icons-material/AddBox';

type AddItemForm = {
  addItem: (title: string) => void;
};

export const AddItemForm = ({ addItem }: AddItemForm) => {
  
  const [taskTitle, setTaskTitle] = useState("");
const [inputError, setInputError] = useState<string| null>(null);

  const maxTitleLenght = 15;
  const addItemPossible =
    taskTitle.length && taskTitle.length <= maxTitleLenght;

  const addItemHandler = () => {
    if (taskTitle.trim() !== "") {
      addItem(taskTitle.trim());
      setTaskTitle("");
    } else {
      setInputError("Title is requared");
      // setTimeout(() => setInputError(null), 3000);
    }
  };

  const addTaskOnKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setInputError(null);
    if (e.key === "Enter") {
      addItemHandler();
    }
  };

  const changeTaskTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.currentTarget.value);
  };

  return (
    <div>
      <TextField
        label="Enter a title"
        variant={"outlined"}
        className={inputError ? "input_error" : ""}
        error={!!inputError}
        value={taskTitle}
        size={"small"}
        onChange={changeTaskTitleHandler}
        onKeyUp={addTaskOnKeyUpHandler}
        helperText={inputError}
      />
      <IconButton onClick={addItemHandler} color="primary" disabled={!addItemPossible}>
                    <AddBoxIcon />
                  </IconButton>
      
      {taskTitle.length > maxTitleLenght && <div>title is too long</div>}
    </div>
  );
};
