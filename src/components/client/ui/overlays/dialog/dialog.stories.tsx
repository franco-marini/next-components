import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../../buttons/base'
import { Dialog } from '.'

function DialogStory(props: { title?: string }) {
  return (
    <Dialog title={props.title}>
      <p>This is an example of a Dialog</p>
      <Button label="Submit" />
    </Dialog>
  )
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof DialogStory> = {
  title: 'Client/Overlays/Dialog',
  component: DialogStory,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof DialogStory>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  args: {
    title: 'Title',
  },
}
