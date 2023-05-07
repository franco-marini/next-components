'use client'

import React from 'react'
import { AriaButtonProps } from 'react-aria'

export interface ButtonProps extends AriaButtonProps<React.ElementType> {
  label: string
  primary?: boolean
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
}
