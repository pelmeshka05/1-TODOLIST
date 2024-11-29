import type { Meta, StoryObj } from "@storybook/react";
import { Task } from "./Task";
import { ReduxStoreProviderDecorator } from "../../../../../../../app/ReduxStoreProviderDecorator";
import { Provider, useSelector } from "react-redux";
import { AppRootStateType, store } from "../../../../../../../app/store";

import { TaskDomainType } from "../../../../../model/task-reducer";
import { TaskPriorities } from "../../../../../../../stories/todolist-task_api";



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
  let task = useSelector<AppRootStateType, TaskDomainType>(
    state => state.tasks["todolistID1"][0]
  );

  if(!task) task = {id:"121212", todoListId: "todolistID1" ,title:"DEFAULT TASK", isDone: false, status: "", description: "", deadline: "", addedDate:"", order: 0, startDate:"", priority: TaskPriorities.Low }

    return <Task task={task} todolistID={"todolistID1"}/>
  
}

export const TaskStory: Story = {
  render: () => <Provider store={store}>{<TaskStoryDop/>}</Provider>
};




