'use client'

import React from 'react'
import { useButton } from 'react-aria'

import * as S from './styles'
import { ButtonProps } from './types'

/** This is the primary component of the UI library */
export const Button = ({
  variant = 'contained',
  color = 'primary',
  label,
  ...props
}: ButtonProps) => {
  const ref = React.useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(props, ref)

  return (
    <S.Button {...buttonProps} ref={ref} variant={variant} color={color}>
      {label}
    </S.Button>
  )
}
