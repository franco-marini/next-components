import { AriaTextFieldProps } from 'react-aria'

import { variants } from './styles'

export type VariantType = keyof typeof variants

export interface StyledTextFieldProps {
  variant: VariantType
}

export interface TextFieldProps extends AriaTextFieldProps, Partial<StyledTextFieldProps> {
  label: string
}
