import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { action } from "@storybook/addon-actions";

import { Task } from "./Task";
import { ReduxStoreProviderDecorator } from "../../../../../../../app/ReduxStoreProviderDecorator";
import { Provider, useSelector } from "react-redux";
import { AppRootStateType, store } from "../../../../../../../app/store";
import { TaskType } from "../../../../../../../app/App";


const meta = {
  title: "Components/Task",
  component: Task,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
 
  },

  args: {

  },

  decorators: [ReduxStoreProviderDecorator]

};

export default meta;
type Story = StoryObj<typeof Task>;

const TaskStoryDop = () => {
  let task = useSelector<AppRootStateType, TaskType>(
    state => state.tasks["todolistID1"][0]
  );

  if(!task) task = {id:"121212", title:"DEFAULT TASK", isDone: false }

    return <Task task={task} todolistID={"todolistID1"}/>
  
}

export const TaskStory: Story = {
  render: () => <Provider store={store}>{<TaskStoryDop/>}</Provider>
};




