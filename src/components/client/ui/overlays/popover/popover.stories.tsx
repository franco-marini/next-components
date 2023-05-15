import { cloneElement, useRef } from 'react'
import { useOverlayTrigger } from 'react-aria'
import { OverlayTriggerProps, useOverlayTriggerState } from 'react-stately'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../../buttons/base'
import { Popover } from '.'

function PopoverTrigger(props: OverlayTriggerProps) {
  let ref = useRef<HTMLButtonElement>(null)
  let state = useOverlayTriggerState(props)
  let { triggerProps, overlayProps } = useOverlayTrigger(
    {
      type: 'dialog',
    },
    state,
    ref,
  )

  return (
    <>
      <Button {...triggerProps} ref={ref} label="Open Popover" />
      {state.isOpen && (
        <Popover {...props} triggerRef={ref} state={state}>
          {
            // TO-DO: Use a custom dialog component
            cloneElement(<div>This is the content of the popover.</div>, overlayProps)
          }
        </Popover>
      )}
    </>
  )
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof PopoverTrigger> = {
  title: 'Client/Overlays/Popover',
  component: PopoverTrigger,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof PopoverTrigger>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  args: {},
}
