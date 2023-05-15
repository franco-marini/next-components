import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TextField> = {
  title: 'Client/Inputs/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof TextField>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  args: {
    variant: 'standard',
    label: 'Label',
    name: 'email',
    id: 'email',
    type: 'number',
    placeholder: 'Placeholder',
    description: 'Sub text',
    errorMessage: 'Error message',
  },
}
