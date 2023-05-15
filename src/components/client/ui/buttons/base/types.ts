import { DefaultTheme } from 'styled-components'
import React from 'react'
import { AriaButtonProps } from 'react-aria'

import { variants } from './styles'

export type VariantType = keyof typeof variants
type Color = keyof DefaultTheme['colors']

export interface StyledButtonProps {
  variant: VariantType
  color: Color
}

export interface ButtonProps
  extends AriaButtonProps<React.ElementType>,
    Partial<StyledButtonProps> {
  label: string
}
