import type { Meta, StoryObj } from '@storybook/react'

import Header from '.'

const meta: Meta<typeof Header> = {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Header>

export const LoggedIn: Story = {
  args: {
    user: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
  },
}

export const LoggedOut: Story = {
  args: {
    user: {
      firstName: '',
      lastName: '',
    },
  },
}
