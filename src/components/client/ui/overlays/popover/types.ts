import { AriaPopoverProps } from 'react-aria'
import type { OverlayTriggerState } from 'react-stately'

export interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
  children: React.ReactNode
  state: OverlayTriggerState
}
