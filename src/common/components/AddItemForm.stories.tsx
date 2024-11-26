import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { action } from "@storybook/addon-actions";

import { AddItemForm } from "./AddItemForm";
import { memo, useState, KeyboardEvent, ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { render } from "react-dom";


const meta = {
  title: "Components/AddItemForm",
  component: AddItemForm,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    addItem: {
      description: "Button clicked inside form",
    },
  },

  args: {
    addItem: fn(),
  },

};

export default meta;
type Story = StoryObj<typeof AddItemForm>;


export const AddItemFormStory: Story = {};




// ADD ITEM FROM ERROR
const AddItemFormErr = memo(({ addItem }: AddItemForm) => {
  
  const [taskTitle, setTaskTitle] = useState("");
  const [inputError, setInputError] = useState<string| null>("Title is requared");
  
    const maxTitleLenght = 15;
    const addItemPossible =
      taskTitle.length && taskTitle.length <= maxTitleLenght;
  
    const addItemHandler = () => {
      if (taskTitle.trim() !== "") {
        addItem(taskTitle.trim());
        setTaskTitle("");
      } else {
        setInputError("Title is requared");
      }
    };
  
    const addTaskOnKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if(inputError) setInputError(null);
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
  });
  
  export const AddItemFormErrStory = {
    render: () => <AddItemFormErr addItem={action("Button clicked inside form")}/>
  }