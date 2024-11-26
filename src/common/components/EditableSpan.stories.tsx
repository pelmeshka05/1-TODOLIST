import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { action } from "@storybook/addon-actions";
import { EditableSpan } from "./EditableSpan";


const meta = {
  title: "Components/EditableSpan",
  component: EditableSpan,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
  },

  args: {
    
  },

};

export default meta;
type Story = StoryObj<typeof EditableSpan>;


export const EditableSpanStory: Story = {
  args: {
    oldTitle: "HTML",
    updateTitle: fn()
  }
};


