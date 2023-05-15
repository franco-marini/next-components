import { AriaDialogProps } from 'react-aria'

export interface DialogProps extends AriaDialogProps {
  title?: React.ReactNode
  children: React.ReactNode
}
