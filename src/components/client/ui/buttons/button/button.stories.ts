import type { Meta, StoryObj } from '@storybook/react'

import { lightTheme } from '../../../../../constants/theme'
import { Button } from '.'

const colorOptions = Object.keys(lightTheme.colors)

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Client/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: colorOptions,
      control: {
        type: 'select',
      },
      type: {
        name: 'string',
        raw: 'primary',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  args: {
    label: 'Button',
    variant: 'contained',
    color: 'primary',
  },
}
