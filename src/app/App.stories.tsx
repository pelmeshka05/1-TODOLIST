import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { action } from "@storybook/addon-actions";

import { App } from "./App";
import { Task } from "../features/todolists/ui/Todolists/Todolist/Tasks/Task/Task";
import { Provider } from "react-redux";
import { store } from "./store";
import { ReduxStoreProviderDecorator } from "./ReduxStoreProviderDecorator";
// import { ReduxStoreProviderDecorator } from "./ReduxStoreProviderDecorator";


const meta = {
  title: "Components/App",
  component: App,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  decorators:[ReduxStoreProviderDecorator],

  argTypes: {
 
  },
  

};

export default meta;
type Story = StoryObj<typeof App>;


export const AppStory: Story = {
  render: () => <Provider store={store}><App/></Provider>
};




